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
        post1Full: `<h1 class="section-title">포모도로 기법이란? 과학적 근거와 효과</h1><p>포모도로 기법은 1980년대 후반 프란체스코 시릴로가 제안한 시간 관리 방법론으로, 업무 효율을 비약적으로 높여줍니다.</p><h2>1. 기본 원칙</h2><p>25분 동안 한 가지 작업에만 집중하고, 5분간 짧은 휴식을 취합니다. 이 과정을 4번 반복한 뒤 15~30분간 긴 휴식을 취하는 것이 핵심입니다.</p><h2>2. 뇌 과학적 근거</h2><p>인간의 고도 집중력은 약 20~30분간 지속됩니다. 25분은 뇌가 피로를 느끼기 전 몰입을 극대화할 수 있는 최적의 시간이며, 규칙적인 휴식은 인지적 피로를 방지합니다.</p><h2>3. 효과적인 도입 팁</h2><p>물리적인 타이머를 사용하여 마감 임박 효과를 조성하고, 하나의 포모도로 사이클에는 반드시 하나의 작업만 배정하여 멀티태스킹을 피하세요.</p>`,
        post2Full: `<h1 class="section-title">집중력을 200% 높이는 환경 설정</h1><p>물리적, 디지털 환경의 정리는 집중력 유지의 핵심입니다.</p><h2>1. 물리적 환경 (데스크테리어)</h2><p>시각적 자극은 뇌 자원을 소모합니다. 관련 없는 물건을 치우고 필수품만 가까이 두세요. 자연광에 가까운 조명을 사용하는 것이 눈의 피로를 줄입니다.</p><h2>2. 디지털 방해 금지 (디지털 미니멀리즘)</h2><p>알림은 집중력의 적입니다. 휴대폰을 보이지 않는 곳에 두거나 방해 금지 모드를 사용하세요. 현재 작업과 무관한 브라우저 창과 탭은 모두 닫으세요.</p><h2>3. 청각적 환경</h2><p>백색 소음이나 카페 소음(40-60dB)은 적막보다 창의적 사고에 도움이 됩니다. 가사가 없는 로파이(Lo-fi)나 클래식 음악을 활용하여 몰입 환경을 조성하세요.</p>`,
        post3Full: `<h1 class="section-title">번아웃 방지를 위한 올바른 휴식법</h1><p>진정한 휴식은 뇌에 입력되는 자극을 완전히 차단하는 것입니다.</p><h2>1. 마음 챙김 휴식</h2><p>5분간 눈을 감고 호흡에만 집중하세요. 이는 뇌의 '디폴트 모드 네트워크'를 활성화하여 정보를 정리하고 창의성을 회복하는 데 도움을 줍니다.</p><h2>2. 신체 활성화</h2><p>자리에서 일어나 가볍게 몸을 움직이거나 스트레칭을 하세요. 혈액 순환을 돕는 것이 뇌에 산소를 공급하여 다음 사이클의 집중력을 높여줍니다.</p><h2>3. 감각 리셋</h2><p>휴식 중에는 절대 스마트폰을 보지 마세요. 물을 마시거나 먼 곳을 바라보며 시각적 자극을 차단하고 뇌를 진정시키는 것이 중요합니다.</p>`
    },
    en: { 
        logo: "Pomodoro Insight", home: "Home", blog: "Blog", about: "About", contact: "Contact", privacy: "Privacy Policy", heroTitle: "Focus Timer", heroDesc: "Maximize your daily efficiency with the Pomodoro technique.", latestInsights: "Latest Insights", readMore: "Read More →", footerRights: "© 2024 Pomodoro Insight. All rights reserved.", aboutTitle: "About Pomodoro Insight", aboutContent: "Pomodoro Insight is a professional productivity community created to help busy modern people manage their time more efficiently and improve their quality of life.", contactTitle: "Contact Us", contactDesc: "If you have any partnership inquiries or suggestions, please contact us via email below.", start: "START", pause: "PAUSE", timeUp: "Time is up!",
        post1Title: "What is the Pomodoro Technique? Scientific Evidence", post1Desc: "Why is 25 minutes of focus and 5 minutes of rest beneficial for the brain? Analyze the core principles and effects.",
        post2Title: "Environment Setup for 200% Focus", post2Desc: "Specific guides on how to organize your desk and digital environment to increase work efficiency.",
        post3Title: "Correct Resting Methods to Prevent Burnout", post3Desc: "Simply looking at your smartphone is not resting. Learn how to spend your 5-minute breaks effectively.",
        post1Full: `<h1 class="section-title">What is the Pomodoro Technique?</h1><p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s, designed to boost productivity.</p><h2>1. Basic Principles</h2><p>Focus on one task for 25 minutes, then take a 5-minute short break. After 4 cycles, take a 15-30 minute long break to recharge.</p><h2>2. Scientific Evidence</h2><p>Adult concentration typically lasts 20-30 minutes. 25 minutes is the optimal time to maximize immersion before the brain gets fatigued. Regular breaks prevent cognitive overload.</p><h2>3. Implementation Tips</h2><p>Use a physical timer to create a sense of urgency. Categorize your tasks into 25-minute blocks and avoid multitasking during each session.</p>`,
        post2Full: `<h1 class="section-title">Environment Setup for 200% Focus</h1><p>Organizing physical and digital spaces is key to maintaining concentration.</p><h2>1. Physical Environment (Deskterior)</h2><p>Visual stimuli consume brain resources. Clear unrelated items. Keep essentials close. Use natural-like lighting to reduce eye strain.</p><h2>2. Digital Do Not Disturb (Digital Minimalism)</h2><p>Notifications are enemies. Hide phones or use DND (Do Not Disturb) mode. Close unnecessary windows and tabs that are not relevant to your current task.</p><h2>3. Auditory Environment</h2><p>White noise or cafe noise (40-60dB) helps creativity more than silence. Use lo-fi or classical music without lyrics to create a focused atmosphere.</p>`,
        post3Full: `<h1 class="section-title">Correct Resting Methods to Prevent Burnout</h1><p>True rest means completely cutting off input to the brain to allow it to recover.</p><h2>1. Mindful Rest</h2><p>Close your eyes for 5 minutes and focus on breathing. This activates the brain's "Default Mode Network," helping to process and organize information.</p><h2>2. Physical Activation</h2><p>Get up and move slightly or stretch. Improving blood circulation helps deliver oxygen to the brain, preparing it for the next focus cycle.</p><h2>3. Sensory Reset</h2><p>Avoid digital screens during breaks. Hydrate with water or look at distant scenery to reduce eye strain and mental clutter.</p>`
    },
    hi: { 
        logo: "पोमोडोरो इनसाइट", home: "होम", blog: "ब्लॉग", about: "परिचय", contact: "संपर्क", privacy: "गोपनीयता नीति", heroTitle: "फोकस टाइमर", heroDesc: "पोमोडोरो तकनीक के साथ अपनी दैनिक दक्षता को अधिकतम करें।", latestInsights: "नवीनतम जानकारी", readMore: "अधिक पढ़ें →", footerRights: "© 2024 पोमोडोरो इनसाइट। सर्वाधिकार सुरक्षित।", aboutTitle: "पोमोडोरो इनसाइट के बारे में", aboutContent: "पोमोडोरो इनसाइट एक पेशेवर उत्पादकता समुदाय है जो व्यस्त आधुनिक लोगों को अपना समय अधिक कुशलता से प्रबंधित करने और उनके जीवन की गुणवत्ता में सुधार करने में मदद करने के लिए बनाया गया है।", contactTitle: "संपर्क करें", contactDesc: "यदि आपके पास कोई साझेदारी पूछताछ या सुझाव है, तो कृपया नीचे दिए गए ईमेल के माध्यम से हमसे संपर्क करें।", start: "शुरू", pause: "रुकें", timeUp: "समय समाप्त!",
        post1Title: "पोमोडोरो तकनीक क्या है? वैज्ञानिक आधार", post1Desc: "मस्तिष्क के लिए 25 मिनट का ध्यान और 5 मिनट का आराम क्यों फायदेमंद है? सिद्धांतों का विश्लेषण करें।",
        post2Title: "200% फोकस के लिए पर्यावरण सेटअप", post2Desc: "कार्य कुशलता बढ़ाने के लिए अपने डेस्क और डिजिटल वातावरण को व्यवस्थित करने के लिए विशिष्ट गाइड।",
        post3Title: "बर्नआउट रोकने के लिए सही विश्राम के तरीके", post3Desc: "स्मार्टफोन देखना आराम नहीं है। अपने 5 मिनट के ब्रेक को प्रभावी ढंग से बिताना सीखें।",
        post1Full: `<h1 class="section-title">पोमोडोरो तकनीक क्या है?</h1><p>पोमोडोरो तकनीक 1980 के दशक के उत्तरार्ध में विकसित एक समय प्रबंधन पद्धति है।</p><h2>1. बुनियादी सिद्धांत</h2><p>25 मिनट तक एक काम पर ध्यान केंद्रित करें, फिर 5 मिनट का ब्रेक लें। 4 चक्रों के बाद, 15-30 मिनट का लंबा ब्रेक लें।</p><h2>2. वैज्ञानिक आधार</h2><p>एकाग्रता 20-30 मिनट तक रहती है। नियमित ब्रेक संज्ञानात्मक थकान को रोकते हैं और सूचना प्रतिधारण में सुधार करते हैं।</p><h2>3. कार्यान्वयन युक्तियाँ</h2><p>एक भौतिक टाइमर का उपयोग करें और कार्यों को 25 मिनट के ब्लॉक में वर्गीकृत करें। मल्टीटास्किंग से बचें।</p>`,
        post2Full: `<h1 class="section-title">200% फोकस के लिए पर्यावरण सेटअप</h1><p>एकाग्रता बनाए रखने के लिए भौतिक और डिजिटल स्थान को व्यवस्थित करना महत्वपूर्ण है।</p><h2>1. भौतिक वातावरण (Deskterior)</h2><p>दृश्य उत्तेजनाएं मस्तिष्क के संसाधनों की खपत करती हैं। असंबंधित वस्तुओं को हटा दें। प्राकृतिक प्रकाश का उपयोग करें।</p><h2>2. डिजिटल 'परेशान न करें' (डिजिटल अतिसूक्ष्मवाद)</h2><p>सूचनाएं दुश्मन हैं। फोन छिपाएं या डीएनडी मोड का उपयोग करें। अनावश्यक विंडो और टैब बंद करें।</p><h2>3. श्रवण वातावरण</h2><p>सफेद शोर या कैफे का शोर (40-60dB) मौन की तुलना में रचनात्मकता में अधिक मदद करता है। लो-फाई संगीत का प्रयोग करें।</p>`,
        post3Full: `<h1 class="section-title">बर्नआउट रोकने के लिए सही विश्राम के तरीके</h1><p>सच्चा आराम मस्तिष्क में इनपुट को पूरी तरह से बंद करना है।</p><h2>1. ध्यानपूर्ण विश्राम</h2><p>आंखें बंद करें और सांस लेने पर ध्यान दें। यह मस्तिष्क को सूचना व्यवस्थित करने में मदद करता. है।</p><h2>2. शारीरिक सक्रियता</h2><p>खिंचाव या टहलने के लिए उठें। रक्त संचार बढ़ने से अगले चक्र के लिए मस्तिष्क को ऑक्सीजन मिलती है।</p><h2>3. संवेदी रीसेट</h2><p>ब्रेक के दौरान स्क्रीन से बचें। पानी पिएं और आंखों के तनाव को कम करने के लिए दूर के दृश्यों को देखें।</p>`
    },
    ja: { 
        logo: "ポモドーロ・インサイト", home: "ホーム", blog: "ブログ", about: "概要", contact: "お問い合わせ", privacy: "プライバシーポリシー", heroTitle: "フォーカスタイマー", heroDesc: "ポモドーロテクニックで一日の効率を最大限に高めましょう。", latestInsights: "最新の記事", readMore: "続きを読む →", footerRights: "© 2024 ポモドーロ・インサイト。全著作権所有。", aboutTitle: "ポモドーロ・インサイトについて", aboutContent: "ポモドーロ・インサイトは、忙しい現代人がより効率的に時間を管理し、生活の質を向上させるのを支援するために作成された、プロフェッショナルな生産性コミュニティです。", contactTitle: "お問い合わせ", contactDesc: "提携に関するお問い合わせやご提案がございましたら、以下のメールアドレスまでご連絡ください。", start: "開始", pause: "一時停止", timeUp: "時間が経過しました！",
        post1Title: "ポモドーロ・テクニックの科学적根拠", post1Desc: "なぜ25分の集中と5分の休憩が脳に良いのでしょうか？その原理と効果を分析します。",
        post2Title: "集中力を200%高める環境設定ガイド", post2Desc: "仕事の効率を高めるためのデスクとデジタル環境の具体的な整理法を紹介します。",
        post3Title: "燃え尽き症候群を防ぐ正しい休息法", post3Desc: "スマホを見るのは休息ではありません。5分間の休憩を最も価値のある時間にする方法。",
        post1Full: `<h1 class="section-title">ポモドーロ・テクニックとは？</h1><p>ポモドーロ・テクニックは、1980年代後半に提案された時間管理術で、生産性を飛躍的に高めます。</p><h2>1. 基本原則</h2><p>25分間、1つの作業に集中し、5分間の短い休憩を取ります。これを4回繰り返した後、15〜30分の長い休憩を取ります。</p><h2>2. 脳科学的根拠</h2><p>成人の深い集中力は約20〜30分持続します。25分は脳が疲れる前に没入感を最大化できる最適な時間です。</p><h2>3. 実践のコツ</h2><p>物理的なタイマーを使用して緊張感を作り出し、マルチタスクを避けて1サイクル1タスクを徹底しましょう。</p>`,
        post2Full: `<h1 class="section-title">集中力を200%高める環境設定</h1><p>物理적・デジタル環境を整えることが、集中力維持の鍵です。</p><h2>1. 物理的環境（デスクテリア）</h2><p>視覚的刺激は脳のリソースを消費します。不要なものを片付け、自然光に近い照明を使用しましょう。</p><h2>2. デジタル防害禁止（デジタル・ミニマリズム）</h2><p>通知は集中の敵です。スマホを隠すか、おやすみモードに設定しましょう。不要なブラウザのタブは閉じます。</p><h2>3. 聴覚的環境</h2><p>ホワイトノイズやカフェの音（40-60dB）は、静寂よりも創造性を高めます。Lo-fiやクラシックを活用しましょう。</p>`,
        post3Full: `<h1 class="section-title">燃え尽き症候群を防ぐ正しい休息法</h1><p>真の休息とは、脳への刺激を完全に遮断することです。</p><h2>1. マインドフル休息</h2><p>5分間目を閉じ、呼吸に集中します。これにより脳の「デフォルト・モード・ネットワーク」が活性化し情報が整理されます。</p><h2>2. 身体の活性化</h2><p>席を立ち、軽いストレッチを行いましょう。血流を改善することで、次のサイクルに必要な酸素を脳に供給します。</p><h2>3. 感覚のリセット</h2><p>休憩中は画面を見ないでください。水分を補給し、遠くの景色を眺めて目の疲れと精神的疲労をリセットしましょう。</p>`
    },
    zh: { 
        logo: "番茄专注", home: "首页", blog: "博客", about: "关于", contact: "联系", privacy: "隐私政策", heroTitle: "专注计时器", heroDesc: "利用番茄工作法极大提升您的日常效率。", latestInsights: "最新洞察", readMore: "阅读更多 →", footerRights: "© 2024 番茄专注。版权所有。", aboutTitle: "关于番茄专注", aboutContent: "番茄专注是一个专业的生产力社区，旨在帮助现代人更有效地管理时间并提高生活质量。", contactTitle: "联系我们", contactDesc: "如果您有任何合作伙伴咨询或建议，请通过以下电子邮件与我们联系。", start: "开始", pause: "暂停", timeUp: "时间到！",
        post1Title: "什么是番茄工作法？科学依据与效果", post1Desc: "为什么专注25分钟休息5分钟对大脑有益？分析其核心原理与导入效果。",
        post2Title: "提升200%专注力的环境设置指南", post2Desc: "如何整理桌面和数字环境以提高工作效率的具体指南。",
        post3Title: "预防职业倦怠的正确休息方式", post3Desc: "看手机不叫休息。学习如何有效度过番茄周期之间的5分钟。",
        post1Full: `<h1 class="section-title">什么是番茄工作法？</h1><p>番茄工作法是1980年代后期提出的一种时间管理方法，旨在显著提升工作效率。</p><h2>1. 基本原理</h2><p>专注工作25分钟，然后休息5分钟。完成4个周期后，进行15-30分钟的长休息以恢复精力。</p><h2>2. 科学依据</h2><p>成年人的高度专注力通常维持20-30分钟。25分钟是最大化沉浸感且避免脑疲劳的最佳时间。</p><h2>3. 执行建议</h2><p>使用实体计时器营造紧迫感。将任务拆分为25分钟的小块，并严格避免多任务处理。</p>`,
        post2Full: `<h1 class="section-title">提升200%专注力的环境设置</h1><p>整理物理和数字空间是保持专注的关键。</p><h2>1. 物理环境（桌面美学）</h2><p>视觉刺激消耗大脑资源。清除无关物品，保持必需品触手可及。使用接近自然光的光源。</p><h2>2. 数字免打扰（数字极简主义）</h2><p>通知是注意力的敌人。隐藏手机或开启勿扰模式。关闭所有与当前任务无关的浏览器标签。</p><h2>3. 听觉环境</h2><p>白噪音或咖啡馆环境音（40-60分贝）比完全安静更有利于创意。推荐使用Lo-fi或古典音乐。</p>`,
        post3Full: `<h1 class="section-title">预防职业倦怠的正确休息方式</h1><p>真正的休息意味着完全切断对大脑的刺激输入。</p><h2>1. 正念休息</h2><p>闭目冥想5分钟，专注于呼吸。这能激活大脑的“默认模式网络”，帮助整理信息和恢复创意。</p><h2>2. 身体激活</h2><p>站起来进行简单的拉伸或走动。改善血液循环有助于为下一个专注周期向大脑输送氧气。</p><h2>3. 感官重置</h2><p>休息期间禁止观看屏幕。喝水或远眺风景，以减轻眼睛疲劳和精神压力。</p>`
    },
    es: { 
        logo: "Pomodoro Insight", home: "Inicio", blog: "Blog", about: "Acerca de", contact: "Contacto", privacy: "Política de Privacidad", heroTitle: "Temporizador", heroDesc: "Maximiza tu eficiencia diaria con la técnica Pomodoro.", latestInsights: "Últimas publicaciones", readMore: "Leer más →", footerRights: "© 2024 Pomodoro Insight. Todos los derechos reservados.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Pomodoro Insight es una comunidad de productividad profesional creada para ayudar a las personas ocupadas.", contactTitle: "Contacto", contactDesc: "Si tiene alguna consulta o sugerencia de asociación, contáctenos por correo electrónico.", start: "INICIAR", pause: "PAUSA", timeUp: "¡Tiempo agotado!",
        post1Title: "¿Qué es la técnica Pomodoro? Base científica", post1Desc: "¿Por qué 25 minutos de enfoque y 5 de descanso son beneficiosos para el cerebro?",
        post2Title: "Configuración del entorno para un enfoque del 200%", post2Desc: "Guía sobre cómo organizar su escritorio y entorno digital para aumentar la eficiencia.",
        post3Title: "Métodos de descanso para prevenir el agotamiento", post3Desc: "Mirar el móvil no es descansar. Aprenda a aprovechar sus 5 minutos de descanso.",
        post1Full: `<h1 class="section-title">¿Qué es la técnica Pomodoro?</h1><p>La técnica Pomodoro es un método de gestión del tiempo desarrollado a finales de los 80 para aumentar la productividad.</p><h2>1. Principios básicos</h2><p>Concéntrate en una tarea durante 25 minutos y luego toma un descanso de 5. Tras 4 ciclos, toma un descanso largo de 15 a 30 minutos.</p><h2>2. Evidencia científica</h2><p>La concentración dura unos 20-30 minutos. Los descansos regulares evitan la fatiga cognitiva y mejoran la retención de información.</p><h2>3. Consejos de implementación</h2><p>Use un temporizador físico para crear urgencia. Categorice sus tareas en bloques de 25 minutos y evite el multitasking.</p>`,
        post2Full: `<h1 class="section-title">Configuración del entorno para un enfoque del 200%</h1><p>Organizar los espacios físicos y digitales es clave para mantener la concentración.</p><h2>1. Entorno físico (Deskterior)</h2><p>Los estímulos visuales consumen recursos cerebrales. Despeje lo innecesario y mantenga lo esencial cerca. Use iluminación natural.</p><h2>2. No molestar digital (Minimalismo digital)</h2><p>Las notificaciones son enemigas. Esconda los teléfonos o use el modo No molestar. Cierre ventanas y pestañas innecesarias.</p><h2>3. Entorno auditivo</h2><p>El ruido blanco o el ruido de café (40-60dB) ayuda más a la creatividad que el silencio. Use música lo-fi o clásica.</p>`,
        post3Full: `<h1 class="section-title">Métodos de descanso para prevenir el agotamiento</h1><p>El verdadero descanso significa desconectar completamente los estímulos al cerebro.</p><h2>1. Descanso consciente</h2><p>Cierre los ojos durante 5 minutos y respire profundamente. Esto activa la "Red Neuronal por Defecto", ayudando a organizar información.</p><h2>2. Activación física</h2><p>Levántese de su asiento y estire. Mejorar la circulación sanguínea ayuda a enviar oxígeno al cerebro para el siguiente ciclo.</p><h2>3. Reset sensorial</h2><p>Evite las pantallas digitales. Beba agua o mire al horizonte para reducir la fatiga visual y mental.</p>`
    },
    fr: { 
        logo: "Pomodoro Insight", home: "Accueil", blog: "Blog", about: "À propos", contact: "Contact", privacy: "Confidentialité", heroTitle: "Minuteur Focus", heroDesc: "Maximisez votre efficacité quotidienne avec la technique Pomodoro.", latestInsights: "Derniers articles", readMore: "Lire la suite →", footerRights: "© 2024 Pomodoro Insight. Tous droits réservés.", aboutTitle: "À propos de Pomodoro Insight", aboutContent: "Pomodoro Insight est une communauté de productivité pour aider les gens à gérer leur temps.", contactTitle: "Contactez-nous", contactDesc: "Contactez-nous par e-mail pour toute demande ou suggestion.", start: "DÉMARRER", pause: "PAUSE", timeUp: "Le temps est écoulé !",
        post1Title: "La technique Pomodoro : Fondements scientifiques", post1Desc: "Pourquoi 25 minutes de focus et 5 minutes de repos sont bénéfiques pour le cerveau ?",
        post2Title: "Configuration de l'environnement pour 200% de focus", post2Desc: "Guide pour organiser votre bureau et votre environnement numérique.",
        post3Title: "Méthodes de repos pour prévenir l'épuisement", post3Desc: "Regarder son téléphone n'est pas un repos. Optimisez vos pauses de 5 minutes.",
        post1Full: `<h1 class="section-title">Qu'est-ce que la technique Pomodoro ?</h1><p>Une méthode de gestion du temps développée à la fin des années 1980 pour booster la productivité.</p><h2>1. Principes de base</h2><p>Concentrez-vous 25 minutes sur une tâche, puis faites une pause de 5 minutes. Après 4 cycles, faites une pause de 15-30 minutes.</p><h2>2. Preuves scientifiques</h2><p>La concentration humaine dure environ 20-30 minutes. Les pauses régulières évitent la fatigue cognitive et améliorent la mémorisation.</p><h2>3. Conseils d'application</h2><p>Utilisez un minuteur physique pour créer de l'urgence. Découpez vos tâches en blocs de 25 minutes et évitez le multitâche.</p>`,
        post2Full: `<h1 class="section-title">Environnement pour une concentration à 200%</h1><p>L'organisation des espaces physiques et numériques est la clé de la concentration.</p><h2>1. Environnement physique (Deskterior)</h2><p>Les stimuli visuels saturent le cerveau. Rangez les objets inutiles et privilégiez la lumière naturelle.</p><h2>2. Ne pas déranger (Minimalisme numérique)</h2><p>Les notifications sont des ennemies. Cachez votre téléphone ou activez le mode NPD. Fermez les fenêtres inutiles.</p><h2>3. Environnement auditivo</h2><p>Le bruit blanc ou de café (40-60dB) aide plus à la créativité que le silence. Utilisez de la musique lo-fi ou classique.</p>`,
        post3Full: `<h1 class="section-title">Méthodes de repos pour prévenir l'épuisement</h1><p>Le vrai repos signifie couper complètement les stimulations vers le cerveau.</p><h2>1. Repos en pleine conscience</h2><p>Fermez les yeux et respirez profondément. Cela active le "réseau du mode par défaut" pour traiter les informations.</p><h2>2. Activation physique</h2><p>Bougez ou étirez-vous. Une bonne circulation sanguine apporte l'oxygène nécessaire au cerveau pour le cycle suivant.</p><h2>3. Reset sensoriel</h2><p>Évitez les écrans pendant les pauses. Buvez de l'eau ou regardez au loin pour reposer vos yeux et votre esprit.</p>`
    },
    de: { 
        logo: "Pomodoro Insight", home: "Start", blog: "Blog", about: "Über uns", contact: "Kontakt", privacy: "Datenschutz", heroTitle: "Fokus-Timer", heroDesc: "Maximieren Sie Ihre tägliche Effizienz mit der Pomodoro-Technik.", latestInsights: "Neueste Erkenntnisse", readMore: "Mehr lesen →", footerRights: "© 2024 Pomodoro Insight. Alle Rechte vorbehalten.", aboutTitle: "Über Pomodoro Insight", aboutContent: "Eine professionelle Community zur Steigerung der Produktivität.", contactTitle: "Kontakt", contactDesc: "Kontaktieren Sie uns per E-Mail für Anfragen oder Vorschläge.", start: "START", pause: "PAUSE", timeUp: "Zeit ist um!",
        post1Title: "Die Pomodoro-Technik: Wissenschaftliche Basis", post1Desc: "Warum sind 25 Minuten Fokus und 5 Minuten Pause gut für das Gehirn?",
        post2Title: "Umgebungseinrichtung für 200% Fokus", post2Desc: "Anleitung zur Organisation Ihres Schreibtisches und digitalen Raums.",
        post3Title: "Richtig ausruhen gegen Burnout", post3Desc: "Handy schauen ist keine Pause. Nutzen Sie Ihre 5 Minuten effektiv.",
        post1Full: `<h1 class="section-title">Was ist die Pomodoro-Technik?</h1><p>Eine Zeitmanagement-Methode aus den späten 80ern zur Steigerung der Produktivität.</p><h2>1. Grundprinzipien</h2><p>25 Minuten Fokus, dann 5 Minuten Pause. Nach 4 Zyklen folgt eine längere Pause von 15-30 Minuten.</p><h2>2. Wissenschaftliche Basis</h2><p>Die Konzentration hält meist 20-30 Minuten. Pausen verhindern kognitive Erschöpfung und fördern die Informationsverarbeitung.</p><h2>3. Umsetzungstipps</h2><p>Nutzen Sie einen physischen Timer für Dringlichkeit. Teilen Sie Aufgaben in 25-Minuten-Blöcke auf und vermeiden Sie Multitasking.</p>`,
        post2Full: `<h1 class="section-title">Umgebungseinrichtung für 200% Fokus</h1><p>Die Organisation physischer und digitaler Räume ist der Schlüssel zur Konzentration.</p><h2>1. Physische Umgebung (Deskterior)</h2><p>Visuelle Reize verbrauchen Ressourcen. Räumen Sie Unwichtiges weg. Nutzen Sie naturähnliche Beleuchtung.</p><h2>2. Digitales Nicht-Stören (Digitaler Minimalismus)</h2><p>Benachrichtigungen sind Feinde. Handy weg oder DND-Modus nutzen. Schließen Sie unnötige Fenster und Tabs.</p><h2>3. Akustische Umgebung</h2><p>Weißes Rauschen oder Café-Geräusche (40-60dB) fördern die Kreativität mehr als Stille. Nutzen Sie Lo-Fi.</p>`,
        post3Full: `<h1 class="section-title">Richtig ausruhen gegen Burnout</h1><p>Wahre Ruhe bedeutet, die Reizufuhr zum Gehirn vollständig zu unterbrechen.</p><h2>1. Achtsames Ausruhen</h2><p>Augen zu und tief atmen. Dies aktiviert das "Default Mode Network" des Gehirns zur Informationsordnung.</p><h2>2. Körperliche Aktivierung</h2><p>Aufstehen und dehnen. Eine bessere Durchblutung bringt Sauerstoff für den nächsten Zyklus ins Gehirn.</p><h2>3. Sensorischer Reset</h2><p>Keine Bildschirme in der Pause. Wasser trinken oder in die Ferne schauen, um Augen und Geist zu entspannen.</p>`
    },
    ru: { 
        logo: "Pomodoro Insight", home: "Главная", blog: "Блог", about: "О нас", contact: "Контакт", privacy: "Политика", heroTitle: "Таймер", heroDesc: "Максимизируйте свою эффективность с техникой Помодоро.", latestInsights: "Новое", readMore: "Подробнее →", footerRights: "© 2024 Pomodoro Insight. Все права защищены.", aboutTitle: "О Pomodoro Insight", aboutContent: "Профессиональное сообщество для управления временем.", contactTitle: "Контакт", contactDesc: "Пишите нам на почту по любым вопросам или предложениям.", start: "СТАРТ", pause: "ПАУЗА", timeUp: "Время вышло!",
        post1Title: "Техника Помодоро: Научное обоснование", post1Desc: "Почему 25 минут работы и 5 минут отдыха полезны для мозга?",
        post2Title: "Настройка окружения для 200% концентрации", post2Desc: "Руководство по организации рабочего стола и цифрового пространства.",
        post3Title: "Правильный отдых для профилактики выгорания", post3Desc: "Смартфон — это не отдых. Узнайте, как провести 5 минут с пользой.",
        post1Full: `<h1 class="section-title">Что такое техника Помодоро?</h1><p>Метод управления временем, созданный в конце 80-х для повышения продуктивности.</p><h2>1. Основные принципы</h2><p>25 минут работы, 5 минут отдыха. После 4 циклов — большой перерыв на 15-30 минут.</p><h2>2. Научная база</h2><p>Концентрация длится около 20-30 минут. Регулярные перерывы предотвращают когнитивную усталость.</p><h2>3. Советы по внедрению</h2><p>Используйте физический таймер. Разбейте задачи на блоки по 25 минут и избегайте многозадачности.</p>`,
        post2Full: `<h1 class="section-title">Настройка окружения для 200% концентрации</h1><p>Организация пространства — ключ к удержанию внимания.</p><h2>1. Физическая среда (Десктериор)</h2><p>Визуальные стимулы тратят ресурсы мозга. Уберите лишнее. Используйте естественное освещение.</p><h2>2. Цифровой покой (Диджитал минимализм)</h2><p>Уведомления — враги. Скройте телефон или включите DND. Закройте ненужные окна и вкладки.</p><h2>3. Звуковая среда</h2><p>Белый шум (40-60 дБ) помогает творчеству лучше тишины. Используйте lo-fi или классику.</p>`,
        post3Full: `<h1 class="section-title">Правильный отдых для профилактики выгорания</h1><p>Настоящий отдых — это полное отсутствие поступающей в мозг информации.</p><h2>1. Осознанный отдых</h2><p>Закройте глаза и дышите. Это активирует «сеть пассивного режима работы мозга» для обработки данных.</p><h2>2. Физическая активация</h2><p>Встаньте и разомнитесь. Улучшение кровообращения дает мозгу кислород для следующего цикла.</p><h2>3. Сенсорный сброс</h2><p>Никаких экранов в перерыве. Пейте воду или смотрите вдаль, чтобы снять напряжение с глаз.</p>`
    },
    pt: { 
        logo: "Pomodoro Insight", home: "Início", blog: "Blog", about: "Sobre", contact: "Contato", privacy: "Privacidade", heroTitle: "Foco", heroDesc: "Maximize sua eficiência diária com a técnica Pomodoro.", latestInsights: "Últimas", readMore: "Ler mais →", footerRights: "© 2024 Pomodoro Insight.", aboutTitle: "Sobre Pomodoro Insight", aboutContent: "Comunidade profissional de produtividade.", contactTitle: "Contato", contactDesc: "Contate-nos via e-mail para parcerias ou sugestões.", start: "INICIAR", pause: "PAUSA", timeUp: "O tempo acabou!",
        post1Title: "Técnica Pomodoro: Base Científica", post1Desc: "Por que 25 minutos de foco e 5 de descanso ajudam o cérebro?",
        post2Title: "Configuração do ambiente para 200% de foco", post2Desc: "Guia para organizar sua mesa e ambiente digital para aumentar a eficiência.",
        post3Title: "Métodos de descanso para evitar o burnout", post3Desc: "Olhar o celular não é descansar. Aproveite seus 5 minutos com valor.",
        post1Full: `<h1 class="section-title">O que é a técnica Pomodoro?</h1><p>Um método de gestão de tempo criado nos anos 80 para aumentar a produtividade.</p><h2>1. Princípios básicos</h2><p>25 minutos de foco em uma tarefa e 5 de descanso. Após 4 ciclos, faça uma pausa longa de 15-30 minutos.</p><h2>2. Base científica</h2><p>A concentração dura cerca de 20-30 minutos. Pausas evitam fadiga cognitiva e ajudam na retenção.</p><h2>3. Dicas práticas</h2><p>Use um timer físico para criar urgência. Divida tarefas em blocos de 25 min e evite o multitasking.</p>`,
        post2Full: `<h1 class="section-title">Configuração do Ambiente para 200% de Foco</h1><p>Organizar espaços físicos e digitais é fundamental para a concentração.</p><h2>1. Ambiente físico (Deskterior)</h2><p>Estímulos visuais gastam recursos cerebrais. Limpe o desnecessário. Use iluminação natural.</p><h2>2. Não perturbe digital (Minimalismo digital)</h2><p>Notificações são inimigas. Esconda o celular ou use o modo DND. Feche abas e janelas inúteis.</p><h2>3. Ambiente auditivo</h2><p>Ruído branco ou de café (40-60dB) ajuda mais que o silêncio. Use música lo-fi ou clássica.</p>`,
        post3Full: `<h1 class="section-title">Métodos de Descanso para Evitar o Burnout</h1><p>Descanso real significa cortar completamente os estímulos ao cérebro.</p><h2>1. Descanso consciente</h2><p>Feche os olhos e respire fundo. Isso ativa a "Rede de Modo Padrão", ajudando a organizar informações.</p><h2>2. Ativação física</h2><p>Levante-se e alongue. Melhorar a circulação sanguínea leva oxigênio ao cérebro para o próximo ciclo.</p><h2>3. Reset sensorial</h2><p>Evite telas digitais. Beba água ou olhe para longe para descansar os olhos e a mente.</p>`
    },
    vi: { 
        logo: "Pomodoro Insight", home: "Trang chủ", blog: "Blog", about: "Giới thiệu", contact: "Liên hệ", privacy: "Bảo mật", heroTitle: "Tập trung", heroDesc: "Tối đa hóa hiệu quả với phương pháp Pomodoro.", latestInsights: "Mới nhất", readMore: "Xem thêm →", footerRights: "© 2024 Pomodoro Insight.", aboutTitle: "Về Pomodoro Insight", aboutContent: "Cộng đồng quản lý thời gian chuyên nghiệp.", contactTitle: "Liên hệ", contactDesc: "Liên hệ qua email cho bất kỳ đề xuất nào.", start: "BẮT ĐẦU", pause: "TẠM DỪNG", timeUp: "Hết giờ!",
        post1Title: "Phương pháp Pomodoro: Cơ sở khoa học", post1Desc: "Tại sao 25 phút tập trung và 5 phút nghỉ ngơi có lợi cho não bộ?",
        post2Title: "Thiết lập môi trường để tập trung 200%", post2Desc: "Hướng dẫn sắp xếp bàn làm việc và không gian kỹ thuật số.",
        post3Title: "Cách nghỉ ngơi đúng để tránh kiệt sức", post3Desc: "Xem điện thoại không phải là nghỉ ngơi. Hãy tận dụng 5 phút của bạn.",
        post1Full: `<h1 class="section-title">Pomodoro là gì?</h1><p>Phương pháp quản lý thời gian giúp tăng năng suất lao động vượt trội.</p><h2>1. Nguyên tắc cơ bản</h2><p>Tập trung 25 phút vào một việc, nghỉ 5 phút. Sau 4 chu kỳ, nghỉ dài 15-30 phút.</p><h2>2. Cơ sở khoa học</h2><p>Sự tập trung của người lớn kéo dài khoảng 20-30 phút. Nghỉ ngơi giúp não không bị mệt mỏi nhận thức.</p><h2>3. Mẹo thực hiện</h2><p>Dùng đồng hồ vật lý để tạo áp lực. Chia việc thành các khối 25 phút và đừng làm nhiều việc một lúc.</p>`,
        post2Full: `<h1 class="section-title">Thiết lập môi trường để tập trung 200%</h1><p>Sắp xếp không gian là chìa khóa để duy trì sự chú ý.</p><h2>1. Môi trường vật lý (Deskterior)</h2><p>Kích thích thị giác tiêu tốn tài nguyên não. Dọn đồ không liên quan. Dùng ánh sáng tự nhiên.</p><h2>2. Không làm phiền kỹ thuật số (Tối giản số)</h2><p>Thông báo là kẻ thù. Giấu điện thoại hoặc dùng chế độ DND. Đóng cửa sổ và tab không cần thiết.</p><h2>3. Môi trường âm thanh</h2><p>Tiếng ồn trắng hoặc quán cà phê (40-60dB) giúp sáng tạo hơn. Dùng nhạc lo-fi hoặc cổ điển.</p>`,
        post3Full: `<h1 class="section-title">Cách nghỉ ngơi đúng để tránh kiệt sức</h1><p>Nghỉ ngơi thực sự là cắt đứt mọi kích thích đầu vào cho não bộ.</p><h2>1. Nghỉ ngơi chánh niệm</h2><p>Nhắm mắt và thở sâu. Điều này giúp não sắp xếp thông tin qua "mạng chế độ mặc định".</p><h2>2. Kích hoạt thân thể</h2><p>Đứng dậy và vươn vai. Lưu thông máu giúp đưa oxy lên não cho chu kỳ làm việc tiếp theo.</p><h2>3. Reset giác quan</h2><p>Tránh xa màn hình. Uống nước hoặc nhìn ra xa để giảm mỏi mắt và căng thẳng thần kinh.</p>`
    },
    ar: { 
        logo: "بومودورو إنسايت", home: "الرئيسية", blog: "مدونة", about: "حول", contact: "اتصال", privacy: "الخصوصية", heroTitle: "التركيز", heroDesc: "ضاعف كفاءتك اليومية مع تقنية بومودورو.", latestInsights: "أحدث الرؤى", readMore: "اقرأ المزيد →", footerRights: "© 2024 بومودورو إنسايت.", aboutTitle: "حول بومودورو إنسايت", aboutContent: "مجتمع احترافي لإدارة الوقت.", contactTitle: "اتصال", contactDesc: "اتصل بنا عبر البريد الإلكتروني لأي اقتراحات.", start: "ابدأ", pause: "إيقاف", timeUp: "انتهى الوقت!",
        post1Title: "تقنية بومودورو: الأساس العلمي", post1Desc: "لماذا يعد التركيز لمدة 25 دقيقة والراحة لمدة 5 دقائق مفيداً للدماغ؟",
        post2Title: "إعداد البيئة لتركيز بنسبة 200%", post2Desc: "دليل لتنظيم مكتبك وبيئتك الرقمية لزيادة الكفاءة.",
        post3Title: "طرق الراحة الصحيحة لتجنب الاحتراق", post3Desc: "النظر في الهاتف ليس راحة. تعلم كيف تقضي 5 دقائق بفعالية.",
        post1Full: `<h1 class="section-title">ما هي تقنية بومودورو؟</h1><p>طريقة لإدارة الوقت تم تطويرها في أواخر الثمانينيات لزيادة الإنتاجية.</p><h2>1. المبادئ الأساسية</h2><p>التركيز على مهمة واحدة لمدة 25 دقيقة، ثم راحة 5 دقائق. بعد 4 دورات، خذ راحة طويلة 15-30 دقيقة.</p><h2>2. الأساس العلمي</h2><p>التركيز يدوم عادة 20-30 دقيقة. الراحة المنتظمة تمنع التعب الإدراكي وتحسن استرجاع المعلومات.</p><h2>3. نصائح للتنفيذ</h2><p>استخدم مؤقتاً فيزيائياً لخلق شعور بالعجلة. قسم المهام لكتل 25 دقيقة وتجنب تعدد المهام.</p>`,
        post2Full: `<h1 class="section-title">إعداد البيئة لتركيز بنسبة 200%</h1><p>تنظيم المساحات المادية والرقمية هو مفتاح الحفاظ على التركيز.</p><h2>1. البيئة المادية (Deskterior)</h2><p>المحفزات البصرية تستهلك موارد الدماغ. نظف الأشياء غير الضرورية واستخدم إضاءة طبيعية.</p><h2>2. عدم الإزعاج الرقمي (التقليلية الرقمية)</h2><p>التنبيهات هي الأعداء. أخفِ الهاتف أو استخدم وضع DND. أغلق النوافذ والتبويبات غير الضرورية.</p><h2>3. البيئة السمعية</h2><p>الضوضاء البيضاء أو ضوضاء المقاهي (40-60 ديسيبل) تساعد الإبداع أكثر من الصمت. استخدم موسيقى Lo-fi.</p>`,
        post3Full: `<h1 class="section-title">طرق الراحة الصحيحة لتجنب الاحتراق</h1><p>الراحة الحقيقية تعني قطع المدخلات عن الدماغ تماماً للسماح له بالتعافي.</p><h2>1. الراحة الواعية</h2><p>أغمض عينيك لمدة 5 دقائق وتنفس بعمق. هذا ينشط "شبكة الوضع الافتراضي" لتنظيم المعلومات.</p><h2>2. التنشيط البدني</h2><p>قم من مكانك وتمدد. تحسين الدورة الدموية يوصل الأكسجين للدماغ للدورة التالية.</p><h2>3. إعادة ضبط الحواس</h2><p>تجنب الشاشات الرقمية. اشرب الماء أو انظر بعيداً لتقليل إجهاد العين والذهن.</p>`
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
    const isAbout = path.includes('about.html');
    const isContact = path.includes('contact.html');
    const isPost1 = path.includes('post-1.html');
    const isPost2 = path.includes('post-2.html');
    const isPost3 = path.includes('post-3.html');

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
        if (article && t.post1Full) {
            article.innerHTML = t.post1Full;
            article.style.textAlign = 'left';
        }
    } else if (isPost2) {
        const article = document.querySelector('article.hero');
        if (article && t.post2Full) {
            article.innerHTML = t.post2Full;
            article.style.textAlign = 'left';
        }
    } else if (isPost3) {
        const article = document.querySelector('article.hero');
        if (article && t.post3Full) {
            article.innerHTML = t.post3Full;
            article.style.textAlign = 'left';
        }
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
