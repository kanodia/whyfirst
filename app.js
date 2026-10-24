/* ============================================
   WhyFirst — App Logic (i18n + Voice + Save + Share)
   ============================================ */

// ─── TRANSLATIONS ─────────────────────────────
const TRANSLATIONS = {
  en: {
    navLogo: 'WhyFirst', navRestart: '↺ Start Over',
    heroBadge: 'A Framework for Founders',
    heroTitle1: 'Start with', heroTitle2: 'Why.',
    heroSubHTML: 'Every great company begins with a belief — not a product.<br/>This guided journey helps you uncover your <em>Why</em>,<br/>align it with a real market need, and reach <strong>Product-Market Fit</strong>.',
    beginJourney: 'Begin Your Journey →',
    heroHint: '5 stages · ~10 minutes · No login required',
    ringWhat: 'WHAT', ringHow: 'HOW', ringWhy: 'WHY',

    stage1Badge: 'Stage 1 of 5 · WHY',
    stage1Title: 'What do you <em>believe</em>?',
    stage1Desc: 'Your <strong>Why</strong> is not what you do — it\'s the belief that drives everything. Simon Sinek calls it the Golden Circle\'s core. It\'s the reason you get out of bed.',
    stage1Insight: '<strong>Apple\'s Why:</strong> "We believe in challenging the status quo and thinking differently." The Mac, iPhone, and iPad are just <em>how</em> they prove it.',
    stage1Q1Label: 'Finish this sentence:',
    stage1Prefix: '"I believe the world would be better if…"',
    stage1Q1Placeholder: 'e.g., …everyone had access to personalized learning without cost barriers.',
    stage1Q2Label: 'What change do you want to create in the world?',
    stage1Q2Placeholder: 'e.g., Eliminate financial anxiety for first-generation immigrants.',
    stage1Q3Label: 'How passionate are you about this?',
    sliderMeh: 'Meh', sliderObsessed: 'Obsessed',

    stage2Badge: 'Stage 2 of 5 · HOW',
    stage2Title: 'How do you deliver<br/>on your belief?',
    stage2Desc: 'Your <strong>How</strong> is your unique approach, your differentiator — the specific way you bring your Why to life. It\'s your secret sauce.',
    stage2Insight: '<strong>Remember:</strong> How is not "we build great software." It\'s the <em>principle or mechanism</em> that makes you distinct — e.g., "radical transparency," "community-first," or "no-code simplicity."',
    stage2Q1Label: 'What is your unique approach or method?',
    stage2Q1Placeholder: 'e.g., We surface hidden patterns in spending behavior using AI, without requiring users to manually track anything.',
    stage2Q2Label: 'What is your unfair advantage?',
    stage2Q2Placeholder: 'e.g., Proprietary dataset of 10M+ anonymized transactions. Deep domain expertise in behavioral economics.',
    stage2Q3Label: 'Pick the principles that define your How:',

    stage3Badge: 'Stage 3 of 5 · WHO',
    stage3Title: 'Who feels this<br/><em>pain the most</em>?',
    stage3Desc: 'Product-Market Fit happens when the right product meets the right people at the right time. The sharper your <strong>Who</strong>, the faster you find PMF.',
    stage3Insight: '<strong>The PMF Trap:</strong> Most founders build for "everyone." Narrow beats broad every time. Stripe started with developers. Airbnb started with conference attendees. Go specific first.',
    stage3Q1Label: 'Describe your ideal early customer in one sentence:',
    stage3Q1Placeholder: 'e.g., A first-generation immigrant in the US, aged 25–40, who sends money home monthly and struggles with hidden bank fees.',
    stage3Q2Label: 'What is the #1 pain they experience today?',
    stage3Q2Placeholder: 'e.g., They lose $30–60/month in hidden fees and don\'t realize it until it\'s too late.',
    stage3Q3Label: 'How do they solve this problem today?',
    stage3Q3Placeholder: 'e.g., They use traditional banks (Wells Fargo) or Remitly, but neither gives visibility into the real cost before transfer.',
    stage3Q4Label: 'How severe is their pain?',
    pain1: 'Minor', pain2: 'Annoying', pain3: 'Serious', pain4: 'Urgent', pain5: 'Critical',

    stage4Badge: 'Stage 4 of 5 · WHAT',
    stage4Title: 'What are you<br/><em>actually building</em>?',
    stage4Desc: 'Your <strong>What</strong> is the product — the tangible thing your customer can use. It must be a direct expression of your Why, delivered via your How, for your Who.',
    stage4Insight: '<strong>The Golden Rule:</strong> Your What should change, your Why never should. Products pivot. Beliefs endure. Is your product the clearest expression of your belief?',
    stage4Q1Label: 'Describe your product in one clear sentence:',
    stage4Q1Placeholder: 'e.g., A mobile app that shows immigrants the true cost of money transfers in real-time before they send, saving them $400/year.',
    stage4Q2Label: 'What is the single most important value your product delivers?',
    stage4Q3Label: 'Do you have any evidence of demand? (conversations, signups, revenue, etc.)',
    stage4Q3Placeholder: 'e.g., 50 user interviews done. 200 waitlist signups. 3 paying beta customers generating $900 MRR.',

    values: [
      { key: 'Saves time',        label: '⏱ Saves time' },
      { key: 'Saves money',       label: '💰 Saves money' },
      { key: 'Reduces risk',      label: '🛡 Reduces risk' },
      { key: 'Increases revenue', label: '📈 Increases revenue' },
      { key: 'Reduces friction',  label: '✨ Reduces friction' },
      { key: 'Creates connection',label: '🤝 Creates connection' },
      { key: 'Unlocks access',    label: '🔓 Unlocks access' },
      { key: 'Peace of mind',     label: '🧘 Gives peace of mind' },
    ],
    tags: ['Radical simplicity','Community-led','Data-driven','Human-centered','Open source','AI-native','Privacy-first','No-code','Radical transparency','Async-first','Bottom-up','Enterprise-grade'],

    stage5Badge: 'Stage 5 of 5 · PMF',
    stage5Title: 'Your PMF<br/><em>Signal Report</em>',
    stage5Desc: 'Based on your answers, here\'s where you stand on the path to Product-Market Fit.',
    pmfLabel1: 'Pre-idea', pmfLabel2: 'Exploring', pmfLabel3: 'Validating', pmfLabel4: 'PMF Signal', pmfLabel5: 'Scaling 🚀',
    breakdownTitle: 'Dimension Breakdown',
    nextStepsTitle: '🗺️ Your Immediate Next Steps',
    goldenTitle: '✨ Your Golden Circle',

    btnBack: '← Back', btnNextHow: 'Next: How →', btnNextWho: 'Next: Who →',
    btnNextWhat: 'Next: What →', btnScorePMF: 'Score My PMF →',
    btnRefine: '← Refine Answers', btnDownload: '⬇ Download Summary', btnShare: '🌐 Share Card',

    stepLabels: ['WHY','HOW','WHO','WHAT','PMF'],

    pmfTiers: [
      { tier: 'Pre-Idea Stage', emoji: '🌱', msg: 'You\'re at the very beginning — and that\'s perfectly okay. Your <em>Why</em> is still forming. Focus on exploring your beliefs and talking to potential users before thinking about product.' },
      { tier: 'Exploring Stage', emoji: '🔭', msg: 'You have the seeds of a powerful idea. Your <em>Why</em> has promise, but your <em>Who</em> and <em>What</em> need sharper definition. Run at least 20 customer discovery interviews before building anything.' },
      { tier: 'Validating Stage', emoji: '🧪', msg: 'Solid progress. Your Golden Circle is taking shape. Focus on getting 3–5 paying customers or strong evidence of demand before scaling.' },
      { tier: 'PMF Signal Detected', emoji: '📡', msg: 'Strong signals! Your <em>Why</em>, <em>How</em>, <em>Who</em>, and <em>What</em> are well-aligned. Now focus on retention, NPS, and the "40% rule" — would 40% of users be <em>very disappointed</em> without your product?' },
      { tier: 'Scaling Territory 🚀', emoji: '🚀', msg: 'Exceptional clarity across all dimensions. If qualitative signals match — users love the product, word-of-mouth is growing — you\'re at or near PMF. Time to pour fuel on the fire.' },
    ],
    nextSteps: {
      why:     { title: 'Sharpen your Why', text: 'Write a one-paragraph manifesto describing your core belief. Share it with 10 people and see what resonates emotionally. Your Why is your north star — it must be crystal clear.' },
      how:     { title: 'Define your moat', text: 'Articulate 1–3 things that make your approach genuinely unique. Talk to people who\'ve tried alternatives. Your How is your differentiator — vague is deadly.' },
      who:     { title: 'Go on a customer listening tour', text: 'Book 20 customer discovery calls in the next 2 weeks. Use the Mom Test — ask about their life, not your idea. Pain severity = urgency of PMF.' },
      what:    { title: 'Build the smallest possible proof', text: 'Build a landing page or prototype that communicates your core value prop. Get 10 people to sign up or pay. Evidence beats conviction every time.' },
      sean:    { title: 'Run the Sean Ellis Test', text: 'Survey your active users: "How would you feel if you could no longer use this product?" If 40%+ say "Very disappointed," you\'re at PMF.' },
      revenue: { title: 'Get your first paying customers', text: 'Revenue is the strongest PMF signal. Even 3 paying customers changes everything. Charge early — it validates real pain, not polite interest.' },
      reflect: { title: 'Weekly founder reflection', text: 'Every Friday, answer: "Did we move closer to or further from our Why this week?" PMF is not a milestone — it\'s ongoing alignment between belief, product, and market.' },
    },
    gcNotDefined: 'Not defined yet',
    voiceListening: 'Listening…', voiceStop: '■ Stop',
    voiceNotSupported: 'Voice input not supported in this browser. Please use Chrome.',
    voiceLang: 'en-US',
  },

  hi: {
    navLogo: 'व्हाईफर्स्ट', navRestart: '↺ फिर शुरू करें',
    heroBadge: 'संस्थापकों के लिए एक ढांचा',
    heroTitle1: 'शुरुआत करें', heroTitle2: 'क्यों।',
    heroSubHTML: 'हर महान कंपनी एक विश्वास से शुरू होती है — उत्पाद से नहीं।<br/>यह यात्रा आपको अपना <em>क्यों</em> खोजने,<br/>उसे बाज़ार की ज़रूरत से जोड़ने और <strong>प्रोडक्ट-मार्केट फिट</strong> तक पहुँचाती है।',
    beginJourney: 'यात्रा शुरू करें →',
    heroHint: '5 चरण · ~10 मिनट · कोई लॉगिन नहीं',
    ringWhat: 'क्या', ringHow: 'कैसे', ringWhy: 'क्यों',

    stage1Badge: 'चरण 1 / 5 · क्यों',
    stage1Title: 'आप क्या <em>मानते हैं</em>?',
    stage1Desc: 'आपका <strong>क्यों</strong> वो नहीं जो आप करते हैं — यह वह विश्वास है जो सब कुछ संचालित करता है। Simon Sinek इसे Golden Circle का केंद्र कहते हैं।',
    stage1Insight: '<strong>Apple का क्यों:</strong> "हम मानते हैं कि यथास्थिति को चुनौती देनी चाहिए।" Mac, iPhone और iPad बस <em>कैसे</em> हैं — उस विश्वास का प्रमाण।',
    stage1Q1Label: 'इस वाक्य को पूरा करें:',
    stage1Prefix: '"मेरा मानना है कि दुनिया बेहतर होगी अगर…"',
    stage1Q1Placeholder: 'जैसे, …हर किसी को बिना खर्च के व्यक्तिगत शिक्षा मिल सके।',
    stage1Q2Label: 'आप दुनिया में क्या बदलाव लाना चाहते हैं?',
    stage1Q2Placeholder: 'जैसे, पहली पीढ़ी के प्रवासियों की आर्थिक चिंता खत्म करना।',
    stage1Q3Label: 'आप इस विषय में कितने उत्साहित हैं?',
    sliderMeh: 'उदासीन', sliderObsessed: 'जुनूनी',

    stage2Badge: 'चरण 2 / 5 · कैसे',
    stage2Title: 'अपने विश्वास को<br/>कैसे साकार करते हैं?',
    stage2Desc: 'आपका <strong>कैसे</strong> आपका अनूठा तरीका है — वो विशेष ढंग जिससे आप अपने क्यों को जीवंत करते हैं।',
    stage2Insight: '<strong>याद रखें:</strong> कैसे का मतलब "हम अच्छा सॉफ्टवेयर बनाते हैं" नहीं है। यह वह <em>सिद्धांत</em> है जो आपको अलग बनाता है — जैसे "पूर्ण पारदर्शिता" या "नो-कोड सरलता।"',
    stage2Q1Label: 'आपका अनूठा दृष्टिकोण या तरीका क्या है?',
    stage2Q1Placeholder: 'जैसे, हम AI का उपयोग करके खर्च के छिपे पैटर्न सामने लाते हैं।',
    stage2Q2Label: 'आपका अनुचित लाभ (Unfair Advantage) क्या है?',
    stage2Q2Placeholder: 'जैसे, 1 करोड़+ गुमनाम लेन-देन का डेटा और व्यवहार अर्थशास्त्र में गहरी विशेषज्ञता।',
    stage2Q3Label: 'वे सिद्धांत चुनें जो आपके "कैसे" को परिभाषित करते हैं:',

    stage3Badge: 'चरण 3 / 5 · कौन',
    stage3Title: 'इस <em>दर्द को सबसे<br/>ज़्यादा</em> कौन झेलता है?',
    stage3Desc: 'प्रोडक्ट-मार्केट फिट तब होता है जब सही उत्पाद सही लोगों से सही समय पर मिलता है। आपका <strong>कौन</strong> जितना स्पष्ट, PMF उतनी जल्दी।',
    stage3Insight: '<strong>PMF का जाल:</strong> अधिकांश संस्थापक "सभी के लिए" बनाते हैं। संकीर्ण हमेशा व्यापक से बेहतर। Stripe ने developers से, Airbnb ने conference attendees से शुरुआत की।',
    stage3Q1Label: 'अपने आदर्श शुरुआती ग्राहक को एक वाक्य में बताएं:',
    stage3Q1Placeholder: 'जैसे, अमेरिका में 25–40 साल का पहली पीढ़ी का प्रवासी जो हर महीने घर पैसे भेजता है।',
    stage3Q2Label: 'आज उनकी सबसे बड़ी समस्या (#1 दर्द) क्या है?',
    stage3Q2Placeholder: 'जैसे, वे हर महीने ₹2,500–5,000 की छिपी फीस खो देते हैं और उन्हें पता भी नहीं चलता।',
    stage3Q3Label: 'वे आज इस समस्या को कैसे सुलझाते हैं?',
    stage3Q3Placeholder: 'जैसे, वे पारंपरिक बैंक या Remitly का उपयोग करते हैं, पर कोई असली लागत नहीं बताता।',
    stage3Q4Label: 'उनका दर्द कितना गंभीर है?',
    pain1: 'साधारण', pain2: 'परेशान करने वाला', pain3: 'गंभीर', pain4: 'तत्काल', pain5: 'बहुत ज़रूरी',

    stage4Badge: 'चरण 4 / 5 · क्या',
    stage4Title: 'आप <em>वास्तव में<br/>क्या बना रहे हैं</em>?',
    stage4Desc: 'आपका <strong>क्या</strong> वह उत्पाद है जो आपका ग्राहक उपयोग कर सकता है। यह आपके क्यों की सीधी अभिव्यक्ति होनी चाहिए।',
    stage4Insight: '<strong>सुनहरा नियम:</strong> आपका क्या बदल सकता है, आपका क्यों कभी नहीं। उत्पाद बदलते हैं। विश्वास टिकते हैं।',
    stage4Q1Label: 'अपने उत्पाद को एक स्पष्ट वाक्य में बताएं:',
    stage4Q1Placeholder: 'जैसे, एक मोबाइल ऐप जो प्रवासियों को पैसे भेजने से पहले वास्तविक लागत दिखाता है।',
    stage4Q2Label: 'आपका उत्पाद सबसे महत्वपूर्ण क्या मूल्य देता है?',
    stage4Q3Label: 'क्या आपके पास मांग का कोई सबूत है? (बातचीत, साइनअप, राजस्व आदि)',
    stage4Q3Placeholder: 'जैसे, 50 उपयोगकर्ता साक्षात्कार, 200 वेटलिस्ट साइनअप, ₹75,000 MRR।',

    values: [
      { key: 'Saves time',        label: '⏱ समय बचाता है' },
      { key: 'Saves money',       label: '💰 पैसे बचाता है' },
      { key: 'Reduces risk',      label: '🛡 जोखिम कम करता है' },
      { key: 'Increases revenue', label: '📈 आय बढ़ाता है' },
      { key: 'Reduces friction',  label: '✨ घर्षण कम करता है' },
      { key: 'Creates connection',label: '🤝 जुड़ाव बनाता है' },
      { key: 'Unlocks access',    label: '🔓 पहुँच देता है' },
      { key: 'Peace of mind',     label: '🧘 मन की शांति देता है' },
    ],
    tags: ['मौलिक सरलता','समुदाय-नेतृत्व','डेटा-संचालित','मानव-केंद्रित','ओपन सोर्स','AI-नेटिव','गोपनीयता-पहले','नो-कोड','पूर्ण पारदर्शिता','एसिंक-पहले','बॉटम-अप','एंटरप्राइज़-ग्रेड'],

    stage5Badge: 'चरण 5 / 5 · PMF',
    stage5Title: 'आपकी PMF<br/><em>सिग्नल रिपोर्ट</em>',
    stage5Desc: 'आपके जवाबों के आधार पर, देखें कि आप प्रोडक्ट-मार्केट फिट की राह पर कहाँ हैं।',
    pmfLabel1: 'शुरुआत', pmfLabel2: 'खोज', pmfLabel3: 'परीक्षण', pmfLabel4: 'PMF संकेत', pmfLabel5: 'विस्तार 🚀',
    breakdownTitle: 'आयाम विश्लेषण',
    nextStepsTitle: '🗺️ आपके तत्काल अगले कदम',
    goldenTitle: '✨ आपका गोल्डन सर्किल',

    btnBack: '← वापस', btnNextHow: 'अगला: कैसे →', btnNextWho: 'अगला: कौन →',
    btnNextWhat: 'अगला: क्या →', btnScorePMF: 'PMF स्कोर करें →',
    btnRefine: '← उत्तर सुधारें', btnDownload: '⬇ सारांश डाउनलोड करें', btnShare: '🌐 शेयर कार्ड',

    stepLabels: ['क्यों','कैसे','कौन','क्या','PMF'],

    pmfTiers: [
      { tier: 'विचार-पूर्व चरण', emoji: '🌱', msg: 'आप बिल्कुल शुरुआत में हैं — और यह ठीक है। आपका <em>क्यों</em> अभी बन रहा है। उत्पाद सोचने से पहले अपने विश्वासों को तलाशें और संभावित उपयोगकर्ताओं से बात करें।' },
      { tier: 'खोज चरण', emoji: '🔭', msg: 'आपके पास एक शक्तिशाली विचार के बीज हैं। <em>क्यों</em> में संभावना है, लेकिन <em>कौन</em> और <em>क्या</em> को और तेज़ करें। कुछ बनाने से पहले 20 ग्राहक खोज साक्षात्कार करें।' },
      { tier: 'परीक्षण चरण', emoji: '🧪', msg: 'ठोस प्रगति। आपका गोल्डन सर्किल आकार ले रहा है। स्केल करने से पहले 3–5 भुगतान करने वाले ग्राहक या मांग के मज़बूत सबूत पर ध्यान दें।' },
      { tier: 'PMF संकेत मिला', emoji: '📡', msg: 'मज़बूत संकेत! आपका <em>क्यों</em>, <em>कैसे</em>, <em>कौन</em>, और <em>क्या</em> अच्छी तरह संरेखित हैं। अब retention, NPS, और "40% नियम" पर ध्यान दें।' },
      { tier: 'विस्तार क्षेत्र 🚀', emoji: '🚀', msg: 'सभी आयामों में असाधारण स्पष्टता। अगर qualitative संकेत भी यही कहते हैं तो आप PMF पर हैं। अब तेज़ी बढ़ाएं।' },
    ],
    nextSteps: {
      why:     { title: 'अपना क्यों तेज़ करें', text: 'अपने मूल विश्वास का एक manifesto लिखें। 10 लोगों से साझा करें और देखें क्या भावनात्मक रूप से गूँजता है।' },
      how:     { title: 'अपनी खाई परिभाषित करें', text: '1–3 चीज़ें स्पष्ट करें जो आपके दृष्टिकोण को वास्तव में अनूठा बनाती हैं। अस्पष्टता घातक है।' },
      who:     { title: 'ग्राहक सुनने की यात्रा', text: 'अगले 2 हफ्तों में 20 ग्राहक खोज कॉल करें। Mom Test — उनके जीवन के बारे में पूछें, अपने विचार के बारे में नहीं।' },
      what:    { title: 'सबसे छोटा प्रमाण बनाएं', text: 'Landing page या prototype बनाएं। 10 लोगों को साइन अप या भुगतान करवाएं। सबूत हर बार विश्वास को हराता है।' },
      sean:    { title: 'Sean Ellis Test चलाएं', text: '"अगर यह उत्पाद बंद हो जाए तो कैसा महसूस होगा?" 40%+ "बहुत निराश" = PMF।' },
      revenue: { title: 'पहले भुगतान करने वाले ग्राहक', text: 'राजस्व सबसे मज़बूत PMF संकेत है। जल्दी चार्ज करें — यह वास्तविक दर्द को मान्य करता है।' },
      reflect: { title: 'साप्ताहिक संस्थापक चिंतन', text: 'हर शुक्रवार पूछें: "क्या इस हफ्ते हम अपने क्यों के करीब आए?" PMF एक मील का पत्थर नहीं, निरंतर संरेखण है।' },
    },
    gcNotDefined: 'अभी परिभाषित नहीं',
    voiceListening: 'सुन रहा हूँ…', voiceStop: '■ रोकें',
    voiceNotSupported: 'इस ब्राउज़र में वॉयस इनपुट समर्थित नहीं है। कृपया Chrome उपयोग करें।',
    voiceLang: 'hi-IN',
  },
};

