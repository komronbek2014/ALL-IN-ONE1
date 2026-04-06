export const getMockData = (lang) => {
  const t = (uz, ru, en) => lang === 'ru' ? ru : lang === 'en' ? en : uz;

  // Premium Image Generator using Unsplash IDs for consistent quality
  const getImg = (id, w = 800, h = 600) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

  const exactData = {
    freelance: [
      { name: t("UI/UX Dizayner", "UI/UX Дизайнер", "UI/UX Designer"), image: getImg("1586717791202-1335043ae13e") },
      { name: t("Full-Stack Dasturchi", "Full-Stack Разработчик", "Full-Stack Developer"), image: getImg("1498050108023-c5249f4df085") },
      { name: t("SMM Strategist", "SMM Стратег", "SMM Strategist"), image: getImg("1611162617283-46150c93c337") },
      { name: t("3D Artist", "3D Художник", "3D Artist"), image: getImg("1633356122544-f134324a6cee") }
    ],
    cars: [
      { name: "BMW M5 Competition", image: getImg("1555215695-3004980ad54e") },
      { name: "Tesla Model S Plaid", image: getImg("1614741390435-03706e23659a") },
      { name: "Porsche 911 Turbo S", image: getImg("1525609002772-99256223232c") },
      { name: "Chevrolet Tahoe Z71", image: getImg("1533473359331-0135ef1b58bf") }
    ],
    houses: [
      { name: t("Modern Villa", "Современная Вилла", "Modern Villa"), image: getImg("1613977257363-707ba9348227") },
      { name: t("Penthouse Apartment", "Пентхаус", "Penthouse"), image: getImg("1512917774080-9991f1c4c750") },
      { name: t("Cozy Lake House", "Уютный дом у озера", "Lake House"), image: getImg("1600585154340-be6161aed6a5") }
    ],
    products: [
      { name: "MacBook Pro M3 Max", image: getImg("1517336714460-15bd183b6f8b") },
      { name: "iPhone 15 Pro Max", image: getImg("1696446701796-da61225697cc") },
      { name: "Sony A7R V Camera", image: getImg("1516035069371-29a1b244cc32") },
      { name: "DJI Mavic 3 Pro", image: getImg("1473960193962-825c7d6b0001") }
    ],
    courses: [
      { name: t("AI & Neural Networks", "ИИ и Нейросети", "AI & Neural Networks"), image: getImg("1677442136019-21780ecad995") },
      { name: t("Master Class: Web Dev", "Мастер-класс: Веб", "Web Development"), image: getImg("1516321497487-e288fb19713f") },
      { name: t("Digital Marketing Pro", "Маркетолог Про", "Digital Marketing"), image: getImg("1460925895917-afdab827c52f") }
    ],
    services: [
      { name: t("Interior Design", "Дизайн Интерьера", "Interior Design"), image: getImg("1618221195710-dd6b41faaea6") },
      { name: t("Professional Plumber", "Сантехник Плюс", "Pro Plumber"), image: getImg("1585703866243-999335bcc6cc") }
    ],
    events: [
      { name: t("TEDx Conference", "Конференция TEDx", "TEDx Conference"), image: getImg("1540575467063-178a50c2df87") },
      { name: t("Web Summit 2024", "Web Summit", "Web Summit"), image: getImg("1511671782779-c97d3d27a1d4") }
    ],
    rentals: [
      { name: t("Supercar Rental", "Аренда Суперкаров", "Supercar Rental"), image: getImg("1503376780353-7e6692767b70") },
      { name: t("DJ Audio System", "Аренда DJ Системы", "DJ Audio System"), image: getImg("1469334031218-e382a71b716b") }
    ],
    community: [
      { name: t("Startup Founders Hub", "Хаб Основателей", "Founders Hub"), image: getImg("1522071820081-009f0129c71c") },
      { name: t("Designers Network", "Сеть Дизайнеров", "Designers Network"), image: getImg("1515187029135-18ee286d815b") }
    ],
    pets: [
      { name: t("Samoyed Puppy", "Щенок Самоеда", "Samoyed Puppy"), image: getImg("1583511655857-d19b40a7a54e") },
      { name: t("Bengal Purebred Cat", "Бенгальская кошка", "Bengal Cat"), image: getImg("1514888286974-6c03e2ca1dba") }
    ],
    lands: [
      { name: t("Green Hill Plot", "Участок на холме", "Green Hill Plot"), image: getImg("1500382017468-9049fed747ef") },
      { name: t("Industrial Area", "Промзона", "Industrial Area"), image: getImg("1486406146926-c627a92ad1ab") }
    ],
    wedding: [
      { name: t("Grand Palace Hall", "Зал Гранд Палас", "Grand Palace Hall"), image: getImg("1519167758481-83f550bb49b3") },
      { name: t("Garden Wedding Venue", "Свадьба в саду", "Garden Wedding Venue"), image: getImg("1519741497674-611481863552") }
    ]
  };

  const mapList = (type, category, details, count = 40) => {
    const sourceArr = exactData[type] || [{ name: "Item", image: "" }];
    return Array.from({ length: count }, (_, i) => {
      const item = sourceArr[i % sourceArr.length];
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
        description: t("Premium sifat va ishonchli tanlov. Barcha xizmatlar kafolatlangan.", 
                       "Премиальное качество и надежный выбор. Все услуги гарантированы.", 
                       "Premium quality and reliable choice. All services guaranteed.")
      };
    });
  };

  return {
    freelance: mapList('freelance', t("Xizmatlar", "Услуги", "Services"), { title: t("Professional Xizmat", "Профессионал", "Professional"), price: 30, owner: "Ali Dev"}),
    cars: mapList('cars', t("Avto", "Авто", "Auto"), { title: t("Ishonchli Ulov", "Надежное авто", "Reliable Car"), price: 15000, owner: "Luxury Cars"}),
    houses: mapList('houses', t("Ko'chmas mulk", "Недвижимость", "Real Estate"), { title: t("Shinam Uy", "Уютный дом", "Cozy Home"), price: 45000, owner: "Elite Real Estate"}),
    products: mapList('products', t("Mahsulotlar", "Товары", "Products"), { title: t("Sifatli tovar", "Качественный товар", "Quality Product"), price: 400, owner: "Store Plus"}),
    courses: mapList('courses', t("Ta'lim", "Образование", "Education"), { title: t("Kelajak Kasbi", "Профессия будущего", "Future Job"), price: 150, owner: "Academy IT"}),
    services: mapList('services', t("Maishiy xizmat", "Сервисы", "Services"), { title: t("Tez yordam", "Быстрая помощь", "Fast Help"), price: 10, owner: "Pro Master"}),
    events: mapList('events', t("Tadbirlar", "Мероприятия", "Events"), { title: t("Yorqin lahzalar", "Яркие моменты", "Bright Moments"), price: 50, owner: "Event Pro"}),
    rentals: mapList('rentals', t("Ijara xizmati", "Аренда", "Rentals"), { title: t("Qulay ijara", "Удобная аренда", "Convenient Rental"), price: 100, owner: "Rent Center"}),
    community: mapList('community', t("Hamjamiyat", "Сообщество", "Community"), { title: t("Birlashish", "Объединение", "Unity"), price: 0, owner: "Network Admin"}),
    pets: mapList('pets', t("Hayvonlar", "Животные", "Pets"), { title: t("Vafodor do'st", "Верный друг", "Loyal Friend"), price: 120, owner: "Zoo Shop"}),
    lands: mapList('lands', t("Yer sotish", "Продажа земли", "Land Sale"), { title: t("Barakali yer", "Благодатная земля", "Prosperous Land"), price: 80000, owner: "Land Owner"}),
    wedding: mapList('wedding', t("To'y xonalari", "Свадьба", "Wedding"), { title: t("Hashamat", "Роскошь", "Luxury"), price: 1200, owner: "Grand Hall Manager"})
  };
};
