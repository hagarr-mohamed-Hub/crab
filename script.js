// المجالات والتفاصيل الخاصة بها
const fields = {
    'مطور برمجيات': {
        title: '💻 مطور برمجيات (Software Developer)',
        description: 'متخصص في تطوير التطبيقات والبرامج والحلول البرمجية الكاملة',
        careers: ['تطوير الويب', 'تطوير الموبايل', 'هندسة البرمجيات', 'برمجة الألعاب'],
        emoji: '💻'
    },
    'برمجة': {
        title: '⌨️ متخصص برمجة (Programming)',
        description: 'خبير في كتابة الأكواد وحل المشاكل البرمجية والخوارزميات',
        careers: ['كتابة الأكواد', 'تصحيح الأخطاء', 'تحسين الأداء', 'البرمجة النظيفة'],
        emoji: '⌨️'
    },
    'مونتاج': {
        title: '🎬 متخصص مونتاج (Video Editing)',
        description: 'محترف في تحرير وإنتاج الفيديوهات وتركيب المشاهد',
        careers: ['تحرير فيديو', 'إنتاج محتوى', 'تأثيرات بصرية', 'ألوان ديناميكية'],
        emoji: '🎬'
    },
    'تصميم جرافيك': {
        title: '🎨 مصمم جرافيك (Graphic Designer)',
        description: 'فنان يبدع في تصميم الرسومات والهويات البصرية والمنشورات',
        careers: ['تصميم الهوية', 'تصميم الإعلانات', 'تصميم الويب', 'فنون بصرية'],
        emoji: '🎨'
    },
    'ذكاء اصطناعي': {
        title: '🤖 متخصص ذكاء اصطناعي (AI)',
        description: 'مهندس يعمل على تطوير وتدريب نماذج التعلم الآلي',
        careers: ['تعلم الآلة', 'معالجة الصور', 'معالجة اللغة الطبيعية', 'البرمجة الذكية'],
        emoji: '🤖'
    },
    'قواعد بيانات': {
        title: '🗄️ متخصص قواعد بيانات (Database)',
        description: 'خبير في تصميم وإدارة وحماية قواعد البيانات الضخمة',
        careers: ['تصميم قواعد البيانات', 'إدارة البيانات', 'الأمان السيبراني', 'تحسين الأداء'],
        emoji: '🗄️'
    },
    'محلل بيانات': {
        title: '📊 محلل بيانات (Data Analyst)',
        description: 'متخصص في تحليل البيانات واستخراج الرؤى والتقارير',
        careers: ['تحليل البيانات', 'إنشاء تقارير', 'تصور البيانات', 'اتخاذ القرارات'],
        emoji: '📊'
    },
    'تسويق رقمي': {
        title: '📱 مسوق رقمي (Digital Marketing)',
        description: 'متخصص في التسويق الإلكتروني والحملات الرقمية والإعلانات',
        careers: ['تسويق وسائل التواصل', 'تحسين محركات البحث', 'إعلانات رقمية', 'تسويق المحتوى'],
        emoji: '📱'
    },
    'منشئ محتوى': {
        title: '✍️ منشئ محتوى (Content Creator)',
        description: 'صانع محتوى إبداعي للمدونات والفيديوهات والمنصات الرقمية',
        careers: ['كتابة المحتوى', 'إنتاج الفيديو', 'التدوين', 'المحتوى التعليمي'],
        emoji: '✍️'
    },
    'مدير مشاريع': {
        title: '📋 مدير مشاريع (Project Manager)',
        description: 'قائد ينظم الفريق ويدير المشاريع والمواارد والمواعيد',
        careers: ['إدارة الفريق', 'تخطيط المشاريع', 'تتبع التقدم', 'إدارة الموارد'],
        emoji: '📋'
    },
    'سلسلة التوريد': {
        title: '🚚 متخصص سلسلة التوريد (Supply Chain)',
        description: 'خبير في تنظيم وإدارة حركة البضائع والمخزون اللوجستيات',
        careers: ['إدارة المخزون', 'اللوجستيات', 'التوزيع', 'الشراء والمبيعات'],
        emoji: '🚚'
    },
    'مساعد افتراضي': {
        title: '🤝 مساعد افتراضي (Virtual Assistant)',
        description: 'موظف يقدم الدعم الإداري والتنظيمي للشركات عن بعد',
        careers: ['الدعم الإداري', 'إدارة البريد', 'جدولة الاجتماعات', 'خدمة العملاء'],
        emoji: '🤝'
    },
    'مصمم واجهات': {
        title: '🎯 مصمم واجهات (UI/UX Designer)',
        description: 'مصمم يخلق تجارب مستخدم رائعة وواجهات سهلة الاستخدام',
        careers: ['تصميم التطبيقات', 'تصميم الويب', 'أبحاث المستخدمين', 'تجربة المستخدم'],
        emoji: '🎯'
    },
    'إدارة أعمال': {
        title: '💼 مدير أعمال (Business Management)',
        description: 'قائد استراتيجي يدير العمليات التجارية والاستثمارات والنمو',
        careers: ['إدارة عامة', 'تطوير استراتيجي', 'تحسين الكفاءة', 'قيادة المبيعات'],
        emoji: '💼'
    },
    'إدخال بيانات': {
        title: '⌨️ متخصص إدخال بيانات (Data Entry)',
        description: 'موظف يقوم بإدخال وتنظيم ومعالجة البيانات بدقة',
        careers: ['إدخال البيانات', 'فحص الجودة', 'معالجة الملفات', 'التنظيم'],
        emoji: '⌨️'
    }
};