// ─── STATE ────────────────────────────────────
const state = {
  lang: 'en',
  currentScreen: 0,
  answers: {
    belief: '', change: '', passion: 7,
    approach: '', unfair: '', howTagIndices: [],
    customer: '', pain: '', current: '', painLevel: 3,
    product: '', valueKey: '', evidence: '',
  }
};

// ─── HELPERS ──────────────────────────────────
function t(key) { return TRANSLATIONS[state.lang][key] ?? TRANSLATIONS.en[key] ?? key; }

// ─── i18n APPLY ───────────────────────────────
function applyTranslations() {
  const lang = state.lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  // innerHTML (supports <em>, <strong>, <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = t(key);
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

  // Update lang buttons everywhere
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Rebuild dynamic elements
  buildTagGrid();
  buildValueButtons();
  rebuildProgressSteps();

  // Update voice indicator text
  const voiceStatusEl = document.getElementById('voiceStatusText');
  if (voiceStatusEl) voiceStatusEl.textContent = t('voiceListening');
  const voiceStopEl = document.getElementById('voiceStopBtn');
  if (voiceStopEl) voiceStopEl.textContent = t('voiceStop');
}

// ─── SET LANGUAGE ─────────────────────────────
function setLanguage(lang) {
  state.lang = lang;
  applyTranslations();

  // Update voice lang if currently recording
  if (voice.recognition && voice.active) {
    voice.recognition.lang = t('voiceLang');
  }
}

