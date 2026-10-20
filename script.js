/* =========================================================
   Pamir Cola Group of Companies — shared script
   - Dark / light theme (remembered)
   - English / Dari language + RTL (remembered)
   - Mobile menu, back-to-top, scroll reveal
   - Product search + category filter
   - Contact form validation
   - Missing-image fallback
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- tiny helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  /* ---------- translations ---------- */
  var T = {
    en: {
      skip: "Skip to main content",
      menu: "Menu",
      navHome: "Home", navProducts: "Products", navBrands: "Brands", navAbout: "About Us",
      navVideos: "Videos", navContact: "Contact Us",
      themeDark: "Dark mode", themeLight: "Light mode",
      langBtn: "دری", langAria: "Switch language to Dari",
      themeAria: "Switch colour theme",

      titleIndex: "Pamir Cola Group of Companies — Juices, Dairy, Soft Drinks & Snacks",
      titleAbout: "About Us — Pamir Cola Group of Companies",
      titleVideos: "Videos — Pamir Cola Group of Companies",

      heroEyebrow: "Made in Afghanistan",
      heroTitle: "Pamir Cola Group of Companies",
      heroLead: "Afghanistan's leading producer of juices, dairy, soft drinks and snacks — enjoyed at home and exported worldwide.",
      ctaProducts: "Explore products", ctaVideos: "Watch videos",
      stat1: "Brands", stat2: "Locations", stat3: "Product lines",

      prodTitle: "We produce more than 60 brands locally and globally",
      prodLead: "Search by name or pick a category to find a product.",
      searchLabel: "Search products", searchPh: "Search: mango, cola, cheese…", clearSearch: "Clear search",
      filterLabel: "Product categories",
      fAll: "All", cDairy: "Dairy", cNectar: "Nectar", cPom: "Pomegranate", cEnergy: "Energy", cSoft: "Soft drinks", cChips: "Chips",
      gDairy: "Hi Dairy", gNectar: "Shafa Natural Nectar Drinks", gPom: "Shafa Pomegranate Drinks",
      gEnergy: "Energy Drinks", gSoft: "Soft Drinks & Water", gChips: "Havas Chips & Popcorn",
      count: "Showing {n} of {total} products",
      noResults: "No products match your search.", showAll: "Show all products",

      promo1Kicker: "Havas Chips!", promo1: "Share the love",
      promo2: "Everything starts with Hi Dairy!",
      brandsTitle: "Our Brands", brandsLead: "Trusted names from the Pamir Cola family.",

      fTag: "Juices, dairy, soft drinks and snacks from Afghanistan.",
      fSupport: "Customer support",
      fQuick: "Quick links", fCompany: "Company",
      fBranches: "Branches", fMission: "Mission", fVision: "Vision", fValues: "Values", fContact: "Contact form",
      fVisit: "Visit us",
      fAddress: "Herat, Afghanistan — Behzad #1, Behzad Street",
      fHours: "Open 7 days a week, from 10:00 am",
      fRights: "All rights reserved. Developed by Sherzad Oryakhil",
      toTop: "Back to top",

      aHeroTitle: "About Pamir Cola", aHeroLead: "Our story, our values and where to find us.",
      newsTitle: "Latest news", newsLead: "Highlights from across the Pamir Cola Group.",
      n1h: "Pamir Cola products in Kabul",
      n1p: "Pamir Cola is one of Afghanistan's leading makers of non-alcoholic drinks. We focus on high-quality products and produce more than 60 brands.",
      n2h: "Pamir Cola at Gulfood, Dubai",
      n2p: "Pamir Cola Group of Companies, Afghanistan's leading producer of juices, dairy and beverages, was proudly present at Gulfood in Dubai.",
      n3h: "Shafa Pomegranate — now in the USA",
      n3p: "Afghanistan's pomegranate juice is now available in the USA — a major milestone for Pamir Cola.",
      n4h: "Shafa juices in Europe",
      n4p: "Pamir Cola Group of Companies expands its horizons with Shafa juices and carbonated drinks in Europe.",
      missionH: "Our mission", missionP: "To make safe, good-tasting drinks, dairy and snacks that families in Afghanistan and around the world can enjoy every day.",
      visionH: "Our vision", visionP: "To be the most trusted Afghan food and beverage brand, carrying the quality of Afghanistan to every market.",
      valuesH: "Our values", valuesP: "Quality in every bottle, pride in local production, and respect for our customers and our people.",
      branchesTitle: "Our branches", branchesLead: "Visit one of our locations in Herat and Kabul.",
      b1h: "Central Office", b1a: "Behzad #1, Behzad Street, Herat, Afghanistan",
      b2h: "Herat Factory", b2a: "Second Faz, Third Shaqaiq, Industrial Zone, Herat, Afghanistan",
      b3h: "Kabul Factory", b3a: "Deh Sabz, Kabul, Afghanistan",
      directions: "Open in Maps",
      contactTitle: "Contact us", contactLead: "Share your ideas, recommendations or orders using this form, or reach us directly:",
      lName: "Your name", lEmail: "Email address", lPhone: "Phone", lMessage: "Message", optional: "(optional)",
      send: "Send message",
      formNote: "Sending opens your email app with the message ready to send to info@pamircola-co.com.",
      eName: "Please enter your name.",
      eEmail: "Please enter a valid email address, e.g. name@example.com.",
      ePhone: "Use only digits, spaces, + and - (7–15 digits).",
      eMsg: "Please write at least 10 characters.",
      formErrors: "Please fix the highlighted fields.",
      formOk: "Thank you! Your email app should now open. If it doesn't, write to info@pamircola-co.com.",

      vHeroTitle: "Videos", vHeroLead: "See our products and our journey. Press play on any video.",
      v1h: "Pamir Cola products", v1p: "A look at our range of drinks and products.",
      v2h: "Shafa across borders", v2p: "Spreading the splendor of the Shafa brand across borders.",
      v3h: "Hype Energy Drink", v3p: "Hype, the global energy drink, now in Afghanistan.",
      v4h: "Hi Dairy", v4p: "Everything starts with Hi Dairy.",
      noVideo: "Your browser cannot play this video."
    },

    fa: {
      skip: "رفتن به محتوای اصلی",
      menu: "منو",
      navHome: "صفحه اصلی", navProducts: "محصولات", navBrands: "برندها", navAbout: "درباره ما",
      navVideos: "ویدیوها", navContact: "تماس با ما",
      themeDark: "حالت تاریک", themeLight: "حالت روشن",
      langBtn: "English", langAria: "تغییر زبان به انگلیسی",
      themeAria: "تغییر تم رنگی",

      titleIndex: "گروپ کمپنی‌های پامیر کولا — نوشیدنی، لبنیات و تنقلات",
      titleAbout: "درباره ما — گروپ کمپنی‌های پامیر کولا",
      titleVideos: "ویدیوها — گروپ کمپنی‌های پامیر کولا",

      heroEyebrow: "ساخت افغانستان",
      heroTitle: "گروپ کمپنی‌های پامیر کولا",
      heroLead: "تولیدکننده پیشرو نوشیدنی‌ها، لبنیات و تنقلات در افغانستان — در داخل مصرف و به سراسر جهان صادر می‌شود.",
      ctaProducts: "دیدن محصولات", ctaVideos: "تماشای ویدیوها",
      stat1: "برند", stat2: "شعبه", stat3: "دسته محصول",

      prodTitle: "ما بیش از ۶۰ برند داخلی و جهانی تولید می‌کنیم",
      prodLead: "با نام محصول جستجو کنید یا یک دسته را انتخاب کنید.",
      searchLabel: "جستجوی محصولات", searchPh: "جستجو: mango، cola، cheese…", clearSearch: "پاک کردن جستجو",
      filterLabel: "دسته‌بندی محصولات",
      fAll: "همه", cDairy: "لبنیات", cNectar: "نکتار", cPom: "انار", cEnergy: "انرژی‌زا", cSoft: "نوشابه‌ها", cChips: "چپس",
      gDairy: "لبنیات Hi", gNectar: "نوشیدنی‌های طبیعی نکتار شفا", gPom: "نوشیدنی‌های انار شفا",
      gEnergy: "نوشیدنی‌های انرژی‌زا", gSoft: "نوشابه‌ها و آب", gChips: "چپس و پاپ‌کورن هوس",
      count: "{n} از {total} محصول نمایش داده می‌شود",
      noResults: "هیچ محصولی با جستجوی شما پیدا نشد.", showAll: "نمایش همه محصولات",

      promo1Kicker: "چپس هوس!", promo1: "محبت را شریک کنید",
      promo2: "همه چیز با لبنیات Hi شروع می‌شود!",
      brandsTitle: "برندهای ما", brandsLead: "نام‌های معتبر از خانواده پامیر کولا.",

      fTag: "نوشیدنی، لبنیات و تنقلات از افغانستان.",
      fSupport: "پشتیبانی مشتریان",
      fQuick: "لینک‌های سریع", fCompany: "کمپنی",
      fBranches: "شعبه‌ها", fMission: "ماموریت", fVision: "دیدگاه", fValues: "ارزش‌ها", fContact: "فورم تماس",
      fVisit: "آدرس ما",
      fAddress: "هرات، افغانستان — بهزاد شماره ۱، سرک بهزاد",
      fHours: "هفت روز هفته، از ساعت ۱۰ صبح باز است",
      fRights: "تمام حقوق محفوظ است. Developed by Sherzad Oryakhil",
      toTop: "رفتن به بالا",

      aHeroTitle: "درباره پامیر کولا", aHeroLead: "داستان ما، ارزش‌های ما و محل شعبه‌های ما.",
      newsTitle: "آخرین اخبار", newsLead: "مهم‌ترین رویدادهای گروپ پامیر کولا.",
      n1h: "محصولات پامیر کولا در کابل",
      n1p: "پامیر کولا یکی از تولیدکنندگان پیشرو نوشیدنی‌های غیرالکلی در افغانستان است. ما روی کیفیت بلند محصولات تمرکز داریم و بیش از ۶۰ برند تولید می‌کنیم.",
      n2h: "پامیر کولا در گلفود دبی",
      n2p: "گروپ کمپنی‌های پامیر کولا، تولیدکننده پیشرو شربت، لبنیات و نوشیدنی در افغانستان، با افتخار در نمایشگاه گلفود دبی حضور داشت.",
      n3h: "انار شفا — حالا در امریکا",
      n3p: "شربت انار افغانستان حالا در امریکا در دسترس است — یک دستاورد بزرگ برای پامیر کولا.",
      n4h: "شربت‌های شفا در اروپا",
      n4p: "گروپ کمپنی‌های پامیر کولا با شربت‌ها و نوشابه‌های شفا بازار اروپا را نیز در برمی‌گیرد.",
      missionH: "ماموریت ما", missionP: "تولید نوشیدنی، لبنیات و تنقلات سالم و خوش‌مزه که خانواده‌ها در افغانستان و سراسر جهان هر روز از آن لذت ببرند.",
      visionH: "دیدگاه ما", visionP: "تبدیل شدن به معتبرترین برند غذایی و نوشیدنی افغانستان و رساندن کیفیت افغانستان به همه بازارها.",
      valuesH: "ارزش‌های ما", valuesP: "کیفیت در هر بوتل، افتخار به تولید داخلی و احترام به مشتریان و همکاران ما.",
      branchesTitle: "شعبه‌های ما", branchesLead: "از یکی از شعبه‌های ما در هرات و کابل دیدن کنید.",
      b1h: "دفتر مرکزی", b1a: "بهزاد شماره ۱، سرک بهزاد، هرات، افغانستان",
      b2h: "فابریکه هرات", b2a: "فاز دوم، شقایق سوم، شهرک صنعتی، هرات، افغانستان",
      b3h: "فابریکه کابل", b3a: "ده سبز، کابل، افغانستان",
      directions: "باز کردن در نقشه",
      contactTitle: "تماس با ما", contactLead: "نظریات، پیشنهادها یا سفارش‌های خود را از طریق این فورم بفرستید یا مستقیم با ما تماس بگیرید:",
      lName: "نام شما", lEmail: "آدرس ایمیل", lPhone: "شماره تماس", lMessage: "پیام", optional: "(اختیاری)",
      send: "ارسال پیام",
      formNote: "با فشردن دکمه، برنامه ایمیل شما با پیام آماده برای info@pamircola-co.com باز می‌شود.",
      eName: "لطفاً نام خود را وارد کنید.",
      eEmail: "لطفاً یک ایمیل معتبر وارد کنید، مانند name@example.com.",
      ePhone: "فقط عدد، فاصله، + و - (۷ تا ۱۵ رقم) استفاده کنید.",
      eMsg: "لطفاً حداقل ۱۰ حرف بنویسید.",
      formErrors: "لطفاً خانه‌های مشخص‌شده را درست کنید.",
      formOk: "تشکر! برنامه ایمیل شما باید باز شود. اگر باز نشد، به info@pamircola-co.com بنویسید.",

      vHeroTitle: "ویدیوها", vHeroLead: "محصولات و مسیر ما را ببینید. روی هر ویدیو دکمه پخش را بزنید.",
      v1h: "محصولات پامیر کولا", v1p: "نگاهی به محصولات و نوشیدنی‌های ما.",
      v2h: "شفا از مرزها عبور می‌کند", v2p: "گسترش برند شفا فراتر از مرزها.",
      v3h: "نوشیدنی انرژی‌زای هایپ", v3p: "هایپ، نوشیدنی انرژی‌زای جهانی، حالا در افغانستان.",
      v4h: "لبنیات Hi", v4p: "همه چیز با لبنیات Hi شروع می‌شود.",
      noVideo: "مرورگر شما این ویدیو را پخش نمی‌کند."
    }
  };

  var lang = root.lang && root.lang.indexOf("fa") === 0 ? "fa" : "en";
  function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || key; }

  /* ---------- theme ---------- */
  var themeBtn = $("#themeBtn");
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var label = $(".tool-label", themeBtn || document.body);
    if (themeBtn) {
      if (label) label.textContent = theme === "dark" ? t("themeLight") : t("themeDark");
      themeBtn.setAttribute("aria-label", (theme === "dark" ? t("themeLight") : t("themeDark")));
    }
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      store("pc-theme", next);
      applyTheme(next);
    });
  }

  /* ---------- language ---------- */
  var langBtn = $("#langBtn");
  function applyLang(l) {
    lang = l;
    root.lang = l === "fa" ? "fa-AF" : "en";
    root.dir = l === "fa" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-placeholder]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder"))); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });

    if (langBtn) {
      langBtn.setAttribute("lang", l === "fa" ? "en" : "fa-AF"); // the button names the language you will switch TO
      langBtn.setAttribute("aria-label", t("langAria"));
    }
    applyTheme(root.getAttribute("data-theme") || "light");
    if (filter) filter.update();
    var ok = $("#formStatus");
    if (ok && !ok.hidden) ok.textContent = t("formOk");
    $$(".field input, .field textarea").forEach(function (f) { if (f.getAttribute("aria-invalid") === "true") validateField(f); });
    store("pc-lang", l);
  }
  if (langBtn) {
    langBtn.addEventListener("click", function () { applyLang(lang === "fa" ? "en" : "fa"); });
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = $("#menuBtn");
  var nav = $("#site-nav");
  function setMenu(open) {
    if (!menuBtn || !nav) return;
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !e.target.closest(".site-header")) setMenu(false);
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 960) setMenu(false); });
  }

  /* ---------- back to top ---------- */
  var toTop = $("#toTop");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0 }); });
  }

  /* ---------- scroll reveal ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- missing-image fallback ---------- */
  function markMissing(img) {
    if (img.hasAttribute("data-optional")) { img.hidden = true; return; }
    var box = img.closest(".thumb, .media, li");
    if (box) box.classList.add("img-missing");
  }
  $$("img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) markMissing(img);
    img.addEventListener("error", function () { markMissing(img); });
  });

  /* ---------- product search + category filter ---------- */
  var filter = null;
  var grid = $("#productList");
  if (grid) {
    var cards = $$(".product", grid);
    var groups = $$(".group", grid);
    var input = $("#search");
    var clearBtn = $("#clearSearch");
    var chips = $$(".chip");
    var countEl = $("#resultCount");
    var emptyEl = $("#emptyState");
    var state = { cat: "all", q: "" };

    filter = {
      update: function () {
        var q = state.q.trim().toLowerCase();
        var shown = 0;
        cards.forEach(function (c) {
          var okCat = state.cat === "all" || c.getAttribute("data-cat") === state.cat;
          var okText = !q || c.getAttribute("data-name").toLowerCase().indexOf(q) !== -1;
          c.hidden = !(okCat && okText);
          if (!c.hidden) shown++;
        });
        groups.forEach(function (g) {
          g.hidden = !$$(".product:not([hidden])", g).length;
        });
        if (emptyEl) emptyEl.hidden = shown !== 0;
        if (clearBtn) clearBtn.hidden = !state.q;
        if (countEl) countEl.textContent = t("count").replace("{n}", shown).replace("{total}", cards.length);
      }
    };

    input.addEventListener("input", function () { state.q = input.value; filter.update(); });
    clearBtn.addEventListener("click", function () { input.value = ""; state.q = ""; filter.update(); input.focus(); });
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.cat = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
        filter.update();
      });
    });
    var resetBtn = $("#resetFilters");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        state.cat = "all"; state.q = ""; input.value = "";
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-filter") === "all" ? "true" : "false"); });
        filter.update();
      });
    }
  }

  /* ---------- contact form ---------- */
  var form = $("#contactForm");
  var rules = {
    name: function (v) { return v.trim().length >= 2 ? "" : "eName"; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "eEmail"; },
    phone: function (v) {
      v = v.trim();
      if (!v) return "";
      var digits = v.replace(/\D/g, "").length;
      return /^[\d\s+\-()]+$/.test(v) && digits >= 7 && digits <= 15 ? "" : "ePhone";
    },
    message: function (v) { return v.trim().length >= 10 ? "" : "eMsg"; }
  };
  function validateField(field) {
    var key = rules[field.name](field.value);
    var err = $("#" + field.id + "-error");
    field.setAttribute("aria-invalid", key ? "true" : "false");
    if (err) err.textContent = key ? t(key) : "";
    return !key;
  }
  if (form) {
    var fields = $$("input, textarea", form).filter(function (f) { return rules[f.name]; });
    fields.forEach(function (f) {
      f.addEventListener("blur", function () { if (f.value || f.getAttribute("aria-invalid") === "true") validateField(f); });
      f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true") validateField(f); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = $("#formStatus");
      status.hidden = true;
      var firstBad = null;
      fields.forEach(function (f) { if (!validateField(f) && !firstBad) firstBad = f; });
      if (firstBad) { firstBad.focus(); return; }

      var v = function (id) { return $("#" + id).value.trim(); };
      var body = v("message") + "\n\n— " + v("name") + (v("phone") ? "\nPhone: " + v("phone") : "") + "\nEmail: " + v("email");
      var href = "mailto:info@pamircola-co.com?subject=" + encodeURIComponent("Website message from " + v("name")) +
        "&body=" + encodeURIComponent(body);
      status.textContent = t("formOk");
      status.hidden = false;
      window.location.href = href;
      form.reset();
      fields.forEach(function (f) { f.removeAttribute("aria-invalid"); });
    });
  }

  /* ---------- only one video plays at a time ---------- */
  var vids = $$("video");
  vids.forEach(function (v) {
    v.addEventListener("play", function () { vids.forEach(function (o) { if (o !== v) o.pause(); }); });
  });

  /* ---------- footer year ---------- */
  $$(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- start ---------- */
  applyLang(store("pc-lang") === "fa" ? "fa" : "en");
})();