// الأسئلة
const questions = [
    {
        question: 'عندما تواجه مشكلة تقنية معقدة، ما الذي تفضل فعله؟',
        answers: [
            { text: 'أحب فهم آليات العمل والتقنيات الأساسية', fields: ['مطور برمجيات', 'برمجة', 'قواعد بيانات'] },
            { text: 'أفضل العمل باستخدام الأدوات الحديثة والبرامج', fields: ['ذكاء اصطناعي', 'محلل بيانات', 'مصمم واجهات'] },
            { text: 'أركز على النتيجة النهائية والتأثير المرئي', fields: ['تصميم جرافيك', 'مونتاج', 'مصمم واجهات'] },
            { text: 'أحب التعاون مع الفريق والتواصل', fields: ['مدير مشاريع', 'مساعد افتراضي', 'إدارة أعمال'] }
        ]
    },
    {
        question: 'ما نوع الأنشطة التي تشعرك بالطاقة والحماس؟',
        answers: [
            { text: 'كتابة الأكواد وحل الألغاز التقنية', fields: ['برمجة', 'مطور برمجيات', 'ذكاء اصطناعي'] },
            { text: 'الإبداع البصري والتصميم والفنون', fields: ['تصميم جرافيك', 'مصمم واجهات', 'مونتاج'] },
            { text: 'تحليل البيانات والأرقام واستخراج الرؤى', fields: ['محلل بيانات', 'قواعد بيانات', 'إدارة أعمال'] },
            { text: 'إنشاء محتوى وتقديم الأفكار للآخرين', fields: ['منشئ محتوى', 'تسويق رقمي', 'مساعد افتراضي'] }
        ]
    },
    {
        question: 'في مجال الدراسة والتعلم، ماذا يثير فضولك أكثر؟',
        answers: [
            { text: 'كيفية عمل الأنظمة والآليات التكنولوجية', fields: ['مطور برمجيات', 'قواعد بيانات', 'برمجة'] },
            { text: 'الفنون والتصميم والإبداع الفني', fields: ['تصميم جرافيك', 'مونتاج', 'مصمم واجهات'] },
            { text: 'الإحصائيات والبيانات والتحليل', fields: ['محلل بيانات', 'ذكاء اصطناعي', 'إدخال بيانات'] },
            { text: 'الأعمال والتسويق والإدارة', fields: ['تسويق رقمي', 'إدارة أعمال', 'مدير مشاريع'] }
        ]
    },
    {
        question: 'عند العمل في فريق، ما دورك المفضل؟',
        answers: [
            { text: 'أكون الشخص الذي ينفذ المهام التقنية', fields: ['برمجة', 'مطور برمجيات', 'قواعد بيانات'] },
            { text: 'أركز على الجودة والتفاصيل والدقة', fields: ['مصمم واجهات', 'تصميم جرافيك', 'إدخال بيانات'] },
            { text: 'أقود الفريق وأنظم المهام والجداول', fields: ['مدير مشاريع', 'إدارة أعمال', 'سلسلة التوريد'] },
            { text: 'أبحث عن الأفكار الإبداعية والحلول المختلفة', fields: ['منشئ محتوى', 'تصميم جرافيك', 'مونتاج'] }
        ]
    },
    {
        question: 'كيف تفضل قضاء وقت فراغك؟',
        answers: [
            { text: 'تعلم برامج ولغات برمجية جديدة', fields: ['برمجة', 'مطور برمجيات', 'ذكاء اصطناعي'] },
            { text: 'ممارسة هواياتك الفنية والإبداعية', fields: ['تصميم جرافيك', 'مونتاج', 'منشئ محتوى'] },
            { text: 'الاطلاع على الإحصائيات والمقالات التحليلية', fields: ['محلل بيانات', 'قواعد بيانات', 'تسويق رقمي'] },
            { text: 'تنظيم وتطوير مشاريع أو خطط', fields: ['مدير مشاريع', 'إدارة أعمال', 'سلسلة التوريد'] }
        ]
    },
    {
        question: 'ما أكثر شيء يحفزك في العمل؟',
        answers: [
            { text: 'رؤية الكود يعمل بكفاءة وبدون أخطاء', fields: ['برمجة', 'مطور برمجيات', 'قواعد بيانات'] },
            { text: 'رؤية المنتج النهائي جميل وقابل للاستخدام', fields: ['تصميم جرافيك', 'مصمم واجهات', 'مونتاج'] },
            { text: 'أن تؤدي قرارات بيانية صحيحة إلى نتائج إيجابية', fields: ['محلل بيانات', 'ذكاء اصطناعي', 'تسويق رقمي'] },
            { text: 'نجاح المشروع والفريق وتحقيق الأهداف', fields: ['مدير مشاريع', 'إدارة أعمال', 'سلسلة التوريد'] }
        ]
    },
    {
        question: 'عند إنشاء محتوى أو منتج، ما يهمك أولاً؟',
        answers: [
            { text: 'الأداء التقني والسرعة والاستقرار', fields: ['مطور برمجيات', 'برمجة', 'قواعد بيانات'] },
            { text: 'المظهر البصري والجماليات والتصميم', fields: ['تصميم جرافيك', 'مصمم واجهات', 'مونتاج'] },
            { text: 'الفهم العميق للبيانات والأنماط', fields: ['محلل بيانات', 'ذكاء اصطناعي', 'إدخال بيانات'] },
            { text: 'تحقيق الأهداف التجارية والعائد', fields: ['تسويق رقمي', 'إدارة أعمال', 'منشئ محتوى'] }
        ]
    },
    {
        question: 'ما الذي يسبب لك الملل والإحباط؟',
        answers: [
            { text: 'الأخطاء التقنية والمشاكل المعقدة التي لا توجد حلول سهلة لها', fields: ['برمجة', 'قواعد بيانات', 'ذكاء اصطناعي'] },
            { text: 'الروتين والقيود على الإبداع والابتكار', fields: ['تصميم جرافيك', 'مونتاج', 'منشئ محتوى'] },
            { text: 'العمل بدون فهم واضح للأهداف والرؤية', fields: ['مدير مشاريع', 'إدارة أعمال', 'سلسلة التوريد'] },
            { text: 'العمل اليدوي المتكرر بدون تنويع', fields: ['إدخال بيانات', 'مساعد افتراضي', 'سلسلة التوريد'] }
        ]
    },
    {
        question: 'إذا أردت تعلم مهارة جديدة، كيف تفضل التعلم؟',
        answers: [
            { text: 'من خلال التطبيق العملي والتجربة المباشرة', fields: ['برمجة', 'مطور برمجيات', 'ذكاء اصطناعي'] },
            { text: 'من خلال الدورات البصرية والفيديوهات التعليمية', fields: ['تصميم جرافيك', 'مونتاج', 'مصمم واجهات'] },
            { text: 'من خلال الدراسة النظرية والكتب والمقالات', fields: ['محلل بيانات', 'قواعد بيانات', 'تسويق رقمي'] },
            { text: 'من خلال التدريب المباشر من أشخاص ذوي خبرة', fields: ['مدير مشاريع', 'مساعد افتراضي', 'إدارة أعمال'] }
        ]
    },
    {
        question: 'كيف تتعامل مع الضغط والمواعيد النهائية الضيقة؟',
        answers: [
            { text: 'أركز وأعمل بسرعة مع الحفاظ على الجودة', fields: ['برمجة', 'مطور برمجيات', 'قواعد بيانات'] },
            { text: 'أبحث عن حل إبداعي وجديد للمشكلة', fields: ['تصميم جرافيك', 'مونتاج', 'منشئ محتوى'] },
            { text: 'أحلل الوضع وأتخذ قرار منطقي سريع', fields: ['محلل بيانات', 'ذكاء اصطناعي', 'تسويق رقمي'] },
            { text: 'أنظم الفريق وأعيد تخصيص الموارد', fields: ['مدير مشاريع', 'إدارة أعمال', 'سلسلة التوريد'] }
        ]
    },
    {
        question: 'ما المجال الذي تشعر أن لديك موهبة طبيعية فيه؟',
        answers: [
            { text: 'التعامل مع الحواسيب والتقنيات بسهولة', fields: ['برمجة', 'مطور برمجيات', 'إدخال بيانات'] },
            { text: 'التعبير الفني والإبداع البصري', fields: ['تصميم جرافيك', 'مونتاج', 'مصمم واجهات'] },
            { text: 'تحليل المعلومات واستخراج النتائج', fields: ['محلل بيانات', 'ذكاء اصطناعي', 'قواعد بيانات'] },
            { text: 'القيادة والتنظيم والتواصل مع الآخرين', fields: ['مدير مشاريع', 'إدارة أعمال', 'تسويق رقمي'] }
        ]
    },
    {
        question: 'ماذا تتوقع من الوظيفة المثالية بالنسبة لك؟',
        answers: [
            { text: 'تحديات تقنية وفرص التعلم المستمر', fields: ['برمجة', 'مطور برمجيات', 'ذكاء اصطناعي'] },
            { text: 'حرية الإبداع والتعبير عن الأفكار', fields: ['تصميم جرافيك', 'مونتاج', 'منشئ محتوى'] },
            { text: 'توازن بين العمل والراحة والاستقرار', fields: ['إدخال بيانات', 'مساعد افتراضي', 'قواعد بيانات'] },
            { text: 'فرص النمو الوظيفي والعائد المالي الجيد', fields: ['إدارة أعمال', 'تسويق رقمي', 'مدير مشاريع'] }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = {};

// تهيئة الدرجات
Object.keys(fields).forEach(field => {
    scores[field] = 0;
});

// عرض السؤال الأول عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('totalQuestions').textContent = questions.length;
    showQuestion();
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // تحديث رقم السؤال والتقدم
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // عرض نص السؤال
    document.getElementById('questionText').textContent = question.question;
    
    // إنشاء أزرار الإجابات
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.fields);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedFields) {
    // إضافة نقطة لكل مجال مرتبط بالإجابة
    selectedFields.forEach(field => {
        scores[field] += 1;
    });
    
    // الانتقال للسؤال التالي أو عرض النتائج
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // إخفاء شاشة الاختبار وإظهار النتائج
    document.getElementById('testScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');
    
    // ترتيب المجالات حسب الدرجات
    const sortedFields = Object.entries(scores)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .slice(0, 3);
    
    // عرض النتائج
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';
    
    sortedFields.forEach(([fieldName, score], index) => {
        const fieldData = fields[fieldName];
        const percentage = Math.round((score / questions.length) * 100);
        
        const card = document.createElement('div');
        card.className = 'result-card';
        
        let rankText = '';
        if (index === 0) rankText = '🥇 الخيار الأول';
        else if (index === 1) rankText = '🥈 الخيار الثاني';
        else rankText = '🥉 الخيار الثالث';
        
        card.innerHTML = `
            <div class="result-rank">${rankText}</div>
            <div class="result-title">${fieldData.title}</div>
            <div class="result-description">${fieldData.description}</div>
            <div class="result-score">التوافق: ${percentage}%</div>
            <div class="careers-list">
                <span class="careers-label">المسارات الوظيفية المتاحة:</span>
                <div class="careers-tags">
                    ${fieldData.careers.map(career => `<span class="career-tag">${career}</span>`).join('')}
                </div>
            </div>
        `;
        
        resultsContainer.appendChild(card);
    });
}

function resetTest() {
    // إعادة تعيين المتغيرات
    currentQuestionIndex = 0;
    Object.keys(scores).forEach(field => {
        scores[field] = 0;
    });
    
    // العودة لشاشة الاختبار
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('testScreen').classList.add('active');
    
    showQuestion();
}
