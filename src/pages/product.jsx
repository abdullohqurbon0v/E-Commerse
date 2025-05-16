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
    const { id } = useParams()
    const product = products.filter(x => x.id == id)[0]

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
                                        {image.category === "exterior" ? "Tashqi ko‘rinish" : "Ichki ko‘rinish"}
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
                                Mahsulot haqida
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Mercedes-Benz Maybach GLS 600, 2023 — bu ultra-lyuks SUV bo‘lib,
                                eng yuqori darajadagi komfort, zamonaviy texnologiyalar va o‘zgacha
                                dizaynni taklif etadi. Ushbu avtomobil Maybach brendining eng muhim
                                xususiyatlarini o‘zida mujassamlashtiradi.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-3xl font-bold text-emerald-900">
                                    {product.price}
                                </span>
                                <button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center space-x-2 py-2 px-4 rounded-md cursor-pointer">
                                    <span>Sotib olish</span>
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Texnik xususiyatlar
                            </h2>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <strong>Dvigatel:</strong> {product.specifications.engine.type}
                                </li>
                                <li>
                                    <strong>Ot kuchi:</strong>{" "}
                                    {product.specifications.engine.horsepower}
                                </li>
                                <li>
                                    <strong>Tezlanish:</strong>{" "}
                                    {product.specifications.engine.acceleration}
                                </li>
                                <li>
                                    <strong>Uzatma:</strong> {product.specifications.transmission}
                                </li>
                                <li>
                                    <strong>Yoqilg‘i sarfi:</strong> Shahar -{" "}
                                    {product.specifications.fuel_economy.city}, Shosse -{" "}
                                    {product.specifications.fuel_economy.highway}
                                </li>
                                <li>
                                    <strong>O‘lchamlar:</strong> Uzunlik -{" "}
                                    {product.specifications.dimensions.length}, Kenglik -{" "}
                                    {product.specifications.dimensions.width}, Balandlik -{" "}
                                    {product.specifications.dimensions.height}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Styles and Materials */}
                    <div>
                        {/* Styles */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Dizayn stillari
                            </h2>
                            {product.styles.map((style) => (
                                <div key={style.name} className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-700">
                                        {style.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{style.description}</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        <strong>Tashqi ranglar:</strong>{" "}
                                        {style.exterior_colors.join(", ")}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Ichki ranglar:</strong>{" "}
                                        {style.interior_colors.join(", ")}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Materials */}
                        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Materiallar
                            </h2>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Tashqi</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>
                                    <strong>Korpus:</strong> {product.materials.exterior.body}
                                </li>
                                <li>
                                    <strong>Panjarasi:</strong>{" "}
                                    {product.materials.exterior.grille}
                                </li>
                                <li>
                                    <strong>G‘ildiraklar:</strong>{" "}
                                    {product.materials.exterior.wheels}
                                </li>
                            </ul>
                            <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">
                                Ichki
                            </h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>
                                    <strong>Qoplama:</strong> {product.materials.interior.upholstery}
                                </li>
                                <li>
                                    <strong>Bezak:</strong>{" "}
                                    {product.materials.interior.trim.join(", ")}
                                </li>
                                <li>
                                    <strong>Shift:</strong> {product.materials.interior.headliner}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="bg-white p-6 rounded-xl shadow-lg mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Asosiy xususiyatlar
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
