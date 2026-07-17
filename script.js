document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. القاموس اللغوي (Translations)
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
            "contact-title": "تواصل معنا",
            "nav-auth-login": "👤 تسجيل الدخول"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Academy",
            "nav-results": "Success Stories",
            "nav-packages": "Courses",
            "nav-compare": "Course Comparison",
            "nav-faq": "FAQ",
            "nav-contact": "Contact Us",
            "hero-title": "Speak English with Confidence <br><span>Start Your Real Journey Now!</span>",
            "hero-desc": "100% customized online training. A flexible system that reaches the strongest version of yourself in the fastest time.",
            "hero-btn": "Book Your Spot Now",
            "nav-auth-login": "👤 Login",
            // ... (يمكنك إكمال باقي المفاتيح الإنجليزية هنا عند الحاجة)
        }
    };

    // ==========================================
    // 2. إدارة حالة تسجيل الدخول (Navbar Auth)
    // ==========================================
    function updateNavbarAuth() {
        const token = localStorage.getItem('auth_token');
        const name = localStorage.getItem('auth_name');
        const authBtn = document.getElementById('nav-auth-btn');

        if (authBtn) {
            if (token && name) {
                authBtn.textContent = `👤 ${name}`;
                authBtn.href = 'dashboard.html';
            } else {
                authBtn.textContent = currentLang === 'ar' ? '👤 تسجيل الدخول' : '👤 Login';
                authBtn.href = 'login.html';
            }
        }
    }

    // ==========================================
    // 3. تغيير اللغة (Language Toggle)
    // ==========================================
    const langToggleBtn = document.getElementById("lang-toggle");
    const langToggleMobile = document.getElementById("lang-toggle-mobile");
    let currentLang = localStorage.getItem('preferred_lang') || "ar";

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferred_lang', lang);
        document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        document.documentElement.setAttribute("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        updateNavbarAuth();
    }

    if (langToggleBtn) langToggleBtn.addEventListener("click", () => setLanguage(currentLang === "ar" ? "en" : "ar"));
    if (langToggleMobile) langToggleMobile.addEventListener("click", () => setLanguage(currentLang === "ar" ? "en" : "ar"));

    setLanguage(currentLang);

    // ==========================================
    // 4. القائمة الجانبية للموبايل (Mobile Menu)
    // ==========================================
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");
    const navOverlay = document.getElementById("nav-overlay");

    function toggleMenu() {
        const isOpening = !navLinks.classList.contains("active");
        hamburgerBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
        if (navOverlay) navOverlay.classList.toggle("active");
        document.body.style.overflow = isOpening ? "hidden" : "";
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", toggleMenu);
    if (navOverlay) navOverlay.addEventListener("click", toggleMenu);
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", toggleMenu));

    // ==========================================
    // 5. السلايدر (Sliders)
    // ==========================================
    function setupSlider(sliderId, slideClass, dotClass) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        const slides = slider.querySelectorAll("." + slideClass);
        const dots = slider.querySelectorAll("." + dotClass);
        let index = 0;

        function showSlide(n) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            index = (n + slides.length) % slides.length;
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        slider.querySelector('.next')?.addEventListener('click', () => showSlide(index + 1));
        slider.querySelector('.prev')?.addEventListener('click', () => showSlide(index - 1));
        dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));

        setInterval(() => showSlide(index + 1), 5000);
    }

    setupSlider("coach-slider", "coach-slide", "coach-dot");
    setupSlider("results-slider", "results-slide", "dot");

    // ==========================================
    // 6. الأسئلة الشائعة (FAQ)
    // ==========================================
    document.querySelectorAll(".faq-question").forEach(q => {
        q.addEventListener("click", () => {
            const item = q.parentElement;
            const isOpen = item.classList.contains("active");
            document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
            if (!isOpen) item.classList.add("active");
        });
    });

    // ==========================================
    // 7. منطق الدفع والمودال (Payment Modal)
    // ==========================================
    const modal = document.getElementById("customModal");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    let selectedPackage = null;

    document.querySelectorAll(".pay-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedPackage = {
                amount: btn.getAttribute("data-amount"),
                name: btn.getAttribute("data-name")
            };
            modal.style.display = "flex";
        });
    });

    if (cancelBtn) cancelBtn.addEventListener("click", () => modal.style.display = "none");

    if (confirmBtn) {
        confirmBtn.addEventListener("click", async () => {
            const name = document.getElementById("modalNameInput").value.trim();
            const email = document.getElementById("modalEmailInput").value.trim();
            const phone = document.getElementById("modalPhoneInput").value.trim();

            if (!name || !email || !phone) {
                alert(currentLang === 'ar' ? "يرجى ملء كافة البيانات" : "Please fill all fields");
                return;
            }

            confirmBtn.disabled = true;
            confirmBtn.textContent = "...";

            try {
                // إرسال البيانات للسيرفر (السيرفر سيتولى الدفع وإرسال إيميل Brevo)
                const res = await fetch("/api/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        customer_name: name,
                        customer_email: email,
                        customer_phone: phone,
                        package_name: selectedPackage.name,
                        amount: selectedPackage.amount
                    })
                });

                const data = await res.json();
                if (data.success && data.payment_url) {
                    window.location.href = data.payment_url;
                } else {
                    alert(data.error || "Error processing payment");
                }
            } catch (err) {
                alert("Connection error");
            } finally {
                confirmBtn.disabled = false;
                confirmBtn.textContent = currentLang === 'ar' ? "تأكيد" : "Confirm";
            }
        });
    }
});