// ─── REBUILD PROGRESS STEPS ───────────────────
function rebuildProgressSteps() {
  const container = document.getElementById('progressSteps');
  if (!container) return;
  const labels = t('stepLabels');
  container.innerHTML = '';
  labels.forEach((label, i) => {
    const el = document.createElement('span');
    el.className = 'progress-step';
    el.id = `step-${i + 1}`;
    el.textContent = label;
    if (i + 1 < state.currentScreen) el.classList.add('done');
    else if (i + 1 === state.currentScreen) el.classList.add('active');
    container.appendChild(el);
  });
}

// ─── BUILD TAG GRID ───────────────────────────
function buildTagGrid() {
  const container = document.getElementById('how-tags');
  if (!container) return;
  const tags = t('tags');
  container.innerHTML = '';
  tags.forEach((label, idx) => {
    const btn = document.createElement('button');
    btn.className = 'tag' + (state.answers.howTagIndices.includes(idx) ? ' selected' : '');
    btn.textContent = label;
    btn.dataset.idx = idx;
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      if (btn.classList.contains('selected')) {
        state.answers.howTagIndices.push(idx);
      } else {
        state.answers.howTagIndices = state.answers.howTagIndices.filter(i => i !== idx);
      }
    });
    container.appendChild(btn);
  });
}

