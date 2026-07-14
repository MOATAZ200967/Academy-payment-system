document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. قاموس الترجمة الكامل (Arabic & English)
    // ==========================================
    const translations = {
        ar: {
            "nav-home": "الرئيسية",
            "nav-about": "عن الكوتش",
            "nav-results": "النتائج",
            "nav-packages": "الباقات",
            "nav-compare": "مقارنة الباقات",
            "nav-faq": "الأسئلة الشائعة",
            "nav-contact": "تواصل معنا",
            "hero-title": "اضبط فورمتك، غيّر حياتك <br><span>وابدأ رحلة التحول الحقيقي!</span>",
            "hero-desc": "تدريب أونلاين مخصص بنسبة 100% لجسمك وهدفك. مش مجرد دايت وجدول تمارين.. ده نظام حياة مرن هيوصلك لأقوى نسخة من نفسك بأسرع وقت وبدون حرمان.",
            "hero-btn": "احجز مكانك وابدأ رحلتك الآن",
            "about-title": "من هو الكوتش؟",
            "about-p1": "مدرب شخصي وأخصائي تغذية معتمد. هدفى مش بس إني أديك جدول تمشي عليه، هدفى هو إني أعلمك إزاي تفهم جسمك وتتحكم في أسلوب حياتك. على مدار السنوات اللي فاتت، ساعدت أكتر من [100+] بطل وبطلة يغيروا شكل جسمهم ويستعيدوا ثقتهم بنفسهم، سواء من خلال خسارة الدهون العندة أو بناء الكتلة العضلية النظيفة. نظامي مبني على أسس علمية ومرونة تامة تناسب يومك وشغلك.",
            "about-p2": "هدفنا مش مجرد فورمة مؤقتة، هدفنا تكتسب أسلوب حياة صحي، وتفهم جسمك وجيناتك عشان تحافظ على نتيجتك مدى الحياة.",
            "results-title": "مش مجرد كلام.. دي نتائج الأبطال!",
            "r1-title": "تحول وحش الجيم في 12 أسبوع",
            "r1-desc": "بناء عضلي ونزول دهون في وقت قياسي.",
            "r2-title": "نحت الجسم بذكاء",
            "r2-desc": "الوصول لأقل نسبة دهون مع الحفاظ على القوة البدنية.",
            "r3-title": "تغيير شامل في نمط الحياة",
            "r3-desc": "التزام بالجرامات والتكنيك العلمي أدى لهذه النتيجة.",
            "r4-title": "تفجير التنشيف وإبراز العضلات",
            "r4-desc": "خسارة دهون عنيدة مع الحفاظ على كامل الكتلة العضلية وقوة الأداء بفضل \"المكروز\" الدقيق.",
            "r5-title": "رحلة البناء والضخامة الصافية",
            "r5-desc": "زيادة كتلة الجسم العضلية بدون كسب دهون زائدة، وتطوير خارق في أوزان وقوة التمرين.",
            "r6-title": "نحت الجسم وإعادة التشكيل",
            "r6-desc": "حرق الدهون وبناء العضل في نفس الوقت؛ تغيير شامل في المقاسات وتناسق الفيكتور.",
            "r7-title": "ملحمة الالتزام والتحول الشامل",
            "r7-desc": "إرادة حديدية حولت نمط الحياة بالكامل؛ النتيجة المثالية لتطبيق العلم والجرامات على مدار 16 أسبوع.",
            "packages-title": "اختر باقتك (Choose Your Plan)",
            "p1-sub": "(برامج جاهزة + كتاب تعليمي كامل)",
            "p1-price": "مدى الحياة (Lifetime)",
            "p1-f1": "جداول تدريبية 4 أو 5 أيام حسب تفضيلاتك",
            "p1-f2": "نظام تدريبي مخصص للقوة والزيادة العضلية",
            "p1-f3": "فيديو لكل تمرين يشرح التكنيك الصحيح بدقة",
            "p1-f4": "كتاب مجاني (Nutrition - Kinesiology - Program Design)",
            "p1-f5": "كل صفحة في الكتاب ليها فيديو منفصل يشرحها",
            "p1-f6": "دخول مجتمع Gym للرد على الأسئلة والتطوير المستمر",
            "p1-btn": "اشترك مدى الحياة",
            "p2-sub": "(متابعة شخصية وتجهيز كامل لمدة 30 يوم)",
            "p2-price": "اشتراك شهر واحد",
            "p2-f1": "خطة تغذية مرنة مخصصة بالكامل بدون حرمان",
            "p2-f2": "برنامج تدريبي مخصص لمستواك مع نظام زيادة الأحمال",
            "p2-f3": "متابعة وتعديل أسبوعي على الأنظمة حسب تطور جسمك",
            "p2-f4": "مراجعة الوزن والأداء الرياضي لمنع ثبات النتائج",
            "p2-f5": "دعم وتواصل مباشر على الواتساب والرد خلال 24 ساعة",
            "p2-btn": "اشترك الآن",
            "p3-badge": "العرض الأقوى والأوفر",
            "p3-sub": "(الالتزام الكامل للتحول الشامل - توفير في السعر)",
            "p3-price": "اشتراك 3 شهور",
            "p3-f1": "نفس ميزات المتابعة الشخصية بالكامل لمدة 90 يوم",
            "p3-f2": "خصم خاص وحصري على إجمالي سعر الثلاث شهور",
            "p3-f3": "ضمان استمرارية وتعديل الخطط على المدى الطويل",
            "p3-f4": "الأفضل للوصول لنتيجة وتحول حقيقي في شكل الجسم",
            "p3-f5": "أولوية الدعم والرد السريع على الواتساب",
            "p3-btn": "اشترك ووفر الآن",
            "compare-title": "مقارنة شاملة بين البرامج (Compare)",
            "th-f": "الميزة (Feature)",
            "th-p1": "COACHING (شهر)",
            "th-p2": "COACHING (3 شهور) 🔥",
            "td-r1": "نوع البرنامج",
            "td-r1-v1": "برامج جاهزة + كتاب تعليمي",
            "td-r1-v2": "متابعة شخصية مخصصة",
            "td-r1-v3": "متابعة شخصية مخصصة",
            "td-r2": "خطة التغذية والسعرات",
            "td-r2-v1": "(شرح في الكتاب)",
            "td-r2-v2": "(نظام مرن بالكامل)",
            "td-r2-v3": "(نظام مرن بالكامل)",
            "td-r3": "تعديل الخطة والمتابعة",
            "td-r3-v2": "(أسبوعياً حسب التطور)",
            "td-r3-v3": "(أسبوعياً حسب التطور)",
            "td-r4": "تصحيح أخطاء الأداء (Form)",
            "td-r4-v1": "(فيديوهات جاهزة)",
            "td-r4-v2": "(بشكل مستمر بالفيديو)",
            "td-r4-v3": "(بشكل مستمر بالفيديو)",
            "td-r5": "الدعم والرد على واتساب",
            "td-r5-v1": "مجتمع Gym للأسئلة",
            "td-r5-v2": "دعم مباشر (خلال 24 ساعة)",
            "td-r5-v3": "أولوية قصوى في الدعم",
            "td-r6": "الاستمرارية وثبات الوزن",
            "td-r6-v1": "تعديل ذاتي من العميل",
            "td-r6-v2": "تحديث مستمر لمدة 30 يوم",
            "td-r6-v3": "تحديث مستمر وتطوير لـ 90 يوم",
            "td-r7": "تكلفة الاشتراك",
            "td-r7-v1": "يدفع مرة واحدة فقط",
            "td-r7-v2": "السعر الأساسي للشهر",
            "td-r7-v3": "أوفر بكتير (أفضل قيمة مادية)",
            "faq-title": "FAQ – Frequently Asked Questions / الأسئلة الشائعة",
            "contact-title": "تواصل معنا"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Coach",
            "nav-results": "Results",
            "nav-packages": "Packages",
            "nav-compare": "Comparison",
            "nav-faq": "FAQ",
            "nav-contact": "Contact Us",
            "hero-title": "Fix Your Form, Change Your Life <br><span>And Start the Real Transformation Journey!</span>",
            "hero-desc": "100% customized online training tailored to your body and goals. Not just a diet and a workout plan... it's a flexible lifestyle that gets you to the strongest version of yourself in record time without deprivation.",
            "hero-btn": "Book Your Spot & Start Now",
            "about-title": "Who is the Coach?",
            "about-p1": "A certified personal trainer and nutrition specialist. My goal isn't just to give you a schedule to follow, but to teach you how to understand your body and control your lifestyle. Over the past years, I have helped over [100+] champions transform their body shapes and regain their self-confidence, whether through losing stubborn fat or building clean muscle mass. My system is based on scientific foundations and complete flexibility to fit your day and work.",
            "about-p2": "Our goal is not just a temporary shape, our goal is for you to acquire a healthy lifestyle and understand your body and genetics to maintain your results for life.",
            "results-title": "Not Just Words... These are Champions' Results!",
            "r1-title": "Gym Beast Transformation in 12 Weeks",
            "r1-desc": "Muscle building and fat loss in record time.",
            "r2-title": "Smart Body Sculpting",
            "r2-desc": "Reaching the lowest fat percentage while maintaining physical strength.",
            "r3-title": "Comprehensive Lifestyle Change",
            "r3-desc": "Commitment to grams and scientific technique led to this result.",
            "r4-title": "Shredding Explosion & Muscle Definition",
            "r4-desc": "Losing stubborn fat while preserving entire muscle mass and performance strength thanks to precise macros.",
            "r5-title": "Clean Bulking & Muscle Mass Journey",
            "r5-desc": "Increasing clean muscle mass without gaining excess fat, and an extraordinary progression in workout weights and strength.",
            "r6-title": "Body Sculpting & Recomposition",
            "r6-desc": "Burning fat and building muscle simultaneously; a complete change in measurements and physics symmetry.",
            "r7-title": "The Saga of Commitment & Total Transformation",
            "r7-desc": "An iron will that completely transformed the lifestyle; the perfect outcome of applying science and macros over 16 weeks.",
            "packages-title": "Choose Your Plan",
            "p1-sub": "(Ready Programs + Complete Educational Book)",
            "p1-price": "Lifetime Access",
            "p1-f1": "4 or 5 days training routines based on your preference",
            "p1-f2": "Customized training program for strength and muscle gain",
            "p1-f3": "A video for every exercise explaining the correct form precisely",
            "p1-f4": "Free book (Nutrition - Kinesiology - Program Design)",
            "p1-f5": "Every page in the book has a dedicated video explanation",
            "p1-f6": "Access to Gym community for Q&A and continuous development",
            "p1-btn": "Get Lifetime Access",
            "p2-sub": "(Personal Coaching & Full Preparation for 30 Days)",
            "p2-price": "1-Month Subscription",
            "p2-f1": "100% customized flexible nutrition plan without deprivation",
            "p2-f2": "Customized training program tailored to your level with progressive overload",
            "p2-f3": "Weekly check-ins and plan updates based on your body progress",
            "p2-f4": "Weight and athletic performance review to prevent weight plateaus",
            "p2-f5": "Direct support and chat via WhatsApp with response within 24 hours",
            "p2-btn": "Subscribe Now",
            "p3-badge": "The Most Powerful & Value Offer",
            "p3-sub": "(Full Commitment for Total Transformation - Best Value)",
            "p3-price": "3-Months Subscription",
            "p3-f1": "All personal coaching features entirely for 90 days",
            "p3-f2": "Exclusive special discount on the total 3-month price",
            "p3-f3": "Guaranteed continuity and long-term adjustment of plans",
            "p3-f4": "The absolute best option to achieve a true body transformation",
            "p3-f5": "Priority support and fast replies on WhatsApp",
            "p3-btn": "Subscribe & Save Now",
            "compare-title": "Comprehensive Program Comparison",
            "th-f": "Feature",
            "th-p1": "COACHING (1 Month)",
            "th-p2": "COACHING (3 Months) 🔥",
            "td-r1": "Program Type",
            "td-r1-v1": "Ready programs + Educational book",
            "td-r1-v2": "Customized personal coaching",
            "td-r1-v3": "Customized personal coaching",
            "td-r2": "Nutrition & Calories Plan",
            "td-r2-v1": "✗ (Explained in the book)",
            "td-r2-v2": "✓ (Fully flexible system)",
            "td-r2-v3": "✓ (Fully flexible system)",
            "td-r4": "Form & Performance Correction",
            "td-r4-v1": "✗ (Ready videos)",
            "td-r4-v2": "✓ (Continuously via videos)",
            "td-r4-v3": "✓ (Continuously via videos)",
            "td-r5": "WhatsApp Support & Reply",
            "td-r5-v1": "Gym Community for Q&A",
            "td-r5-v2": "Direct support (within 24 hours)",
            "td-r5-v3": "Top priority in support",
            "td-r6": "Consistency & Weight Plateaus",
            "td-r6-v1": "Self-adjustment by client",
            "td-r6-v2": "Continuous updates for 30 days",
            "td-r6-v3": "Continuous updates and development for 90 days",
            "td-r7": "Subscription Cost",
            "td-r7-v1": "Paid only once",
            "td-r7-v2": "Base monthly price",
            "td-r7-v3": "Much cheaper (Best financial value)",
            "faq-title": "FAQ – Frequently Asked Questions",
            "contact-title": "Contact Us"
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
                    alert("برجاء ملء جميع البيانات!");
                    return;
                }

                const { button, amount, packageName, originalText } = activePackage;

                modal.style.display = "none";
                button.innerHTML = "جاري التحضير...";
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
                            status: "طلب جديد في انتظار الدفع",
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
                        alert("خطأ: " + (data.message || "حاول مرة أخرى"));
                        button.innerHTML = originalText;
                        button.style.pointerEvents = "auto";
                    }
                } catch (error) {
                    alert("خطأ في الاتصال بالسيرفر");
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
