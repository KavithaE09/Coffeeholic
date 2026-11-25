export type LanguageCode = "en" | "th" | "ru" | "zh";

export interface LanguageOption {
  code: LanguageCode;
  countryCode: "GB" | "TH" | "RU" | "CN";
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    countryCode: "GB",
    name: "English",
    nativeName: "English",
  },
  {
    code: "th",
    countryCode: "TH",
    name: "Thai",
    nativeName: "ไทย",
  },
  {
    code: "ru",
    countryCode: "RU",
    name: "Russian",
    nativeName: "Русский",
  },
  {
    code: "zh",
    countryCode: "CN",
    name: "Chinese",
    nativeName: "简体中文",
  },
];

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navbar
    "nav.philosophy": "Philosophy",
    "nav.collection": "Collection",
    "nav.experience": "Experience",
    "nav.ritual": "Ritual",
    "nav.motion": "Motion",
    "nav.gallery": "Gallery",
    "nav.ateliers": "Cafe & Bar",
    
    "nav.reserve_short": "Reserve",
    "nav.location_time": "Pattaya, Thailand (GMT+7)",
    "nav.book_flight": "Book Table / Tasting Flight",

    // Hero
    "hero.tagline": "Specialty Coffee Sanctuary & Night Mixology",
    "hero.headline_prefix": "A Different Kind of",
    "hero.headline_highlight": "Coffee Ritual.",
    "hero.desc": "Where meticulous Japanese slow-drip precision meets evening beverage craft. Single-origin micro-lots by morning, handcrafted coffee elixirs after dark in Pattaya.",
    "hero.explore": "Explore Collection",
    
    "hero.motion_label": "Motion Video:",
    "hero.video_beans": "3D Coffee Beans",
    "hero.video_crema": "Golden Crema",
    "hero.video_swirl": "Velvet Swirl",

    // Ticker
    "ticker.specialty": "SPECIALTY COFFEE",
    "ticker.cold_drip": "COLD DRIP MASTERY",
    "ticker.omakase": "OMAKASE TASTING",
    "ticker.cocktails": "SIGNATURE BEVERAGES",
    "ticker.atelier": "PATTAYA CAFE",
    "ticker.microlot": "MICRO-LOT BEANS",
    "ticker.night_salon": "NIGHT SALON",

    // Brand Story
    "story.badge": "The Philosophy",
    "story.title": "From Sacred Highlands to Pattaya Shores",
    "story.p1": "Coffee HOLIC was conceived as an architectural oasis for the uncompromising coffee aficionado. We bridge the meditative stillness of traditional Japanese slow-bar rituals with the vibrant nocturnal energy of Pattaya.",
    "story.p2": "Every bean is sourced from single-origin micro-lots nestled in Chiang Mai's mist-covered canopies and world-renowned volcanic terroirs. Hand-roasted in small batches, extracted at precise pressure profiles.",
    "story.stat1_val": "1,450m",
    "story.stat1_label": "Highland Elevation Terroir",
    "story.stat2_val": "100%",
    "story.stat2_label": "Single-Origin Micro-Lots",
    "story.stat3_val": "18 Hours",
    "story.quote": "“We do not simply brew coffee; we orchestrate an intimate encounter between botanical terroir, thermodynamic craft, and the human palate.”",

    // Collection
    "collection.title": "Single-Origin Brews & Crafted Beverages",
    "collection.desc": "Emergency Refreshment Unit — Crafted specialty coffee, daily iced doses, rich fusion frappes, and fizzy sparkling antidotes in Pattaya.",
    "collection.tab_all": "All Items",
    "collection.tab_caffeine": "Caffeine Stimulants",
    "collection.tab_iced": "Daily Dose of Iced",
    "collection.tab_frappe": "First Aid Fusion Frappe",
    "collection.tab_fizzy": "Fizzy Antidote",
    "collection.order_button": "Experience at Bar",

    // Cafe Experience
    
    "exp.section_title": "Day Slow Bar • Night Lounge",
    
    "exp.title": "The Day Cafe & The Night Sanctuary",
    "exp.day_title": "Day Cafe",
    "exp.day_hours": "08:00 AM – 06:00 PM",
    "exp.day_desc": "Sunlit minimalism, whispering steam wands, and the contemplation of rare origin coffees poured through artisan glassware.",
    "exp.night_title": "Night Sanctuary",
    "exp.night_hours": "06:00 PM – Midnight",
    "exp.night_desc": "Warm low-frequency vinyl, bespoke cold-drip mixology, and amber luminescence where coffee transforms into intoxicating twilight elixirs.",

    // Tasting Ritual
    "ritual.badge": "The 3-Step Protocol",
    "ritual.title": "The Sensory Tasting Ritual",
    "ritual.step1_title": "01. The Aroma Bloom",
    "ritual.step1_desc": "Inhale the freshly dry-ground volcanic coffee grounds in handcrafted stoneware cups to awaken the olfactory senses.",
    "ritual.step2_title": "02. The Thermodynamic Extraction",
    "ritual.step2_desc": "Poured at 92.5°C using mineral-calibrated water to illuminate subtle floral top-notes and bright citrus acidity.",
    "ritual.step3_title": "03. The Palate Symphony",
    "ritual.step3_desc": "Sip in three dynamic stages as the beverage cools, unlocking evolving notes of dark cacao, bergamot, and wildflower honey.",

    // Reel
   
    "reel.title": "Witness The Craft in Motion",
    "reel.desc": "Immerse yourself in our cinematic slow-motion world of golden extractions, cascading foam, and artisanal precision.",

    // Gallery
    
    "gallery.title": "Moments at Coffee HOLIC",
    "gallery.desc": "A visual curation of intimate spaces, architectural angles, and precision coffee moments in Pattaya.",

    // Locations & Contact
    "loc.title": "Pattaya Cafe & Bar",
    "loc.hours_label": "Opening Hours",
    "loc.hours_val": "Daily: 08:00 AM – Midnight",
    "loc.address_label": "Address",
    "loc.address_val": "353/109 Moo 12 Nong Prue, Bang Lamung District, Pattaya 20150",
    "loc.call": "Call Cafe",
    "loc.directions": "Get Directions",
    "loc.reserve": "Book Table",

    // Reservation Modal
    "modal.title": "Reserve Cafe Experience",
    "modal.subtitle": "Secure an intimate table or private tasting ritual at Coffee HOLIC Pattaya.",
    "modal.guests": "Guests",
    "modal.date": "Date",
    "modal.time": "Time",
    "modal.ritual_type": "Experience Type",
    "modal.ritual_slowbar": "Day Slow-Bar Omakase",
    "modal.ritual_mixology": "Night Coffee Lounge",
    "modal.ritual_flight": "Single-Origin Tasting Flight",
    "modal.name": "Full Name",
    "modal.email": "Email Address",
    "modal.phone": "Phone / WhatsApp",
    "modal.notes": "Special Requests (Optional)",
    "modal.submit": "Confirm Table Reservation",
    "modal.success_title": "Reservation Confirmed!",
    "modal.success_desc": "We have received your reservation request. Our host will confirm via WhatsApp or Email shortly.",
    "modal.done": "Done",

    // Footer
    "footer.desc": "An architectural coffee sanctuary and twilight mixology bar founded on Japanese precision and Northern Thai single-origin terroir.",
    "footer.hours": "Open Daily: 08:00 AM – Midnight",
    "footer.newsletter_title": "Private Tasting Invitations",
    "footer.newsletter_desc": "Receive notices for limited micro-lot arrivals and private evening tasting flights.",
    "footer.subscribe": "Subscribe",
    "footer.subscribed": "Thank you for joining our private circle.",
    "footer.back_to_top": "Back to top",
    "footer.rights": "All rights reserved.",
  },

  th: {
    // Navbar
    "nav.philosophy": "ปรัชญา",
    "nav.collection": "คอลเลกชัน",
    "nav.experience": "ประสบการณ์",
    "nav.ritual": "พิธีกรรม",
    "nav.motion": "วิดีโอ",
    "nav.gallery": "แกลเลอรี",
    "nav.ateliers": "สาขา (Cafe & Bar)",
    "nav.reserve": "จองโต๊ะ",
    "nav.reserve_short": "จอง",
    "nav.location_time": "พัทยา, ประเทศไทย (GMT+7)",
    "nav.book_flight": "จองโต๊ะ / เทสติ้งไฟลท์",

    // Hero
    "hero.tagline": "สวรรค์แห่งกาแฟพิเศษและมิกโซโลจียามค่ำคืน",
    "hero.headline_prefix": "สัมผัสมิติใหม่แห่ง",
    "hero.headline_highlight": "พิธีกรรมกาแฟ.",
    "hero.desc": "การผสานความประณีตของการชงกาแฟสโลว์บาร์แบบญี่ปุ่น เข้ากับศิลปะเครื่องดื่มพิเศษ กาแฟพิเศษซิงเกิลออริจินยามเช้า และเครื่องดื่มสูตรพิเศษยามค่ำในพัทยา",
    "hero.explore": "สำรวจเมนู",
    "hero.reserve": "จองโต๊ะ",
    "hero.motion_label": "วิดีโอ:",
    "hero.scroll_down": "เลื่อนลง",
    "hero.video_beans": "เมล็ดกาแฟ 3 มิติ",
    "hero.video_crema": "ครีม่าสีทอง",
    "hero.video_swirl": "ฟองนุ่มละมุน",

    // Ticker
    "ticker.specialty": "กาแฟพิเศษ",
    "ticker.cold_drip": "สกัดเย็นระดับมาสเตอร์",
    "ticker.omakase": "โอมากาเสะกาแฟ",
    "ticker.cocktails": "เครื่องดื่มสูตรพิเศษ",
    "ticker.atelier": "พัทยา คาเฟ่",
    "ticker.microlot": "เมล็ดกาแฟไมโครล็อต",
    "ticker.night_salon": "บาร์กาแฟยามค่ำคืน",

    // Brand Story
    "story.badge": "ปรัชญาของเรา",
    "story.title": "จากยอดเขาสูงสู่ชายหาดพัทยา",
    "story.p1": "Coffee HOLIC ก่อตั้งขึ้นเพื่อเป็นโอเอซิสสำหรับผู้หลงใหลในกาแฟอย่างแท้จริง เราผสานความสงบของพิธีชงกาแฟแบบญี่ปุ่นเข้ากับพลังยามค่ำคืนที่มีชีวิตชีวาของพัทยา",
    "story.p2": "เมล็ดกาแฟทุกเมล็ดคัดสรรมาจากแหล่งปลูกไมโครล็อตบนดอยสูงในเชียงใหม่และแหล่งภูเขาไฟชั้นนำของโลก คั่วด้วยมือในปริมาณน้อย และสกัดด้วยแรงดันที่แม่นยำที่สุด",
    "story.stat1_val": "1,450 ม.",
    "story.stat1_label": "ความสูงเหนือระดับน้ำทะเล",
    "story.stat2_val": "100%",
    "story.stat2_label": "เมล็ดซิงเกิลออริจินไมโครล็อต",
    "story.stat3_val": "18 ชั่วโมง",
    "story.stat3_label": "การสกัดดริปเย็นเข้มข้น",
    "story.quote": "“เราไม่ได้เพียงชงกาแฟ แต่เรารังสรรค์การพบกันระหว่างรสชาติของผืนดิน งานฝีมือชั้นสูง และประสาทสัมผัสของคุณ”",

    // Collection
    "collection.title": "กาแฟคัดพิเศษและเครื่องดื่มซิกเนเจอร์ (Single-Origin Brews & Crafted Beverages)",
    "collection.desc": "เมนูกาแฟพิเศษ ชาเย็นสูตรเข้มข้น ฟิวชั่นแฟรปเป้ปั่น และโซดาเติมความสดชื่นในพัทยา",
    "collection.tab_all": "ทุกเมนู",
    "collection.tab_caffeine": "กาแฟ (Caffeine Stimulants)",
    "collection.tab_iced": "เครื่องดื่มเย็น (Daily Dose of Iced)",
    "collection.tab_frappe": "ฟิวชั่นปั่น (First Aid Fusion Frappe)",
    "collection.tab_fizzy": "โซดาคลายร้อน (Fizzy Antidote)",
    "collection.order_button": "สั่งได้ที่เคาน์เตอร์บาร์",

    // Cafe Experience
    "exp.badge": "สองมิติแห่งรสชาติ",
    "exp.section_title": "สโลว์บาร์กลางวัน • เลานจ์กลางคืน",
    "exp.title": "สตูดิโอกาแฟกลางวันและบาร์ค็อกเทลกลางคืน",
    "exp.day_title": "กลางวัน: คาเฟ่",
    "exp.day_hours": "08:00 – 18:00 น.",
    "exp.day_desc": "แสงแดดอบอุ่น บรรยากาศมินิมอล เสียงไอน้ำนุ่มนวล และกาแฟหายากที่เสิร์ฟในแก้วดีไซน์พิเศษ",
    "exp.night_title": "กลางคืน: เลานจ์มิกโซโลจี",
    "exp.night_hours": "18:00 – 24:00 น.",
    "exp.night_desc": "เสียงแผ่นเสียงไวนิล แสงไฟสีอำพันอบอุ่น และกาแฟสกัดเย็นที่แปลงโฉมเป็นค็อกเทลสูตรพิเศษ",

    // Tasting Ritual
    "ritual.badge": "พิธีกรรม 3 ขั้นตอน",
    "ritual.title": "การปลุกประสาทสัมผัสแห่งรสชาติ",
    "ritual.step1_title": "01. การเปิดรับกลิ่นอโรมา",
    "ritual.step1_desc": "สัมผัสกลิ่นหอมของเมล็ดกาแฟบดสดใหม่ในถ้วยเซรามิกเพื่อปลุกประสาทสัมผัสรับกลิ่น",
    "ritual.step2_title": "02. การสกัดที่แม่นยำ",
    "ritual.step2_desc": "ดริปด้วยน้ำอุณหภูมิ 92.5°C และแร่ธาตุที่ปรับแต่งอย่างแม่นยำเพื่อดึงกลิ่นดอกไม้และความสดชื่น",
    "ritual.step3_title": "03. สุนทรียศาสตร์แห่งรสชาติ",
    "ritual.step3_desc": "จิบลิ้มรสใน 3 ระดับอุณหภูมิ เผยรสสัมผัสช็อกโกแลตเข้มข้น ดอกไม้ป่า และน้ำผึ้งธรรมชาติ",

    // Reel
    "reel.badge": "วิดีโอภาพยนตร์",
    "reel.title": "ชมศิลปะแห่งการชงกาแฟ",
    "reel.desc": "สัมผัสความงามของการสกัดกาแฟสีทอง ฟองครีมเนียนนุ่ม และความประณีตในทุกวินาที",

    // Gallery
    "gallery.badge": "ภาพถ่ายความประทับใจ",
    "gallery.title": "ช่วงเวลาที่ Coffee HOLIC",
    "gallery.desc": "รวบรวมมุมมองสถาปัตยกรรม บรรยากาศ และพิธีกรรมกาแฟในพัทยา",

    // Locations & Contact
    "loc.badge": "พบกับเรา",
    "loc.title": "พัทยา คาเฟ่ แอนด์ บาร์",
    "loc.hours_label": "เวลาทำการ",
    "loc.hours_val": "เปิดทุกวัน: 08:00 – 24:00 น.",
    "loc.address_label": "ที่อยู่",
    "loc.address_val": "353/109 หมู่ 12 ต.หนองปรือ อ.บางละมุง พัทยา 20150",
    "loc.call": "โทรหาเรา",
    "loc.directions": "เส้นทางการเดินทาง",
    "loc.reserve": "จองโต๊ะ",

    // Reservation Modal
    "modal.title": "จองโต๊ะ / สัมผัสประสบการณ์กาแฟ",
    "modal.subtitle": "สำรองที่นั่งสำหรับมื้อพิเศษหรือการทดลองชิมกาแฟที่ Coffee HOLIC พัทยา",
    "modal.guests": "จำนวนแขก",
    "modal.date": "วันที่",
    "modal.time": "เวลา",
    "modal.ritual_type": "รูปแบบประสบการณ์",
    "modal.ritual_slowbar": "สโลว์บาร์โอมากาเสะ (กลางวัน)",
    "modal.ritual_mixology": "เลานจ์กาแฟพิเศษ (กลางคืน)",
    "modal.ritual_flight": "เซ็ตทดลองชิมกาแฟพิเศษ",
    "modal.name": "ชื่อ-นามสกุล",
    "modal.email": "อีเมล",
    "modal.phone": "เบอร์โทรศัพท์ / WhatsApp",
    "modal.notes": "คำขอพิเศษ (ถ้ามี)",
    "modal.submit": "ยืนยันการจองโต๊ะ",
    "modal.success_title": "การจองสำเร็จแล้ว!",
    "modal.success_desc": "เราได้รับคำขอจองของคุณแล้ว พนักงานจะติดต่อยืนยันผ่าน WhatsApp หรืออีเมลในเร็วๆ นี้",
    "modal.done": "เรียบร้อย",

    // Footer
    "footer.desc": "สวรรค์แห่งกาแฟพิเศษและบาร์ค็อกเทลยามค่ำ ผสานความแม่นยำแบบญี่ปุ่นและเมล็ดกาแฟไทยคุณภาพระดับโลก",
    "footer.hours": "เปิดบริการทุกวัน: 08:00 – 24:00 น.",
    "footer.newsletter_title": "รับคำเชิญชิมกาแฟรอบพิเศษ",
    "footer.newsletter_desc": "รับข่าวสารเมล็ดไมโครล็อตใหม่ล่าสุดและรอบชิมพิเศษเฉพาะสมาชิก",
    "footer.subscribe": "ติดตามข่าวสาร",
    "footer.subscribed": "ขอบคุณที่เข้าร่วมเป็นส่วนหนึ่งของเรา",
    "footer.back_to_top": "กลับสู่ด้านบน",
    "footer.rights": "สงวนลิขสิทธิ์ทั้งหมด",
  },

  ru: {
    // Navbar
    "nav.philosophy": "Философия",
    "nav.collection": "Коллекция",
    "nav.experience": "Впечатления",
    "nav.ritual": "Ритуал",
    "nav.motion": "Видео",
    "nav.gallery": "Галерея",
    "nav.ateliers": "Кафе и бар",
    "nav.reserve": "Забронировать",
    "nav.reserve_short": "Бронь",
    "nav.location_time": "Паттайя, Таиланд (GMT+7)",
    "nav.book_flight": "Забронировать столик / Дегустация",

    // Hero
    "hero.tagline": "Святилище спешелти кофе и ночной миксологии",
    "hero.headline_prefix": "Совершенно иной",
    "hero.headline_highlight": "Кофейный ритуал.",
    "hero.desc": "Где японская точность слоу-бара встречается с искусством напитков. Спешелти микролоты утром и авторские кофейные напитки после заката в Паттайе.",
    "hero.explore": "Смотреть меню",
    "hero.reserve": "Забронировать",
    "hero.motion_label": "Видео:",
    "hero.scroll_down": "Листайте вниз",
    "hero.video_beans": "3D Зерна Кофе",
    "hero.video_crema": "Золотая Крема",
    "hero.video_swirl": "Шелковый Вихрь",

    // Ticker
    "ticker.specialty": "СПЕШЕЛТИ КОФЕ",
    "ticker.cold_drip": "МАСТЕРСТВО ХОЛОДНОГО ЗАВАРИВАНИЯ",
    "ticker.omakase": "ОМАКАСЕ ДЕГУСТАЦИЯ",
    "ticker.cocktails": "АВТОРСКИЕ НАПИТКИ",
    "ticker.atelier": "КАФЕ В ПАТТАЙЕ",
    "ticker.microlot": "МИКРОЛОТЫ",
    "ticker.night_salon": "НОЧНОЙ САЛОН",

    // Brand Story
    "story.badge": "Наша философия",
    "story.title": "От священных высокогорий к берегам Паттайи",
    "story.p1": "Coffee HOLIC создавался как архитектурный оазис для бескомпромиссных ценителей кофе. Мы соединяем медитативное спокойствие японского слоу-бара с яркой ночной энергией Паттайи.",
    "story.p2": "Каждое зерно отобрано из микролотов на туманных высотах Чиангмая и знаменитых вулканических терруаров. Обжарка малыми партиями вручную, экстракция под выверенным давлением.",
    "story.stat1_val": "1 450 м",
    "story.stat1_label": "Высокогорный терруар",
    "story.stat2_val": "100%",
    "story.stat2_label": "Спешелти микролоты",
    "story.stat3_val": "18 часов",
    "story.stat3_label": "Медленная холодная мацерация",
    "story.quote": "«Мы не просто завариваем кофе — мы создаем гармонию между дарами природы, мастерством бариста и вашими чувствами.»",

    // Collection
    "collection.title": "Спешелти кофе и авторские напитки (Single-Origin Brews & Crafted Beverages)",
    "collection.desc": "Спешелти кофе, освежающие холодные напитки, нежные фраппе и игристые лимонады в Паттайе.",
    "collection.tab_all": "Все позиции",
    "collection.tab_caffeine": "Кофе (Caffeine Stimulants)",
    "collection.tab_iced": "Холодные напитки (Daily Dose of Iced)",
    "collection.tab_frappe": "Фраппе (First Aid Fusion Frappe)",
    "collection.tab_fizzy": "Игристые содовые (Fizzy Antidote)",
    "collection.order_button": "Заказать за баром",

    // Cafe Experience
    "exp.badge": "Двойственная атмосфера",
    "exp.section_title": "Дневной бар • Ночной лаунж",
    "exp.title": "Дневное кафе и ночное святилище",
    "exp.day_title": "Дневное кафе",
    "exp.day_hours": "08:00 – 18:00",
    "exp.day_desc": "Залитый солнцем минимализм, шёпот пара и вдумчивое погружение в редкие сорта кофе из дизайнерской посуды.",
    "exp.night_title": "Ночное святилище",
    "exp.night_hours": "18:00 – Полночь",
    "exp.night_desc": "Теплый виниловый звук, авторская колд-брю миксология и янтарный свет, превращающий кофе в изысканные ночные эликсиры.",

    // Tasting Ritual
    "ritual.badge": "Протокол из 3 шагов",
    "ritual.title": "Сенсорный ритуал дегустации",
    "ritual.step1_title": "01. Аромат и цветение",
    "ritual.step1_desc": "Вдохните аромат свежемолотых зерен из керамической чаши ручной работы, чтобы пробудить обоняние.",
    "ritual.step2_title": "02. Точная экстракция",
    "ritual.step2_desc": "Заваривание водой 92.5°C с выверенной минерализацией для раскрытия цветочных и цитрусовых нот.",
    "ritual.step3_title": "03. Симфония вкуса",
    "ritual.step3_desc": "Дегустируйте в 3 этапа по мере остывания напитка, раскрывая ноты темного какао, бергамота и дикого меда.",

    // Reel
    "reel.badge": "Визуальная симфония",
    "reel.title": "Мастерство в движении",
    "reel.desc": "Погрузитесь в кинематографичный мир золотой экстракции, бархатной пены и филигранной точности.",

    // Gallery
    "gallery.badge": "Визуальный архив",
    "gallery.title": "Атмосфера Coffee HOLIC",
    "gallery.desc": "Архитектурные линии, игра света и искусство приготовления спешелти кофе в Паттайе.",

    // Locations & Contact
    "loc.badge": "Наши локации",
    "loc.title": "Кафе и бар в Паттайе",
    "loc.hours_label": "Часы работы",
    "loc.hours_val": "Ежедневно: 08:00 – Полночь",
    "loc.address_label": "Адрес",
    "loc.address_val": "353/109 Moo 12 Nong Prue, Bang Lamung District, Паттайя 20150",
    "loc.call": "Позвонить",
    "loc.directions": "Маршрут",
    "loc.reserve": "Забронировать",

    // Reservation Modal
    "modal.title": "Бронирование столика / Дегустация",
    "modal.subtitle": "Зарезервируйте столик или индивидуальный кофейный сет в Coffee HOLIC Паттайя.",
    "modal.guests": "Гости",
    "modal.date": "Дата",
    "modal.time": "Время",
    "modal.ritual_type": "Формат визита",
    "modal.ritual_slowbar": "Дневной омакасе слоу-бар",
    "modal.ritual_mixology": "Ночной кофейный лаундж",
    "modal.ritual_flight": "Дегустационный спешелти сет",
    "modal.name": "Ваше имя",
    "modal.email": "Email",
    "modal.phone": "Телефон / WhatsApp",
    "modal.notes": "Пожелания (необязательно)",
    "modal.submit": "Подтвердить бронирование",
    "modal.success_title": "Бронь подтверждена!",
    "modal.success_desc": "Мы получили ваш запрос. Наш администратор свяжется с вами через WhatsApp или Email в ближайшее время.",
    "modal.done": "Готово",

    // Footer
    "footer.desc": "Архитектурное кофейное святилище и вечерний миксологический бар на основе японской точности и северных сортов кофе Таиланда.",
    "footer.hours": "Ежедневно: 08:00 – Полночь",
    "footer.newsletter_title": "Приглашения на закрытые дегустации",
    "footer.newsletter_desc": "Узнавайте первыми о поступлении редких микролотов и закрытых вечерних дегустациях.",
    "footer.subscribe": "Подписаться",
    "footer.subscribed": "Спасибо за интерес к нашему клубу.",
    "footer.back_to_top": "Наверх",
    "footer.rights": "Все права защищены.",
  },

  zh: {
    // Navbar
    "nav.philosophy": "品牌理念",
    "nav.collection": "精选系列",
    "nav.experience": "空间体验",
    "nav.ritual": "冲煮仪式",
    "nav.motion": "视觉动态",
    "nav.gallery": "画廊",
    "nav.ateliers": "门店地址",
    "nav.reserve": "预订座位",
    "nav.reserve_short": "预订",
    "nav.location_time": "芭堤雅，泰国 (GMT+7)",
    "nav.book_flight": "预订座位 / 品鉴体验",

    // Hero
    "hero.tagline": "精品咖啡庇护所与夜间特调沙龙",
    "hero.headline_prefix": "与众不同的",
    "hero.headline_highlight": "咖啡仪式。",
    "hero.desc": "融合日式慢手冲的严谨匠心与夜幕特调饮品的艺术。清晨品味单一产区珍稀微批次，夜晚沉醉于芭堤雅的灵感咖啡特调。",
    "hero.explore": "探索精选",
    "hero.reserve": "预订座位",
    "hero.motion_label": "动态影像:",
    "hero.scroll_down": "向下滚动",
    "hero.video_beans": "3D咖啡豆降落",
    "hero.video_crema": "金色油脂萃取",
    "hero.video_swirl": "丝绒冰咖啡旋涡",

    // Ticker
    "ticker.specialty": "精品咖啡",
    "ticker.cold_drip": "大师级冷萃",
    "ticker.omakase": "咖啡品鉴会席",
    "ticker.cocktails": "招牌特调饮品",
    "ticker.atelier": "芭堤雅咖啡馆",
    "ticker.microlot": "微批次珍稀豆",
    "ticker.night_salon": "夜间沙龙",

    // Brand Story
    "story.badge": "品牌哲学",
    "story.title": "从高山秘境到芭堤雅海岸",
    "story.p1": "Coffee HOLIC 为极致的咖啡爱好者打造专属的建筑美学绿洲。我们将日式手冲的沉静仪式感与芭堤雅绚丽的夜色生机完美融合。",
    "story.p2": "每粒咖啡豆均选自清迈云雾环绕的高原微批次与全球著名火山风土庄园。小批量手工烘焙，在精准温控与压力下完美萃取。",
    "story.stat1_val": "1,450米",
    "story.stat1_label": "高海拔种植风土",
    "story.stat2_val": "100%",
    "story.stat2_label": "单一产区微批次",
    "story.stat3_val": "18小时",
    "story.stat3_label": "低温慢速冰滴浸润",
    "story.quote": "“我们不仅是在冲煮咖啡，更是在编织一场植物风土、热力学匠艺与人类味蕾之间的神圣邂逅。”",

    // Collection
    "collection.title": "单一产区咖啡与精选手作饮品 (Single-Origin Brews & Crafted Beverages)",
    "collection.desc": "芭堤雅精品咖啡、每日特调冰饮、浓郁融合冰沙与清爽气泡苏打。",
    "collection.tab_all": "全部饮品",
    "collection.tab_caffeine": "咖啡提神 (Caffeine Stimulants)",
    "collection.tab_iced": "每日冰饮 (Daily Dose of Iced)",
    "collection.tab_frappe": "急救融合冰沙 (First Aid Fusion Frappe)",
    "collection.tab_fizzy": "气泡解渴 (Fizzy Antidote)",
    "collection.order_button": "吧台即刻品鉴",

    // Cafe Experience
    "exp.badge": "双重意境",
    "exp.section_title": "白昼慢吧 • 夜色酒廊",
    "exp.title": "白昼咖啡馆与夜幕庇护所",
    "exp.day_title": "白昼咖啡馆",
    "exp.day_hours": "08:00 – 18:00",
    "exp.day_desc": "阳光静洒的极简空间，蒸汽的轻吟，手作玻璃器皿中的珍稀风土咖啡带来心灵的沉静。",
    "exp.night_title": "夜幕庇护所",
    "exp.night_hours": "18:00 – 午夜 24:00",
    "exp.night_desc": "黑胶唱片的温润旋律，专属冷萃特调鸡尾酒，琥珀光影将咖啡化作令人沉醉的夜色甘露。",

    // Tasting Ritual
    "ritual.badge": "三步感官仪式",
    "ritual.title": "感官唤醒冲煮法则",
    "ritual.step1_title": "01. 闻香与苏醒",
    "ritual.step1_desc": "在手作陶杯中深吸新鲜研磨的咖啡干香，全面唤醒嗅觉感官。",
    "ritual.step2_title": "02. 精准热力萃取",
    "ritual.step2_desc": "以 92.5°C 黄金水温和矿物质校准水注入，充分绽放花香前调与明亮柑橘酸质。",
    "ritual.step3_title": "03. 味蕾交响",
    "ritual.step3_desc": "随着咖啡温度自然流转分三阶段品尝，层层展现浓郁黑可可、香柠檬与野生蜂蜜的风味。",

    // Reel
    "reel.badge": "视觉交响",
    "reel.title": "亲历流动中的匠心",
    "reel.desc": "沉浸在金黄萃取、绵密奶沫与艺术级精准的慢镜头世界中。",

    // Gallery
    "gallery.badge": "视觉画廊",
    "gallery.title": "Coffee HOLIC 瞬间",
    "gallery.desc": "记录芭堤雅咖啡馆的建筑光影、私密空间与咖啡仪式美学。",

    // Locations & Contact
    "loc.badge": "门店指引",
    "loc.title": "芭堤雅咖啡馆与酒吧",
    "loc.hours_label": "营业时间",
    "loc.hours_val": "每日：08:00 – 午夜 24:00",
    "loc.address_label": "地址",
    "loc.address_val": "353/109 Moo 12 Nong Prue, Bang Lamung, Pattaya 20150",
    "loc.call": "电话咨询",
    "loc.directions": "获取路线",
    "loc.reserve": "预订座位",

    // Reservation Modal
    "modal.title": "预订咖啡体验",
    "modal.subtitle": "在 Coffee HOLIC 芭堤雅预订专属座位或私人品鉴仪式。",
    "modal.guests": "人数",
    "modal.date": "日期",
    "modal.time": "时间",
    "modal.ritual_type": "体验类型",
    "modal.ritual_slowbar": "日间慢吧 Omakase 品鉴",
    "modal.ritual_mixology": "夜间特调沙龙",
    "modal.ritual_flight": "单一产区手冲品鉴组合",
    "modal.name": "姓名",
    "modal.email": "电子邮箱",
    "modal.phone": "电话 / WhatsApp",
    "modal.notes": "特殊需求 (选填)",
    "modal.submit": "确认预订座位",
    "modal.success_title": "预订已确认！",
    "modal.success_desc": "我们已收到您的预订请求，接待专员将尽快通过 WhatsApp 或邮件与您确认。",
    "modal.done": "完成",

    // Footer
    "footer.desc": "融合日式精准匠艺与泰国北部单一产区风土的建筑美学咖啡圣殿与夜间特调吧。",
    "footer.hours": "每日营业：08:00 – 午夜 24:00",
    "footer.newsletter_title": "私人品鉴会邀请",
    "footer.newsletter_desc": "第一时间获取珍稀微批次咖啡豆到货通知及晚间私人品鉴会邀请。",
    "footer.subscribe": "订阅",
    "footer.subscribed": "感谢您加入我们的私人品鉴圈。",
    "footer.back_to_top": "回到顶部",
    "footer.rights": "版权所有。",
  },
};
