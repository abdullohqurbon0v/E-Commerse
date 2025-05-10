export const products = [
    {
        id: 3,
        title: "Rolls-Royce Cullinan Black Badge, 2023",
        price: "62 000 000 ₽",
        category: "Ultra-Luxury SUV",
        styles: [
            {
                name: "Black Badge",
                description: "Qoramtir bezaklar, sportga xos detallar va eksklyuziv Black Badge jantlari.",
                exterior_colors: ["Diamond Black", "Gunmetal", "Tempest Grey"],
                interior_colors: ["Forge Grey", "Mandarin Orange", "Mugello Red"]
            }
        ],
        images: [
            {
                url: "https://example.com/cullinan-black-exterior.jpg",
                alt: "Rolls-Royce Cullinan Black Badge exterior",
                category: "exterior"
            },
            {
                url: "/images/cullinan-interior.jpg",
                alt: "Rolls-Royce Cullinan Black Badge interior",
                category: "interior"
            }
        ],
        materials: {
            exterior: {
                body: "Aluminum Spaceframe Architecture",
                grille: "Dark chrome Pantheon grille",
                wheels: "22-inch Black Badge forged alloy"
            },
            interior: {
                upholstery: "Tactile leather",
                trim: ["Carbon veneer", "Piano black"],
                accents: "Brushed aluminum",
                headliner: "Starlight with fiber-optic constellation"
            }
        },
        specifications: {
            engine: {
                type: "6.75L V12 Twin-Turbo",
                horsepower: "600 hp",
                torque: "664 lb-ft",
                acceleration: "0-60 mph in 4.9 seconds"
            },
            transmission: "8-speed automatic",
            drivetrain: "All-wheel drive",
            fuel_economy: {
                city: "12 mpg",
                highway: "19 mpg"
            },
            dimensions: {
                length: "5341 mm",
                width: "2000 mm",
                height: "1835 mm",
                wheelbase: "3295 mm",
                ground_clearance: "180 mm",
                fuel_tank_capacity: "90 liters",
                boot_space: "560 liters"
            }
        },
        features: [
            "Bespoke audio system",
            "Coach doors",
            "Rear seating with reclining and massage",
            "Night vision with pedestrian recognition",
            "Sky Lounge panoramic roof"
        ],
        catalog: "coupe"
    },

    {
        id: 4,
        title: "Bentley Bentayga EWB Azure First Edition, 2023",
        price: "45 000 000 ₽",
        category: "Luxury SUV",
        styles: [
            {
                name: "Azure First Edition",
                description: "Yuqori darajadagi qulaylik va nafislikka yo'naltirilgan maxsus versiya.",
                exterior_colors: ["Ice", "Kingfisher", "Viridian Green"],
                interior_colors: ["Portland", "Cumbrian Green", "Linen"]
            }
        ],
        images: [
            {
                url: "https://example.com/bentayga-ewb.jpg",
                alt: "Bentley Bentayga EWB Azure exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "Handcrafted aluminum",
                grille: "Matrix chrome",
                wheels: "22-inch polished wheels"
            },
            interior: {
                upholstery: "Hand-stitched leather",
                trim: ["Diamond knurling", "Dark Fiddleback Eucalyptus"],
                accents: "Chrome and gloss black",
                headliner: "Leather or Alcantara"
            }
        },
        specifications: {
            engine: {
                type: "4.0L V8 Twin-Turbo",
                horsepower: "542 hp",
                torque: "568 lb-ft",
                acceleration: "0-60 mph in 4.4 seconds"
            },
            transmission: "8-speed automatic",
            drivetrain: "All-wheel drive",
            fuel_economy: {
                city: "14 mpg",
                highway: "21 mpg"
            },
            dimensions: {
                length: "5305 mm",
                width: "1998 mm",
                height: "1742 mm",
                wheelbase: "3175 mm",
                ground_clearance: "180 mm",
                fuel_tank_capacity: "85 liters",
                boot_space: "484 liters"
            }
        },
        features: [
            "Rear-seat recline and massage",
            "Air suspension with continuous damping control",
            "Bang & Olufsen sound system",
            "Advanced driver assistance package"
        ],
        catalog: "sedan"
    },

    {
        id: 5,
        title: "Range Rover SV Autobiography, 2023",
        price: "38 000 000 ₽",
        category: "Luxury SUV",
        styles: [
            {
                name: "SV Autobiography Dynamic",
                description: "Zamonaviy hashamat va kuchning uyg'unligi.",
                exterior_colors: ["Santorini Black", "Byron Blue", "Carpathian Grey"],
                interior_colors: ["Ebony", "Vintage Tan", "Cirrus"]
            }
        ],
        images: [
            {
                url: "https://example.com/range-rover-sv.jpg",
                alt: "Range Rover SV Autobiography exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "Aluminum monocoque",
                grille: "Gloss black with chrome finish",
                wheels: "22-inch diamond-turned alloy"
            },
            interior: {
                upholstery: "Semi-aniline leather",
                trim: ["Mosaic Marquetry", "Grand Black veneer"],
                accents: "Noble chrome",
                headliner: "Suedecloth"
            }
        },
        specifications: {
            engine: {
                type: "5.0L V8 Supercharged",
                horsepower: "557 hp",
                torque: "516 lb-ft",
                acceleration: "0-60 mph in 5.1 seconds"
            },
            transmission: "8-speed automatic",
            drivetrain: "AWD with Terrain Response 2",
            fuel_economy: {
                city: "14 mpg",
                highway: "19 mpg"
            },
            dimensions: {
                length: "5200 mm",
                width: "2003 mm",
                height: "1869 mm",
                wheelbase: "3120 mm",
                ground_clearance: "220 mm",
                fuel_tank_capacity: "104 liters",
                boot_space: "900 liters"
            }
        },
        features: [
            "Executive Class rear seats",
            "Touch Pro Duo infotainment",
            "Hot-Stone massage function",
            "Active rear locking differential"
        ],
        catalog: "sedan"
    },
    {
        id: 6,
        title: "BMW XM Label Red, 2023",
        price: "39 000 000 ₽",
        category: "Performance Luxury SUV",
        styles: [
            {
                name: "Label Red",
                description: "Eng kuchli M SUV — eksklyuziv dizayn va quvvat uyg'unligi.",
                exterior_colors: ["Toronto Red", "Frozen Carbon Black", "Brooklyn Grey"],
                interior_colors: ["Sakhir Orange", "Black Merino", "Silverstone"]
            }
        ],
        images: [
            {
                url: "https://example.com/bmw-xm-red.jpg",
                alt: "BMW XM Label Red exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "High-performance composite",
                grille: "Illuminated kidney grille",
                wheels: "23-inch M light-alloy"
            },
            interior: {
                upholstery: "Merino leather",
                trim: ["Carbon fiber", "Aluminum Rhombicle"],
                accents: "M red stitching",
                headliner: "Anthracite Alcantara"
            }
        },
        specifications: {
            engine: {
                type: "4.4L V8 Plug-in Hybrid",
                horsepower: "738 hp",
                torque: "738 lb-ft",
                acceleration: "0-60 mph in 3.7 seconds"
            },
            transmission: "8-speed M Steptronic",
            drivetrain: "M xDrive AWD",
            fuel_economy: {
                city: "16 mpg",
                highway: "20 mpg"
            },
            dimensions: {
                length: "5110 mm",
                width: "2004 mm",
                height: "1755 mm",
                wheelbase: "3105 mm",
                ground_clearance: "205 mm",
                fuel_tank_capacity: "70 liters",
                boot_space: "527 liters"
            }
        },
        features: [
            "BMW IconicSounds Electric",
            "M Lounge with ambient light",
            "Dual curved display with iDrive 8",
            "Active roll stabilization"
        ],
        catalog: "limousine"
    },
    {
        id: 7,
        title: "Lexus LX 600 Ultra Luxury, 2023",
        price: "25 000 000 ₽",
        category: "Luxury SUV",
        styles: [
            {
                name: "Ultra Luxury",
                description: "To‘liq hashamatli 4 o‘rindiqli interyer va nafis dizayn.",
                exterior_colors: ["Manganese Luster", "Black", "Sonic Titanium"],
                interior_colors: ["Sunflare Brown", "Black", "White and Brown"]
            }
        ],
        images: [
            {
                url: "https://example.com/lexus-lx600.jpg",
                alt: "Lexus LX 600 Ultra Luxury exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "High-tensile steel",
                grille: "Spindle chrome grille",
                wheels: "22-inch machined alloy"
            },
            interior: {
                upholstery: "Semi-aniline leather",
                trim: ["Laser-cut wood", "Aluminum inserts"],
                accents: "Ambient lighting",
                headliner: "Suede"
            }
        },
        specifications: {
            engine: {
                type: "3.5L V6 Twin-Turbo",
                horsepower: "409 hp",
                torque: "479 lb-ft",
                acceleration: "0-60 mph in 6.9 seconds"
            },
            transmission: "10-speed automatic",
            drivetrain: "Full-time 4WD",
            fuel_economy: {
                city: "17 mpg",
                highway: "22 mpg"
            },
            dimensions: {
                length: "5100 mm",
                width: "1990 mm",
                height: "1895 mm",
                wheelbase: "2850 mm",
                ground_clearance: "200 mm",
                fuel_tank_capacity: "110 liters",
                boot_space: "460 liters"
            }
        },
        features: [
            "Rear seat ottoman and massagers",
            "Mark Levinson 25-speaker audio",
            "Quad-zone climate control",
            "Multi-terrain select with crawl control"
        ],
        catalog: "minivan"
    },
    {
        id: 8,
        title: "Cadillac Escalade-V, 2023",
        price: "28 000 000 ₽",
        category: "Luxury SUV",
        styles: [
            {
                name: "V-Series",
                description: "Amerikancha kuch va shovqinli quvvat V-seriyasida.",
                exterior_colors: ["Black Raven", "Dark Emerald Frost", "Crystal White"],
                interior_colors: ["Jet Black", "Dark Auburn", "Whisper Beige"]
            }
        ],
        images: [
            {
                url: "https://example.com/escalade-v.jpg",
                alt: "Cadillac Escalade V exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "High-strength steel frame",
                grille: "Black mesh grille with V badging",
                wheels: "22-inch polished alloys"
            },
            interior: {
                upholstery: "Semi-aniline leather",
                trim: ["Zebrano wood", "Carbon accents"],
                accents: "Suede microfiber roofliner",
                headliner: "Microfiber suede"
            }
        },
        specifications: {
            engine: {
                type: "6.2L Supercharged V8",
                horsepower: "682 hp",
                torque: "653 lb-ft",
                acceleration: "0-60 mph in 4.4 seconds"
            },
            transmission: "10-speed automatic",
            drivetrain: "AWD",
            fuel_economy: {
                city: "11 mpg",
                highway: "16 mpg"
            },
            dimensions: {
                length: "5382 mm",
                width: "2059 mm",
                height: "1948 mm",
                wheelbase: "3071 mm",
                ground_clearance: "175 mm",
                fuel_tank_capacity: "91 liters",
                boot_space: "722 liters"
            }
        },
        features: [
            "AKG 36-speaker Studio Reference audio",
            "Augmented reality navigation",
            "Super Cruise hands-free driving",
            "Electronic limited-slip differential"
        ],
        catalog: "pickup"
    },
    {
        id: 9,
        title: "Audi Q8 e-tron, 2023",
        price: "14 000 000 ₽",
        category: "Electric SUV",
        styles: [
            {
                name: "Sportback 55 quattro",
                description: "Elektrli kuch, zamonaviy dizayn va premium hashamat birlashmasi.",
                exterior_colors: ["Chronos Gray", "Mythos Black", "Plasma Blue"],
                interior_colors: ["Okapi Brown", "Pearl Beige", "Black"]
            }
        ],
        images: [
            {
                url: "https://example.com/q8-etron.jpg",
                alt: "Audi Q8 e-tron exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "Aluminum body panels",
                grille: "Closed-off Singleframe grille",
                wheels: "21-inch aerodynamic alloys"
            },
            interior: {
                upholstery: "Valcona leather",
                trim: ["Matte wood", "Brushed aluminum"],
                accents: "Ambient LED lighting",
                headliner: "Cloth or Alcantara"
            }
        },
        specifications: {
            engine: {
                type: "Dual Electric Motors",
                horsepower: "402 hp",
                torque: "490 lb-ft",
                acceleration: "0-60 mph in 5.4 seconds"
            },
            transmission: "Single-speed automatic",
            drivetrain: "quattro AWD",
            fuel_economy: {
                city: "90 MPGe",
                highway: "85 MPGe"
            },
            dimensions: {
                length: "4915 mm",
                width: "1935 mm",
                height: "1633 mm",
                wheelbase: "2928 mm",
                ground_clearance: "176 mm",
                fuel_tank_capacity: "—",
                boot_space: "569 liters"
            }
        },
        features: [
            "Virtual Cockpit Plus",
            "Matrix LED headlights",
            "Adaptive air suspension",
            "Charging up to 170 kW DC fast"
        ],
        catalog: "minivan"
    },
    {
        id: 10,
        title: "Genesis GV80 Prestige Signature, 2023",
        price: "10 500 000 ₽",
        category: "Luxury SUV",
        styles: [
            {
                name: "Prestige Signature",
                description: "Koreys nafisligi va zamonaviy texnologiyalar uyg‘unligi.",
                exterior_colors: ["Uyuni White", "Savile Silver", "Cardiff Green"],
                interior_colors: ["Dune Beige", "Black with Olive Ash", "Ultramarine Blue"]
            }
        ],
        images: [
            {
                url: "https://example.com/gv80-prestige.jpg",
                alt: "Genesis GV80 exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "Steel unibody",
                grille: "Crest grille with chrome",
                wheels: "22-inch turbine-style alloys"
            },
            interior: {
                upholstery: "Nappa leather",
                trim: ["Open-pore wood", "Aluminum"],
                accents: "Two-tone stitched panels",
                headliner: "Microsuede"
            }
        },
        specifications: {
            engine: {
                type: "3.5L Twin-Turbo V6",
                horsepower: "375 hp",
                torque: "391 lb-ft",
                acceleration: "0-60 mph in 5.3 seconds"
            },
            transmission: "8-speed automatic",
            drivetrain: "AWD with Multi-Terrain Control",
            fuel_economy: {
                city: "18 mpg",
                highway: "23 mpg"
            },
            dimensions: {
                length: "4945 mm",
                width: "1975 mm",
                height: "1715 mm",
                wheelbase: "2955 mm",
                ground_clearance: "205 mm",
                fuel_tank_capacity: "80 liters",
                boot_space: "735 liters"
            }
        },
        features: [
            "12.3” 3D digital cluster",
            "Lexicon 21-speaker audio",
            "Remote Smart Park Assist",
            "Heated/ventilated 2nd-row captain’s chairs"
        ]
    },
    {
        id: 11,
        title: "Tesla Model X Plaid, 2023",
        price: "20 000 000 ₽",
        category: "Electric SUV",
        styles: [
            {
                name: "Plaid",
                description: "Eng tez va texnologik SUV — Tesla elektromobilining cho‘qqisi.",
                exterior_colors: ["Pearl White Multi-Coat", "Solid Black", "Deep Blue Metallic"],
                interior_colors: ["Black and White", "All Black", "Cream"]
            }
        ],
        images: [
            {
                url: "https://example.com/tesla-modelx.jpg",
                alt: "Tesla Model X exterior",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "Aluminum body",
                grille: "Flush front",
                wheels: "20” or 22” turbine wheels"
            },
            interior: {
                upholstery: "Vegan leather",
                trim: ["Carbon fiber", "Wood décor"],
                accents: "Minimalist center console",
                headliner: "Premium fabric"
            }
        },
        specifications: {
            engine: {
                type: "Tri-motor Electric",
                horsepower: "1020 hp",
                torque: "1050+ lb-ft",
                acceleration: "0-60 mph in 2.5 seconds"
            },
            transmission: "Single-speed",
            drivetrain: "AWD",
            fuel_economy: {
                city: "98 MPGe",
                highway: "90 MPGe"
            },
            dimensions: {
                length: "5037 mm",
                width: "1999 mm",
                height: "1684 mm",
                wheelbase: "2965 mm",
                ground_clearance: "137-208 mm (adjustable)",
                fuel_tank_capacity: "—",
                boot_space: "2577 liters (total)"
            }
        },
        features: [
            "Autopilot with FSD capability",
            "17” center display with gaming support",
            "Falcon Wing doors",
            "HEPA air filtration system"
        ],
        catalog: "minivan"
    },
    {
        id: 12,
        title: "Toyota Land Cruiser 300 GR Sport, 2023",
        price: "11 500 000 ₽",
        category: "Premium SUV",
        styles: [
            {
                name: "GR Sport",
                description: "Off-road uchun tayyorlangan sport versiyasi va bardoshli dizayn.",
                exterior_colors: ["Precious White Pearl", "Attitude Black", "Dark Red Mica"],
                interior_colors: ["Black", "Black with Red Stitching"]
            }
        ],
        images: [
            {
                url: "https://example.com/landcruiser-300.jpg",
                alt: "Land Cruiser 300 GR Sport",
                category: "exterior"
            }
        ],
        materials: {
            exterior: {
                body: "Body-on-frame construction",
                grille: "GR mesh design",
                wheels: "18-inch matte-black alloys"
            },
            interior: {
                upholstery: "Synthetic leather with GR logos",
                trim: ["Brushed metal", "Soft-touch plastics"],
                accents: "Red stitching",
                headliner: "Fabric"
            }
        },
        specifications: {
            engine: {
                type: "3.3L Twin-Turbo Diesel V6",
                horsepower: "305 hp",
                torque: "700 Nm",
                acceleration: "0-100 km/h in 8.5 seconds"
            },
            transmission: "10-speed automatic",
            drivetrain: "Full-time 4WD with locking diffs",
            fuel_economy: {
                city: "10.5 L/100km",
                highway: "8.9 L/100km"
            },
            dimensions: {
                length: "4985 mm",
                width: "1980 mm",
                height: "1950 mm",
                wheelbase: "2850 mm",
                ground_clearance: "230 mm",
                fuel_tank_capacity: "110 liters",
                boot_space: "1131 liters"
            }
        },
        features: [
            "Multi-Terrain Monitor with underbody view",
            "Crawl Control and Multi-Terrain Select",
            "GR-badged leather steering wheel",
            "Adaptive Variable Suspension (AVS)"
        ],
        catalog: "suv"
    }

];

