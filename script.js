document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. Translation Dictionary (Arabic & English)
    // ==========================================
    const translations = {
        ar: {
            "nav-home": "الرئيسية",
            "nav-about": "عن الأكاديمية",
            "nav-results": "قصص النجاح",
            "nav-packages": "الكورسات",
            "nav-compare": "مقارنة الكورسات",
            "nav-faq": "الأسئلة الشائعة",
            "nav-contact": "تواصل معنا",
            "hero-title": "اتكلم إنجليزي بثقة، وافتح أبواب العالم <br><span>ابدأ رحلتك الحقيقية في تعلم اللغة الإنجليزية!</span>",
            "hero-desc": "تدريب أونلاين مخصص بنسبة 100% ليك. مش مجرد كورس وكلمات.. ده نظام تعليمي مرن هيوصلك لأقوى نسخة من نفسك في اللغة الإنجليزية بأسرع وقت وبدون صعوبة.",
            "hero-btn": "احجز مكانك وابدأ رحلتك الآن",
            "about-title": "من هو المدرس؟",
            "about-p1": "مدرس لغة إنجليزية معتمد دولياً (CELTA/TEFL) مع خبرة أكتر من 8 سنين في تعليم اللغة الإنجليزية لطلاب من مختلف الجنسيات والمستويات. هدفي مش بس إني أديك كلمات وجمل، هدفي هو إني أعلمك إزاي تفكر بالإنجليزي وتتكلم بطلاقة وثقة. على مدار السنين اللي فاتت، ساعدت أكتر من [500+] طالب وطالبة يتخطوا حاجز الخوف ويتكلموا الإنجليزي بثقة، سواء للسفر أو الدراسة أو العمل. نظامي مبني على أسس علمية ومرونة تامة تناسب يومك وشغلك.",
            "about-p2": "هدفنا مش مجرد دروس مؤقتة، هدفنا تكتسب مهارة حياتية، وتفهم اللغة وتستخدمها بشكل طبيعي عشان تفتح لنفسك أبواب جديدة في حياتك المهنية والشخصية.",
            "results-title": "مش مجرد كلام.. دي قصص نجاح طلابنا!",
            "r1-title": "تحول من الصفر للمحادثة في 3 شهور",
            "r1-desc": "طالب بدأ من الصفر وقدر يتكلم إنجليزي بثقة في اجتماعات العمل.",
            "r2-title": "نجاح في اختبار IELTS بدرجة 7.5",
            "r2-desc": "طالبة حققت درجة عالية في الايلتس بعد 4 شهور من التحضير المكثف.",
            "r3-title": "تغيير شامل في المستوى الوظيفي",
            "r3-desc": "موظف قدر يحصل على ترقية بعد ما اتقن اللغة الإنجليزية وقدر يتواصل مع العملاء الأجانب.",
            "r4-title": "قبول في جامعة دولية",
            "r4-desc": "طالب حقق درجة TOEFL 100+ وقدر يقدم على منحة دراسية في جامعة بريطانية.",
            "r5-title": "التحدث بطلاقة في رحلة السفر",
            "r5-desc": "طالبة قدرت تسافر لوحدها وتتعامل مع كل المواقف بالإنجليزي بثقة تامة.",
            "r6-title": "تأسيس قوي للأطفال",
            "r6-desc": "طفل عمره 8 سنين قدر يتكلم إنجليزي بشكل طبيعي ويحصل على تقدير ممتاز في المدرسة.",
            "r7-title": "إتقان اللغة للأعمال الحرة",
            "r7-desc": "مستقل (Freelancer) قدر يجذب عملاء دوليين بعد ما حسّن لغته الإنجليزية بشكل ملحوظ.",
            "packages-title": "اختر الكورس (Choose Your Plan)",
            "p1-sub": "(كورس تأسيسي + موارد تعليمية)",
            "p1-price": "Self-Paced (ذاتي)",
            "p1-f1": "دروس تأسيسية في القواعد والمفردات والنطق",
            "p1-f2": "فيديوهات مسجلة لكل درس بجودة عالية",
            "p1-f3": "كتاب إلكتروني شامل (Grammar - Vocabulary - Conversation)",
            "p1-f4": "تمارين تفاعلية واختبارات ذاتية",
            "p1-f5": "دخول مجتمع الطلاب للمناقشة والممارسة",
            "p1-f6": "تحديثات مجانية على المحتوى",
            "p1-btn": "اشترك الآن",
            "p2-sub": "(متابعة شخصية لمدة شهر)",
            "p2-price": "اشتراك شهر واحد",
            "p2-f1": "4 حصص أونلاين مباشرة أسبوعياً (16 حصة/شهر)",
            "p2-f2": "خطة تعليمية مخصصة حسب مستواك وهدفك",
            "p2-f3": "تصحيح تفاعلي للأخطاء وتحسين النطق",
            "p2-f4": "واجبات وتمارين مخصصة بعد كل حصة",
            "p2-f5": "دعم وتواصل مباشر على الواتساب والرد خلال 24 ساعة",
            "p2-btn": "اشترك الآن",
            "p3-badge": "الأكثر مبيعاً",
            "p3-sub": "(متابعة شخصية لمدة 3 شهور)",
            "p3-price": "اشتراك 3 شهور",
            "p3-f1": "4 حصص أونلاين مباشرة أسبوعياً (48 حصة/3 شهور)",
            "p3-f2": "خطة تعليمية مخصصة حسب مستواك وهدفك",
            "p3-f3": "تقرير شهاري مفصل عن تقدمك ونقاط القوة والضعف",
            "p3-f4": "الأفضل للوصول لنتيجة وتحول حقيقي في مستوى اللغة",
            "p3-f5": "أولوية الدعم والرد السريع على الواتساب",
            "p3-btn": "اشترك ووفر الآن",
            "p4-sub": "(متابعة شخصية لمدة 6 شهور)",
            "p4-price": "اشتراك 6 شهور",
            "p4-f1": "4 حصص أونلاين مباشرة أسبوعياً (96 حصة/6 شهور)",
            "p4-f2": "خطة تعليمية متكاملة من المستوى المبتدئ للمتقدم",
            "p4-f3": "تحضير كامل لاختبارات IELTS أو TOEFL",
            "p4-f4": "جلسات محادثة إضافية مع متحدثين أصليين",
            "p4-f5": "شهادة إتمام معتمدة بعد كل مستوى",
            "p4-f6": "دعم مباشر على الواتساب 24/7",
            "p4-btn": "اشترك الآن",
            "p5-badge": "العرض الأقوى والأوفر 🔥",
            "p5-sub": "(متابعة شخصية لمدة سنة كاملة)",
            "p5-price": "اشتراك سنة كاملة",
            "p5-f1": "4 حصص أونلاين مباشرة أسبوعياً (192 حصة/سنة)",
            "p5-f2": "رحلة كاملة من الصفر للإتقان (A1 إلى C1)",
            "p5-f3": "تحضير احترافي لاختبارات IELTS و TOEFL",
            "p5-f4": "جلسات محادثة أسبوعية مع متحدثين أصليين",
            "p5-f5": "شهادات معتمدة دولية بعد كل مستوى",
            "p5-f6": "دعم مباشر على الواتساب 24/7",
            "p5-f7": "خصم حصري 40% على السعر الكلي",
            "p5-btn": "اشترك السنة كلها ووفر",
            "compare-title": "مقارنة شاملة بين الكورسات (Compare)",
            "th-f": "الميزة (Feature)",
            "th-p1": "English BASIC (شهر)",
            "th-p2": "English PLUS (3 شهور)",
            "th-p3": "English PRO (6 شهور)",
            "th-p4": "English MASTER (سنة) 🔥",
            "td-r1": "نوع البرنامج",
            "td-r1-v1": "دروس مسجلة + موارد تعليمية",
            "td-r1-v2": "متابعة شخصية مخصصة",
            "td-r1-v3": "متابعة شخصية مخصصة",
            "td-r1-v4": "متابعة شخصية مخصصة",
            "td-r1-v5": "متابعة شخصية مخصصة",
            "td-r2": "حصص أونلاين مباشرة",
            "td-r2-v1": "✗ (فيديوهات مسجلة)",
            "td-r2-v2": "✓ (16 حصة/شهر)",
            "td-r2-v3": "✓ (48 حصة/3 شهور)",
            "td-r2-v4": "✓ (96 حصة/6 شهور)",
            "td-r2-v5": "✓ (192 حصة/سنة)",
            "td-r3": "تعديل الخطة والمتابعة",
            "td-r3-v1": "✗",
            "td-r3-v2": "✓ (أسبوعياً)",
            "td-r3-v3": "✓ (أسبوعياً)",
            "td-r3-v4": "✓ (أسبوعياً)",
            "td-r3-v5": "✓ (أسبوعياً + تقارير شهرية)",
            "td-r4": "تصحيح النطق والمحادثة",
            "td-r4-v1": "✗ (فيديوهات جاهزة)",
            "td-r4-v2": "✓ (مباشر)",
            "td-r4-v3": "✓ (مباشر)",
            "td-r4-v4": "✓ (مباشر + متحدثين أصليين)",
            "td-r4-v5": "✓ (مباشر + متحدثين أصليين أسبوعياً)",
            "td-r5": "الدعم والرد على واتساب",
            "td-r5-v1": "مجتمع الطلاب",
            "td-r5-v2": "دعم مباشر (24 ساعة)",
            "td-r5-v3": "أولوية في الدعم",
            "td-r5-v4": "دعم 24/7",
            "td-r5-v5": "دعم 24/7 + أولوية قصوى",
            "td-r6": "تقارير التقدم",
            "td-r6-v1": "اختبارات ذاتية",
            "td-r6-v2": "متابعة مستمرة",
            "td-r6-v3": "تقارير شهرية",
            "td-r6-v4": "تقارير شهرية مفصلة",
            "td-r6-v5": "تقارير شهرية + خطة تطوير",
            "td-r7": "تكلفة الاشتراك",
            "td-r7-v1": "400 جنيه (مرة واحدة)",
            "td-r7-v2": "800 جنيه/شهر",
            "td-r7-v3": "2000 جنيه (3 شهور)",
            "td-r7-v4": "3500 جنيه (6 شهور)",
            "td-r7-v5": "6000 جنيه (سنة - خصم 40%)",
            "faq-title": "الأسئلة الشائعة (FAQ)",
            "contact-title": "تواصل معنا"
            // داخل قسم ar:
            "nav-auth-login": "👤 تسجيل الدخول",
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Academy",
            "nav-results": "Success Stories",
            "nav-packages": "Courses",
            "nav-compare": "Course Comparison",
            "nav-faq": "FAQ",
            "nav-contact": "Contact Us",
            "hero-title": "Speak English with Confidence, Open the World's Doors <br><span>Start Your Real Journey in Learning English!</span>",
            "hero-desc": "100% customized online training for you. Not just a course and words... it's a flexible educational system that will get you to the strongest version of yourself in English in the fastest time and without difficulty.",
            "hero-btn": "Book Your Spot & Start Now",
            "about-title": "Who is the Teacher?",
            "about-p1": "An internationally certified English teacher (CELTA/TEFL) with over 8 years of experience teaching English to students of different nationalities and levels. My goal is not just to give you words and sentences, but to teach you how to think in English and speak fluently and confidently. Over the past years, I have helped over [500+] students overcome the fear barrier and speak English confidently, whether for travel, study, or work. My system is based on scientific foundations and complete flexibility to fit your day and work.",
            "about-p2": "Our goal is not just temporary lessons, our goal is for you to acquire a life skill, understand the language, and use it naturally to open new doors in your professional and personal life.",
            "results-title": "Not Just Words... These are Our Students' Success Stories!",
            "r1-title": "From Zero to Conversation in 3 Months",
            "r1-desc": "A student started from scratch and was able to speak English confidently in work meetings.",
            "r2-title": "IELTS Success with Score 7.5",
            "r2-desc": "A student achieved a high score in IELTS after 4 months of intensive preparation.",
            "r3-title": "Complete Career Level Change",
            "r3-desc": "An employee got promoted after mastering English and being able to communicate with foreign clients.",
            "r4-title": "Accepted into an International University",
            "r4-desc": "A student achieved TOEFL 100+ and was able to apply for a scholarship at a British university.",
            "r5-title": "Fluent Speaking During Travel",
            "r5-desc": "A student was able to travel alone and handle all situations in English with complete confidence.",
            "r6-title": "Strong Foundation for Children",
            "r6-desc": "An 8-year-old child was able to speak English naturally and got an excellent grade at school.",
            "r7-title": "Language Mastery for Freelancing",
            "r7-desc": "A freelancer was able to attract international clients after significantly improving his English.",
            "packages-title": "Choose Your Course",
            "p1-sub": "(Foundation Course + Educational Resources)",
            "p1-price": "Self-Paced",
            "p1-f1": "Foundation lessons in grammar, vocabulary, and pronunciation",
            "p1-f2": "High-quality recorded videos for every lesson",
            "p1-f3": "Comprehensive e-book (Grammar - Vocabulary - Conversation)",
            "p1-f4": "Interactive exercises and self-assessment tests",
            "p1-f5": "Access to student community for discussion and practice",
            "p1-f6": "Free content updates",
            "p1-btn": "Subscribe Now",
            "p2-sub": "(Personal Coaching for 1 Month)",
            "p2-price": "1-Month Subscription",
            "p2-f1": "4 live online sessions per week (16 sessions/month)",
            "p2-f2": "Customized learning plan based on your level and goal",
            "p2-f3": "Interactive error correction and pronunciation improvement",
            "p2-f4": "Custom homework and exercises after each session",
            "p2-f5": "Direct support and chat via WhatsApp with response within 24 hours",
            "p2-btn": "Subscribe Now",
            "p3-badge": "Most Popular",
            "p3-sub": "(Personal Coaching for 3 Months)",
            "p3-price": "3-Months Subscription",
            "p3-f1": "4 live online sessions per week (48 sessions/3 months)",
            "p3-f2": "Customized learning plan based on your level and goal",
            "p3-f3": "Detailed monthly progress report with strengths and weaknesses",
            "p3-f4": "Best for achieving real results and transformation in language level",
            "p3-f5": "Priority support and fast replies on WhatsApp",
            "p3-btn": "Subscribe & Save Now",
            "p4-sub": "(Personal Coaching for 6 Months)",
            "p4-price": "6-Months Subscription",
            "p4-f1": "4 live online sessions per week (96 sessions/6 months)",
            "p4-f2": "Comprehensive learning plan from beginner to advanced level",
            "p4-f3": "Full preparation for IELTS or TOEFL exams",
            "p4-f4": "Additional conversation sessions with native speakers",
            "p4-f5": "Accredited completion certificate after each level",
            "p4-f6": "Direct support on WhatsApp 24/7",
            "p4-btn": "Subscribe Now",
            "p5-badge": "Best Value Offer 🔥",
            "p5-sub": "(Personal Coaching for 1 Full Year)",
            "p5-price": "1-Year Subscription",
            "p5-f1": "4 live online sessions per week (192 sessions/year)",
            "p5-f2": "Complete journey from zero to mastery (A1 to C1)",
            "p5-f3": "Professional preparation for IELTS and TOEFL exams",
            "p5-f4": "Weekly conversation sessions with native speakers",
            "p5-f5": "Internationally accredited certificates after each level",
            "p5-f6": "Direct support on WhatsApp 24/7",
            "p5-f7": "Exclusive 40% discount on total price",
            "p5-btn": "Subscribe for the Whole Year & Save",
            "compare-title": "Comprehensive Course Comparison",
            "th-f": "Feature",
            "th-p1": "English BASIC (1 Month)",
            "th-p2": "English PLUS (3 Months)",
            "th-p3": "English PRO (6 Months)",
            "th-p4": "English MASTER (1 Year) 🔥",
            "td-r1": "Program Type",
            "td-r1-v1": "Recorded lessons + Educational resources",
            "td-r1-v2": "Customized personal coaching",
            "td-r1-v3": "Customized personal coaching",
            "td-r1-v4": "Customized personal coaching",
            "td-r1-v5": "Customized personal coaching",
            "td-r2": "Live Online Sessions",
            "td-r2-v1": "✗ (Recorded videos)",
            "td-r2-v2": "✓ (16 sessions/month)",
            "td-r2-v3": "✓ (48 sessions/3 months)",
            "td-r2-v4": "✓ (96 sessions/6 months)",
            "td-r2-v5": "✓ (192 sessions/year)",
            "td-r3": "Plan Updates & Follow-up",
            "td-r3-v1": "✗",
            "td-r3-v2": "✓ (Weekly)",
            "td-r3-v3": "✓ (Weekly)",
            "td-r3-v4": "✓ (Weekly)",
            "td-r3-v5": "✓ (Weekly + Monthly reports)",
            "td-r4": "Pronunciation & Conversation Correction",
            "td-r4-v1": "✗ (Ready videos)",
            "td-r4-v2": "✓ (Live)",
            "td-r4-v3": "✓ (Live)",
            "td-r4-v4": "✓ (Live + Native speakers)",
            "td-r4-v5": "✓ (Live + Weekly native speakers)",
            "td-r5": "WhatsApp Support & Reply",
            "td-r5-v1": "Student community",
            "td-r5-v2": "Direct support (24 hours)",
            "td-r5-v3": "Priority support",
            "td-r5-v4": "24/7 support",
            "td-r5-v5": "24/7 + Top priority",
            "td-r6": "Progress Reports",
            "td-r6-v1": "Self-assessment tests",
            "td-r6-v2": "Continuous follow-up",
            "td-r6-v3": "Monthly reports",
            "td-r6-v4": "Detailed monthly reports",
            "td-r6-v5": "Monthly reports + Development plan",
            "td-r7": "Subscription Cost",
            "td-r7-v1": "400 EGP (One-time)",
            "td-r7-v2": "800 EGP/month",
            "td-r7-v3": "2000 EGP (3 months)",
            "td-r7-v4": "3500 EGP (6 months)",
            "td-r7-v5": "6000 EGP (Year - 40% off)",
            "faq-title": "Frequently Asked Questions (FAQ)",
            "contact-title": "Contact Us"
    // داخل قسم en:
            "nav-auth-login": "👤 Login",
        }
    };

    // ==========================================
    // 2. Language Toggle
    // ==========================================
    const langToggleBtn = document.getElementById("lang-toggle");
    let currentLang = "ar";

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        document.documentElement.setAttribute("lang", lang);

        if (langToggleBtn) {
            langToggleBtn.textContent = "🌐";
        }

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const nextLang = currentLang === "ar" ? "en" : "ar";
            setLanguage(nextLang);
        });
    }

    setLanguage("ar");

    // ==========================================
    // 3. Hamburger Menu (Mobile Navigation)
    // ==========================================
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");
    const navOverlay = document.getElementById("nav-overlay");

    function toggleMenu() {
        hamburgerBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
        if (navOverlay) navOverlay.classList.toggle("active");

        const isExpanded = hamburgerBtn.classList.contains("active");
        hamburgerBtn.setAttribute("aria-expanded", isExpanded);
        document.body.style.overflow = isExpanded ? "hidden" : "";
    }

    function closeMenu() {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
        if (navOverlay) navOverlay.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        if (navOverlay) {
            navOverlay.addEventListener("click", closeMenu);
        }

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navLinks.classList.contains("active")) {
                closeMenu();
            }
        });

        document.addEventListener("click", (e) => {
            if (navLinks.classList.contains("active") && 
                !navLinks.contains(e.target) && 
                !hamburgerBtn.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // ==========================================
    // 4. Auto-close mobile menu on resize
    // ==========================================
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
                closeMenu();
            }
        }, 250);
    });

    // ==========================================
    // 5. Image Sliders
    // ==========================================
    function setupSlider(sliderId, slideClass, dotClass) {
        const sliderWrapper = document.getElementById(sliderId);
        if (!sliderWrapper) return;

        const slides = sliderWrapper.querySelectorAll("." + slideClass);
        const prevBtn = sliderWrapper.querySelector(".slider-btn.prev");
        const nextBtn = sliderWrapper.querySelector(".slider-btn.next");
        const dots = sliderWrapper.querySelectorAll("." + dotClass);

        let currentIndex = 0;

        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.classList.toggle("active", index === currentIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Auto-play every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }, 5000);

        updateSlider();
    }

    setupSlider("coach-slider", "coach-slide", "coach-dot");
    setupSlider("results-slider", "results-slide", "dot");

    // ==========================================
    // 6. FAQ Accordion
    // ==========================================
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (!question) return;

        question.addEventListener("click", function() {
            const isActive = item.classList.contains("active");

            // Close all items
            faqItems.forEach(i => {
                i.classList.remove("active");
                const icon = i.querySelector(".faq-icon");
                if (icon) icon.textContent = "+";
            });

            // Open clicked item if it was closed
            if (!isActive) {
                item.classList.add("active");
                const icon = item.querySelector(".faq-icon");
                if (icon) icon.textContent = "−";
            }
        });
    });

    // ==========================================
    // 7. EmailJS Initialization
    // ==========================================
    if (typeof emailjs !== "undefined") {
        emailjs.init("0_7B31AMGYicwz8oo");
    }

    // ==========================================
    // 8. Payment Modal & Logic
    // ==========================================
    const payButtons = document.querySelectorAll(".pay-btn");
    const modal = document.getElementById("customModal");
    let activePackage = null;

    if (payButtons.length > 0 && modal) {
        payButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                activePackage = {
                    button: button,
                    amount: button.getAttribute("data-amount"),
                    packageName: button.getAttribute("data-name"),
                    originalText: button.innerHTML
                };

                // Clear fields
                const nameInput = document.getElementById("modalNameInput");
                const emailInput = document.getElementById("modalEmailInput");
                const phoneInput = document.getElementById("modalPhoneInput");
                if (nameInput) nameInput.value = "";
                if (emailInput) emailInput.value = "";
                if (phoneInput) phoneInput.value = "";

                modal.style.display = "flex";
            });
        });

        const cancelBtn = document.getElementById("cancelBtn");
        if (cancelBtn) {
            cancelBtn.addEventListener("click", () => {
                modal.style.display = "none";
                activePackage = null;
            });
        }

        const confirmBtn = document.getElementById("confirmBtn");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", async function() {
                if (!activePackage) return;

                const customerName = document.getElementById("modalNameInput").value.trim();
                const customerEmail = document.getElementById("modalEmailInput").value.trim();
                const customerPhone = document.getElementById("modalPhoneInput").value.trim();

                if (!customerName || !customerEmail || !customerPhone) {
                    alert(currentLang === "ar" ? "برجاء ملء جميع البيانات!" : "Please fill in all fields!");
                    return;
                }

                const { button, amount, packageName, originalText } = activePackage;

                modal.style.display = "none";
                button.innerHTML = currentLang === "ar" ? "جاري التحضير..." : "Preparing...";
                button.style.pointerEvents = "none";

                const randomOrderId = "ORD-" + Math.floor(Math.random() * 1000000);

                // Send email
                try {
                    if (typeof emailjs !== "undefined") {
                        await emailjs.send("service_ytib5o9", "template_kn4wvo3", {
                            customer_name: customerName,
                            customer_phone: customerPhone,
                            customer_email: customerEmail,
                            amount: amount,
                            status: currentLang === "ar" ? "طلب جديد في انتظار الدفع" : "New order awaiting payment",
                            order_id: randomOrderId
                        });
                    }
                } catch (err) {
                    console.error("Email send failed:", err);
                }

                // Process payment
                try {
                    const response = await fetch("/api/checkout", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            amount: parseInt(amount),
                            package_name: packageName,
                            name: customerName,
                            email: customerEmail,
                            phone: customerPhone
                        })
                    });
                    const data = await response.json();

                    if (data.success && data.payment_url) {
                        window.location.href = data.payment_url;
                    } else {
                        alert(currentLang === "ar" ? "خطأ: " + (data.message || "حاول مرة أخرى") : "Error: " + (data.message || "Please try again"));
                        button.innerHTML = originalText;
                        button.style.pointerEvents = "auto";
                    }
                } catch (error) {
                    alert(currentLang === "ar" ? "خطأ في الاتصال بالسيرفر" : "Server connection error");
                    button.innerHTML = originalText;
                    button.style.pointerEvents = "auto";
                }
            });
        }
    }

    // ==========================================
    // 9. Check Payment Status on Return
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
        const successMsg = document.getElementById("success-message");
        if (successMsg) successMsg.style.display = "block";
        setTimeout(() => { window.location.href = "index.html"; }, 3000);
    } else if (urlParams.get("success") === "false") {
        const errorMsg = document.getElementById("error-message");
        if (errorMsg) errorMsg.style.display = "block";
        setTimeout(() => { window.location.href = "index.html"; }, 4000);
    }
});