// ─── BUILD VALUE BUTTONS ──────────────────────
function buildValueButtons() {
  const container = document.getElementById('value-options');
  if (!container) return;
  const values = t('values');
  container.innerHTML = '';
  values.forEach(v => {
    const btn = document.createElement('button');
    btn.className = 'value-btn' + (state.answers.valueKey === v.key ? ' selected' : '');
    btn.textContent = v.label;
    btn.dataset.key = v.key;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.value-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.answers.valueKey = v.key;
    });
    container.appendChild(btn);
  });
}

// ─── NAVIGATION ───────────────────────────────
function goTo(screenIndex) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`screen-${screenIndex}`);
  if (target) { target.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  state.currentScreen = screenIndex;
  updateNav(screenIndex);
  if (screenIndex === 5) { collectFinalAnswers(); setTimeout(calculatePMF, 300); }
}

function updateNav(screenIndex) {
  const progressContainer = document.getElementById('progressContainer');
  const mainNav = document.getElementById('mainNav');
  if (screenIndex === 0) {
    progressContainer.style.display = 'none';
    mainNav.style.display = 'none';
    return;
  }
  progressContainer.style.display = 'block';
  mainNav.style.display = 'flex';
  const progress = (screenIndex / 5) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;
  rebuildProgressSteps();
}

