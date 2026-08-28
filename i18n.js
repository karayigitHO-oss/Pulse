/* ===========================================================
   Interface language.

   THE RULE THAT MATTERS: this file translates the interface and
   nothing else. Tabs, headings, buttons, the colophon sentences, the
   roster's group labels and academic titles — all of it.

   POEMS ARE NEVER TOUCHED. Not in any language, not under any
   circumstance. A poem carries no data-i18n key, so there is nothing
   here that could reach it. A poem's translation is a separate,
   human-written page at the back of the notebook, arrived at
   deliberately. It is never swapped in by this menu.

   Turkish, Urdu and Bangla interface strings were written by Claude
   so the site works in each language straight away. They are meant to
   be reviewed and corrected — Ozan for Turkish, Auwn for Urdu, Avia
   for Bangla.
   =========================================================== */

const LANGS = [
  { code: 'en', label: 'English',  native: 'English', dir: 'ltr' },
  { code: 'tr', label: 'Turkish',  native: 'Türkçe',  dir: 'ltr' },
  { code: 'ur', label: 'Urdu',     native: 'اردو',    dir: 'rtl' },
  { code: 'bn', label: 'Bangla',   native: 'বাংলা',    dir: 'ltr' }
];

const STRINGS = {
  en: {
    'tab.gatherings': 'Gatherings',
    'tab.materials': 'Materials',
    'tab.collaborators': 'Collaborators',
    'lang.button': 'Language',

    'home.eyebrow': 'A gathering, roughly every other Sunday',
    /* The manifesto. The English is the group's own text. The Turkish,
       Urdu and Bangla below it are Claude's drafts, written so that
       choosing a language does not leave a reader looking at the most
       central paragraph on the site in English. They are drafts. */
    'home.manifesto': 'Our meetings sparked from the idea of "poetics of relationality," and this relationality is represented by the "bridge" we hope to make with people originating from different cities, and writing about everyday life. The idea of "bridge" as an abstract but also a material concept came out of a conversation about whether these gatherings would even matter. We believe there\'s something quietly fitting about an act of connecting. So, rather than saying "this happened by accident," we hope to build bridges that formally enact future accidental connections through abstractions/concepts/themes/terms.',
    'home.orient.gatherings': 'Gatherings:',
    'home.orient.gatheringsText': 'The group meets every other Sunday. What comes out of those meetings is gathered by season and theme, four issues a year, closer to a small magazine than a dated archive.',
    'home.orient.materials': 'Materials:',
    'home.orient.materialsText': 'hand-bound',
    /* One key, not a bold label plus a trailing clause. Turkish puts
       "açık" at the end of the sentence, so a fixed "Open" + text
       split would force the wrong word order in half the languages. */
    'home.orient.openText': 'Open to anyone who thinks in abstractions',

    'gatherings.label': 'Gatherings',
    'gatherings.intro': 'The group meets every other Sunday. What comes out of those meetings is gathered by season and theme, four issues a year, closer to a small magazine than a dated archive.',
    'gatherings.issue1meta': 'Issue 1 · Summer 2026 · June – August',
    'gatherings.issue1title': 'The Poetics of Relationality',
    'gatherings.issue1note': 'Two poems by Kaan Gürgan, and the English translation of the first. June and July still to come.',
    'gatherings.open': 'Open this issue →',

    'materials.label': 'Materials',
    'materials.intro1': 'Some of what gets written finds its way out of the abstract and into someone’s hands: bound, printed, built. Most of this takes physical shape at',
    'materials.intro2': 'in Ankara, who keep',
    'materials.shopLink': 'a shop of their own',
    'materials.intro3': 'Made one at a time, not stocked, so ask before it’s gone.',
    'materials.card1title': 'Hand-bound gathering, Vol. I',
    'materials.card1text': 'Coptic-stitched, hand marbled cover. One of a small run.',
    'materials.card1link': 'In NOM’s shop →',
    'materials.card2title': '[ piece title ]',
    'materials.card2text': '[ short line on medium and what it responds to ]',
    'materials.inquire': 'Inquire →',
    'materials.photo1': 'Yalım Ardıç, NOM Atölye — photo goes here',
    'materials.photo2': 'art collaborator’s piece — photo goes here',

    'colophon.label': 'Colophon',
    'colophon.role1': 'Poetics of relationality',
    'colophon.who1': 'gives us the words that connect our diversified abstract thoughts',
    'colophon.role2': 'The Bridge',
    'colophon.who2': 'tries to bridge those diversified abstractions',
    'colophon.role3': 'Materiality of bridging',
    'colophon.who3': 'materializes the abstract words onto notebooks he designs and makes by hand',
    'roster.ankara': 'Ankara / Türkiye — base',
    'roster.syracuse': 'Syracuse / NY',
    'roster.collaborators': 'Collaborators',
    'roster.phdStudent': 'PhD student in Geography',
    'roster.phdCandidate': 'PhD candidate in Geography',
    'roster.animation': '2D animation',
    'roster.painting': 'painting',
    'roster.sculpture': 'sculpture',
    'roster.paper': 'paper engineering; Penfield, NY, SUNY College of Environmental Science and Forestry',
    'roster.mfa': 'Two incoming MFA poets, Creative Writing, Syracuse — names to come',

    'nb.prev': '← Previous',
    'nb.next': 'Next →',
    'nb.where': 'Page',
    'nb.of': 'of',
    'nb.original': 'original',
    'nb.translation': 'translation',
    'nb.pending': 'June and July are not here yet. Both are part of this issue and will be added once the material is delivered.',
    'nb.issueNo': 'Issue 1 · Summer 2026',
    'nb.issueTitle': 'The Poetics of Relationality',
    'nb.issueDates': 'June – August 2026 · gatherings every other Sunday',
    'nb.colourNote': 'The season’s colour is taken from a notebook Yalım made by hand, whose own colour came from 3 Katip Çelebi Sk., the Ankara building the NOM Atölye workshop moved into.',
    'nb.hint': 'Pull the bottom corner, or use the buttons.',

    'footer.question': 'Can abstract thoughts materially bridge?'
  },

  tr: {
    'tab.gatherings': 'Buluşmalar',
    'tab.materials': 'Malzemeler',
    'tab.collaborators': 'Katkıda Bulunanlar',
    'lang.button': 'Dil',

    'home.eyebrow': 'İki haftada bir pazar, bir buluşma',
    /* TASLAK — Ozan'ın düzeltmesi bekleniyor. */
    'home.manifesto': 'Buluşmalarımız "ilişkiselliğin poetikası" fikrinden kıvılcımlandı; bu ilişkiselliği, farklı şehirlerden gelen ve gündelik hayat üzerine yazan insanlarla kurmayı umduğumuz "köprü" temsil ediyor. "Köprü"yü hem soyut hem de maddi bir kavram olarak düşünmek, bu buluşmaların bir anlamı olup olmadığına dair bir konuşmadan doğdu. Bağ kurma ediminde sessizce yerine oturan bir şey olduğuna inanıyoruz. Bu yüzden "bu tesadüfen oldu" demek yerine, soyutlamalar/kavramlar/temalar/terimler aracılığıyla gelecekteki tesadüfi bağlantıları biçimsel olarak mümkün kılan köprüler kurmayı umuyoruz.',
    'home.orient.gatherings': 'Buluşmalar:',
    'home.orient.gatheringsText': 'Grup iki haftada bir pazar buluşuyor. Bu buluşmalardan çıkanlar mevsime ve temaya göre toplanıyor; yılda dört sayı, tarihli bir arşivden çok küçük bir dergiye yakın.',
    'home.orient.materials': 'Malzemeler:',
    'home.orient.materialsText': 'elle ciltlenmiş',
    'home.orient.openText': 'Soyutluk düşünen herkese açık',

    'gatherings.label': 'Buluşmalar',
    'gatherings.intro': 'Grup iki haftada bir pazar buluşuyor. Bu buluşmalardan çıkanlar mevsime ve temaya göre toplanıyor; yılda dört sayı, tarihli bir arşivden çok küçük bir dergiye yakın.',
    'gatherings.issue1meta': 'Sayı 1 · Yaz 2026 · Haziran – Ağustos',
    'gatherings.issue1title': 'İlişkiselliğin Poetikası',
    'gatherings.issue1note': 'Kaan Gürgan’dan iki şiir ve ilkinin İngilizce çevirisi. Haziran ve Temmuz henüz gelmedi.',
    'gatherings.open': 'Bu sayıyı aç →',

    'materials.label': 'Malzemeler',
    'materials.intro1': 'Yazılanların bir kısmı soyuttan çıkıp birinin eline geçiyor: ciltlenmiş, basılmış, yapılmış. Bunların çoğu Ankara’da',
    'materials.intro2': 'atölyesinde biçim buluyor;',
    'materials.shopLink': 'kendi dükkânları da var',
    'materials.intro3': 'Teker teker yapılıyor, stoklanmıyor; bu yüzden gitmeden sorun.',
    'materials.card1title': 'Elle ciltlenmiş defter, Cilt I',
    'materials.card1text': 'Kopt dikişi, elle ebrulanmış kapak. Küçük bir seriden.',
    'materials.card1link': 'NOM’un dükkânında →',
    'materials.card2title': '[ işin adı ]',
    'materials.card2text': '[ malzemesi ve neye karşılık verdiği üzerine kısa bir satır ]',
    'materials.inquire': 'Sor →',
    'materials.photo1': 'Yalım Ardıç, NOM Atölye — fotoğraf buraya',
    'materials.photo2': 'sanat işbirlikçisinin işi — fotoğraf buraya',

    'colophon.label': 'Künye',
    'colophon.role1': 'İlişkiselliğin poetikası',
    'colophon.who1': 'çeşitlenmiş soyut düşüncelerimizi birbirine bağlayan sözcükleri veriyor',
    'colophon.role2': 'Köprü',
    'colophon.who2': 'o çeşitlenmiş soyutlamalar arasında köprü kurmaya çalışıyor',
    'colophon.role3': 'Köprü kurmanın maddeselliği',
    'colophon.who3': 'soyut sözcükleri kendi tasarlayıp elle yaptığı defterlerde maddeleştiriyor',
    'roster.ankara': 'Ankara / Türkiye — merkez',
    'roster.syracuse': 'Syracuse / NY',
    'roster.collaborators': 'İşbirlikçiler',
    'roster.phdStudent': 'Coğrafya doktora öğrencisi',
    'roster.phdCandidate': 'Coğrafya doktora adayı',
    'roster.animation': '2B animasyon',
    'roster.painting': 'resim',
    'roster.sculpture': 'heykel',
    'roster.paper': 'kâğıt mühendisliği; Penfield, NY, SUNY Çevre Bilimleri ve Ormancılık Fakültesi',
    'roster.mfa': 'Syracuse Yaratıcı Yazarlık’tan gelecek iki MFA şairi — adları sonra',

    'nb.prev': '← Önceki',
    'nb.next': 'Sonraki →',
    'nb.where': 'Sayfa',
    'nb.of': '/',
    'nb.original': 'özgün',
    'nb.translation': 'çeviri',
    'nb.pending': 'Haziran ve Temmuz henüz burada değil. İkisi de bu sayının parçası; malzeme geldiğinde eklenecek.',
    'nb.issueNo': 'Sayı 1 · Yaz 2026',
    'nb.issueTitle': 'İlişkiselliğin Poetikası',
    'nb.issueDates': 'Haziran – Ağustos 2026 · iki haftada bir pazar buluşma',
    'nb.colourNote': 'Bu mevsimin rengi Yalım’ın elle yaptığı bir defterden alındı; o defterin rengi de NOM Atölye’nin taşındığı Ankara’daki 3 Katip Çelebi Sk. binasından geliyor.',
    'nb.hint': 'Alt köşeden çek ya da düğmeleri kullan.',

    'footer.question': 'Soyut fikirler somut köprüler kurabilir mi?'
  },

  ur: {
    'tab.gatherings': 'نشستیں',
    'tab.materials': 'مواد',
    'tab.collaborators': 'شرکائے کار',
    'lang.button': 'زبان',

    'home.eyebrow': 'ہر دوسرے اتوار، ایک نشست',
    /* DRAFT — for Auwn to correct. */
    'home.manifesto': 'ہماری نشستیں "تعلق داری کی شعریات" کے خیال سے شروع ہوئیں، اور اس تعلق داری کی نمائندگی وہ "پُل" کرتا ہے جو ہم مختلف شہروں سے آنے والے اور روزمرہ زندگی پر لکھنے والے لوگوں کے ساتھ باندھنا چاہتے ہیں۔ "پُل" کو ایک تجریدی مگر ساتھ ہی مادی تصور کے طور پر سوچنا اُس گفتگو سے نکلا جس میں سوال یہ تھا کہ ان نشستوں کا کوئی مطلب بھی ہے یا نہیں۔ ہمیں لگتا ہے کہ جوڑنے کے عمل میں کوئی چیز خاموشی سے اپنی جگہ پا لیتی ہے۔ چنانچہ "یہ اتفاقاً ہوا" کہنے کے بجائے، ہم ایسے پُل باندھنا چاہتے ہیں جو تجریدات، تصورات، موضوعات اور اصطلاحات کے ذریعے آئندہ کے اتفاقی رابطوں کو باقاعدہ ممکن بنائیں۔',
    'home.orient.gatherings': 'نشستیں:',
    'home.orient.gatheringsText': 'گروہ ہر دوسرے اتوار ملتا ہے۔ ان ملاقاتوں سے جو نکلتا ہے وہ موسم اور موضوع کے حساب سے جمع کیا جاتا ہے، سال میں چار شمارے — تاریخ وار محفوظ خانے سے زیادہ ایک چھوٹے رسالے جیسا۔',
    'home.orient.materials': 'مواد:',
    'home.orient.materialsText': 'ہاتھ سے بندھا ہوا',
    'home.orient.openText': 'ہر اس شخص کے لیے کھلا ہے جو تجرید میں سوچتا ہے',

    'gatherings.label': 'نشستیں',
    'gatherings.intro': 'گروہ ہر دوسرے اتوار ملتا ہے۔ ان ملاقاتوں سے جو نکلتا ہے وہ موسم اور موضوع کے حساب سے جمع کیا جاتا ہے، سال میں چار شمارے۔',
    'gatherings.issue1meta': 'شمارہ ۱ · گرما ۲۰۲۶ · جون – اگست',
    'gatherings.issue1title': 'تعلق داری کی شعریات',
    'gatherings.issue1note': 'کان گورگان کی دو نظمیں، اور پہلی کا انگریزی ترجمہ۔ جون اور جولائی ابھی باقی ہیں۔',
    'gatherings.open': 'یہ شمارہ کھولیں ←',

    'materials.label': 'مواد',
    'materials.intro1': 'جو لکھا جاتا ہے اس کا کچھ حصہ تجرید سے نکل کر کسی کے ہاتھ میں پہنچ جاتا ہے: بندھا ہوا، چھپا ہوا، بنا ہوا۔ اس کی زیادہ تر مادی صورت انقرہ میں',
    'materials.intro2': 'میں بنتی ہے، جن کی',
    'materials.shopLink': 'اپنی دکان بھی ہے',
    'materials.intro3': 'ایک ایک کر کے بنایا جاتا ہے، ذخیرہ نہیں ہوتا، اس لیے ختم ہونے سے پہلے پوچھ لیں۔',
    'materials.card1title': 'ہاتھ سے بندھی نشست، جلد اول',
    'materials.card1text': 'کاپٹک سلائی، ہاتھ سے بنایا ہوا سرورق۔ ایک مختصر سلسلے میں سے۔',
    'materials.card1link': 'NOM کی دکان میں ←',
    'materials.card2title': '[ تخلیق کا عنوان ]',
    'materials.card2text': '[ مادّے اور اس کے ردِعمل پر ایک مختصر سطر ]',
    'materials.inquire': 'دریافت کریں ←',
    'materials.photo1': 'یالم آردچ، NOM اتولیے — تصویر یہاں آئے گی',
    'materials.photo2': 'فن کے شریکِ کار کا کام — تصویر یہاں آئے گی',

    'colophon.label': 'کولوفون',
    'colophon.role1': 'تعلق داری کی شعریات',
    'colophon.who1': 'ہمیں وہ الفاظ دیتی ہیں جو ہمارے بکھرے ہوئے تجریدی خیالات کو آپس میں جوڑتے ہیں',
    'colophon.role2': 'پُل',
    'colophon.who2': 'ان بکھری ہوئی تجریدوں کے درمیان پُل باندھنے کی کوشش کرتے ہیں',
    'colophon.role3': 'پُل باندھنے کی مادیت',
    'colophon.who3': 'تجریدی الفاظ کو ان کاپیوں پر مادی صورت دیتے ہیں جو وہ خود ڈیزائن کر کے ہاتھ سے بناتے ہیں',
    'roster.ankara': 'انقرہ / ترکیہ — مرکز',
    'roster.syracuse': 'سیراکیوز / نیویارک',
    'roster.collaborators': 'شرکائے کار',
    'roster.phdStudent': 'جغرافیہ میں پی ایچ ڈی کے طالب علم',
    'roster.phdCandidate': 'جغرافیہ میں پی ایچ ڈی کی امیدوار',
    'roster.animation': 'دو ابعادی اینیمیشن',
    'roster.painting': 'مصوری',
    'roster.sculpture': 'مجسمہ سازی',
    'roster.paper': 'کاغذ کی انجینئرنگ؛ پینفیلڈ، نیویارک، SUNY کالج آف انوائرنمنٹل سائنس اینڈ فارسٹری',
    'roster.mfa': 'سیراکیوز کے تخلیقی ادب سے آنے والے دو ایم ایف اے شاعر — نام بعد میں',

    'nb.prev': '→ پچھلا',
    'nb.next': 'اگلا ←',
    'nb.where': 'صفحہ',
    'nb.of': 'از',
    'nb.original': 'اصل',
    'nb.translation': 'ترجمہ',
    'nb.pending': 'جون اور جولائی ابھی یہاں نہیں ہیں۔ دونوں اسی شمارے کا حصہ ہیں اور مواد ملنے پر شامل کیے جائیں گے۔',
    'nb.issueNo': 'شمارہ ۱ · گرما ۲۰۲۶',
    'nb.issueTitle': 'تعلق داری کی شعریات',
    'nb.issueDates': 'جون – اگست ۲۰۲۶ · ہر دوسرے اتوار نشست',
    'nb.colourNote': 'اس موسم کا رنگ یالم کی ہاتھ سے بنائی ہوئی ایک کاپی سے لیا گیا ہے، اور اس کاپی کا رنگ انقرہ کی اُس عمارت سے آیا جہاں NOM اتولیے منتقل ہوا: ۳ کاتب چلبی سڑک۔',
    'nb.hint': 'نیچے کے کونے سے کھینچیں، یا بٹن استعمال کریں۔',

    'footer.question': 'کیا تجریدی خیال مادی طور پر پُل باندھ سکتے ہیں؟'
  },

  bn: {
    'tab.gatherings': 'জমায়েত',
    'tab.materials': 'উপকরণ',
    'tab.collaborators': 'সহযোগীরা',
    'lang.button': 'ভাষা',

    'home.eyebrow': 'এক রবিবার অন্তর একটি জমায়েত',
    /* DRAFT — for Avia to correct. */
    'home.manifesto': 'আমাদের জমায়েত শুরু হয়েছিল "সম্পর্কশীলতার কাব্যতত্ত্ব" ভাবনা থেকে, আর সেই সম্পর্কশীলতার প্রতিনিধিত্ব করে সেই "সেতু", যা আমরা ভিন্ন ভিন্ন শহর থেকে আসা এবং দৈনন্দিন জীবন নিয়ে লেখা মানুষদের সঙ্গে গড়তে চাই। "সেতু"কে একই সঙ্গে বিমূর্ত ও বস্তুগত ধারণা হিসেবে ভাবার কথাটি এসেছিল এমন এক আলাপ থেকে, যেখানে প্রশ্ন ছিল এই জমায়েতগুলোর আদৌ কোনো মানে আছে কি না। আমাদের মনে হয়, যুক্ত হওয়ার কাজটির মধ্যে নিঃশব্দে মানানসই কিছু একটা আছে। তাই "এটা কাকতালীয়ভাবে ঘটেছে" বলার বদলে আমরা এমন সেতু গড়তে চাই যা বিমূর্ততা, ধারণা, বিষয় ও পরিভাষার মধ্য দিয়ে ভবিষ্যতের আকস্মিক সংযোগগুলোকে আনুষ্ঠানিকভাবে সম্ভব করে তোলে।',
    'home.orient.gatherings': 'জমায়েত:',
    'home.orient.gatheringsText': 'দলটি এক রবিবার অন্তর মিলিত হয়। সেই বৈঠক থেকে যা বেরিয়ে আসে তা ঋতু ও বিষয় অনুসারে সংকলিত হয়, বছরে চারটি সংখ্যা — তারিখভিত্তিক সংগ্রহশালার চেয়ে বরং ছোট একটি পত্রিকার মতো।',
    'home.orient.materials': 'উপকরণ:',
    'home.orient.materialsText': 'হাতে বাঁধাই',
    'home.orient.openText': 'যে কেউ বিমূর্ততায় ভাবেন, তাঁর জন্য উন্মুক্ত',

    'gatherings.label': 'জমায়েত',
    'gatherings.intro': 'দলটি এক রবিবার অন্তর মিলিত হয়। সেই বৈঠক থেকে যা বেরিয়ে আসে তা ঋতু ও বিষয় অনুসারে সংকলিত হয়, বছরে চারটি সংখ্যা।',
    'gatherings.issue1meta': 'সংখ্যা ১ · গ্রীষ্ম ২০২৬ · জুন – আগস্ট',
    'gatherings.issue1title': 'সম্পর্কশীলতার কাব্যতত্ত্ব',
    'gatherings.issue1note': 'কান গুরগানের দুটি কবিতা, এবং প্রথমটির ইংরেজি অনুবাদ। জুন ও জুলাই এখনও আসেনি।',
    'gatherings.open': 'এই সংখ্যাটি খুলুন →',

    'materials.label': 'উপকরণ',
    'materials.intro1': 'যা লেখা হয় তার কিছু অংশ বিমূর্ততা ছেড়ে কারও হাতে গিয়ে পৌঁছায়: বাঁধাই করা, ছাপা, গড়া। এর বেশির ভাগই আঙ্কারায়',
    'materials.intro2': '-তে রূপ নেয়, যাদের',
    'materials.shopLink': 'নিজস্ব একটি দোকানও আছে',
    'materials.intro3': 'একটি করে বানানো হয়, মজুত রাখা হয় না, তাই ফুরিয়ে যাওয়ার আগে জিজ্ঞেস করুন।',
    'materials.card1title': 'হাতে বাঁধাই জমায়েত, খণ্ড ১',
    'materials.card1text': 'কপ্টিক সেলাই, হাতে করা মার্বেল মলাট। ছোট একটি সংস্করণের একটি।',
    'materials.card1link': 'NOM-এর দোকানে →',
    'materials.card2title': '[ কাজের নাম ]',
    'materials.card2text': '[ মাধ্যম ও কীসের উত্তরে, এক লাইনে ]',
    'materials.inquire': 'জানতে চান →',
    'materials.photo1': 'ইয়ালিম আর্দিচ, NOM আতোলিয়ে — ছবি এখানে আসবে',
    'materials.photo2': 'শিল্প-সহযোগীর কাজ — ছবি এখানে আসবে',

    'colophon.label': 'কলোফন',
    'colophon.role1': 'সম্পর্কশীলতার কাব্যতত্ত্ব',
    'colophon.who1': 'আমাদের ছড়িয়ে থাকা বিমূর্ত ভাবনাগুলোকে জুড়ে দেওয়ার শব্দ দেন',
    'colophon.role2': 'সেতু',
    'colophon.who2': 'সেই ছড়িয়ে থাকা বিমূর্ততাগুলোর মধ্যে সেতু গড়ার চেষ্টা করেন',
    'colophon.role3': 'সেতুবন্ধনের বস্তুগততা',
    'colophon.who3': 'বিমূর্ত শব্দগুলোকে নিজের নকশা করা ও হাতে বানানো খাতায় বস্তুরূপ দেন',
    'roster.ankara': 'আঙ্কারা / তুরস্ক — কেন্দ্র',
    'roster.syracuse': 'সিরাকিউজ / নিউ ইয়র্ক',
    'roster.collaborators': 'সহযোগীরা',
    'roster.phdStudent': 'ভূগোলে পিএইচডি শিক্ষার্থী',
    'roster.phdCandidate': 'ভূগোলে পিএইচডি গবেষক',
    'roster.animation': 'দ্বিমাত্রিক অ্যানিমেশন',
    'roster.painting': 'চিত্রকলা',
    'roster.sculpture': 'ভাস্কর্য',
    'roster.paper': 'কাগজ প্রকৌশল; পেনফিল্ড, নিউ ইয়র্ক, SUNY কলেজ অব এনভায়রনমেন্টাল সায়েন্স অ্যান্ড ফরেস্ট্রি',
    'roster.mfa': 'সিরাকিউজ ক্রিয়েটিভ রাইটিং থেকে আসছেন দুজন এমএফএ কবি — নাম পরে',

    'nb.prev': '← আগের',
    'nb.next': 'পরের →',
    'nb.where': 'পাতা',
    'nb.of': '/',
    'nb.original': 'মূল',
    'nb.translation': 'অনুবাদ',
    'nb.pending': 'জুন ও জুলাই এখনও এখানে নেই। দুটোই এই সংখ্যার অংশ, উপকরণ পেলে যোগ করা হবে।',
    'nb.issueNo': 'সংখ্যা ১ · গ্রীষ্ম ২০২৬',
    'nb.issueTitle': 'সম্পর্কশীলতার কাব্যতত্ত্ব',
    'nb.issueDates': 'জুন – আগস্ট ২০২৬ · এক রবিবার অন্তর জমায়েত',
    'nb.colourNote': 'এই ঋতুর রং নেওয়া হয়েছে ইয়ালিমের হাতে বানানো একটি খাতা থেকে, আর সেই খাতার রং এসেছে আঙ্কারার ৩ কাতিপ চেলেবি স্ট্রিট থেকে, যে বাড়িতে NOM আতোলিয়ে উঠে এসেছিল।',
    'nb.hint': 'নিচের কোণা টানুন, বা বোতাম ব্যবহার করুন।',

    'footer.question': 'বিমূর্ত ভাবনা কি বস্তুগতভাবে সেতু গড়তে পারে?'
  }
};

const STORE_KEY = 'pulse.lang';

function currentLang() {
  const saved = localStorage.getItem(STORE_KEY);
  return STRINGS[saved] ? saved : 'en';
}

function t(key, lang) {
  const l = lang || currentLang();
  return (STRINGS[l] && STRINGS[l][key]) || STRINGS.en[key] || '';
}

function applyLanguage(code) {
  const lang = STRINGS[code] ? code : 'en';
  const meta = LANGS.find(l => l.code === lang);
  localStorage.setItem(STORE_KEY, lang);

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', meta.dir);

  // Only elements that opted in with data-i18n are touched. Poems
  // carry no such attribute, which is what keeps them out of reach.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t(el.getAttribute('data-i18n'), lang);
    if (value) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = t(el.getAttribute('data-i18n-aria'), lang);
    if (value) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('.lang-menu button').forEach(btn => {
    btn.setAttribute('aria-current', btn.dataset.lang === lang ? 'true' : 'false');
  });

  document.dispatchEvent(new CustomEvent('pulse:lang', { detail: { lang } }));
}
