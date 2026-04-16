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
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = localStorage.getItem('preferredLang') === 'ko' ? '시작' : 'START';
    } else {
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert('Time is up!');
                resetTimer();
            }
        }, 1000);
        startBtn.textContent = localStorage.getItem('preferredLang') === 'ko' ? '일시정지' : 'PAUSE';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    startBtn.textContent = localStorage.getItem('preferredLang') === 'ko' ? '시작' : 'START';
    updateDisplay();
}

if (startBtn) startBtn.addEventListener('click', startTimer);
if (resetBtn) resetBtn.addEventListener('click', resetTimer);

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
        contactDesc: "제휴 문의나 제안 사항이 있으시면 아래 이메일로 연락 주시기 바랍니다."
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
        contactDesc: "If you have any partnership inquiries or suggestions, please contact us via email below."
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
        contactDesc: "यदि आपके पास कोई साझेदारी पूछताछ या सुझाव है, तो कृपया नीचे दिए गए ईमेल के माध्यम से हमसे संपर्क करें।"
    }
    // ... 다른 언어들은 기본 UI만 번역 (확장 가능)
};

function switchLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const t = translations[lang] || translations['en'];
    
    // 공통 요소 번역
    document.querySelectorAll('.logo').forEach(el => el.textContent = t.logo);
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length >= 4) {
        navLinks.forEach(link => {
            if (link.href.includes('index.html')) link.textContent = t.home;
            else if (link.href.includes('blog.html')) link.textContent = t.blog;
            else if (link.href.includes('about.html')) link.textContent = t.about;
            else if (link.href.includes('contact.html')) link.textContent = t.contact;
        });
    }

    // 메인 페이지 번역
    const heroTitle = document.querySelector('.hero .section-title');
    if (heroTitle && t.heroTitle) heroTitle.textContent = t.heroTitle;
    const heroDesc = document.querySelector('.hero p');
    if (heroDesc && t.heroDesc) heroDesc.textContent = t.heroDesc;
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[1] && t.latestInsights) sectionTitles[1].textContent = t.latestInsights;
    document.querySelectorAll('.read-more').forEach(el => el.textContent = t.readMore);

    // 소개 페이지 번역
    const aboutTitle = document.querySelector('main .section-title');
    if (window.location.pathname.includes('about.html') && aboutTitle) {
        aboutTitle.textContent = t.aboutTitle;
        document.querySelector('.hero p').textContent = t.aboutContent;
    }

    // 문의 페이지 번역
    if (window.location.pathname.includes('contact.html')) {
        const contactTitle = document.querySelector('main .section-title');
        if (contactTitle) contactTitle.textContent = t.contactTitle;
        const contactDesc = document.querySelector('.hero p');
        if (contactDesc) contactDesc.textContent = t.contactDesc;
    }

    // 푸터 번역
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.textContent = t.footerRights;

    // 타이머 버튼 텍스트 업데이트
    if (startBtn) {
        startBtn.textContent = isRunning ? (lang === 'ko' ? '일시정지' : 'PAUSE') : (lang === 'ko' ? '시작' : 'START');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        const savedLang = localStorage.getItem('preferredLang') || 'ko';
        langSelect.value = savedLang;
        switchLanguage(savedLang);

        langSelect.addEventListener('change', (e) => {
            switchLanguage(e.target.value);
            // 모든 열려있는 페이지에 언어 변경 알림 (동기화)
            window.location.reload(); 
        });
    }
});

if (display) updateDisplay();