// ─── VALIDATION ───────────────────────────────
function validateAndNext(screen) {
  let msg = '';
  if (screen === 1) {
    const b = document.getElementById('q-belief').value.trim();
    const c = document.getElementById('q-change').value.trim();
    if (!b) msg = state.lang === 'hi' ? 'कृपया अपना विश्वास बताएं।' : 'Please describe what you believe.';
    else if (!c) msg = state.lang === 'hi' ? 'कृपया बदलाव बताएं।' : 'Please describe the change you want to create.';
    else { state.answers.belief = b; state.answers.change = c; state.answers.passion = parseInt(document.getElementById('q-passion').value); }
  }
  if (screen === 2) {
    const a = document.getElementById('q-approach').value.trim();
    if (!a) msg = state.lang === 'hi' ? 'कृपया अपना दृष्टिकोण बताएं।' : 'Please describe your unique approach.';
    else { state.answers.approach = a; state.answers.unfair = document.getElementById('q-unfair').value.trim(); }
  }
  if (screen === 3) {
    const cu = document.getElementById('q-customer').value.trim();
    const p  = document.getElementById('q-pain').value.trim();
    if (!cu) msg = state.lang === 'hi' ? 'कृपया अपने ग्राहक को बताएं।' : 'Please describe your ideal customer.';
    else if (!p) msg = state.lang === 'hi' ? 'कृपया उनका दर्द बताएं।' : 'Please describe their #1 pain.';
    else { state.answers.customer = cu; state.answers.pain = p; state.answers.current = document.getElementById('q-current').value.trim(); }
  }
  if (screen === 4) {
    const pr = document.getElementById('q-product').value.trim();
    if (!pr) msg = state.lang === 'hi' ? 'कृपया अपना उत्पाद बताएं।' : 'Please describe your product.';
    else { state.answers.product = pr; state.answers.evidence = document.getElementById('q-evidence').value.trim(); }
  }
  if (msg) { showToast(msg); return; }
  goTo(screen + 1);
}

function collectFinalAnswers() {
  const map = { belief:'q-belief', change:'q-change', approach:'q-approach', unfair:'q-unfair', customer:'q-customer', pain:'q-pain', current:'q-current', product:'q-product', evidence:'q-evidence' };
  Object.entries(map).forEach(([k, id]) => { const el = document.getElementById(id); if (el) state.answers[k] = el.value.trim(); });
  state.answers.passion = parseInt(document.getElementById('q-passion').value);
}

// ─── PAIN LEVEL ───────────────────────────────
function setPain(level) {
  state.answers.painLevel = level;
  document.querySelectorAll('.pain-btn').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.level) === level));
}

// ─── PMF SCORING ──────────────────────────────
function scoreDim_Why(a) {
  let s = 0;
  s += Math.min((a.belief.split(' ').filter(Boolean).length / 20) * 12, 12);
  s += Math.min((a.change.split(' ').filter(Boolean).length / 15) * 8, 8);
  s += (a.passion / 10) * 5;
  return Math.min(s, 25);
}
function scoreDim_How(a) {
  let s = 0;
  s += Math.min((a.approach.split(' ').filter(Boolean).length / 20) * 10, 10);
  s += Math.min((a.unfair.split(' ').filter(Boolean).length / 15) * 8, 8);
  s += Math.min(a.howTagIndices.length * 1.75, 7);
  return Math.min(s, 25);
}
function scoreDim_Who(a) {
  let s = 0;
  s += Math.min((a.customer.split(' ').filter(Boolean).length / 20) * 10, 10);
  s += Math.min((a.pain.split(' ').filter(Boolean).length / 15) * 8, 8);
  s += (a.painLevel / 5) * 5;
  if (a.current.length > 30) s += 2;
  return Math.min(s, 25);
}
function scoreDim_What(a) {
  let s = 0;
  s += Math.min((a.product.split(' ').filter(Boolean).length / 20) * 10, 10);
  if (a.valueKey) s += 5;
  s += Math.min((a.evidence.split(' ').filter(Boolean).length / 20) * 10, 10);
  return Math.min(s, 25);
}

function calculatePMF() {
  const a = state.answers;
  const dims = { why: scoreDim_Why(a), how: scoreDim_How(a), who: scoreDim_Who(a), what: scoreDim_What(a) };
  const total = Math.round(dims.why + dims.how + dims.who + dims.what);
  animateScore(total);
  setTimeout(() => { document.getElementById('pmfFill').style.width = `${total}%`; }, 200);
  renderSummary(total);
  renderBreakdown(dims);
  renderNextSteps(total, dims);
  renderGoldenCircle();
}

