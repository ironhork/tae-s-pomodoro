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
    const t = translations[lang] || translations['en'];
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = t.start;
    } else {
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(t.timeUp);
                resetTimer();
            }
        }, 1000);
        startBtn.textContent = t.pause;
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    const lang = localStorage.getItem('preferredLang') || 'ko';
    const t = translations[lang] || translations['en'];
    if (startBtn) startBtn.textContent = t.start;
    updateDisplay();
}

// Translations Data (Full Support for 12 Languages)
const translations = {
    ko: { 
        logo: "Pomodoro Insight", home: "홈", blog: "블로그", about: "소개", contact: "문의", privacy: "개인정보처리방침", heroTitle: "포커스 타이머", heroDesc: "포모도로 기법으로 오늘 하루의 효율을 극대화하세요.", latestInsights: "최신 인사이트", readMore: "전문 읽기 →", footerRights: "© 2024 Pomodoro Insight. 모든 권리 보유.", aboutTitle: "Pomodoro Insight 소개", aboutContent: "Pomodoro Insight는 바쁜 현대인들이 더 효율적으로 시간을 관리하고, 삶의 질을 높일 수 있도록 돕기 위해 만들어진 전문 생산성 커뮤니티입니다.", contactTitle: "문의하기", contactDesc: "제휴 문의나 제안 사항이 있으시면 아래 이메일로 연락 주시기 바랍니다.", start: "시작", pause: "일시정지", timeUp: "시간이 다 되었습니다!",
        post1Title: "포모도로 기법이란? 과학적 근거와 효과", post1Desc: "왜 25분 집중하고 5분 쉬는 것이 뇌 과학적으로 유리할까요? 포모도로 기법의 핵심 원리와 도입 효과를 분석합니다.",
        post2Title: "집중력을 200% 높이는 환경 설정", post2Desc: "공부나 업무 효율을 높이기 위해 책상 위와 디지털 환경을 어떻게 정리해야 하는지 구체적인 가이드를 제공합니다.",
        post3Title: "번아웃 방지를 위한 올바른 휴식법", post3Desc: "단순히 스마트폰을 보는 것은 휴식이 아닙니다. 포모도로 사이클 사이의 5분을 가장 가치 있게 보내는 방법을 소개합니다."
    },
    en: { 
        logo: "Pomodoro Insight", home: "Home", blog: "Blog", about: "About", contact: "Contact", heroTitle: "Focus Timer", heroDesc: "Maximize your daily efficiency with the Pomodoro technique.", latestInsights: "Latest Insights", readMore: "Read More →", footerRights: "© 2024 Pomodoro Insight. All rights reserved.", aboutTitle: "About Pomodoro Insight", aboutContent: "Pomodoro Insight is a professional productivity community created to help busy modern people manage their time more efficiently and improve their quality of life.", contactTitle: "Contact Us", contactDesc: "If you have any partnership inquiries or suggestions, please contact us via email below.", start: "START", pause: "PAUSE", timeUp: "Time is up!",
        post1Title: "What is the Pomodoro Technique?", post1Desc: "Why is 25 minutes of focus and 5 minutes of rest beneficial for the brain? Analyze the core principles and effects.",
        post2Title: "Environment Setup for 200% Focus", post2Desc: "Specific guides on how to organize your desk and digital environment to increase work efficiency.",
        post3Title: "Correct Resting Methods to Prevent Burnout", post3Desc: "Simply looking at your smartphone is not resting. Learn how to spend your 5-minute breaks effectively."
    },
    hi: { 
        logo: "पोमोडोरो इनसाइट", home: "होम", blog: "ब्लॉग", about: "परिचय", contact: "संपर्क", heroTitle: "फोकस टाइमर", heroDesc: "पोमोडोरो तकनीक के साथ अपनी दैनिक दक्षता को अधिकतम करें।", latestInsights: "नवीनतम जानकारी", readMore: "अधिक पढ़ें →", footerRights: "© 2024 पोमोडोरो इनसाइट। सर्वाधिकार सुरक्षित।", aboutTitle: "पोमोडोरो इनसाइट के बारे में", aboutContent: "पोमोडोरो इनसाइट एक पेशेवर उत्पादकता समुदाय है जो व्यस्त आधुनिक लोगों को अपना समय अधिक कुशलता से प्रबंधित करने और उनके जीवन की गुणवत्ता में सुधार करने में मदद करने के लिए बनाया गया है।", contactTitle: "संपर्क करें", contactDesc: "यदि आपके पास कोई साझेदारी पूछताछ या सुझाव है, तो कृपया नीचे दिए गए ईमेल के माध्यम से हमसे संपर्क करें।", start: "शुरू", pause: "रुकें", timeUp: "समय समाप्त!",
        post1Title: "पोमोडोरो तकनीक क्या है?", post1Desc: "मस्तिष्क के लिए 25 मिनट का ध्यान और 5 मिनट का आराम क्यों फायदेमंद है?",
        post2Title: "200% फोकस के लिए पर्यावरण सेटअप", post2Desc: "कार्य कुशलता बढ़ाने के लिए अपने डेस्क और डिजिटल वातावरण को व्यवस्थित करने के लिए विशिष्ट गाइड।",
        post3Title: "बर्नआउट को रोकने के लिए सही विश्राम के तरीके", post3Desc: "बस अपने स्मार्टफोन को देखना आराम नहीं है। अपने 5 मिनट के ब्रेक को प्रभावी ढंग से बिताना सीखें।"
    },
    ja: { logo: "ポモドーロ・インサイト", home: "ホーム", blog: "ブログ", about: "概要", contact: "お問い合わせ", heroTitle: "フォーカスタイマー", heroDesc: "ポモドーロテクニックで一日の効率を最大限に高めましょう。", latestInsights: "最新の記事", readMore: "続きを読む →", footerRights: "© 2024 ポモドーロ・インサイト。全著作権所有。", aboutTitle: "ポモドーロ・インサイトについて", aboutContent: "ポモドーロ・インサイトは、忙しい現代人がより効率的に時間を管理し、生活の質を向上させるのを支援するために作成された、プロフェッショナルな生産性コミュニティです。", contactTitle: "お問い合わせ", contactDesc: "提携に関するお問い合わせやご提案がございましたら、以下のメールアドレスまでご連絡ください。", start: "開始", pause: "一時停止", timeUp: "時間が経過しました！", post1Title: "ポモドーロ・テクニックとは？", post1Desc: "なぜ25分の集中と5分の休憩が脳に良いのでしょうか？", post2Title: "集中力を200%高める環境設定", post2Desc: "仕事の効率を高めるためのデスクとデジタル環境の整理法。", post3Title: "バーンアウトを防ぐ正しい休息法", post3Desc: "スマホを見るのは休息ではありません。5分間の休憩の過ごし方。" },
    zh: { logo: "番茄专注", home: "首页", blog: "博客", about: "关于", contact: "联系", heroTitle: "专注计时器", heroDesc: "利用番茄工作法极大提升您的日常效率。", latestInsights: "最新洞察", readMore: "阅读更多 →", footerRights: "© 2024 番茄专注。版权所有。", aboutTitle: "关于番茄专注", aboutContent: "番茄专注是一个专业的生产力社区，旨在帮助忙碌的现代人更有效地管理时间并提高生活质量。", contactTitle: "联系我们", contactDesc: "如果您有任何合作伙伴咨询或建议，请通过以下电子邮件与我们联系。", start: "开始", pause: "暂停", timeUp: "时间到！", post1Title: "什么是番茄工作法？", post1Desc: "为什么专注25分钟休息5分钟对大脑有益？", post2Title: "提升200%专注力的环境设置", post2Desc: "如何整理桌面和数字环境以提高工作效率。", post3Title: "预防职业倦怠的正确休息方式", post3Desc: "看手机不叫休息。学习如何有效度过5分钟。" },
    es: { logo: "Pomodoro Insight", home: "Inicio", blog: "Blog", about: "Acerca de", contact: "Contacto", heroTitle: "Temporizador de Enfoque", heroDesc: "Maximiza tu eficiencia diaria con la técnica Pomodoro.", latestInsights: "Últimas publicaciones", readMore: "Leer más →", footerRights: "© 2024 Pomodoro Insight. Todos los derechos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Comunidad de productividad profesional.", contactTitle: "Contáctenos", contactDesc: "Envíenos un correo electrónico.", start: "INICIAR", pause: "PAUSA", timeUp: "¡Tiempo agotado!", post1Title: "¿Qué es la técnica Pomodoro?", post1Desc: "Análisis de los principios fundamentales.", post2Title: "Configuración del entorno", post2Desc: "Guía para mejorar la eficiencia.", post3Title: "Métodos de descanso", post3Desc: "Cómo descansar de verdad." },
    fr: { logo: "Pomodoro Insight", home: "Accueil", blog: "Blog", about: "À propos", contact: "Contact", heroTitle: "Minuteur de Focus", heroDesc: "Maximisez votre efficacité quotidienne avec la technique Pomodoro.", latestInsights: "Derniers articles", readMore: "Lire la suite →", footerRights: "© 2024 Pomodoro Insight. Tous droits réservés.", aboutTitle: "À propos de Pomodoro Insight", aboutContent: "Communauté de productivité professionnelle.", contactTitle: "Contactez-nous", contactDesc: "Contactez-nous par e-mail.", start: "DÉMARRER", pause: "PAUSE", timeUp: "Le temps est écoulé !", post1Title: "C'est quoi la technique Pomodoro ?", post1Desc: "Analyse des principes de base.", post2Title: "Configuration de l'environnement", post2Desc: "Guide pour plus d'efficacité.", post3Title: "Méthodes de repos", post3Desc: "Comment bien se reposer." },
    de: { logo: "Pomodoro Insight", home: "Start", blog: "Blog", about: "Über", contact: "Kontakt", heroTitle: "Fokus-Timer", heroDesc: "Maximieren Sie Ihre tägliche Effizienz mit der Pomodoro-Technik.", latestInsights: "Neueste Erkenntnisse", readMore: "Mehr lesen →", footerRights: "© 2024 Pomodoro Insight. Alle Rechte vorbehalten.", aboutTitle: "Über Pomodoro Insight", aboutContent: "Produktive Gemeinschaft.", contactTitle: "Kontakt", contactDesc: "Schreiben Sie uns.", start: "START", pause: "PAUSE", timeUp: "Zeit ist um!", post1Title: "Was ist die Pomodoro-Technik?", post1Desc: "Kernprinzipien und Effekte.", post2Title: "Umgebung einrichten", post2Desc: "Effizienz steigern.", post3Title: "Richtig ausruhen", post3Desc: "Burnout vermeiden." },
    ru: { logo: "Pomodoro Insight", home: "Главная", blog: "Блог", about: "О нас", contact: "Контакт", heroTitle: "Таймер фокуса", heroDesc: "Максимизируйте свою ежедневную эффективность с помощью техники Помодоро.", latestInsights: "Последние статьи", readMore: "Читать далее →", footerRights: "© 2024 Pomodoro Insight. Все права защищены.", aboutTitle: "О Pomodoro Insight", aboutContent: "Профессиональное сообщество.", contactTitle: "Контакт", contactDesc: "Пишите нам.", start: "СТАРТ", pause: "ПАУЗА", timeUp: "Время вышло!", post1Title: "Что такое техника Помодоро?", post1Desc: "Основные принципы.", post2Title: "Настройка окружения", post2Desc: "Повышение эффективности.", post3Title: "Правильный отдых", post3Desc: "Профилактика выгорания." },
    pt: { logo: "Pomodoro Insight", home: "Início", blog: "Blog", about: "Sobre", contact: "Contato", heroTitle: "Temporizador de Foco", heroDesc: "Maximize sua eficiência diária com a técnica Pomodoro.", latestInsights: "Últimas postagens", readMore: "Ler mais →", footerRights: "© 2024 Pomodoro Insight. Todos os direitos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Comunidade de produtividade.", contactTitle: "Contato", contactDesc: "Envie-nos um e-mail.", start: "INICIAR", pause: "PAUSA", timeUp: "O tempo acabou!", post1Title: "O que é a técnica Pomodoro?", post1Desc: "Princípios básicos.", post2Title: "Configuração do ambiente", post2Desc: "Guia de eficiência.", post3Title: "Descanso correto", post3Desc: "Evitar o burnout." },
    vi: { logo: "Pomodoro Insight", home: "Trang chủ", blog: "Blog", about: "Giới thiệu", contact: "Liên hệ", heroTitle: "Đồng hồ tập trung", heroDesc: "Tối đa hóa hiệu quả hàng ngày của bạn với phương pháp Pomodoro.", latestInsights: "Thông tin mới nhất", readMore: "Xem thêm →", footerRights: "© 2024 Pomodoro Insight. Bảo lưu mọi quyền.", aboutTitle: "Về Pomodoro Insight", aboutContent: "Cộng đồng năng suất.", contactTitle: "Liên hệ", contactDesc: "Gửi email cho chúng tôi.", start: "BẮT ĐẦU", pause: "TẠM DỪNG", timeUp: "Hết giờ!", post1Title: "Phương pháp Pomodoro là gì?", post1Desc: "Nguyên lý cơ bản.", post2Title: "Thiết lập môi trường", post2Desc: "Hướng dẫn hiệu quả.", post3Title: "Nghỉ ngơi đúng cách", post3Desc: "Tránh kiệt sức." },
    ar: { logo: "بومودورو إنسايت", home: "الرئيسية", blog: "مدونة", about: "حول", contact: "اتصال", heroTitle: "موقت التركيز", heroDesc: "ضاعت كفاءتك اليومية مع تقنية بومودورو.", latestInsights: "أحدث الرؤى", readMore: "اقرأ المزيد →", footerRights: "© 2024 بومودورو إنسايت. جميع الحقوق محفوظة.", aboutTitle: "حول بومودورو إنسايت", aboutContent: "مجتمع الإنتاجية.", contactTitle: "اتصل بنا", contactDesc: "تواصل معنا.", start: "ابدأ", pause: "إيقاف مؤقت", timeUp: "انتهى الوقت!", post1Title: "ما هي تقنية بومودورو؟", post1Desc: "المبادئ الأساسية.", post2Title: "إعداد البيئة", post2Desc: "دليل الكفاءة.", post3Title: "الراحة الصحيحة", post3Desc: "تجنب الاحتراق." }
};

function applyLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const t = translations[lang] || translations['en'];
    
    // UI Elements Update
    document.querySelectorAll('.logo').forEach(el => el.textContent = t.logo);
    // Navigation and Footer Links Update
    const allLinks = document.querySelectorAll('nav ul li a, .footer-links a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('index.html')) link.textContent = t.home;
        else if (href.includes('blog.html')) link.textContent = t.blog;
        else if (href.includes('about.html')) link.textContent = t.about;
        else if (href.includes('contact.html')) link.textContent = t.contact;
        else if (href.includes('privacy.html')) link.textContent = t.privacy || 'Privacy Policy';
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

    // Blog Cards Translation
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length >= 3) {
        // Card 1
        blogCards[0].querySelector('h3').textContent = t.post1Title;
        blogCards[0].querySelector('p').textContent = t.post1Desc;
        // Card 2
        blogCards[1].querySelector('h3').textContent = t.post2Title;
        blogCards[1].querySelector('p').textContent = t.post2Desc;
        // Card 3
        blogCards[2].querySelector('h3').textContent = t.post3Title;
        blogCards[2].querySelector('p').textContent = t.post3Desc;
    }

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

    // Set document title language
    document.title = `${t.heroTitle} | ${t.logo}`;
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
