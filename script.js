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
    ko: {
        logo: "Pomodoro Insight",
        home: "Home",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        heroTitle: "Focus Timer",
        heroDesc: "포모도로 기법으로 오늘 하루의 효율을 극대화하세요.",
        latestInsights: "Latest Insights"
    },
    en: {
        logo: "Pomodoro Insight",
        home: "Home",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        heroTitle: "Focus Timer",
        heroDesc: "Maximize your daily efficiency with the Pomodoro technique.",
        latestInsights: "Latest Insights"
    }
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
    if (latestInsights && lang === 'en') latestInsights.textContent = "Latest Insights";
    else if (latestInsights && lang === 'ko') latestInsights.textContent = "최신 글";
}

if (langSelect) {
    langSelect.addEventListener('change', (e) => switchLanguage(e.target.value));
    
    // 페이지 로드 시 저장된 언어 불러오기
    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    langSelect.value = savedLang;
    switchLanguage(savedLang);
}