function animateScore(target) {
  const el = document.getElementById('pmfNumber');
  const start = performance.now();
  const dur = 1500;
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(e * target);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function renderSummary(score) {
  const tiers = t('pmfTiers');
  let idx = score < 20 ? 0 : score < 40 ? 1 : score < 60 ? 2 : score < 80 ? 3 : 4;
  const { tier, emoji, msg } = tiers[idx];
  document.getElementById('pmfSummary').innerHTML = `<h3>${emoji} ${tier}</h3><p>${msg}</p>`;
}

function renderBreakdown(dims) {
  const colors = { why: '#a78bfa', how: '#38bdf8', who: '#fb923c', what: '#4ade80' };
  const labels = { why: t('ringWhy'), how: t('ringHow'), who: state.lang === 'hi' ? 'कौन' : 'WHO', what: t('ringWhat') };
  const container = document.getElementById('breakdownItems');
  container.innerHTML = '';
  Object.entries(dims).forEach(([key, score]) => {
    const pct = Math.round((score / 25) * 100);
    const el = document.createElement('div');
    el.className = 'breakdown-item';
    el.innerHTML = `
      <span class="breakdown-label" style="color:${colors[key]}">${labels[key]}</span>
      <div class="breakdown-bar"><div class="breakdown-fill" id="bf-${key}" style="background:${colors[key]};width:0%"></div></div>
      <span class="breakdown-score" style="color:${colors[key]}">${pct}%</span>`;
    container.appendChild(el);
    setTimeout(() => { document.getElementById(`bf-${key}`).style.width = `${pct}%`; }, 400);
  });
}

function renderNextSteps(score, dims) {
  const ns = t('nextSteps');
  const steps = [];
  const weakest = Object.entries(dims).sort((a, b) => a[1] - b[1])[0][0];
  if (weakest === 'why' || dims.why < 15) steps.push(ns.why);
  if (weakest === 'how' || dims.how < 15) steps.push(ns.how);
  if (weakest === 'who' || dims.who < 15) steps.push(ns.who);
  if (weakest === 'what' || dims.what < 15) steps.push(ns.what);
  if (score >= 60) steps.push(ns.sean);
  if (score >= 50 && state.answers.evidence.length < 50) steps.push(ns.revenue);
  steps.push(ns.reflect);
  document.getElementById('nextStepsItems').innerHTML = steps.map((s, i) => `
    <div class="next-step-item">
      <div class="next-step-num">${i + 1}</div>
      <div class="next-step-text"><strong>${s.title}:</strong> ${s.text}</div>
    </div>`).join('');
}

function renderGoldenCircle() {
  const a = state.answers;
  const colors = { why: '#a78bfa', how: '#38bdf8', who: '#fb923c', what: '#4ade80' };
  const labels = { why: t('ringWhy'), how: t('ringHow'), who: state.lang === 'hi' ? 'कौन' : 'WHO', what: t('ringWhat') };
  const nd = t('gcNotDefined');
  const tagLabels = t('tags');
  const selectedTags = a.howTagIndices.map(i => tagLabels[i]).slice(0, 3).join(', ');

  const items = [
    { label: 'why', content: a.belief ? `"${a.belief}"${a.change ? ` — <em>${a.change}</em>` : ''}` : `<em>${nd}</em>` },
    { label: 'how', content: a.approach ? `${a.approach}${selectedTags ? ` · <em>${selectedTags}</em>` : ''}` : `<em>${nd}</em>` },
    { label: 'who', content: a.customer || `<em>${nd}</em>` },
    { label: 'what', content: a.product || `<em>${nd}</em>` },
  ];
  document.getElementById('goldenItems').innerHTML = items.map(item => `
    <div class="golden-item">
      <span class="golden-label" style="color:${colors[item.label]}">${labels[item.label]}</span>
      <span class="golden-content">${item.content}</span>
    </div>`).join('');
}

// ─── DOWNLOAD ─────────────────────────────────
function downloadSummary() {
  const a = state.answers;
  const score = Math.round(scoreDim_Why(a) + scoreDim_How(a) + scoreDim_Who(a) + scoreDim_What(a));
  const tagLabels = TRANSLATIONS.en.tags;
  const selectedTags = a.howTagIndices.map(i => tagLabels[i]).join(', ');
  const text = `WHYFIRST — PMF REPORT\n${'='.repeat(40)}\nDate: ${new Date().toLocaleDateString()}\nPMF Score: ${score} / 100\n\nWHY — Belief:\n"I believe ${a.belief || '[Not answered]'}"\n\nWHY — Change:\n${a.change || '[Not answered]'}\n\nHOW — Approach:\n${a.approach || '[Not answered]'}\n\nHOW — Unfair Advantage:\n${a.unfair || '[Not answered]'}\n\nHOW — Principles:\n${selectedTags || '[None selected]'}\n\nWHO — Customer:\n${a.customer || '[Not answered]'}\n\nWHO — Their Pain:\n${a.pain || '[Not answered]'}\n\nWHO — Current Solutions:\n${a.current || '[Not answered]'}\n\nWHO — Pain Severity: ${a.painLevel} / 5\n\nWHAT — Product:\n${a.product || '[Not answered]'}\n\nWHAT — Core Value: ${a.valueKey || '[Not selected]'}\n\nWHAT — Evidence:\n${a.evidence || '[Not answered]'}\n\n${'─'.repeat(40)}\nYour Why never changes. Your What always will.\nKeep asking Why — let it lead you to PMF.`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a2 = document.createElement('a');
  a2.href = url; a2.download = 'whyfirst-pmf-report.txt'; a2.click();
  URL.revokeObjectURL(url);
}

// ─── SAVE & RESUME (localStorage) ────────────
const STORAGE_KEY = 'whyfirst_save_v1';

function saveProgress() {
  const payload = {
    lang: state.lang,
    answers: { ...state.answers },
    screen: state.currentScreen,
    ts: Date.now(),
  };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(payload)); } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch(e) { return null; }
}

function clearSave() {
  try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
}

