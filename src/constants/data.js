export const products = [
    {
        id: 3,
        title: "Rolls-Royce Cullinan Black Badge, 2023",
        price: 62000000 ,
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
                url: "https://pictures.dealer.com/r/rollsroyceofaustin/0975/8a06b82de9392212406beaa169c45ba9x.jpg",
                alt: "Rolls-Royce Cullinan Black Badge exterior",
                category: "exterior"
            },
            {
                url: "https://www.motortrend.com/uploads/sites/5/2020/06/2020-rolls-royce-cullinan.png",
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
        price: 45000000,
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
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymHeDYDWdEnL1Z0qcM5XjMx_wLQSq0pFtKA&s",
                alt: "Bentley Bentayga EWB Azure exterior",
                category: "exterior"
            },

            {
                url: "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2023/bentley/bentayga-ewb/azure/suv/exteriorColors/2023_bentley_bentayga_ewb_azure_032_org.png",
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
        price: 38000000,
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
                url: "https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2023/land-rover/range-rover/sv-swb/suv/exteriorColors/2023_land-rover_range-rover_sv-swb_032_1ej.png",
                alt: "Range Rover SV Autobiography exterior",
                category: "exterior"
            },
            {
                url: "https://minerva.leadboxhq.com/wp-content/uploads/2022/09/2023_landrover_rangerover_autobiography_SR_FujiWhite-removebg-preview-800x289.png",
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
        price: 39000000,
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
                url: "https://vehicle-images.dealerinspire.com/c941-18003890/5YM33CS0XS9Z51069/7202607e8b5eea6cd1e07d13685ebe61.jpg",
                alt: "BMW XM Label Red exterior",
                category: "exterior"
            },
            {
                url: "https://autoimage.capitalone.com/dealer/2024-BMW-XM-RED_LABEL-5YM33CS07R9U83179-vauto_5YM33CS07R9U83179_MP7433-403953995ae416971807baeafee84a65-bg_1.jpg?width=640&height=480",
                alt: "BMW XM Label Red exterior",
                category: "exterior"
            },
            {
                url: "https://cdn.imagin.studio/getImage?customer=gbxlcr-vehicle-management-ltd&billingTag=&make=BMW&modelFamily=Xm&modelRange=XM%20ESTATE%20SPECIAL%20EDITIONS&modelVariant=SUV&powerTrain=Petrol%20Parallel%20PHEV&modelYear=2024&trim=Label%20Red%20Edition&bodySize=5&fileType=webp&angle=25",
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
        price: 25000000,
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
                url: "https://images.carprices.com/pricebooks_data/usa/colorized/2023/Lexus/View2/LX_600/Ultra_Luxury/9624_085.png",
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
        price: 28000000,
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
                url: "https://media.assets.sincrod.com/websites/content/motp-dublin-portal/about_messages/progressive-2.0/f9388805fb924b4e88aed383d57811b8_c2x0-956x540.jpg",
                alt: "Cadillac Escalade V exterior",
                category: "exterior"
            },
            {
                url: "https://di-uploads-pod32.dealerinspire.com/cadillacofnaperville/uploads/2023/01/2023-Cadillac-Escalade-PREMIUM-LUXURY.png",
                alt: "Cadillac Escalade V exterior",
                category: "exterior"
            },
            {
                url: "https://di-sitebuilder-assets.dealerinspire.com/GMimages/gmMLP/cadillac/Escalade/2024/Colors/Galactic+Gray+Metallic.png",
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
        price: 14000000,
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
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHRlHJdHntK1SgGhl9aPoVv_uU-eT-K9dA&s",
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
        price: 10500000,
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
                url: "https://www.genesis.com/content/dam/genesis-p2/ca/assets/models/gv80/my25-ca/colour/genesis-gv80-3_5-colour-glossy-savile-silver-small.png",
                alt: "Genesis GV80 exterior",
                category: "exterior"
            },
            {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zm2jtYlFOuVZxBeUTJiLnY0gl4dZdAey-Q&s",
                alt: "Genesis GV80 exterior",
                category: "exterior"
            },
            {
                url: "https://di-uploads-pod6.dealerinspire.com/siddillonautogroup/uploads/2024/09/2024-Genesis-GV80-Prestige-Signature.jpg",
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
        price: 20000000,
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
                url: "https://autopremiumgroup.ru/m/_versions/catalog/autos/2023/tesla_model_x_2023_vnedorozhnik_5dv/plaid/model_x_23_plaid_pearl_white_image_series.jpg",
                alt: "Tesla Model X exterior",
                category: "exterior"
            },
            {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8CLmdtDZv2FJ9TCgWURr1H-OjiuXbVZdkA&s",
                alt: "Tesla Model X exterior",
                category: "exterior"
            },
            {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqk6IUUKWzHs4ANBiGo7PD8pnvByhjZYstw&s",
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
        price: 11500000 ,
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
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoTAJPIcG3W_ufny1mUzrXsnu-cNqJeKfAA&s",
                alt: "Land Cruiser 300 GR Sport",
                category: "exterior"
            },
            {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB0EmGJrJlEIwa2Akj3BS-CZ_Y-N6tz2KJw&s",
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
