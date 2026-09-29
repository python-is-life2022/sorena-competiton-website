(() => {
  "use strict";

  const translations = {
    fa: {
      meta: { title: "مسابقه سورنا" },

      hero: {
        eyebrow: "فراخوان مسابقه ملی و بین‌المللی نقاشی «سورنا»",
        title: "یک نقاشی، یک روایت؛<br>ایران از نگاه کودکان",
        description: "سورنا، روایتی هنری از ایران، هویت، امید و ایستادگی است؛ جایی که کودکان و نوجوانان می‌توانند ایران را آن‌گونه که می‌بینند، می‌شناسند یا در رؤیاهای خود تصور می‌کنند، با جهان به اشتراک بگذارند."
      },

      cta: {
        send: "ارسال آثار",
        download: "دانلود فایل فراخوان"
      },

      about: {
        title: "درباره رویداد",
        text: "مسابقه ملی و بین‌المللی نقاشی «سورنا» یک رویداد فرهنگی ـ هنری با محوریت کودکان و نوجوانان است که با هدف تقویت پیوند نسل جدید با هویت، فرهنگ و سرزمین ایران و ایجاد بستری برای گفت‌وگوی فرهنگی میان کودکان ایران و جهان برگزار می‌شود.<br><br>در کنار آنان، کودکان و نوجوانان سایر کشورها نیز می‌توانند در این رویداد شرکت کنند و برداشت خود از ایران، فرهنگ ایرانی و مفاهیمی همچون دوستی، همدلی، امید و صلح را به تصویر بکشند."
      },

      topic: {
        title: "موضوع مسابقه",
        intro: "شرکت‌کنندگان می‌توانند ایران را از دریچه نگاه و تجربه شخصی خود به تصویر بکشند.<br><span>موضوع اثر می‌تواند یکی از موارد زیر یا هر ایده خلاقانه مرتبط با موضوع مسابقه باشد:</span>",
        toggle: "نمایش دسته‌بندی‌ها"
      },

      topics: {
        1: "داستان‌ها، اسطوره‌ها و ادبیات ایرانی",
        2: "نوروز، یلدا و آیین‌های ایرانی",
        3: "خانواده و خاطرات ایرانی",
        4: "فرهنگ و میراث ایرانی",
        5: "ایران از نگاه من",
        6: "دوستی و همدلی میان ملت‌ها",
        7: "امید و آینده",
        8: "ایستادگی و پایداری",
        9: "ایران امروز و ایران فردا",
        10: "نقاشی‌های کوچک، آرزوهای بزرگ<br>(کودکان شهید میناب)",
        11: "ایران و هویت ایرانی",
        12: "طبیعت و شهرهای ایران",
        13: "ایران در خیال یک کودک",
        web: "وب و هنر دیجیتال"
      },

      participation: {
        title: "حوزه‌های شرکت",
        national: "بخش ملی",
        nationalText: "ویژه کودکان و نوجوانان ساکن ایران",
        international: "بخش بین‌الملل",
        internationalText: "ویژه کودکان و نوجوانان خارج از ایران",
        note: "در بخش بین‌الملل، کودکان و نوجوانان ایرانی و ایرانی‌تبار ساکن خارج از کشور مخاطب ویژه رویداد هستند؛ با این حال شرکت برای کودکان و نوجوانان سایر ملیت‌ها نیز آزاد است."
      },

      tech: {
        title: "تکنیک",
        free: "آزاد",
        text: "تکنیک در هر دو گروه آزاد است و آثاری با تکنیک‌های نقاشی، طراحی، آبرنگ، گواش، اکریلیک، رنگ‌روغن، کلاژ، هنر دیجیتال و سایر تکنیک‌های تصویری پذیرفته می‌شود."
      },

      age: {
        title: "گروه‌های سنی",
        child: "کودک",
        teen: "نوجوان",
        "6to9": "۶ تا ۹",
        "10to12": "۱۰ تا ۱۲",
        "13to18": "۱۳ تا ۱۸"
      },

      rules: {
        title: "شرایط شرکت",
        1: "آثار باید در یکی از فرمت‌های JPG، PNG، یا PDF ارسال شوند.",
        2: "حداقل کیفیت فایل ارسالی باید ۲۵۰۰ پیکسل در ضلع بزرگ باشد.",
        4: "اثر باید با موضوع مسابقه ارتباط داشته باشد.",
        5: "ارسال اثر به منزله پذیرش شرایط و مقررات مسابقه است.",
        6: "هر شرکت‌کننده می‌تواند حداکثر ۲ اثر ارسال کند.",
        7: "آثار باید اصیل و توسط خود شرکت‌کننده خلق شده باشند.",
        8: "استفاده از هوش مصنوعی برای خلق اثر مجاز نیست.",
        9: "تکنیک خلق اثر آزاد است.",
        10: "آثار دیجیتال نیز پذیرفته می‌شوند."
      },

      submission: {
        infoTitle: "اطلاعات زیر باید همراه اثر ارسال شود:",
        1: "نام و نام خانوادگی شرکت‌کننده",
        2: "سن",
        3: "کشور و شهر محل اقامت",
        4: "ملیت",
        5: "عنوان اثر",
        6: "تکنیک اثر",
        7: "ایمیل یا شماره تماس والدین/سرپرست"
      },

      mail: {
        title: "نحوه ارسال آثار",
        1: "آثار بخش بین‌الملل باید از طریق ایمیل رسمی مسابقه ارسال شوند.",
        2: "در عنوان ایمیل عبارت زیر درج شود:",
        deadline: "مهلت ارسال اثر تا ۲۲ مهر"
      },

      judging: {
        title: "داوری و نمایشگاه",
        1: "آثار توسط تیم داوران متخصص حوزه کودک و نوجوان داوری خواهند شد.",
        2: "نمایشگاه آثار منتخب به‌صورت حضوری و آنلاین برگزار خواهد شد.",
        3: "همچنین آثار منتخب و شایسته تقدیر در نمایشگاه و مجموعه دیجیتال آثار «سورنا» معرفی خواهند شد."
      },

      why: {
        title: "چرا «<span>سورنا</span>»؟",
        subtitle: "نامی برای <span style=\"color:#E74325\">شجاعت</span>، <span style=\"color:#2D9F2E\">هویت</span> و <span style=\"color:#174A7D\">امید</span>",
        1: "نام «سورنا» از یکی از چهره‌های شناخته‌شده تاریخ ایران الهام گرفته است؛ نمادی از شجاعت، توانمندی و ایستادگی.",
        2: "در این رویداد، «سورنا» نماد نسلی است که ریشه‌های فرهنگی خود را می‌شناسد، هویت خود را پاس می‌دارد و با امید به آینده نگاه می‌کند. همچنین سورنا حسین پور کودک شهید مدرسه شجره طیبه میناب.",
        3: "از این منظر، هنر کودکان می‌تواند زبان مشترکی برای بیان هویت، امید، صلح و ایستادگی باشد."
      },

      creator: {
        uiux: "UI/UX Designer",
        developer: "Developer"
      }
    },

    en: {
      meta: { title: "Sorena Competition" },

      hero: {
        eyebrow: "National & International Sorena Painting Competition",
        title: "One Painting, One Story;<br>Iran Through Children's Eyes",
        description: "Sorena is an artistic story of Iran, identity, hope and resilience—a space where children and teenagers can share Iran with the world as they see it, know it, or imagine it in their dreams."
      },

      cta: {
        send: "Submit Artwork",
        download: "Download Call Document"
      },

      about: {
        title: "About the Event",
        text: "The Sorena National & International Painting Competition is a cultural and artistic event centered on children and teenagers. It aims to strengthen the connection of the new generation with the identity, culture and land of Iran, while creating a space for cultural dialogue between children in Iran and around the world.<br><br>Children and teenagers from other countries are also welcome to participate and express their perspectives on Iran, Iranian culture, friendship, empathy, hope and peace through art."
      },

      topic: {
        title: "Competition Theme",
        intro: "Participants can portray Iran through the lens of their own perspective and personal experience.<br><span>The artwork may explore any of the following themes, or another creative idea related to the competition:</span>",
        toggle: "Show categories"
      },

      topics: {
        1: "Iranian stories, myths and literature",
        2: "Nowruz, Yalda and Iranian traditions",
        3: "Family and Iranian memories",
        4: "Iranian culture and heritage",
        5: "Iran through my eyes",
        6: "Friendship and empathy among nations",
        7: "Hope and the future",
        8: "Resilience and perseverance",
        9: "Iran today and Iran tomorrow",
        10: "Small paintings, big dreams<br>(children of the Minab martyr)",
        11: "Iran and Iranian identity",
        12: "Nature and cities of Iran",
        13: "Iran in a child's imagination",
        web: "Web and digital art"
      },

      participation: {
        title: "Participation",
        national: "National Section",
        nationalText: "For children and teenagers living in Iran",
        international: "International Section",
        internationalText: "For children and teenagers living outside Iran",
        note: "In the international section, Iranian children and teenagers and those of Iranian heritage living abroad are a special audience of the event; however, children and teenagers of all nationalities are welcome to participate."
      },

      tech: {
        title: "Technique",
        free: "Open",
        text: "The technique is open in both age groups. Painting, drawing, watercolor, gouache, acrylic, oil, collage, digital art and other visual techniques are accepted."
      },

      age: {
        title: "Age Groups",
        child: "Child",
        teen: "Teenager",
        "6to9": "6 to 9",
        "10to12": "10 to 12",
        "13to18": "13 to 18"
      },

      rules: {
        title: "Participation Rules",
        1: "Artwork must be submitted in JPG, PNG or PDF format.",
        2: "The minimum file quality must be 2500 pixels on the longest side.",
        4: "The artwork must be related to the competition theme.",
        5: "Submitting an artwork means accepting the competition's terms and regulations.",
        6: "Each participant may submit a maximum of 2 artworks.",
        7: "Artworks must be original and created by the participant.",
        8: "The use of artificial intelligence to create the artwork is not permitted.",
        9: "The creation technique is open.",
        10: "Digital artworks are also accepted."
      },

      submission: {
        infoTitle: "The following information must be submitted with the artwork:",
        1: "Participant's full name",
        2: "Age",
        3: "Country and city of residence",
        4: "Nationality",
        5: "Artwork title",
        6: "Artwork technique",
        7: "Parent/guardian email or phone number"
      },

      mail: {
        title: "How to Submit",
        1: "International artworks must be submitted through the official competition email.",
        2: "The following phrase should be included in the email subject:",
        deadline: "Submission deadline: October 14 (22 Mehr)"
      },

      judging: {
        title: "Judging & Exhibition",
        1: "Artworks will be judged by a specialist team in the field of children and teenagers.",
        2: "An exhibition of selected works will be held both in person and online.",
        3: "Selected and honorable-mention works will also be presented in the Sorena exhibition and digital collection."
      },

      why: {
        title: "Why <span>Sorena</span>?",
        subtitle: "A name for <span style=\"color:#E74325\">courage</span>, <span style=\"color:#2D9F2E\">identity</span> and <span style=\"color:#174A7D\">hope</span>",
        1: "The name “Sorena” is inspired by a well-known figure in Iranian history, symbolizing courage, strength and resilience.",
        2: "In this event, “Sorena” represents a generation that knows its cultural roots, protects its identity and looks to the future with hope. It also refers to Sorena Hosseinpour, a child martyr of the Shajareh Tayyebeh school in Minab.",
        3: "From this perspective, children's art can become a shared language for expressing identity, hope, peace and resilience."
      },

      creator: {
        uiux: "UI/UX Designer",
        developer: "Developer"
      }
    }
  };

  const toggle = document.getElementById("langToggle");
  const downloadButton = document.getElementById("downloadCallButton");
  const translatable = document.querySelectorAll("[data-i18n]");
  const emailLinks = document.querySelectorAll("[data-email-subject]");
  const topicsToggle = document.querySelector(".topics-toggle");
  const topicLists = document.getElementById("topicLists");

  function getValue(object, path) {
    return path.split(".").reduce((value, key) => value?.[key], object);
  }

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.fa;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

    translatable.forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18n);
      if (value !== undefined) element.innerHTML = value;
    });

    document.title = dictionary.meta.title;

    emailLinks.forEach((link) => {
      const subject = lang === "fa" ? "مسابقه نقاشی سورنا" : "Sorena Painting Competition";
      link.href = `mailto:sorena@abasabadecopark.com?subject=${encodeURIComponent(subject)}`;
    });

    if (toggle) {
      toggle.textContent = lang === "fa" ? "English" : "فارسی";
      toggle.setAttribute(
        "aria-label",
        lang === "fa" ? "تغییر زبان به انگلیسی" : "Switch language to Persian"
      );
      toggle.setAttribute("title", lang === "fa" ? "English" : "فارسی");
    }

    if (downloadButton) {
      const isPersian = lang === "fa";
      const fileName = isPersian
        ? "فراخوان مسابقه سورنا.pdf"
        : "Sorena Painting Competition Call.pdf";
      downloadButton.setAttribute("download", fileName);
      downloadButton.setAttribute(
        "aria-label",
        isPersian ? "دانلود فایل فراخوان" : "Download competition call document"
      );
      downloadButton.setAttribute("title", isPersian ? "دانلود فایل فراخوان" : "Download competition call document");
    }

    try {
      localStorage.setItem("sorena-language", lang);
    } catch (_) {}
  }

  let currentLanguage = "fa";
  try {
    const saved = localStorage.getItem("sorena-language");
    if (saved === "fa" || saved === "en") currentLanguage = saved;
  } catch (_) {}

  toggle?.addEventListener("click", () => {
    currentLanguage = currentLanguage === "fa" ? "en" : "fa";
    applyLanguage(currentLanguage);
  });

  topicsToggle?.addEventListener("click", () => {
    const isOpen = topicsToggle.getAttribute("aria-expanded") === "true";
    topicsToggle.setAttribute("aria-expanded", String(!isOpen));
    topicsToggle.classList.toggle("is-open", !isOpen);
    if (topicLists) topicLists.hidden = isOpen;
  });

  applyLanguage(currentLanguage);
})();