function restoreAnswersToDOM(answers) {
  const map = { belief:'q-belief', change:'q-change', approach:'q-approach', unfair:'q-unfair', customer:'q-customer', pain:'q-pain', current:'q-current', product:'q-product', evidence:'q-evidence' };
  Object.entries(map).forEach(([k, id]) => {
    const el = document.getElementById(id);
    if (el && answers[k]) el.value = answers[k];
  });
  if (answers.passion) {
    const sl = document.getElementById('q-passion');
    if (sl) { sl.value = answers.passion; document.getElementById('passionValue').textContent = `${answers.passion} / 10`; }
  }
  if (answers.painLevel) setPain(answers.painLevel);
}

function showResumePrompt(saved) {
  const mins = Math.round((Date.now() - saved.ts) / 60000);
  const timeStr = mins < 60 ? `${mins}m ago` : `${Math.round(mins/60)}h ago`;
  const banner = document.createElement('div');
  banner.id = 'resumeBanner';
  banner.innerHTML = `
    <div class="resume-inner">
      <div class="resume-icon">💾</div>
      <div class="resume-text">
        <strong>${saved.lang === 'hi' ? 'अधूरी यात्रा मिली' : 'Unfinished journey found'}</strong>
        <span>${saved.lang === 'hi' ? `${timeStr} पहले सहेजा गया` : `Saved ${timeStr}`}</span>
      </div>
      <div class="resume-actions">
        <button class="resume-btn resume-yes" onclick="doResume()">${saved.lang === 'hi' ? 'जारी रखें' : 'Continue'}</button>
        <button class="resume-btn resume-no" onclick="dismissResume()">${saved.lang === 'hi' ? 'नया शुरू करें' : 'Start fresh'}</button>
      </div>
    </div>`;
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add('visible'), 50);
}

let _pendingSave = null;
function doResume() {
  if (!_pendingSave) return;
  state.lang = _pendingSave.lang || 'en';
  state.answers = { ...state.answers, ..._pendingSave.answers };
  applyTranslations();
  restoreAnswersToDOM(state.answers);
  dismissResume();
  const screen = Math.min(_pendingSave.screen || 1, 4);
  goTo(screen);
}

function dismissResume() {
  const banner = document.getElementById('resumeBanner');
  if (banner) { banner.classList.remove('visible'); setTimeout(() => banner.remove(), 400); }
}

// Auto-save on any textarea change
function hookAutoSave() {
  document.querySelectorAll('.text-input').forEach(el => {
    el.addEventListener('input', debounce(saveProgress, 800));
  });
  document.getElementById('q-passion').addEventListener('input', debounce(saveProgress, 800));
}

function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

// ─── RESTART ──────────────────────────────────
function restart() {
  state.answers = { belief:'', change:'', passion:7, approach:'', unfair:'', howTagIndices:[], customer:'', pain:'', current:'', painLevel:3, product:'', valueKey:'', evidence:'' };
  document.querySelectorAll('.text-input').forEach(el => el.value = '');
  document.querySelectorAll('.pain-btn').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.level) === 3));
  document.getElementById('q-passion').value = 7;
  document.getElementById('passionValue').textContent = '7 / 10';
  clearSave();
  goTo(0);
}

// ─── TOAST ────────────────────────────────────
function showToast(msg) {
  let el = document.getElementById('globalToast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; el.id = 'globalToast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

// ─── VOICE INPUT ENGINE ───────────────────────
const voice = {
  recognition: null,
  active: false,
  targetId: null,
  activeMicBtn: null,
  supported: false,
  interimText: '',
};

function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voice.supported = false;
    document.querySelectorAll('.mic-btn').forEach(btn => { btn.style.display = 'none'; });
    return;
  }
  voice.supported = true;
  voice.recognition = new SpeechRecognition();
  voice.recognition.continuous = false;
  voice.recognition.interimResults = true;
  voice.recognition.maxAlternatives = 1;

  voice.recognition.onstart = () => {
    voice.active = true;
    showVoiceIndicator(true);
    if (voice.activeMicBtn) voice.activeMicBtn.classList.add('recording');
    const ta = document.getElementById(voice.targetId);
    if (ta) ta.classList.add('voice-active');
  };

  voice.recognition.onresult = (e) => {
    let interim = '', final = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const txt = e.results[i][0].transcript;
      if (e.results[i].isFinal) final += txt;
      else interim += txt;
    }
    // Show interim in indicator
    const interimEl = document.getElementById('voiceInterim');
    if (interimEl) interimEl.textContent = interim || final;
    voice.interimText = interim;

    // Append final text to textarea
    if (final) {
      const ta = document.getElementById(voice.targetId);
      if (ta) {
        const sep = ta.value && !ta.value.endsWith(' ') ? ' ' : '';
        ta.value += sep + final.trim();
        ta.dispatchEvent(new Event('input'));
      }
    }
  };

  voice.recognition.onend = () => {
    cleanupVoice();
  };

  voice.recognition.onerror = (e) => {
    if (e.error !== 'no-speech' && e.error !== 'aborted') {
      showToast(state.lang === 'hi' ? 'माइक्रोफ़ोन एक्सेस की ज़रूरत है।' : 'Microphone access is required. Please allow it.');
    }
    cleanupVoice();
  };
}

function toggleVoice(targetId, btn) {
  if (!voice.supported) { showToast(t('voiceNotSupported')); return; }
  if (voice.active) {
    // If clicking the same active mic — stop
    if (voice.targetId === targetId) { stopVoice(); return; }
    // Clicking a different mic — stop current, start new
    stopVoice();
    setTimeout(() => startVoice(targetId, btn), 300);
    return;
  }
  startVoice(targetId, btn);
}

function startVoice(targetId, btn) {
  voice.targetId = targetId;
  voice.activeMicBtn = btn;
  voice.recognition.lang = t('voiceLang');
  try { voice.recognition.start(); }
  catch (err) { console.warn('Voice start error:', err); }
}

function stopVoice() {
  if (voice.recognition && voice.active) {
    try { voice.recognition.stop(); } catch (e) {}
  }
  cleanupVoice();
}

function cleanupVoice() {
  voice.active = false;
  voice.interimText = '';
  showVoiceIndicator(false);
  if (voice.activeMicBtn) { voice.activeMicBtn.classList.remove('recording'); }
  const ta = document.getElementById(voice.targetId);
  if (ta) ta.classList.remove('voice-active');
  const interimEl = document.getElementById('voiceInterim');
  if (interimEl) interimEl.textContent = '';
  voice.activeMicBtn = null;
  voice.targetId = null;
}

