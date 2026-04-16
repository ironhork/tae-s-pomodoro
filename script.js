// Timer Logic
let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    if (display) {
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function startTimer() {
    const lang = localStorage.getItem('preferredLang') || 'ko';
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = lang === 'ko' ? '시작' : 'START';
    } else {
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(lang === 'ko' ? '시간이 다 되었습니다!' : 'Time is up!');
                resetTimer();
            }
        }, 1000);
        startBtn.textContent = lang === 'ko' ? '일시정지' : 'PAUSE';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    const lang = localStorage.getItem('preferredLang') || 'ko';
    if (startBtn) startBtn.textContent = lang === 'ko' ? '시작' : 'START';
    updateDisplay();
}

// Translations Data
const translations = {
    ko: {
        logo: "Pomodoro Insight",
        home: "홈", blog: "블로그", about: "소개", contact: "문의",
        heroTitle: "포커스 타이머",
        heroDesc: "포모도로 기법으로 오늘 하루의 효율을 극대화하세요.",
        latestInsights: "최신 인사이트",
        readMore: "전문 읽기 →",
        footerRights: "© 2024 Pomodoro Insight. 모든 권리 보유.",
        aboutTitle: "Pomodoro Insight 소개",
        aboutContent: "Pomodoro Insight는 바쁜 현대인들이 더 효율적으로 시간을 관리하고, 삶의 질을 높일 수 있도록 돕기 위해 만들어진 전문 생산성 커뮤니티입니다.",
        contactTitle: "문의하기",
        contactDesc: "제휴 문의나 제안 사항이 있으시면 아래 이메일로 연락 주시기 바랍니다.",
        start: "시작", pause: "일시정지"
    },
    en: {
        logo: "Pomodoro Insight",
        home: "Home", blog: "Blog", about: "About", contact: "Contact",
        heroTitle: "Focus Timer",
        heroDesc: "Maximize your daily efficiency with the Pomodoro technique.",
        latestInsights: "Latest Insights",
        readMore: "Read More →",
        footerRights: "© 2024 Pomodoro Insight. All rights reserved.",
        aboutTitle: "About Pomodoro Insight",
        aboutContent: "Pomodoro Insight is a professional productivity community created to help busy modern people manage their time more efficiently and improve their quality of life.",
        contactTitle: "Contact Us",
        contactDesc: "If you have any partnership inquiries or suggestions, please contact us via email below.",
        start: "START", pause: "PAUSE"
    },
    hi: {
        logo: "पोमोडोरो इनसाइट",
        home: "होम", blog: "ब्लॉग", about: "परिचय", contact: "संपर्क",
        heroTitle: "फोकस टाइमर",
        heroDesc: "पोमोडोरो तकनीक के साथ अपनी दैनिक दक्षता को अधिकतम करें।",
        latestInsights: "नवीनतम जानकारी",
        readMore: "अधिक पढ़ें →",
        footerRights: "© 2024 पोमोडोरो इनसाइट। सर्वाधिकार सुरक्षित।",
        aboutTitle: "पोमोडोरो इनसाइट के बारे में",
        aboutContent: "पोमोडोरो इनसाइट एक पेशेवर उत्पादकता समुदाय है जो व्यस्त आधुनिक लोगों को अपना समय अधिक कुशलता से प्रबंधित करने और उनके जीवन की गुणवत्ता में सुधार करने में मदद करने के लिए बनाया गया है।",
        contactTitle: "संपर्क करें",
        contactDesc: "यदि आपके पास कोई साझेदारी पूछताछ या सुझाव है, तो कृपया नीचे दिए गए ईमेल के माध्यम से हमसे संपर्क करें।",
        start: "शुरू", pause: "रुकें"
    }
};

function applyLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const t = translations[lang] || translations['en'];
    
    // UI Elements Update
    document.querySelectorAll('.logo').forEach(el => el.textContent = t.logo);
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href').includes('index.html')) link.textContent = t.home;
        else if (link.getAttribute('href').includes('blog.html')) link.textContent = t.blog;
        else if (link.getAttribute('href').includes('about.html')) link.textContent = t.about;
        else if (link.getAttribute('href').includes('contact.html')) link.textContent = t.contact;
    });

    const heroTitle = document.querySelector('.hero .section-title');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    const heroDesc = document.querySelector('.hero p');
    if (heroDesc && !window.location.pathname.includes('about.html') && !window.location.pathname.includes('contact.html')) {
        heroDesc.textContent = t.heroDesc;
    }

    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[1]) sectionTitles[1].textContent = t.latestInsights;
    document.querySelectorAll('.read-more').forEach(el => el.textContent = t.readMore);

    if (window.location.pathname.includes('about.html')) {
        const title = document.querySelector('main .section-title');
        if (title) title.textContent = t.aboutTitle;
        const desc = document.querySelector('.hero p');
        if (desc) desc.textContent = t.aboutContent;
    }

    if (window.location.pathname.includes('contact.html')) {
        const title = document.querySelector('main .section-title');
        if (title) title.textContent = t.contactTitle;
        const desc = document.querySelector('.hero p');
        if (desc) desc.textContent = t.contactDesc;
    }

    const footerP = document.querySelector('footer p');
    if (footerP) footerP.textContent = t.footerRights;

    if (startBtn) {
        startBtn.textContent = isRunning ? t.pause : t.start;
    }
}

// Initialization and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    
    if (langSelect) {
        langSelect.value = savedLang;
        applyLanguage(savedLang);
        langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    } else {
        applyLanguage(savedLang);
    }
});

if (startBtn) startBtn.addEventListener('click', startTimer);
if (resetBtn) resetBtn.addEventListener('click', resetTimer);
if (display) updateDisplay();
