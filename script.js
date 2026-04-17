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
        post3Title: "번아웃 방지를 위한 올바른 휴식법", post3Desc: "단순히 스마트폰을 보는 것은 휴식이 아닙니다. 포모도로 사이클 사이의 5분을 가장 가치 있게 보내는 방법을 소개합니다.",
        post1Full: `<h1 class="section-title">포모도로 기법이란? 과학적 근거와 효과</h1><p>포모도로 기법(Pomodoro Technique)은 1980년대 후반 프란체스코 시릴로가 제안한 시간 관리 방법론입니다. 이 기법은 토마토 모양의 주방 타이머에서 그 이름이 유래되었습니다.</p><h2>1. 기본 원리</h2><ul><li>25분 동안 한 가지 작업에만 집중합니다.</li><li>5분간 짧은 휴식을 취합니다.</li><li>이 과정을 4번 반복한 뒤 15~30분간 긴 휴식을 취합니다.</li></ul><h2>2. 뇌 과학적 근거</h2><p>성인의 고도 집중력은 약 20~30분간 지속됩니다. 25분은 뇌가 피로를 느끼기 전 몰입을 극대화할 수 있는 최적의 시간입니다.</p>`,
        post2Full: `<h1 class="section-title">집중력을 200% 높이는 환경 설정</h1><p>물리적, 디지털 환경의 정리는 집중력 유지의 핵심입니다.</p><h2>1. 데스크 정리</h2><p>작업과 관련 없는 물건은 모두 치우고, 밝은 조명과 적절한 습도를 유지하세요.</p><h2>2. 디지털 방해 금지</h2><p>스마트폰 알림을 끄고 불필요한 브라우저 탭을 닫는 것만으로도 효율이 급증합니다.</p>`,
        post3Full: `<h1 class="section-title">번아웃 방지를 위한 올바른 휴식법</h1><p>진정한 휴식은 뇌에 입력되는 자극을 완전히 차단하는 것입니다.</p><h2>1. 눈 감고 명상하기</h2><p>5분간 눈을 감고 호흡에만 집중하면 뇌의 기본 상태 네트워크가 활성화되어 정보를 정리합니다.</p><h2>2. 가벼운 스트레칭</h2><p>앉아만 있지 말고 일어나서 가볍게 몸을 움직여 혈액순환을 돕는 것이 좋습니다.</p>`
        },
        en: { 
        logo: "Pomodoro Insight", home: "Home", blog: "Blog", about: "About", contact: "Contact", privacy: "Privacy Policy", heroTitle: "Focus Timer", heroDesc: "Maximize your daily efficiency with the Pomodoro technique.", latestInsights: "Latest Insights", readMore: "Read More →", footerRights: "© 2024 Pomodoro Insight. All rights reserved.", aboutTitle: "About Pomodoro Insight", aboutContent: "Pomodoro Insight is a professional productivity community created to help busy modern people manage their time more efficiently and improve their quality of life.", contactTitle: "Contact Us", contactDesc: "If you have any partnership inquiries or suggestions, please contact us via email below.", start: "START", pause: "PAUSE", timeUp: "Time is up!",
        post1Title: "What is the Pomodoro Technique?", post1Desc: "Why is 25 minutes of focus and 5 minutes of rest beneficial for the brain? Analyze the core principles and effects.",
        post2Title: "Environment Setup for 200% Focus", post2Desc: "Specific guides on how to organize your desk and digital environment to increase work efficiency.",
        post3Title: "Correct Resting Methods to Prevent Burnout", post3Desc: "Simply looking at your smartphone is not resting. Learn how to spend your 5-minute breaks effectively.",
        post1Full: `<h1 class="section-title">What is the Pomodoro Technique?</h1><p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The name comes from the tomato-shaped kitchen timer he used.</p><h2>1. Basic Principles</h2><ul><li>Focus on one task for 25 minutes.</li><li>Take a 5-minute short break.</li><li>After 4 cycles, take a 15-30 minute long break.</li></ul><h2>2. Scientific Evidence</h2><p>Adult concentration typically lasts 20-30 minutes. 25 minutes is the optimal time to maximize immersion before the brain gets fatigued.</p>`,
        post2Full: `<h1 class="section-title">Environment Setup for 200% Focus</h1><p>Organizing physical and digital spaces is key to maintaining concentration.</p><h2>1. Desk Cleanup</h2><p>Remove everything unrelated to the current task and maintain good lighting.</p><h2>2. Digital Do Not Disturb</h2><p>Turning off smartphone notifications and closing unused browser tabs drastically boosts efficiency.</p>`,
        post3Full: `<h1 class="section-title">Correct Resting Methods to Prevent Burnout</h1><p>True rest means completely cutting off input to the brain.</p><h2>1. Closed-eye Meditation</h2><p>Closing your eyes for 5 minutes and focusing on breathing helps the brain organize information.</p><h2>2. Light Stretching</h2><p>Getting up and moving slightly helps blood circulation and physical recovery.</p>`
        },
    hi: { 
        logo: "पोमोडोरो इनसाइट", home: "होम", blog: "ब्लॉग", about: "परिचय", contact: "संपर्क", privacy: "गोपनीयता नीति", heroTitle: "फोकस टाइमर", heroDesc: "पोमोडोरो तकनीक के साथ अपनी दैनिक दक्षता को अधिकतम करें।", latestInsights: "नवीनतम जानकारी", readMore: "अधिक पढ़ें →", footerRights: "© 2024 पोमोडोरो इनसाइट। सर्वाधिकार सुरक्षित।", aboutTitle: "पोमोडोरो इनसाइट के बारे में", aboutContent: "पोमोडोरो इनसाइट एक पेशेवर उत्पादकता समुदाय है जो व्यस्त आधुनिक लोगों को अपना समय अधिक कुशलता से प्रबंधित करने और उनके जीवन की गुणवत्ता में सुधार करने में मदद करने के लिए बनाया गया है।", contactTitle: "संपर्क करें", contactDesc: "यदि आपके पास कोई साझेदारी पूछताछ या सुझाव है, तो कृपया नीचे दिए गए ईमेल के माध्यम से हमसे संपर्क करें।", start: "शुरू", pause: "रुकें", timeUp: "समय समाप्त!",
        post1Title: "पोमोडोरो तकनीक क्या है?", post1Desc: "मस्तिष्क के लिए 25 मिनट का ध्यान और 5 मिनट का आराम क्यों फायदेमंद है?",
        post2Title: "200% फोकस के लिए पर्यावरण सेटअप", post2Desc: "कार्य कुशलता बढ़ाने के लिए अपने डेस्क और डिजिटल वातावरण को व्यवस्थित करने के लिए विशिष्ट गाइड।",
        post3Title: "बर्नआउट को रोकने के लिए सही विश्राम के तरीके", post3Desc: "बस अपने स्मार्टफोन को देखना आराम नहीं है। अपने 5 मिनट के ब्रेक को प्रभावी ढंग से बिताना सीखें।",
        post1Full: `<h1 class="section-title">पोमोडोरो तकनीक क्या है?</h1><p>पोमोडोरो तकनीक 1980 के दशक के उत्तरार्ध में फ्रांसेस्को सिरिलो द्वारा विकसित एक समय प्रबंधन पद्धति है।</p><h2>1. बुनियादी सिद्धांत</h2><ul><li>25 मिनट तक एक ही काम पर ध्यान केंद्रित करें।</li><li>5 मिनट का छोटा ब्रेक लें।</li><li>4 चक्रों के बाद, 15-30 मिनट का लंबा ब्रेक लें।</li></ul>`,
        post2Full: `<h1 class="section-title">200% फोकस के लिए पर्यावरण सेटअप</h1><p>शारीरिक और डिजिटल स्थानों को व्यवस्थित करना एकाग्रता बनाए रखने की कुंजी है।</p><h2>1. डेस्क की सफाई</h2><p>वर्तमान कार्य से संबंधित हर चीज को हटा दें और अच्छी रोशनी बनाए रखें।</p>`,
        post3Full: `<h1 class="section-title">बर्नआउट को रोकने के लिए सही विश्राम के तरीके</h1><p>सच्चा आराम का मतलब है मस्तिष्क में इनपुट को पूरी तरह से काटना।</p><h2>1. बंद आंखों से ध्यान</h2><p>5 मिनट के लिए अपनी आंखें बंद करना और सांस लेने पर ध्यान केंद्रित करना मस्तिष्क को जानकारी व्यवस्थित करने में मदद करता है।</p>`
    },
    ja: { logo: "ポモドーロ・インサイト", home: "ホーム", blog: "ブログ", about: "概要", contact: "お問い合わせ", privacy: "プライバシーポリシー", heroTitle: "フォーカスタイマー", heroDesc: "ポモドーロテクニックで一日の効率を最大限に高めましょう。", latestInsights: "最新の記事", readMore: "続きを読む →", footerRights: "© 2024 ポモドーロ・インサイト。全著作権所有。", aboutTitle: "ポモドーロ・インサイトについて", aboutContent: "ポモドーロ・インサイトは、忙しい現代人がより効率的に時間を管理し、生活の質を向上させるのを支援するために作成された、プロフェッショナルな生産性コミュニティです。", contactTitle: "お問い合わせ", contactDesc: "提휴に関するお問い合わせやご提案がございましたら、以下のメールアドレス까지ご連絡ください。", start: "開始", pause: "一時停止", timeUp: "時間が経過しました！", post1Title: "ポモドーロ・テクニックとは？", post1Desc: "なぜ25分の集中と5分の休憩が脳に良いのでしょうか？", 
        post1Full: `<h1 class="section-title">ポモドーロ・テクニックとは？</h1><p>ポモドーロ・テクニックは、1980年代後半にフランチェスコ・シリロによって提案された時間管理術です。</p><h2>1. 基本原則</h2><ul><li>25分間、1つの作業に集中します。</li><li>5分間の短い休憩を取ります。</li><li>4回繰り返した後、15〜30分の長い休憩を取ります。</li></ul>`,
        post2Title: "集中力を200%高める環境設定", post2Desc: "仕事の効率を高めるためのデスクとデジタル環境の整理法。", 
        post2Full: `<h1 class="section-title">集中力を200%高める環境設定</h1><p>物理的・デジタル的な環境を整えることが、集中力維持の鍵です。</p><h2>1. デスク整理</h2><p>作業に関係のないものは片付け、適切な照明を維持しましょう。</p>`,
        post3Title: "バーンアウトを防ぐ正しい休息法", post3Desc: "スマホを見るのは休息ではありません。5分間の休憩の過ごし方。",
        post3Full: `<h1 class="section-title">バーンアウトを防ぐ正しい休息法</h1><p>真の休息とは、脳への刺激を完全に遮断することです。</p><h2>1. 目を閉じて瞑想</h2><p>5分間目を閉じて呼吸に集中することで、脳が情報を整理します。</p>`
    },
    zh: { logo: "番茄专注", home: "首页", blog: "博客", about: "关于", contact: "联系", privacy: "隐私政策", heroTitle: "专注计时器", heroDesc: "利用番茄工作法极大提升您的日常效率。", latestInsights: "最新洞察", readMore: "阅读更多 →", footerRights: "© 2024 番茄专注。版权所有。", aboutTitle: "关于番茄专注", aboutContent: "番茄专注是一个专业的生产力社区，旨在帮助忙碌的现代人更有效地管理时间并提高生活质量。", contactTitle: "联系我们", contactDesc: "如果您有任何合作伙伴咨询或建议，请通过以下电子邮件与我们联系。", start: "开始", pause: "暂停", timeUp: "时间到！", post1Title: "什么是番茄工作法？", post1Desc: "为什么专注25分钟休息5分钟对大脑有益？", 
        post1Full: `<h1 class="section-title">什么是番茄工作法？</h1><p>番茄工作法是弗朗西斯科·西里洛在1980年代后期提出的一种时间管理方法。</p><h2>1. 基本原理</h2><ul><li>专注工作25分钟。</li><li>休息5分钟。</li><li>完成4个周期后，进行15-30分钟的长休息。</li></ul>`,
        post2Title: "提升200%专注力的环境设置", post2Desc: "如何整理桌面和数字环境以提高工作效率。", 
        post2Full: `<h1 class="section-title">提升200%专注力的环境设置</h1><p>整理物理和数字环境是保持专注的关键。</p><h2>1. 桌面整理</h2><p>移除所有无关物品，保持光线充足。</p>`,
        post3Title: "预防职业倦怠的正确休息方式", post3Desc: "看手机不叫休息。学习如何有效度过5分钟。",
        post3Full: `<h1 class="section-title">预防职业倦怠的正确休息方式</h1><p>真正的休息是完全切断对大脑的刺激。</p><h2>1. 闭目冥想</h2><p>闭上眼睛5分钟，专注于呼吸，有助于大脑整理信息。</p>`
    },
    es: { 
        logo: "Pomodoro Insight", home: "Inicio", blog: "Blog", about: "Acerca de", contact: "Contacto", privacy: "Política de Privacidad", heroTitle: "Temporizador de Enfoque", heroDesc: "Maximiza tu eficiencia diaria con la técnica Pomodoro.", latestInsights: "Últimas publicaciones", readMore: "Leer más →", footerRights: "© 2024 Pomodoro Insight. Todos los derechos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Pomodoro Insight es una comunidad de productividad profesional creada para ayudar a las personas ocupadas a gestionar su tiempo de forma más eficiente y mejorar su calidad de vida.", contactTitle: "Contáctenos", contactDesc: "Si tiene alguna consulta o sugerencia de asociación, contáctenos por correo electrónico a continuación.", start: "INICIAR", pause: "PAUSA", timeUp: "¡Tiempo agotado!", 
        post1Title: "¿Qué es la técnica Pomodoro?", post1Desc: "Análisis de los principios fundamentales.", 
        post2Title: "Configuración del entorno", post2Desc: "Guía para mejorar la eficiencia.", 
        post3Title: "Métodos de descanso", post3Desc: "Cómo descansar de verdad.",
        post1Full: `<h1 class="section-title">¿Qué es la técnica Pomodoro?</h1><p>La técnica Pomodoro es un método de gestión del tiempo desarrollado por Francesco Cirillo a finales de la década de 1980.</p><h2>1. Principios básicos</h2><ul><li>Concéntrate en una tarea durante 25 minutos.</li><li>Tómate un breve descanso de 5 minutos.</li><li>Después de 4 ciclos, tómate un descanso largo de 15 a 30 minutos.</li></ul>`,
        post2Full: `<h1 class="section-title">Configuración del entorno para un enfoque del 200%</h1><p>Organizar los espacios físicos y digitales es clave para mantener la concentración.</p><h2>1. Limpieza del escritorio</h2><p>Retira todo lo que no esté relacionado con la tarea actual y mantén una buena iluminación.</p>`,
        post3Full: `<h1 class="section-title">Métodos de descanso correctos para prevenir el agotamiento</h1><p>El verdadero descanso significa desconectar completamente los estímulos al cerebro.</p><h2>1. Meditación con los ojos cerrados</h2><p>Cerrar los ojos durante 5 minutos y concentrarse en la respiración ayuda al cerebro a organizar la información.</p>`
    },
    fr: { 
        logo: "Pomodoro Insight", home: "Accueil", blog: "Blog", about: "À propos", contact: "Contact", privacy: "Politique de confidentialité", heroTitle: "Minuteur de Focus", heroDesc: "Maximisez votre efficacité quotidienne avec la technique Pomodoro.", latestInsights: "Derniers articles", readMore: "Lire la suite →", footerRights: "© 2024 Pomodoro Insight. Tous droits réservés.", aboutTitle: "À propos de Pomodoro Insight", aboutContent: "Pomodoro Insight est une communauté de productivité professionnelle créée pour aider les gens modernes et occupés à gérer leur temps plus efficacement et à améliorer leur qualité de vie.", contactTitle: "Contactez-nous", contactDesc: "Si vous avez des demandes de partenariat ou des suggestions, veuillez nous contacter par e-mail ci-dessous.", start: "DÉMARRER", pause: "PAUSE", timeUp: "Le temps est écoulé !", 
        post1Title: "C'est quoi la technique Pomodoro ?", post1Desc: "Analyse des principes de base.", 
        post2Title: "Configuration de l'environnement", post2Desc: "Guide pour plus d'efficacité.", 
        post3Title: "Méthodes de repos", post3Desc: "Comment bien se reposer.",
        post1Full: `<h1 class="section-title">Qu'est-ce que la technique Pomodoro ?</h1><p>La technique Pomodoro est une méthode de gestion du temps développée par Francesco Cirillo à la fin des années 1980.</p><h2>1. Principes de base</h2><ul><li>Concentrez-vous sur une tâche pendant 25 minutes.</li><li>Faites une courte pause de 5 minutes.</li><li>Après 4 cycles, faites une longue pause de 15 à 30 minutes.</li></ul>`,
        post2Full: `<h1 class="section-title">Configuration de l'environnement pour une concentration à 200%</h1><p>L'organisation des espaces physiques et numériques est essentielle pour maintenir la concentration.</p><h2>1. Nettoyage du bureau</h2><p>Retirez tout ce qui n'est pas lié à la tâche en cours et maintenez un bon éclairage.</p>`,
        post3Full: `<h1 class="section-title">Méthodes de repos correctes pour prévenir l'épuisement professionnel</h1><p>Le vrai repos signifie couper complètement les entrées vers le cerveau.</p><h2>1. Méditation les yeux fermés</h2><p>Fermer les yeux pendant 5 minutes et se concentrer sur la respiration aide le cerveau à organiser les informations.</p>`
    },
    de: { 
        logo: "Pomodoro Insight", home: "Start", blog: "Blog", about: "Über", contact: "Kontakt", privacy: "Datenschutzrichtlinie", heroTitle: "Fokus-Timer", heroDesc: "Maximieren Sie Ihre tägliche Effizienz mit der Pomodoro-Technik.", latestInsights: "Neueste Erkenntnisse", readMore: "Mehr lesen →", footerRights: "© 2024 Pomodoro Insight. Alle Rechte vorbehalten.", aboutTitle: "Über Pomodoro Insight", aboutContent: "Pomodoro Insight ist eine professionelle Produktivitäts-Community, die vielbeschäftigten modernen Menschen hilft, ihre Zeit effizienter zu verwalten und ihre Lebensqualität zu verbessern.", contactTitle: "Kontakt", contactDesc: "Wenn Sie Partnerschaftsanfragen oder Vorschläge haben, kontaktieren Sie uns bitte per E-Mail unten.", start: "START", pause: "PAUSE", timeUp: "Zeit ist um!", 
        post1Title: "Was ist die Pomodoro-Technik?", post1Desc: "Kernprinzipien und Effekte.", 
        post2Title: "Umgebung einrichten", post2Desc: "Effizienz steigern.", 
        post3Title: "Richtig ausruhen", post3Desc: "Burnout vermeiden.",
        post1Full: `<h1 class="section-title">Was ist die Pomodoro-Technik?</h1><p>Die Pomodoro-Technik ist eine Zeitmanagement-Methode, die Ende der 1980er Jahre von Francesco Cirillo entwickelt wurde.</p><h2>1. Grundprinzipien</h2><ul><li>Konzentrieren Sie sich 25 Minuten lang auf eine Aufgabe.</li><li>Machen Sie eine kurze 5-minütige Pause.</li><li>Machen Sie nach 4 Zyklen eine lange Pause von 15-30 Minuten.</li></ul>`,
        post2Full: `<h1 class="section-title">Umgebungseinrichtung für 200% Fokus</h1><p>Die Organisation physischer und digitaler Räume ist der Schlüssel zur Aufrechterhaltung der Konzentration.</p><h2>1. Schreibtisch aufräumen</h2><p>Entfernen Sie alles, was nichts mit der aktuellen Aufgabe zu tun hat, und sorgen Sie für gute Beleuchtung.</p>`,
        post3Full: `<h1 class="section-title">Richtige Ruhemethoden zur Vermeidung von Burnout</h1><p>Wahre Ruhe bedeutet, die Reizufuhr zum Gehirn vollständig zu unterbrechen.</p><h2>1. Meditation mit geschlossenen Augen</h2><p>Wenn Sie die Augen für 5 Minuten schließen und sich auf die Atmung konzentrieren, kann das Gehirn Informationen besser ordnen.</p>`
    },
    ru: { 
        logo: "Pomodoro Insight", home: "Главная", blog: "Блог", about: "О нас", contact: "Контакт", privacy: "Политика конфиденциальности", heroTitle: "Таймер фокуса", heroDesc: "Максимизируйте свою ежедневную эффективность с помощью техники Помодоро.", latestInsights: "Последние статьи", readMore: "Читать далее →", footerRights: "© 2024 Pomodoro Insight. Все права защищены.", aboutTitle: "О Pomodoro Insight", aboutContent: "Pomodoro Insight — это профессиональное сообщество по продуктивности, созданное для того, чтобы помочь занятым современным людям более эффективно управлять своим временем и улучшать качество своей жизни.", contactTitle: "Контакт", contactDesc: "Если у вас есть какие-либо вопросы по партнерству или предложения, свяжитесь с нами по электронной почте ниже.", start: "СТАРТ", pause: "ПАУЗА", timeUp: "Время вышло!", 
        post1Title: "Что такое техника Помодоро?", post1Desc: "Основные принципы.", 
        post2Title: "Настройка окружения", post2Desc: "Повышение эффективности.", 
        post3Title: "Правильный отдых", post3Desc: "Профилактика выгорания.",
        post1Full: `<h1 class="section-title">Что такое техника Помодоро?</h1><p>Техника Помодоро — это метод управления временем, разработанный Франческо Чирилло в конце 1980-х годов.</p><h2>1. Основные принципы</h2><ul><li>Сосредоточьтесь на одной задаче в течение 25 минут.</li><li>Сделайте короткий 5-минутный перерыв.</li><li>После 4 циклов сделайте длинный перерыв на 15–30 минут.</li></ul>`,
        post2Full: `<h1 class="section-title">Настройка окружения для 200% концентрации</h1><p>Организация физического и цифрового пространства — ключ к поддержанию концентрации.</p><h2>1. Очистка рабочего стола</h2><p>Уберите все, что не относится к текущей задаче, и обеспечьте хорошее освещение.</p>`,
        post3Full: `<h1 class="section-title">Правильные методы отдыха для предотвращения выгорания</h1><p>Настоящий отдых означает полное прекращение поступления информации в мозг.</p><h2>1. Медитация с закрытыми глазами</h2><p>Закрытие глаз на 5 минут и концентрация на дыхании помогают мозгу упорядочить информацию.</p>`
    },
    pt: { 
        logo: "Pomodoro Insight", home: "Início", blog: "Blog", about: "Sobre", contact: "Contato", privacy: "Política de Privacidade", heroTitle: "Temporizador de Foco", heroDesc: "Maximize sua eficiência diária com a técnica Pomodoro.", latestInsights: "Últimas postagens", readMore: "Ler mais →", footerRights: "© 2024 Pomodoro Insight. Todos os direitos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "O Pomodoro Insight é uma comunidade de produtividade profissional criada para ajudar pessoas ocupadas a gerenciar seu tempo de forma mais eficiente e melhorar sua qualidade de vida.", contactTitle: "Contato", contactDesc: "Se você tiver alguma dúvida sobre parcerias ou sugestões, entre em contato conosco pelo e-mail abaixo.", start: "INICIAR", pause: "PAUSA", timeUp: "O tempo acabou!", 
        post1Title: "O que é a técnica Pomodoro?", post1Desc: "Princípios básicos.", 
        post2Title: "Configuração do ambiente", post2Desc: "Guia de eficiência.", 
        post3Title: "Descanso correto", post3Desc: "Evitar o burnout.",
        post1Full: `<h1 class="section-title">O que é a técnica Pomodoro?</h1><p>A técnica Pomodoro é um método de gestão de tempo desenvolvido por Francesco Cirillo no final dos anos 1980.</p><h2>1. Princípios Básicos</h2><ul><li>Concentre-se em uma tarefa por 25 minutos.</li><li>Faça uma pausa curta de 5 minutos.</li><li>Após 4 ciclos, faça uma pausa longa de 15 a 30 minutos.</li></ul>`,
        post2Full: `<h1 class="section-title">Configuração do Ambiente para 200% de Foco</h1><p>Organizar espaços físicos e digitais é fundamental para manter a concentração.</p><h2>1. Limpeza da Mesa</h2><p>Remova tudo o que não estiver relacionado à tarefa atual e mantenha uma boa iluminação.</p>`,
        post3Full: `<h1 class="section-title">Métodos de Descanso Corretos para Prevenir o Burnout</h1><p>O descanso verdadeiro significa cortar completamente as entradas para o cérebro.</p><h2>1. Meditação de Olhos Fechados</h2><p>Fechar os olhos por 5 minutos e focar na respiração ajuda o cérebro a organizar as informações.</p>`
    },
    vi: { 
        logo: "Pomodoro Insight", home: "Trang chủ", blog: "Blog", about: "Giới thiệu", contact: "Liên hệ", privacy: "Chính sách bảo mật", heroTitle: "Đồng hồ tập trung", heroDesc: "Tối đa hóa hiệu quả hàng ngày của bạn với phương pháp Pomodoro.", latestInsights: "Thông tin mới nhất", readMore: "Xem thêm →", footerRights: "© 2024 Pomodoro Insight. Bảo lưu mọi quyền.", aboutTitle: "Về Pomodoro Insight", aboutContent: "Pomodoro Insight là một cộng đồng năng suất chuyên nghiệp được tạo ra để giúp những người hiện đại bận rộn quản lý thời gian hiệu quả hơn và cải thiện chất lượng cuộc sống của họ.", contactTitle: "Liên hệ", contactDesc: "Nếu bạn có bất kỳ câu hỏi hoặc đề xuất hợp tác nào, vui lòng liên hệ với chúng tôi qua email bên dưới.", start: "BẮT ĐẦU", pause: "TẠM DỪNG", timeUp: "Hết giờ!", 
        post1Title: "Phương pháp Pomodoro là gì?", post1Desc: "Nguyên lý cơ bản.", 
        post2Title: "Thiết lập môi trường", post2Desc: "Hướng dẫn hiệu quả.", 
        post3Title: "Nghỉ ngơi đúng cách", post3Desc: "Tránh kiệt sức.",
        post1Full: `<h1 class="section-title">Phương pháp Pomodoro là gì?</h1><p>Phương pháp Pomodoro là một phương pháp quản lý thời gian được phát triển bởi Francesco Cirillo vào cuối những năm 1980.</p><h2>1. Nguyên tắc cơ bản</h2><ul><li>Tập trung vào một công việc trong 25 phút.</li><li>Nghỉ ngắn 5 phút.</li><li>Sau 4 chu kỳ, hãy nghỉ dài từ 15-30 phút.</li></ul>`,
        post2Full: `<h1 class="section-title">Thiết lập môi trường để tập trung 200%</h1><p>Tổ chức không gian vật lý và kỹ thuật số là chìa khóa để duy trì sự tập trung.</p><h2>1. Dọn dẹp bàn làm việc</h2><p>Loại bỏ mọi thứ không liên quan đến nhiệm vụ hiện tại và duy trì ánh sáng tốt.</p>`,
        post3Full: `<h1 class="section-title">Phương pháp nghỉ ngơi đúng cách để tránh kiệt sức</h1><p>Nghỉ ngơi thực sự có nghĩa là cắt đứt hoàn toàn đầu vào cho não bộ.</p><h2>1. Thiền nhắm mắt</h2><p>Nhắm mắt trong 5 phút và tập trung vào hơi thở giúp não bộ sắp xếp thông tin.</p>`
    },
    ar: { 
        logo: "بومودورو إنسايت", home: "الرئيسية", blog: "مدونة", about: "حول", contact: "اتصال", privacy: "سياسة الخصوصية", heroTitle: "موقت التركيز", heroDesc: "ضاعف كفاءتك اليومية مع تقنية بومودورو.", latestInsights: "أحدث الرؤى", readMore: "اقرأ المزيد →", footerRights: "© 2024 بومودورو إنسايت. جميع الحقوق محفوظة.", aboutTitle: "حول بومودورو إنسايت", aboutContent: "بومودورو إنسايت هو مجتمع إنتاجية احترافي تم إنشاؤه لمساعدة الأشخاص العصريين المشغولين على إدارة وقتهم بشكل أكثر كفاءة وتحسين جودة حياتهم.", contactTitle: "اتصل بنا", contactDesc: "إذا كان لديك أي استفسارات أو اقتراحات بشأن الشراكة، فيرجى الاتصال بنا عبر البريد الإلكتروني أدناه.", start: "ابدأ", pause: "إيقاف مؤقت", timeUp: "انتهى الوقت!", 
        post1Title: "ما هي تقنية بومودورو؟", post1Desc: "المبادئ الأساسية.", 
        post2Title: "إعداد البيئة", post2Desc: "دليل الكفاءة.", 
        post3Title: "الراحة الصحيحة", post3Desc: "تجنب الاحتراق.",
        post1Full: `<h1 class="section-title">ما هي تقنية بومودورو؟</h1><p>تقنية بومودورو هي طريقة لإدارة الوقت طورها فرانشيسكو سيريلو في أواخر الثمانينيات.</p><h2>1. المبادئ الأساسية</h2><ul><li>التركيز على مهمة واحدة لمدة 25 دقيقة.</li><li>خذ استراحة قصيرة لمدة 5 دقائق.</li><li>بعد 4 دورات، خذ استراحة طويلة لمدة 15-30 دقيقة.</li></ul>`,
        post2Full: `<h1 class="section-title">إعداد البيئة لتركيز بنسبة 200%</h1><p>يعد تنظيم المساحات المادية والرقمية أمرًا أساسيًا للحفاظ على التركيز.</p><h2>1. تنظيف المكتب</h2><p>قم بإزالة كل ما لا يتعلق بالمهمة الحالية وحافظ على إضاءة جيدة.</p>`,
        post3Full: `<h1 class="section-title">طرق الراحة الصحيحة لمنع الاحتراق</h1><p>الراحة الحقيقية تعني قطع المدخلات عن الدماغ تمامًا.</p><h2>1. التأمل مع إغلاق العينين</h2><p>إغلاق عينيك لمدة 5 دقائق والتركيز على التنفس يساعد الدماغ على تنظيم المعلومات.</p>`
    }
};

function applyLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const t = translations[lang] || translations['en'];
    const path = window.location.pathname;
    
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

    // Page-specific content
    const isAbout = path.endsWith('about.html');
    const isContact = path.endsWith('contact.html');
    const isPost1 = path.endsWith('post-1.html');
    const isPost2 = path.endsWith('post-2.html');
    const isPost3 = path.endsWith('post-3.html');

    if (isAbout) {
        const title = document.querySelector('main .section-title');
        if (title) title.textContent = t.aboutTitle;
        const desc = document.querySelector('.hero p');
        if (desc) desc.textContent = t.aboutContent;
    } else if (isContact) {
        const title = document.querySelector('main .section-title');
        if (title) title.textContent = t.contactTitle;
        const desc = document.querySelector('.hero p');
        if (desc) desc.textContent = t.contactDesc;
    } else if (isPost1) {
        const article = document.querySelector('article.hero');
        if (article && t.post1Full) article.innerHTML = t.post1Full;
    } else if (isPost2) {
        const article = document.querySelector('article.hero');
        if (article && t.post2Full) article.innerHTML = t.post2Full;
    } else if (isPost3) {
        const article = document.querySelector('article.hero');
        if (article && t.post3Full) article.innerHTML = t.post3Full;
    } else {
        // Home/Default Page (index.html or root)
        const heroTitle = document.querySelector('.hero .section-title');
        if (heroTitle) heroTitle.textContent = t.heroTitle;
        const heroDesc = document.querySelector('.hero p');
        if (heroDesc && !isAbout && !isContact) heroDesc.textContent = t.heroDesc;

        const sectionTitles = document.querySelectorAll('.section-title');
        if (sectionTitles[1]) sectionTitles[1].textContent = t.latestInsights;
        
        const blogCards = document.querySelectorAll('.blog-card');
        if (blogCards.length >= 3) {
            blogCards[0].querySelector('h3').textContent = t.post1Title;
            blogCards[0].querySelector('p').textContent = t.post1Desc;
            blogCards[1].querySelector('h3').textContent = t.post2Title;
            blogCards[1].querySelector('p').textContent = t.post2Desc;
            blogCards[2].querySelector('h3').textContent = t.post3Title;
            blogCards[2].querySelector('p').textContent = t.post3Desc;
        }
    }

    // Set document title language
    let pageTitle = t.heroTitle;
    if (isAbout) pageTitle = t.aboutTitle;
    else if (isContact) pageTitle = t.contactTitle;
    else if (isPost1) pageTitle = t.post1Title;
    else if (isPost2) pageTitle = t.post2Title;
    else if (isPost3) pageTitle = t.post3Title;
    
    document.title = `${pageTitle} | ${t.logo}`;
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
