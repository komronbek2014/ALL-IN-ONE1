export const getMockData = (lang) => {
  const t = (uz, ru, en) => lang === 'ru' ? ru : lang === 'en' ? en : uz;

  // Use exclusively robust, verified Unsplash IDs to ensure 100% image loading
  const getImg = (id, w = 600, h = 600) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop`;

  const exactData = {
    freelance: [
      { name: t("UI/UX Dizayner", "UI/UX Дизайнер", "UI/UX Designer"), image: getImg("1573496359142-b8d87734a5a2") },
      { name: t("React Dasturchi", "React Разработчик", "React Developer"), image: getImg("1633356122544-f134324a6cee") },
      { name: t("SMM Mutaxassis", "SMM Специалист", "SMM Specialist"), image: getImg("1560250097-0b93528c311a") },
      { name: t("Grafik Dizayner", "Графический Дизайнер", "Graphic Designer"), image: getImg("1558655146-d09347e92766") },
      { name: t("Python Backend", "Python Разработчик", "Python Backend"), image: getImg("1507003211169-0a1dd7228f2d") },
      { name: t("Mobile App Dev", "Мобильный Разработчик", "Mobile App Dev"), image: getImg("1551288049-9bdd0c774fba") },
      { name: t("3D Vizualizator", "3D Визуализатор", "3D Visualizer"), image: getImg("1617791160505-6f00504e3519") },
      { name: t("SEO Strategist", "SEO Стратег", "SEO Strategist"), image: getImg("1460925895917-afdab827c52f") },
      { name: t("Video Editor", "Видеомонтажер", "Video Editor"), image: getImg("1574717024458-35bd914c9354") },
      { name: t("English Translator", "Переводчик Английского", "English Translator"), image: getImg("1438761681033-6461ffad8d80") },
      { name: t("Node.js Developer", "Node.js Разработчик", "Node.js Developer"), image: getImg("1507003211169-0a1dd7228f2d") },
      { name: t("Branding Expert", "Брендинг Эксперт", "Branding Expert"), image: getImg("1626785774573-4b799315345d") },
      { name: t("Cyber Security", "Кибербезопасность", "Cyber Security"), image: getImg("1550751827-4bd374c3f58b") },
      { name: t("Data Analyst", "Аналитик Данных", "Data Analyst"), image: getImg("1551288049-9bdd0c774fba") },
      { name: t("Project Manager", "Менеджер Проектов", "Project Manager"), image: getImg("1507003211169-0a1dd7228f2d") }
    ],
    cars: [
      { name: "Chevrolet Malibu 2 Turbo", image: getImg("1552519507-da3b142c6e3d") },
      { name: "Tesla Model Y Performance", image: getImg("1614741390435-03706e23659a") },
      { name: "BMW X7 M-Package", image: getImg("1555215695-3004980ad54e") },
      { name: "Kia Optima K5 Prestige", image: getImg("1590362891316-24f0f0814fba") },
      { name: "BYD Song Plus Champion", image: getImg("1593941707882-a5bba1491017") },
      { name: "Mercedes S-Class W223", image: getImg("1618843479313-40f8afb4b4d8") },
      { name: "Toyota Land Cruiser 300", image: getImg("1541899481282-d53bffe3c15d") },
      { name: "Hyundai Santa Fe 2024", image: getImg("1606148332095-2aa06363c469") },
      { name: "Lexus RX 350 Luxury", image: getImg("1533473359331-0135ef1b58bf") },
      { name: "Chevrolet Tracker 2 RS", image: getImg("1605559424843-9e4c228bf1c2") }
    ],
    houses: [
      { name: t("Toshkent Siti - Gardens", "Ташкент Сити Gardens", "Tashkent City Gardens"), image: getImg("1600585154340-be6161aed6a5") },
      { name: t("Modern Shaxarcha Villa", "Современная Вилла", "Modern Villa"), image: getImg("1613977257363-707ba9348227") },
      { name: t("Luxury Dacha Resort", "Люкс Дача", "Luxury Dacha"), image: getImg("1600596542815-ffad4c1539a9") },
      { name: t("Mirabad Avenue Penthouse", "Пентхаус Mirabad", "Mirabad Penthouse"), image: getImg("1512917774080-9991f1c4c750") },
      { name: t("Nest One Apartment Elite", "Квартира в Nest One", "Nest One Apartment"), image: getImg("1502672260266-1c1ef2d93688") }
    ],
    products: [
      { name: "iPhone 15 Pro Max Titanium", image: getImg("1696446701796-da61225697cc") },
      { name: "MacBook Pro M3 Max 14", image: getImg("1517336714460-15bd183b6f8b") },
      { name: "Samsung Galaxy S24 Ultra", image: getImg("1610945265064-0e34e5519bbf") },
      { name: "Sony PS5 Slim Edition", image: getImg("1606813907291-d86efa9b94db") },
      { name: "Apple Watch Ultra 2 Elite", image: getImg("1544117518-2b46abc3b9cc") },
      { name: "iPad Pro 12.9 M2 Chip", image: getImg("1544244015-0cd4b3ff269d") },
      { name: "AirPods Pro 2nd Gen USB-C", image: getImg("1588423770574-0107a656567d") },
      { name: "Dyson V15 Wireless Vac", image: getImg("1527515545081-5db817172677") },
      { name: "Canon EOS R5 Mirrorless", image: getImg("1516035069371-29a1b244cc32") },
      { name: "GoPro Hero 12 Black 4K", image: getImg("1563219045-8c08fc34460d") },
      { name: "LG OLED 65 C3 Smart TV", image: getImg("1593359674814-67dd11d08d98") },
      { name: "Razer Blade 16 Gaming", image: getImg("1496181133206-80ce9b88a853") },
      { name: "Bose QC45 Noise Cancel", image: getImg("1505740420928-5e560c06d30e") }
    ],
    courses: [
      { name: t("Frontend Dev Boot Camp", "Frontend Курс", "Frontend Development"), image: getImg("1516321497487-e288fb19713f") },
      { name: t("Python Backend Pro", "Python Курс", "Python Backend Pro"), image: getImg("1555066931-4365d14bab8c") },
      { name: t("IELTS Intensive 8.5", "IELTS Интенсив", "IELTS Intensive"), image: getImg("1522202176988-66273c2fd55f") }
    ],
    services: [
      { name: t("Pro Plumber Service", "Сантехник Плюс", "Pro Plumber"), image: getImg("1585703866243-999335bcc6cc") },
      { name: t("Master Electrician", "Мастер Электрик", "Master Electrician"), image: getImg("1621905251918-48416bd8575a") }
    ],
    events: [
      { name: t("Business Summit 2024", "Бизнес Саммит", "Business Summit"), image: getImg("1540575467063-178a50c2df87") },
      { name: t("Global Tech Expo", "Тех Экспо", "Global Tech Expo"), image: getImg("1511671782779-c97d3d27a1d4") }
    ],
    rentals: [
      { name: t("Luxury Sedan Rental", "Аренда Люкс Седан", "Luxury Sedan Rental"), image: getImg("1503376780353-7e6692767b70") },
      { name: t("Event Party Gear", "Аренда Оборудования", "Event Party Gear"), image: getImg("1469334031218-e382a71b716b") }
    ],
    community: [
      { name: t("Tech Founders Club", "Клуб Технологов", "Tech Founders Club"), image: getImg("1522071820081-009f0129c71c") },
      { name: t("Charity Fund Team", "Благотворительный Фонд", "Charity Fund Team"), image: getImg("1488521787991-ed7bbaae773c") }
    ],
    pets: [
      { name: t("Golden Retriever Puppy", "Золотистый Ретривер", "Golden Retriever"), image: getImg("1552053831-71594a27632d") },
      { name: t("Siamese Purebred Cat", "Сиамская Кошка", "Siamese Purebred Cat"), image: getImg("1513245538231-154541746412") }
    ],
    lands: [
      { name: t("Industrial Zone Plot", "Промзона Участок", "Industrial Zone Plot"), image: getImg("1486406146926-c627a92ad1ab") },
      { name: t("Garden Green Plot", "Зеленый Участок", "Garden Green Plot"), image: getImg("1500382017468-9049fed747ef") }
    ],
    wedding: [
      { name: t("Oqsaroy Palace Hall", "Зал Оксарой", "Oqsaroy Palace Hall"), image: getImg("1519167758481-83f550bb49b3") },
      { name: t("Royal Garden Venue", "Роял Гарден", "Royal Garden Venue"), image: getImg("1469334031218-e382a71b716b") }
    ]
  };

  const descriptions = {
    freelance: [
      t("Professional mutaxassis xizmati, yuqori sifat kafolati.", "Профессиональные услуги специалиста, гарантия качества.", "Professional specialist service, high quality guarantee."),
      t("Sizning loyihangiz uchun eng yaxshi yechimlar va tezkor ijro.", "Лучшие решения для вашего проекта и быстрое выполнение.", "Best solutions for your project and fast execution.")
    ],
    cars: [
      t("Ishonchli va tejamkor avtomobil, hamma hujjatlar joyida.", "Надежный и экономичный автомобиль, все документы в порядке.", "Reliable and economical car, all documents in order."),
      t("Ideal holatdagi ulov, sarmoya talab qilmaydi.", "Идеальное состояние, не требует вложений.", "Ideal condition, no investment needed.")
    ],
    houses: [
      t("Prestige rayonda shinam uy, barcha infratuzilma yaqin.", "Уютный дом в престижном районе, вся инфраструктура рядом.", "Cozy house in a prestigious area, all infrastructure nearby."),
      t("Modern dizayn va sifatli qurilish materiallari.", "Современный дизайн и качественные стройматериалы.", "Modern design and high-quality construction materials.")
    ],
    products: [
      t("Yangi, original va kafolatlangan mahsulot Uzum Market uslubida.", "Новый, оригинальный товар с гарантией.", "New, original product with warranty."),
      t("Eng so'nggi model va zamonaviy texnologiyalar birlashmasi.", "Последняя модель и современные технологии.", "The latest model and modern technologies.")
    ]
  };

  const mapList = (type, category, details, count = 40) => {
    const sourceArr = exactData[type] || [{ name: "Item", image: "" }];
    const descArr = descriptions[type] || [t("Tavsif mavjud emas", "Без описания", "No description")];
    
    return Array.from({ length: count }, (_, i) => {
      const item = sourceArr[i % sourceArr.length];
      const desc = descArr[i % descArr.length];

      return {
        id: `${type}-${i}`,
        type: type,
        name: count > sourceArr.length ? `${item.name} #${i + 1}` : item.name,
        image: item.image,
        title: details.title,
        category: category, 
        price: details.price + (i % 7) * (details.price / 10),
        owner: details.owner, 
        phone: "+998 90 000 00 00",
        description: desc
      };
    });
  };

  return {
    freelance: mapList('freelance', t("Xizmatlar", "Услуги", "Services"), { title: t("Professional Xizmat", "Профессиональная услуга", "Professional Service"), price: 30, owner: t("Ekspert", "Эксперт", "Expert")}),
    cars: mapList('cars', t("Avto", "Авто", "Auto"), { title: t("Ishonchli Ulov", "Надежное авто", "Reliable Car"), price: 15000, owner: t("Avtosalon", "Автосалон", "Car Dealer")}),
    houses: mapList('houses', t("Ko'chmas mulk", "Недвижимость", "Real Estate"), { title: t("Shinam Uy", "Уютный дом", "Cozy Home"), price: 45000, owner: t("Vlasnik", "Владелец", "Owner")}),
    products: mapList('products', t("Mahsulotlar", "Товары", "Products"), { title: t("Eng yaxshi tovar", "Лучший товар", "Best Product"), price: 400, owner: t("Do'kon", "Магазин", "Store")}, 60),
    courses: mapList('courses', t("Ta'lim", "Образование", "Education"), { title: t("Kelajak Kasbi", "Профессия будущего", "Future Job"), price: 150, owner: t("Akademiya", "Академия", "Academy")}),
    services: mapList('services', t("Maishiy xizmat", "Услуга", "Service"), { title: t("Tez yordam", "Быстрая помощь", "Fast Help"), price: 10, owner: t("Usta", "Мастер", "Master")}),
    events: mapList('events', t("Tadbirlar", "Мероприятия", "Events"), { title: t("Yorqin lahzalar", "Яркие моменты", "Bright Moments"), price: 50, owner: t("Agentlik", "Агентство", "Agency")}),
    rentals: mapList('rentals', t("Ijara xizmati", "Аренда", "Rentals"), { title: t("Qulay ijara", "Удобная аренда", "Convenient Rental"), price: 100, owner: t("Markaz", "Центр", "Center")}),
    community: mapList('community', t("Hamjamiyat", "Сообщество", "Community"), { title: t("Birlashish", "Объединение", "Unity"), price: 0, owner: t("Admin", "Админ", "Admin")}),
    pets: mapList('pets', t("Hayvonlar", "Животные", "Pets"), { title: t("Vafodor do'st", "Верный друг", "Loyal Friend"), price: 120, owner: t("Zoodo'kon", "Зоомагазин", "Petstore")}),
    lands: mapList('lands', t("Yer sotish", "Продажа земли", "Land Sale"), { title: t("Barakali yer", "Благодатная земля", "Prosperous Land"), price: 80000, owner: t("Voris", "Владелец", "Owner")}),
    wedding: mapList('wedding', t("To'y xonalari", "Свадебные залы", "Wedding Halls"), { title: t("Hashamat", "Роскошь", "Luxury"), price: 1200, owner: t("Administrator", "Админ", "Admin")}, 80)
  };
};
