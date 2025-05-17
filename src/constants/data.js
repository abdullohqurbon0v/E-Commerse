export const products = [
    {
        id: 3,
        title: "Rolls-Royce Cullinan Black Badge, 2023",
        price: 62000000,
        category: "Ультра-роскошный внедорожник",
        styles: [
            {
                name: "Black Badge",
                description: "Черные акценты, спортивные детали и эксклюзивные диски Black Badge.",
                exterior_colors: ["Diamond Black", "Gunmetal", "Tempest Grey"],
                interior_colors: ["Forge Grey", "Mandarin Orange", "Mugello Red"]
            }
        ],
        images: [
            {
                url: "https://pictures.dealer.com/r/rollsroyceofaustin/0975/8a06b82de9392212406beaa169c45ba9x.jpg",
                alt: "Rolls-Royce Cullinan Black Badge экстерьер",
                category: "экстерьер"
            },
            {
                url: "https://www.motortrend.com/uploads/sites/5/2020/06/2020-rolls-royce-cullinan.png",
                alt: "Rolls-Royce Cullinan Black Badge интерьер",
                category: "интерьер"
            }
        ],
        materials: {
            exterior: {
                body: "Алюминиевая пространственная рама",
                grille: "Темный хромированный гриль Pantheon",
                wheels: "22-дюймовые кованые диски Black Badge"
            },
            interior: {
                upholstery: "Тактильная кожа",
                trim: ["Углеродное волокно", "Черный рояльный лак"],
                accents: "Матовый алюминий",
                headliner: "Звездное небо с оптоволоконной подсветкой"
            }
        },
        specifications: {
            engine: {
                type: "6.75L V12 с двойным турбонаддувом",
                horsepower: "600 л.с.",
                torque: "900 Нм",
                acceleration: "0-100 км/ч за 4.9 секунды"
            },
            transmission: "8-ступенчатая автоматическая",
            drivetrain: "Полный привод",
            fuel_economy: {
                city: "19 л/100 км",
                highway: "12 л/100 км"
            },
            dimensions: {
                length: "5341 мм",
                width: "2000 мм",
                height: "1835 мм",
                wheelbase: "3295 мм",
                ground_clearance: "180 мм",
                fuel_tank_capacity: "90 литров",
                boot_space: "560 литров"
            }
        },
        features: [
            "Аудиосистема Bespoke",
            "Двери с доводчиками",
            "Задние сиденья с функцией массажа",
            "Ночное видение с распознаванием пешеходов",
            "Панорамная крыша Sky Lounge"
        ],
        catalog: "coupe"
    },
        {
            id: 4,
            title: "Bentley Bentayga EWB Azure First Edition, 2023",
            price: 45000000,
            category: "Роскошный внедорожник",
            styles: [
                {
                    name: "Azure First Edition",
                    description: "Специальная версия, ориентированная на комфорт и изысканность.",
                    exterior_colors: ["Лед", "Зимородок", "Виридиановый зеленый"],
                    interior_colors: ["Портленд", "Камбрийский зеленый", "Лен"]
                }
            ],
            images: [
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymHeDYDWdEnL1Z0qcM5XjMx_wLQSq0pFtKA&s",
                    alt: "Bentley Bentayga EWB Azure экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2023/bentley/bentayga-ewb/azure/suv/exteriorColors/2023_bentley_bentayga_ewb_azure_032_org.png",
                    alt: "Bentley Bentayga EWB Azure экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Ручная сборка алюминия",
                    grille: "Хромированная решетка Matrix",
                    wheels: "22-дюймовые полированные диски"
                },
                interior: {
                    upholstery: "Ручная строчка кожи",
                    trim: ["Ромбовидная отделка", "Темный эвкалипт"],
                    accents: "Хром и глянцевый черный",
                    headliner: "Кожа или алькантара"
                }
            },
            specifications: {
                engine: {
                    type: "4.0L V8 с двойным турбонаддувом",
                    horsepower: "542 л.с.",
                    torque: "770 Нм",
                    acceleration: "0-100 км/ч за 4.4 секунды"
                },
                transmission: "8-ступенчатая автоматическая",
                drivetrain: "Полный привод",
                fuel_economy: {
                    city: "16.8 л/100 км",
                    highway: "11.2 л/100 км"
                },
                dimensions: {
                    length: "5305 мм",
                    width: "1998 мм",
                    height: "1742 мм",
                    wheelbase: "3175 мм",
                    ground_clearance: "180 мм",
                    fuel_tank_capacity: "85 литров",
                    boot_space: "484 литра"
                }
            },
            features: [
                "Наклон и массаж задних сидений",
                "Пневмоподвеска с непрерывным управлением демпфированием",
                "Аудиосистема Bang & Olufsen",
                "Пакет передовых систем помощи водителю"
            ],
            catalog: "sedan"
        },

    {
        id: 5,
        title: "Range Rover SV Autobiography, 2023",
        price: 38000000,
        category: "Роскошный внедорожник",
        styles: [
          {
            name: "SV Autobiography Dynamic",
            description: "Совмещение современного роскошества и мощности.",
            exterior_colors: ["Санторини Блэк", "Байрон Блю", "Карпатский Серый"],
            interior_colors: ["Эбони", "Винтажный Бежевый", "Циррус"]
          }
        ],
        images: [
          {
            url: "https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2023/land-rover/range-rover/sv-swb/suv/exteriorColors/2023_land-rover_range-rover_sv-swb_032_1ej.png",
            alt: "Экстерьер Range Rover SV Autobiography",
            category: "экстерьер"
          },
          {
            url: "https://minerva.leadboxhq.com/wp-content/uploads/2022/09/2023_landrover_rangerover_autobiography_SR_FujiWhite-removebg-preview-800x289.png",
            alt: "Экстерьер Range Rover SV Autobiography",
            category: "экстерьер"
          }
        ],
        materials: {
          exterior: {
            body: "Алюминиевый монокок",
            grille: "Глянцевый чёрный с хромированной отделкой",
            wheels: "22-дюймовые алмазно-шлифованные легкосплавные диски"
          },
          interior: {
            upholstery: "Полуанилиновая кожа",
            trim: ["Мозаичный маркетри", "Шпон Гранд Блэк"],
            accents: "Благородный хром",
            headliner: "Замшевая ткань (Suedecloth)"
          }
        },
        specifications: {
          engine: {
            type: "5.0L V8 с компрессором",
            horsepower: "557 л.с.",
            torque: "700 Н·м",
            acceleration: "0–96 км/ч за 5.1 секунды"
          },
          transmission: "8-ступенчатая автоматическая",
          drivetrain: "Полный привод с системой Terrain Response 2",
          fuel_economy: {
            city: "16.8 л/100 км",
            highway: "12.4 л/100 км"
          },
          dimensions: {
            length: "5200 мм",
            width: "2003 мм",
            height: "1869 мм",
            wheelbase: "3120 мм",
            ground_clearance: "220 мм",
            fuel_tank_capacity: "104 литра",
            boot_space: "900 литров"
          }
        },
        features: [
          "Задние кресла Executive Class",
          "Инфоразвлекательная система Touch Pro Duo",
          "Функция массажа с эффектом горячих камней",
          "Активный задний блокирующий дифференциал"
        ],
        catalog: "sedan"
      },
        {
            id: 6,
            title: "BMW XM Label Red, 2023",
            price: 39000000,
            category: "Высокопроизводительный роскошный внедорожник",
            styles: [
                {
                    name: "Label Red",
                    description: "Самый мощный внедорожник M — сочетание эксклюзивного дизайна и мощи.",
                    exterior_colors: ["Торонто Красный", "Замороженный Карбоновый Черный", "Бруклинский Серый"],
                    interior_colors: ["Сахир Оранжевый", "Черный Мерино", "Сильверстоун"]
                }
            ],
            images: [
                {
                    url: "https://vehicle-images.dealerinspire.com/c941-18003890/5YM33CS0XS9Z51069/7202607e8b5eea6cd1e07d13685ebe61.jpg",
                    alt: "BMW XM Label Red экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://autoimage.capitalone.com/dealer/2024-BMW-XM-RED_LABEL-5YM33CS07R9U83179-vauto_5YM33CS07R9U83179_MP7433-403953995ae416971807baeafee84a65-bg_1.jpg?width=640&height=480",
                    alt: "BMW XM Label Red экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://cdn.imagin.studio/getImage?customer=gbxlcr-vehicle-management-ltd&billingTag=&make=BMW&modelFamily=Xm&modelRange=XM%20ESTATE%20SPECIAL%20EDITIONS&modelVariant=SUV&powerTrain=Petrol%20Parallel%20PHEV&modelYear=2024&trim=Label%20Red%20Edition&bodySize=5&fileType=webp&angle=25",
                    alt: "BMW XM Label Red экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Высокопроизводительный композит",
                    grille: "Подсвечиваемая решетка радиатора",
                    wheels: "23-дюймовые легкосплавные диски M"
                },
                interior: {
                    upholstery: "Кожа Мерино",
                    trim: ["Углеродное волокно", "Алюминий Ромбикл"],
                    accents: "Красная строчка M",
                    headliner: "Антрацитовая Алькантара"
                }
            },
            specifications: {
                engine: {
                    type: "4.4L V8 Плагин-гибрид",
                    horsepower: "738 л.с.",
                    torque: "1000 Нм",
                    acceleration: "0-100 км/ч за 3.7 секунды"
                },
                transmission: "8-ступенчатая M Steptronic",
                drivetrain: "M xDrive полный привод",
                fuel_economy: {
                    city: "14.7 л/100 км",
                    highway: "11.8 л/100 км"
                },
                dimensions: {
                    length: "5110 мм",
                    width: "2004 мм",
                    height: "1755 мм",
                    wheelbase: "3105 мм",
                    ground_clearance: "205 мм",
                    fuel_tank_capacity: "70 литров",
                    boot_space: "527 литров"
                }
            },
            features: [
                "BMW IconicSounds Electric",
                "M Lounge с амбиентной подсветкой",
                "Двойной изогнутый дисплей с iDrive 8",
                "Активная стабилизация крена"
            ],
            catalog: "limousine"
        },
        {
            id: 7,
            title: "Lexus LX 600 Ultra Luxury, 2023",
            price: 25000000,
            category: "Роскошный внедорожник",
            styles: [
                {
                    name: "Ultra Luxury",
                    description: "Полностью роскошный интерьер на 4 места и изысканный дизайн.",
                    exterior_colors: ["Мангановый блеск", "Черный", "Звуковой титан"],
                    interior_colors: ["Солнечно-коричневый", "Черный", "Белый и коричневый"]
                }
            ],
            images: [
                {
                    url: "https://images.carprices.com/pricebooks_data/usa/colorized/2023/Lexus/View2/LX_600/Ultra_Luxury/9624_085.png",
                    alt: "Lexus LX 600 Ultra Luxury экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Высокопрочная сталь",
                    grille: "Хромированная решетка шпинделя",
                    wheels: "22-дюймовые обработанные легкосплавные диски"
                },
                interior: {
                    upholstery: "Полуанилиновая кожа",
                    trim: ["Лазерно-резное дерево", "Алюминиевые вставки"],
                    accents: "Амбиентное освещение",
                    headliner: "Замша"
                }
            },
            specifications: {
                engine: {
                    type: "3.5L V6 с двойным турбонаддувом",
                    horsepower: "409 л.с.",
                    torque: "650 Нм",
                    acceleration: "0-100 км/ч за 6.9 секунды"
                },
                transmission: "10-ступенчатая автоматическая",
                drivetrain: "Постоянный полный привод",
                fuel_economy: {
                    city: "13.8 л/100 км",
                    highway: "10.7 л/100 км"
                },
                dimensions: {
                    length: "5100 мм",
                    width: "1990 мм",
                    height: "1895 мм",
                    wheelbase: "2850 мм",
                    ground_clearance: "200 мм",
                    fuel_tank_capacity: "110 литров",
                    boot_space: "460 литров"
                }
            },
            features: [
                "Оттоманка и массажеры для задних сидений",
                "Аудиосистема Mark Levinson с 25 динамиками",
                "Четырехзонный климат-контроль",
                "Мульти-террейн выбор с системой управления ползучим ходом"
            ],
            catalog: "minivan"
        },
        {
            id: 8,
            title: "Cadillac Escalade-V, 2023",
            price: 28000000,
            category: "Роскошный внедорожник",
            styles: [
                {
                    name: "V-Series",
                    description: "Американская мощь и яркая энергия в серии V.",
                    exterior_colors: ["Черный ворон", "Темный изумрудный мороз", "Кристально-белый"],
                    interior_colors: ["Угольно-черный", "Темно-рыжий", "Шепот бежевый"]
                }
            ],
            images: [
                {
                    url: "https://media.assets.sincrod.com/websites/content/motp-dublin-portal/about_messages/progressive-2.0/f9388805fb924b4e88aed383d57811b8_c2x0-956x540.jpg",
                    alt: "Cadillac Escalade-V экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://di-uploads-pod32.dealerinspire.com/cadillacofnaperville/uploads/2023/01/2023-Cadillac-Escalade-PREMIUM-LUXURY.png",
                    alt: "Cadillac Escalade-V экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://di-sitebuilder-assets.dealerinspire.com/GMimages/gmMLP/cadillac/Escalade/2024/Colors/Galactic+Gray+Metallic.png",
                    alt: "Cadillac Escalade-V экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Рама из высокопрочной стали",
                    grille: "Черная сетчатая решетка с эмблемой V",
                    wheels: "22-дюймовые полированные легкосплавные диски"
                },
                interior: {
                    upholstery: "Полуанилиновая кожа",
                    trim: ["Дерево зебрано", "Углеродные акценты"],
                    accents: "Замшевый потолок из микрофибры",
                    headliner: "Замша из микрофибры"
                }
            },
            specifications: {
                engine: {
                    type: "6.2L V8 с наддувом",
                    horsepower: "682 л.с.",
                    torque: "885 Нм",
                    acceleration: "0-100 км/ч за 4.4 секунды"
                },
                transmission: "10-ступенчатая автоматическая",
                drivetrain: "Полный привод",
                fuel_economy: {
                    city: "21.4 л/100 км",
                    highway: "14.7 л/100 км"
                },
                dimensions: {
                    length: "5382 мм",
                    width: "2059 мм",
                    height: "1948 мм",
                    wheelbase: "3071 мм",
                    ground_clearance: "175 мм",
                    fuel_tank_capacity: "91 литров",
                    boot_space: "722 литра"
                }
            },
            features: [
                "Аудиосистема AKG Studio Reference с 36 динамиками",
                "Навигация с дополненной реальностью",
                "Система Super Cruise для вождения без рук",
                "Электронный дифференциал ограниченного скольжения"
            ],
            catalog: "pickup"
        },
        {
            id: 9,
            title: "Audi Q8 e-tron, 2023",
            price: 14000000,
            category: "Электрический внедорожник",
            styles: [
                {
                    name: "Sportback 55 quattro",
                    description: "Электрическая мощь, современный дизайн и премиальная роскошь в одном.",
                    exterior_colors: ["Хронос серый", "Мифос черный", "Плазменный синий"],
                    interior_colors: ["Окапи коричневый", "Жемчужно-бежевый", "Черный"]
                }
            ],
            images: [
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHRlHJdHntK1SgGhl9aPoVv_uU-eT-K9dA&s",
                    alt: "Audi Q8 e-tron экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Алюминиевые панели кузова",
                    grille: "Закрытая решетка Singleframe",
                    wheels: "21-дюймовые аэродинамические легкосплавные диски"
                },
                interior: {
                    upholstery: "Кожа Valcona",
                    trim: ["Матовое дерево", "Шлифованный алюминий"],
                    accents: "Амбиентное светодиодное освещение",
                    headliner: "Ткань или алькантара"
                }
            },
            specifications: {
                engine: {
                    type: "Два электродвигателя",
                    horsepower: "402 л.с.",
                    torque: "664 Нм",
                    acceleration: "0-100 км/ч за 5.4 секунды"
                },
                transmission: "Одноступенчатая автоматическая",
                drivetrain: "quattro полный привод",
                fuel_economy: {
                    city: "3.6 км/кВт·ч",
                    highway: "3.4 км/кВт·ч"
                },
                dimensions: {
                    length: "4915 мм",
                    width: "1935 мм",
                    height: "1633 мм",
                    wheelbase: "2928 мм",
                    ground_clearance: "176 мм",
                    fuel_tank_capacity: "—",
                    boot_space: "569 литров"
                }
            },
            features: [
                "Виртуальная панель Virtual Cockpit Plus",
                "Матричные светодиодные фары",
                "Адаптивная пневмоподвеска",
                "Зарядка до 170 кВт постоянного тока"
            ],
            catalog: "minivan"
        },
        {
            id: 10,
            title: "Genesis GV80 Prestige Signature, 2023",
            price: 10500000,
            category: "Роскошный внедорожник",
            styles: [
                {
                    name: "Prestige Signature",
                    description: "Корейская элегантность и современные технологии в гармонии.",
                    exterior_colors: ["Белый Уюни", "Серебряный Савил", "Зеленый Кардифф"],
                    interior_colors: ["Песочно-бежевый", "Черный с оливковым ясенем", "Ультрамариновый синий"]
                }
            ],
            images: [
                {
                    url: "https://www.genesis.com/content/dam/genesis-p2/ca/assets/models/gv80/my25-ca/colour/genesis-gv80-3_5-colour-glossy-savile-silver-small.png",
                    alt: "Genesis GV80 экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zm2jtYlFOuVZxBeUTJiLnY0gl4dZdAey-Q&s",
                    alt: "Genesis GV80 экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://di-uploads-pod6.dealerinspire.com/siddillonautogroup/uploads/2024/09/2024-Genesis-GV80-Prestige-Signature.jpg",
                    alt: "Genesis GV80 экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Стальной монокок",
                    grille: "Решетка Crest с хромировкой",
                    wheels: "22-дюймовые легкосплавные диски в стиле турбины"
                },
                interior: {
                    upholstery: "Кожа Nappa",
                    trim: ["Дерево с открытыми порами", "Алюминий"],
                    accents: "Двухцветные прошитые панели",
                    headliner: "Микрозамша"
                }
            },
            specifications: {
                engine: {
                    type: "3.5L V6 с двойным турбонаддувом",
                    horsepower: "375 л.с.",
                    torque: "530 Нм",
                    acceleration: "0-100 км/ч за 5.3 секунды"
                },
                transmission: "8-ступенчатая автоматическая",
                drivetrain: "Полный привод с мульти-террейн управлением",
                fuel_economy: {
                    city: "13.1 л/100 км",
                    highway: "10.2 л/100 км"
                },
                dimensions: {
                    length: "4945 мм",
                    width: "1975 мм",
                    height: "1715 мм",
                    wheelbase: "2955 мм",
                    ground_clearance: "205 мм",
                    fuel_tank_capacity: "80 литров",
                    boot_space: "735 литров"
                }
            },
            features: [
                "12.3-дюймовый 3D цифровой кластер",
                "Аудиосистема Lexicon с 21 динамиком",
                "Удаленная интеллектуальная помощь при парковке",
                "Кресла второго ряда с подогревом и вентиляцией"
            ],
            catalog: "minivan"
        },
        {
            id: 11,
            title: "Tesla Model X Plaid, 2023",
            price: 20000000,
            category: "Электрический внедорожник",
            styles: [
                {
                    name: "Plaid",
                    description: "Самый быстрый и технологичный внедорожник — вершина электромобилей Tesla.",
                    exterior_colors: ["Жемчужно-белый многослойный", "Сплошной черный", "Темно-синий металлик"],
                    interior_colors: ["Черный и белый", "Полностью черный", "Кремовый"]
                }
            ],
            images: [
                {
                    url: "https://autopremiumgroup.ru/m/_versions/catalog/autos/2023/tesla_model_x_2023_vnedorozhnik_5dv/plaid/model_x_23_plaid_pearl_white_image_series.jpg",
                    alt: "Tesla Model X экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8CLmdtDZv2FJ9TCgWURr1H-OjiuXbVZdkA&s",
                    alt: "Tesla Model X экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqk6IUUKWzHs4ANBiGo7PD8pnvByhjZYstw&s",
                    alt: "Tesla Model X экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Алюминиевый кузов",
                    grille: "Гладкая передняя панель",
                    wheels: "20- или 22-дюймовые турбинные колеса"
                },
                interior: {
                    upholstery: "Веганская кожа",
                    trim: ["Углеродное волокно", "Деревянный декор"],
                    accents: "Минималистичная центральная консоль",
                    headliner: "Премиальная ткань"
                }
            },
            specifications: {
                engine: {
                    type: "Три электродвигателя",
                    horsepower: "1020 л.с.",
                    torque: "1424 Нм",
                    acceleration: "0-100 км/ч за 2.5 секунды"
                },
                transmission: "Одноступенчатая",
                drivetrain: "Полный привод",
                fuel_economy: {
                    city: "3.9 км/кВт·ч",
                    highway: "3.6 км/кВт·ч"
                },
                dimensions: {
                    length: "5037 мм",
                    width: "1999 мм",
                    height: "1684 мм",
                    wheelbase: "2965 мм",
                    ground_clearance: "137-208 мм (регулируемый)",
                    fuel_tank_capacity: "—",
                    boot_space: "2577 литров (общий)"
                }
            },
            features: [
                "Автопилот с возможностью полного самоуправления",
                "17-дюймовый центральный дисплей с поддержкой игр",
                "Двери Falcon Wing",
                "Система фильтрации воздуха HEPA"
            ],
            catalog: "pickup"
        },
        {
            id: 12,
            title: "Toyota Land Cruiser 300 GR Sport, 2023",
            price: 11500000,
            category: "Премиальный внедорожник",
            styles: [
                {
                    name: "GR Sport",
                    description: "Спортивная версия, подготовленная для бездорожья, с прочным дизайном.",
                    exterior_colors: ["Драгоценный белый жемчуг", "Аттитюд черный", "Темно-красная слюда"],
                    interior_colors: ["Черный", "Черный с красной прострочкой"]
                }
            ],
            images: [
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoTAJPIcG3W_ufny1mUzrXsnu-cNqJeKfAA&s",
                    alt: "Toyota Land Cruiser 300 GR Sport экстерьер",
                    category: "экстерьер"
                },
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB0EmGJrJlEIwa2Akj3BS-CZ_Y-N6tz2KJw&s",
                    alt: "Toyota Land Cruiser 300 GR Sport экстерьер",
                    category: "экстерьер"
                }
            ],
            materials: {
                exterior: {
                    body: "Конструкция кузова на раме",
                    grille: "Сетчатый дизайн GR",
                    wheels: "18-дюймовые матово-черные легкосплавные диски"
                },
                interior: {
                    upholstery: "Синтетическая кожа с логотипами GR",
                    trim: ["Шлифованный металл", "Мягкий пластик"],
                    accents: "Красная прострочка",
                    headliner: "Ткань"
                }
            },
            specifications: {
                engine: {
                    type: "3.3L дизельный V6 с двойным турбонаддувом",
                    horsepower: "305 л.с.",
                    torque: "700 Нм",
                    acceleration: "0-100 км/ч за 8.5 секунды"
                },
                transmission: "10-ступенчатая автоматическая",
                drivetrain: "Постоянный полный привод с блокировкой дифференциалов",
                fuel_economy: {
                    city: "10.5 л/100 км",
                    highway: "8.9 л/100 км"
                },
                dimensions: {
                    length: "4985 мм",
                    width: "1980 мм",
                    height: "1950 мм",
                    wheelbase: "2850 мм",
                    ground_clearance: "230 мм",
                    fuel_tank_capacity: "110 литров",
                    boot_space: "1131 литров"
                }
            },
            features: [
                "Монитор мульти-террейна с обзором днища",
                "Система управления ползучим ходом и выбор мульти-террейна",
                "Кожаное рулевое колесо с эмблемой GR",
                "Адаптивная переменная подвеска (AVS)"
            ],
            catalog: "suv"
        }

];
export const catalogs = [
    {
      id: 1,
      title: "Внедорожники",
      slug: "suv",
    },
    {
      id: 2,
      title: "Седаны",
      slug: "sedan",
    },
    {
      id: 3,
      title: "Купе",
      slug: "coupe",
    },
    {
      id: 4,
      title: "Электромобили",
      slug: "electric",
    },
    {
      id: 5,
      title: "Лимузины",
      slug: "limousine",
    },
    {
      id: 6,
      title: "Пикапы",
      slug: "pickup",
    },
    {
      id: 7,
      title: "Минивэны",
      slug: "minivan",
    },
  ];
