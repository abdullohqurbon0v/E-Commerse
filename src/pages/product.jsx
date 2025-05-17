import { ChevronRight, Star } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../constants/data";

const Product = () => {
    const { id } = useParams();
    const product = products.filter((x) => x.id == id)[0];

    return (
        <div className="min-h-screen bg-gray-100 font-mono">
            <header className="bg-gray-400 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
                    <p className="mt-2 text-lg text-amber-300">{product.category}</p>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="rounded-xl shadow-lg"
                    >
                        {product.images.map((image) => (
                            <SwiperSlide key={image.url}>
                                <div className="relative h-96 w-full">
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-emerald-900/70 text-white px-3 py-1 rounded-md text-sm">
                                        {image.category === "exterior" ? "Внешний вид" : "Интерьер"}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                О продукте
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Mercedes-Benz Maybach GLS 600, 2023 — это ультра-люксовый внедорожник,
                                предлагающий высочайший уровень комфорта, современные технологии и
                                уникальный дизайн. Этот автомобиль воплощает в себе самые важные
                                характеристики бренда Maybach.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-3xl font-bold text-emerald-900">
                                    {product.price}
                                </span>
                                <button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center space-x-2 py-2 px-4 rounded-md cursor-pointer">
                                    <span>Купить</span>
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Технические характеристики
                            </h2>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <strong>Двигатель:</strong> {product.specifications.engine.type}
                                </li>
                                <li>
                                    <strong>Мощность:</strong>{" "}
                                    {product.specifications.engine.horsepower}
                                </li>
                                <li>
                                    <strong>Разгон:</strong>{" "}
                                    {product.specifications.engine.acceleration}
                                </li>
                                <li>
                                    <strong>Трансмиссия:</strong> {product.specifications.transmission}
                                </li>
                                <li>
                                    <strong>Расход топлива:</strong> Город -{" "}
                                    {product.specifications.fuel_economy.city}, Трасса -{" "}
                                    {product.specifications.fuel_economy.highway}
                                </li>
                                <li>
                                    <strong>Размеры:</strong> Длина -{" "}
                                    {product.specifications.dimensions.length}, Ширина -{" "}
                                    {product.specifications.dimensions.width}, Высота -{" "}
                                    {product.specifications.dimensions.height}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Стили дизайна
                            </h2>
                            {product.styles.map((style) => (
                                <div key={style.name} className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-700">
                                        {style.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{style.description}</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        <strong>Внешние цвета:</strong>{" "}
                                        {style.exterior_colors.join(", ")}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Внутренние цвета:</strong>{" "}
                                        {style.interior_colors.join(", ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Материалы
                            </h2>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Внешние</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>
                                    <strong>Кузов:</strong> {product.materials.exterior.body}
                                </li>
                                <li>
                                    <strong>Решетка радиатора:</strong>{" "}
                                    {product.materials.exterior.grille}
                                </li>
                                <li>
                                    <strong>Колеса:</strong>{" "}
                                    {product.materials.exterior.wheels}
                                </li>
                            </ul>
                            <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">
                                Внутренние
                            </h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>
                                    <strong>Обивка:</strong> {product.materials.interior.upholstery}
                                </li>
                                <li>
                                    <strong>Отделка:</strong>{" "}
                                    {product.materials.interior.trim.join(", ")}
                                </li>
                                <li>
                                    <strong>Потолок:</strong> {product.materials.interior.headliner}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Основные особенности
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-gray-600">
                                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Product;