function showVoiceIndicator(show) {
  const el = document.getElementById('voiceIndicator');
  if (el) el.classList.toggle('active', show);
}

// ─── SHARE CARD (Canvas) ─────────────────────
function shareGoldenCircle() {
  const a = state.answers;
  const W = 900, H = 520;
  const canvas = document.createElement('canvas');
  canvas.width = W * 2; canvas.height = H * 2; // retina
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  // Background
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0a0814'); bg.addColorStop(1, '#120920');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Subtle grid
  ctx.strokeStyle = 'rgba(167,139,250,0.04)'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // Glow orbs
  const drawOrb = (x, y, r, color) => {
    const g = ctx.createRadialGradient(x,y,0,x,y,r);
    g.addColorStop(0, color); g.addColorStop(1,'transparent');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
  };
  drawOrb(120, 100, 180, 'rgba(124,58,237,0.25)');
  drawOrb(780, 420, 160, 'rgba(219,39,119,0.2)');

  // Concentric rings (left side)
  const cx = 200, cy = 260;
  const rings = [
    { r: 140, color: 'rgba(167,139,250,0.12)', stroke: 'rgba(167,139,250,0.15)', label: t('ringWhat'), lColor: 'rgba(240,240,248,0.3)', fs: 11 },
    { r: 95,  color: 'rgba(167,139,250,0.18)', stroke: 'rgba(167,139,250,0.25)', label: t('ringHow'),  lColor: 'rgba(240,240,248,0.5)', fs: 11 },
    { r: 52,  color: 'rgba(167,139,250,0.28)', stroke: 'rgba(167,139,250,0.6)',  label: t('ringWhy'),  lColor: '#a78bfa',              fs: 14 },
  ];
  rings.forEach(ring => {
    ctx.beginPath(); ctx.arc(cx, cy, ring.r, 0, Math.PI*2);
    ctx.fillStyle = ring.color; ctx.fill();
    ctx.strokeStyle = ring.stroke; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = ring.lColor; ctx.font = `700 ${ring.fs}px Inter, sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(ring.label.toUpperCase(), cx, cy - ring.r + 16);
  });

  // Divider line
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(370, 40); ctx.lineTo(370, H-40); ctx.stroke();

  // Logo / Header
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.font = '700 13px Inter, sans-serif'; ctx.fillStyle = 'rgba(167,139,250,0.8)';
  ctx.fillText('WHYFIRST', 390, 40);
  const scoreVal = Math.round(scoreDim_Why(a)+scoreDim_How(a)+scoreDim_Who(a)+scoreDim_What(a));
  ctx.textAlign = 'right'; ctx.fillStyle = 'rgba(167,139,250,0.6)';
  ctx.font = '600 12px Inter, sans-serif';
  ctx.fillText(`PMF Score: ${scoreVal}/100`, W-30, 40);

  // Golden Circle text blocks (right side)
  const tagLabels = t('tags');
  const selTags = a.howTagIndices.map(i => tagLabels[i]).slice(0,2).join(', ');
  const nd = t('gcNotDefined');
  const blocks = [
    { dot:'#a78bfa', label: t('ringWhy'),  text: a.belief ? `I believe ${a.belief}` : nd },
    { dot:'#38bdf8', label: t('ringHow'),  text: a.approach || nd },
    { dot:'#fb923c', label: state.lang==='hi' ? 'कौन' : 'WHO', text: a.customer || nd },
    { dot:'#4ade80', label: t('ringWhat'), text: a.product || nd },
  ];

  let y = 80;
  blocks.forEach(block => {
    // Dot
    ctx.beginPath(); ctx.arc(392, y+7, 5, 0, Math.PI*2);
    ctx.fillStyle = block.dot; ctx.fill();
    // Label
    ctx.font = '700 10px Inter, sans-serif'; ctx.fillStyle = block.dot;
    ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    ctx.fillText(block.label.toUpperCase(), 404, y);
    // Text (word-wrapped)
    ctx.font = '400 13px Inter, sans-serif'; ctx.fillStyle = 'rgba(240,240,248,0.75)';
    const maxW = W - 420;
    const words = block.text.split(' ');
    let line = '', ty = y + 16;
    words.forEach((word, wi) => {
      const test = line + (line ? ' ' : '') + word;
      if (ctx.measureText(test).width > maxW && line) {
        ctx.fillText(line, 404, ty); line = word; ty += 18;
      } else line = test;
      if (wi === words.length - 1) ctx.fillText(line, 404, ty);
    });
    y = ty + 32;
  });

  // Footer
  ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(240,240,248,0.2)';
  ctx.font = '400 11px Inter, sans-serif';
  ctx.fillText('whyfirst.app · Start with Why. End with PMF.', W/2, H-20);

  // Download
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'whyfirst-golden-circle.png'; link.click();
    URL.revokeObjectURL(url);
    showToast(state.lang === 'hi' ? '✓ कार्ड डाउनलोड हो गया!' : '✓ Share card downloaded!');
  }, 'image/png');
}

// ─── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved progress
  const saved = loadProgress();
  if (saved && saved.answers && (saved.answers.belief || saved.answers.customer || saved.answers.product)) {
    _pendingSave = saved;
    setTimeout(() => showResumePrompt(saved), 600);
  }

  // Init voice
  initVoice();

  // Start button
  document.getElementById('startBtn').addEventListener('click', () => goTo(1));
  document.getElementById('restartBtn').addEventListener('click', restart);

  // Passion slider
  const slider = document.getElementById('q-passion');
  slider.addEventListener('input', () => {
    state.answers.passion = parseInt(slider.value);
    document.getElementById('passionValue').textContent = `${slider.value} / 10`;
  });

  // Hook auto-save
  hookAutoSave();

  // Also save on pain/tag changes (via overriding setPain)
  const _setPain = setPain;
  window.setPain = (level) => { _setPain(level); saveProgress(); };

  // Save on nav
  const _goTo = goTo;
  window.goTo = (n) => { _goTo(n); saveProgress(); };

  // Initial render: tags, value buttons, translations
  applyTranslations();
  setPain(3);
});
