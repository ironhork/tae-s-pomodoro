let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = 'START';
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
        startBtn.textContent = 'PAUSE';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    startBtn.textContent = 'START';
    updateDisplay();
}

if (startBtn) startBtn.addEventListener('click', startTimer);
if (resetBtn) resetBtn.addEventListener('click', resetTimer);

const translations = {
    ko: { logo: "Pomodoro Insight", home: "Home", blog: "Blog", about: "About", contact: "Contact", heroTitle: "Focus Timer", heroDesc: "포모도로 기법으로 오늘 하루의 효율을 극대화하세요.", latestInsights: "최신 글" },
    en: { logo: "Pomodoro Insight", home: "Home", blog: "Blog", about: "About", contact: "Contact", heroTitle: "Focus Timer", heroDesc: "Maximize your daily efficiency with the Pomodoro technique.", latestInsights: "Latest Insights" },
    hi: { logo: "पोमोडोरो इनसाइट", home: "होम", blog: "ब्लॉग", about: "परिचय", contact: "संपर्क", heroTitle: "फोकस टाइमर", heroDesc: "पोमोडोरो तकनीक के साथ अपनी दैनिक दक्षता को अधिकतम करें।", latestInsights: "नवीनतम जानकारी" },
    ja: { logo: "ポモドーロ・インサイト", home: "ホーム", blog: "ブログ", about: "概要", contact: "お問い合わせ", heroTitle: "フォーカスタイマー", heroDesc: "ポモドーロテクニックで一日の効率を最大限に高めましょう。", latestInsights: "最新の記事" },
    zh: { logo: "番茄专注", home: "首页", blog: "博客", about: "关于", contact: "联系", heroTitle: "专注计时器", heroDesc: "利用番茄工作法极大提升您的日常效率。", latestInsights: "最新洞察" },
    es: { logo: "Pomodoro Insight", home: "Inicio", blog: "Blog", about: "Acerca de", contact: "Contacto", heroTitle: "Temporizador de Enfoque", heroDesc: "Maximiza tu eficiencia diaria con la técnica Pomodoro.", latestInsights: "Últimas publicaciones" },
    fr: { logo: "Pomodoro Insight", home: "Accueil", blog: "Blog", about: "À propos", contact: "Contact", heroTitle: "Minuteur de Focus", heroDesc: "Maximisez votre efficacité quotidienne avec la technique Pomodoro.", latestInsights: "Derniers articles" },
    de: { logo: "Pomodoro Insight", home: "Start", blog: "Blog", about: "Über uns", contact: "Kontakt", heroTitle: "Fokus-Timer", heroDesc: "Maximieren Sie Ihre tägliche Effizienz mit der Pomodoro-Technik.", latestInsights: "Neueste Erkenntnisse" },
    ru: { logo: "Pomodoro Insight", home: "Главная", blog: "Блог", about: "О нас", contact: "Контакты", heroTitle: "Таймер фокуса", heroDesc: "Максимизируйте свою ежедневную эффективность с помощью техники Помодоро.", latestInsights: "Последние статьи" },
    pt: { logo: "Pomodoro Insight", home: "Início", blog: "Blog", about: "Sobre", contact: "Contato", heroTitle: "Temporizador de Foco", heroDesc: "Maximize sua eficiência diária com a técnica Pomodoro.", latestInsights: "Últimas postagens" },
    vi: { logo: "Pomodoro Insight", home: "Trang chủ", blog: "Blog", about: "Giới thiệu", contact: "Liên hệ", heroTitle: "Đồng hồ tập trung", heroDesc: "Tối đa hóa hiệu quả hàng ngày của bạn với phương pháp Pomodoro.", latestInsights: "Thông tin mới nhất" },
    ar: { logo: "بومودورو إنسايت", home: "الرئيسية", blog: "مدونة", about: "حول", contact: "اتصال", heroTitle: "موقت التركيز", heroDesc: "ضاعت كفاءتك اليومية مع تقنية بومودورو.", latestInsights: "أحدث الرؤى" }
};

const langSelect = document.getElementById('lang-select');

function switchLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const t = translations[lang];
    
    // UI 텍스트 업데이트 (존재하는 요소만)
    document.querySelector('.logo').textContent = t.logo;
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = t.home;
        navLinks[1].textContent = t.blog;
        navLinks[2].textContent = t.about;
        navLinks[3].textContent = t.contact;
    }
    
    const heroTitle = document.querySelector('.hero .section-title');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    
    const heroDesc = document.querySelector('.hero p');
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    const latestInsights = document.querySelectorAll('.section-title')[1];
    if (latestInsights) latestInsights.textContent = t.latestInsights;
}

if (langSelect) {
    langSelect.addEventListener('change', (e) => switchLanguage(e.target.value));
    
    // 페이지 로드 시 저장된 언어 불러오기
    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    langSelect.value = savedLang;
    switchLanguage(savedLang);
}