export const catalogs = [
  {
    id: 1,
    title: "Внедорожники",
    slug: "suv",
    description: "Полноразмерные и компактные внедорожники для города и бездорожья.",
    image: "/images/catalogs/suv.jpg",
  },
  {
    id: 2,
    title: "Седаны",
    slug: "sedan",
    description: "Классические и бизнес-седаны для комфортного передвижения.",
    image: "/images/catalogs/sedan.jpg",
  },
  {
    id: 3,
    title: "Купе",
    slug: "coupe",
    description: "Спортивные двухдверные автомобили с выразительным дизайном.",
    image: "/images/catalogs/coupe.jpg",
  },
  {
    id: 4,
    title: "Электромобили",
    slug: "electric",
    description: "Современные электромобили с нулевыми выбросами и высоким запасом хода.",
    image: "/images/catalogs/electric.jpg",
  },
  {
    id: 5,
    title: "Лимузины",
    slug: "limousine",
    description: "Премиальные удлинённые автомобили для представительских нужд.",
    image: "/images/catalogs/limousine.jpg",
  },
  {
    id: 6,
    title: "Пикапы",
    slug: "pickup",
    description: "Надёжные автомобили с грузовой платформой и повышенной проходимостью.",
    image: "/images/catalogs/pickup.jpg",
  },
  {
    id: 7,
    title: "Минивэны",
    slug: "minivan",
    description: "Идеальный выбор для семьи и путешествий на большие расстояния.",
    image: "/images/catalogs/minivan.jpg",
  },
];

