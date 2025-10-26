const moodBtn = document.getElementById("moodButton");

moodBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.querySelector("body").classList.contains("dark")) {
    moodBtn.textContent = "Light Mode";
  } else {
    moodBtn.textContent = "Dark Mode";
  }
});

let currentLanguage = "en";
const translations = {
  en: {
    hl1: "Home",
    hl2: "About Us",
    hl3: "Brands",
    hl4: "Videos",
    hl6: "Contact Us",
    hl7: "Dark Mode",
    hl8: "English",

    header1: "PamirCola Group Of Companies",
    header2: "We produce more than 60 brands loacally and globally",

    header31: "Hi Dairies",
    header32: "Shafa Natural Nectar Drinks",
    header33: "Shafa Pomegrante Drinks",
    header34: "Energy Drinks",
    header35: "Soft Drinks",
    header36: "Chips",

    video1: "<span>❤♥♥ Havas chpis!</span><br>Share the Love",
    video2: "Everything start with <span>Hi Dairy!</span>",

    brands: "Our Brands",
  },

  fa: {
    hl1: "صفحه اصلی",
    hl2: "در مورد ما",
    hl3: "برند ها",
    hl4: "ویدیو ها",
    hl6: "تماس با ما",
    hl7: "حالت تاریک",
    hl8: "دری",

    header1: "گروپ کمپنی های پامیر کولا",
    header2: "ما بیش از ۶۰ برند داخلی و جهانی تولید میکنیم",

    header31: "لبنیات های",
    header32: "نوشیدنی نکتار های طبیعی شفا",
    header33: "نوشیدنی های انار شفا",
    header34: "نوشیدنی های انرژی",
    header35: "نوشیدنی های غیر الکولیک",
    header36: "چپس",

    video1: "<span>چپس هوس!</span><br>شریک بسازید خوشی ها را",
    video2: "همه چیز شروع میشود با <span>لبنیات های!</span>",

    brands: "برند های ما",
  },
};

document.querySelector("#language").addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "fa" : "en";

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.innerHTML = translations[currentLanguage][key];

    document.body.dir = currentLanguage === "fa" ? "rtl" : "ltr";
  });
});