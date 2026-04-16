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
    ko: { logo: "Pomodoro Insight", home: "홈", blog: "블로그", about: "소개", contact: "문의", heroTitle: "포커스 타이머", heroDesc: "포모도로 기법으로 오늘 하루의 효율을 극대화하세요.", latestInsights: "최신 인사이트", readMore: "전문 읽기 →", footerRights: "© 2024 Pomodoro Insight. 모든 권리 보유.", aboutTitle: "Pomodoro Insight 소개", aboutContent: "Pomodoro Insight는 바쁜 현대인들이 더 효율적으로 시간을 관리하고, 삶의 질을 높일 수 있도록 돕기 위해 만들어진 전문 생산성 커뮤니티입니다.", contactTitle: "문의하기", contactDesc: "제휴 문의나 제안 사항이 있으시면 아래 이메일로 연락 주시기 바랍니다.", start: "시작", pause: "일시정지", timeUp: "시간이 다 되었습니다!" },
    en: { logo: "Pomodoro Insight", home: "Home", blog: "Blog", about: "About", contact: "Contact", heroTitle: "Focus Timer", heroDesc: "Maximize your daily efficiency with the Pomodoro technique.", latestInsights: "Latest Insights", readMore: "Read More →", footerRights: "© 2024 Pomodoro Insight. All rights reserved.", aboutTitle: "About Pomodoro Insight", aboutContent: "Pomodoro Insight is a professional productivity community created to help busy modern people manage their time more efficiently and improve their quality of life.", contactTitle: "Contact Us", contactDesc: "If you have any partnership inquiries or suggestions, please contact us via email below.", start: "START", pause: "PAUSE", timeUp: "Time is up!" },
    hi: { logo: "पोमोडोरो इनसाइट", home: "होम", blog: "ब्लॉग", about: "परिचय", contact: "संपर्क", heroTitle: "फोकस टाइमर", heroDesc: "पोमोडोरो तकनीक के साथ अपनी दैनिक दक्षता को अधिकतम करें।", latestInsights: "नवीनतम जानकारी", readMore: "अधिक पढ़ें →", footerRights: "© 2024 पोमोडोरो इनसाइट। सर्वाधिकार सुरक्षित।", aboutTitle: "पोमोडोरो इनसाइट के बारे में", aboutContent: "पोमोडोरो इनसाइट एक पेशेवर उत्पादकता समुदाय है जो व्यस्त आधुनिक लोगों को अपना समय अधिक कुशलता से प्रबंधित करने और उनके जीवन की गुणवत्ता में सुधार करने में मदद करने के लिए बनाया गया है।", contactTitle: "संपर्क करें", contactDesc: "यदि आपके पास कोई साझेदारी पूछताछ या सुझाव है, तो कृपया नीचे दिए गए ईमेल के माध्यम से हमसे संपर्क करें।", start: "शुरू", pause: "रुकें", timeUp: "समय समाप्त!" },
    ja: { logo: "ポモドーロ・インサイト", home: "ホーム", blog: "ブログ", about: "概要", contact: "お問い合わせ", heroTitle: "フォーカスタイマー", heroDesc: "ポモドーロテクニックで一日の効率を最大限に高めましょう。", latestInsights: "最新の記事", readMore: "続きを読む →", footerRights: "© 2024 ポモドーロ・インサイト。全著作権所有。", aboutTitle: "ポモドーロ・インサイトについて", aboutContent: "ポモドーロ・インサイトは、忙しい現代人がより効率的に時間を管理し、生活の質を向上させるのを支援するために作成された、プロフェッショナルな生産性コミュニティです。", contactTitle: "お問い合わせ", contactDesc: "提携に関するお問い合わせやご提案がございましたら、以下のメールアドレスまでご連絡ください。", start: "開始", pause: "一時停止", timeUp: "時間が経過しました！" },
    zh: { logo: "番茄专注", home: "首页", blog: "博客", about: "关于", contact: "联系", heroTitle: "专注计时器", heroDesc: "利用番茄工作法极大提升您的日常效率。", latestInsights: "最新洞察", readMore: "阅读更多 →", footerRights: "© 2024 番茄专注。版权所有。", aboutTitle: "关于番茄专注", aboutContent: "番茄专注是一个专业的生产力社区，旨在帮助忙碌的现代人更有效地管理时间并提高生活质量。", contactTitle: "联系我们", contactDesc: "如果您有任何合作伙伴咨询或建议，请通过以下电子邮件与我们联系。", start: "开始", pause: "暂停", timeUp: "时间到！" },
    es: { logo: "Pomodoro Insight", home: "Inicio", blog: "Blog", about: "Acerca de", contact: "Contacto", heroTitle: "Temporizador de Enfoque", heroDesc: "Maximiza tu eficiencia diaria con la técnica Pomodoro.", latestInsights: "Últimas publicaciones", readMore: "Leer más →", footerRights: "© 2024 Pomodoro Insight. Todos los derechos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Pomodoro Insight es una comunidad de productividad profesional creada para ayudar a las personas modernas ocupadas a gestionar su tiempo de manera más eficiente y mejorar su calidad de vida.", contactTitle: "Contáctenos", contactDesc: "Si tiene alguna consulta o sugerencia sobre asociaciones, contáctenos por correo electrónico a continuación.", start: "INICIAR", pause: "PAUSA", timeUp: "¡Tiempo agotado!" },
    fr: { logo: "Pomodoro Insight", home: "Accueil", blog: "Blog", about: "À propos", contact: "Contact", heroTitle: "Minuteur de Focus", heroDesc: "Maximisez votre efficacité quotidienne avec la technique Pomodoro.", latestInsights: "Derniers articles", readMore: "Lire la suite →", footerRights: "© 2024 Pomodoro Insight. Tous droits réservés.", aboutTitle: "À propos de Pomodoro Insight", aboutContent: "Pomodoro Insight est une communauté de productivité professionnelle créée pour aider les gens modernes occupés à gérer leur temps plus efficacement et à améliorer leur qualité de vie.", contactTitle: "Contactez-nous", contactDesc: "Si vous avez des questions sur un partenariat ou des suggestions, veuillez nous contacter par e-mail ci-dessous.", start: "DÉMARRER", pause: "PAUSE", timeUp: "Le temps est écoulé !" },
    de: { logo: "Pomodoro Insight", home: "Start", blog: "Blog", about: "Über", contact: "Kontakt", heroTitle: "Fokus-Timer", heroDesc: "Maximieren Sie Ihre tägliche Effizienz mit der Pomodoro-Technik.", latestInsights: "Neueste Erkenntnisse", readMore: "Mehr lesen →", footerRights: "© 2024 Pomodoro Insight. Alle Rechte vorbehalten.", aboutTitle: "Über Pomodoro Insight", aboutContent: "Pomodoro Insight ist eine professionelle Produktivitäts-Community, die vielbeschäftigten modernen Menschen hilft, ihre Zeit effizienter zu verwalten und ihre Lebensqualität zu steigern.", contactTitle: "Kontaktieren Sie uns", contactDesc: "Wenn Sie Partnerschaftsanfragen oder Vorschläge haben, kontaktieren Sie uns bitte per E-Mail unten.", start: "START", pause: "PAUSE", timeUp: "Zeit ist um!" },
    ru: { logo: "Pomodoro Insight", home: "Главная", blog: "Блог", about: "О нас", contact: "Контакт", heroTitle: "Таймер фокуса", heroDesc: "Максимизируйте свою ежедневную эффективность с помощью техники Помодоро.", latestInsights: "Последние статьи", readMore: "Читать далее →", footerRights: "© 2024 Pomodoro Insight. Все права защищены.", aboutTitle: "О Pomodoro Insight", aboutContent: "Pomodoro Insight — это профессиональное сообщество по повышению продуктивности, созданное для того, чтобы помочь занятым современным людям более эффективно управлять своим временем и улучшить качество жизни.", contactTitle: "Связаться с нами", contactDesc: "Если у вас есть вопросы о партнерстве или предложения, свяжитесь с нами по электронной почте ниже.", start: "СТАРТ", pause: "ПАУЗА", timeUp: "Время вышло!" },
    pt: { logo: "Pomodoro Insight", home: "Início", blog: "Blog", about: "Sobre", contact: "Contato", heroTitle: "Temporizador de Foco", heroDesc: "Maximize sua eficiência diária com a técnica Pomodoro.", latestInsights: "Últimas postagens", readMore: "Ler mais →", footerRights: "© 2024 Pomodoro Insight. Todos os direitos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Pomodoro Insight é uma comunidade de produtividade profissional criada para ajudar pessoas modernas ocupadas a gerir seu tempo de forma mais eficiente e melhorar sua qualidade de vida.", contactTitle: "Contate-nos", contactDesc: "Se tiver alguma dúvida de parceria ou sugestão, entre em contato connosco por e-mail abaixo.", start: "INICIAR", pause: "PAUSA", timeUp: "O tempo acabou!" },
    vi: { logo: "Pomodoro Insight", home: "Trang chủ", blog: "Blog", about: "Giới thiệu", contact: "Liên hệ", heroTitle: "Đồng hồ tập trung", heroDesc: "Tối đa hóa hiệu quả hàng ngày của bạn với phương pháp Pomodoro.", latestInsights: "Thông tin mới nhất", readMore: "Xem thêm →", footerRights: "© 2024 Pomodoro Insight. Bảo lưu mọi quyền.", aboutTitle: "Về Pomodoro Insight", aboutContent: "Pomodoro Insight là một cộng đồng làm việc năng suất chuyên nghiệp được tạo ra để giúp những người hiện đại bận rộn quản lý thời gian hiệu quả hơn và cải thiện chất lượng cuộc sống.", contactTitle: "Liên hệ với chúng tôi", contactDesc: "Nếu bạn có bất kỳ thắc mắc hoặc đề xuất hợp tác nào, vui lòng liên hệ với chúng tôi qua email bên dưới.", start: "BẮT ĐẦU", pause: "TẠM DỪNG", timeUp: "Hết giờ!" },
    ar: { logo: "بومودورو إنسايت", home: "الرئيسية", blog: "مدونة", about: "حول", contact: "اتصال", heroTitle: "موقت التركيز", heroDesc: "ضاعت كفاءتك اليومية مع تقنية بومودورو.", latestInsights: "أحدث الرؤى", readMore: "اقرأ المزيد →", footerRights: "© 2024 بومودورو إنسايت. جميع الحقوق محفوظة.", aboutTitle: "حول بومودورو إنسايت", aboutContent: "بومودورو إنسايت هو مجتمع إنتاجية احترافي تم إنشاؤه لمساعدة الأشخاص العصريين المشغولين على إدارة وقتهم بكفاءة أكبر وتحسين جودة حياتهم.", contactTitle: "اتصل بنا", contactDesc: "إذا كان لديك أي استفسارات أو اقتراحات بشأن الشراكة ، يرجى الاتصال بنا عبر البريد الإلكتروني أدناه.", start: "ابدأ", pause: "إيقاف مؤقت", timeUp: "انتهى الوقت!" }
};

function applyLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const t = translations[lang] || translations['en'];
    
    // UI Elements Update
    document.querySelectorAll('.logo').forEach(el => el.textContent = t.logo);
    document.querySelectorAll('nav ul li a').forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('index.html')) link.textContent = t.home;
        else if (href.includes('blog.html')) link.textContent = t.blog;
        else if (href.includes('about.html')) link.textContent = t.about;
        else if (href.includes('contact.html')) link.textContent = t.contact;
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
