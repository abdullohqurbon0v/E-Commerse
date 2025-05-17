
import { ChevronRight, Star } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../constants/data';

const ComparePage = () => {
    const [selectedProduct1, setSelectedProduct1] = useState(products[0]);
    const [selectedProduct2, setSelectedProduct2] = useState(products[1] || products[0]);

    const handleProduct1Change = (e) => {
        const selectedId = e.target.value;
        const newProduct = products.find((product) => product.id == selectedId);
        if (newProduct && newProduct.id !== selectedProduct2.id) {
            setSelectedProduct1(newProduct);
        }
    };

    const handleProduct2Change = (e) => {
        const selectedId = e.target.value;
        console.log(selectedId)
        const newProduct = products.find((product) => product.id == selectedId);
        if (newProduct && newProduct.id !== selectedProduct1.id) {
            setSelectedProduct2(newProduct);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-mono">
            <header className="bg-gray-400 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight">Сравнение автомобилей</h1>
                    <p className="mt-2 text-lg text-amber-300">Сравните ключевые характеристики</p>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Выберите автомобили для сравнения</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Автомобиль 1</label>
                            <select
                                value={selectedProduct1.id}
                                onChange={handleProduct1Change}
                                className="w-full p-2 border rounded-md text-gray-600"
                            >
                                {products.map((product) => (
                                    <option key={product.id} value={product.id} disabled={product.id === selectedProduct2.id}>
                                        {product.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Автомобиль 2</label>
                            <select
                                value={selectedProduct2.id}
                                onChange={handleProduct2Change}
                                className="w-full p-2 border rounded-md text-gray-600"
                            >
                                {products.map((product) => (
                                    <option key={product.id} value={product.id} disabled={product.id === selectedProduct1.id}>
                                        {product.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedProduct1.title}</h2>
                        <img
                            src={selectedProduct1.images[0].url}
                            alt={selectedProduct1.images[0].alt}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="text-gray-600 mb-4">
                            <p className="text-lg font-bold text-emerald-900">{selectedProduct1.price}</p>
                            <p className="text-sm">{selectedProduct1.category}</p>
                        </div>

                        <Link to={`/product/${selectedProduct1.id}`}>
                            <button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center space-x-2 py-2 px-4 rounded-md cursor-pointer w-full justify-center">
                                <span>Подробнее</span>
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedProduct2.title}</h2>
                        <img
                            src={selectedProduct2.images[0].url}
                            alt={selectedProduct2.images[0].alt}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="text-gray-600 mb-4">
                            <p className="text-lg font-bold text-emerald-900">{selectedProduct2.price}</p>
                            <p className="text-sm">{selectedProduct2.category}</p>
                        </div>
                        <Link to={`/product/${selectedProduct2.id}`}>
                            <button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center space-x-2 py-2 px-4 rounded-md cursor-pointer w-full justify-center">
                                <span>Подробнее</span>
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Сравнение характеристик</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-gray-600">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 px-4 font-semibold">Характеристика</th>
                                    <th className="py-3 px-4 font-semibold">{selectedProduct1.title}</th>
                                    <th className="py-3 px-4 font-semibold">{selectedProduct2.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-3 px-4">Двигатель</td>
                                    <td className="py-3 px-4">{selectedProduct1.specifications.engine.type}</td>
                                    <td className="py-3 px-4">{selectedProduct2.specifications.engine.type}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4">Мощность</td>
                                    <td className="py-3 px-4">{selectedProduct1.specifications.engine.horsepower}</td>
                                    <td className="py-3 px-4">{selectedProduct2.specifications.engine.horsepower}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4">Разгон</td>
                                    <td className="py-3 px-4">{selectedProduct1.specifications.engine.acceleration}</td>
                                    <td className="py-3 px-4">{selectedProduct2.specifications.engine.acceleration}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4">Трансмиссия</td>
                                    <td className="py-3 px-4">{selectedProduct1.specifications.transmission}</td>
                                    <td className="py-3 px-4">{selectedProduct2.specifications.transmission}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4">Расход топлива (Город/Трасса)</td>
                                    <td className="py-3 px-4">{selectedProduct1.specifications.fuel_economy.city} / {selectedProduct1.specifications.fuel_economy.highway}</td>
                                    <td className="py-3 px-4">{selectedProduct2.specifications.fuel_economy.city} / {selectedProduct2.specifications.fuel_economy.highway}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4">Размеры (Д/Ш/В)</td>
                                    <td className="py-3 px-4">{selectedProduct1.specifications.dimensions.length} / {selectedProduct1.specifications.dimensions.width} / {selectedProduct1.specifications.dimensions.height}</td>
                                    <td className="py-3 px-4">{selectedProduct2.specifications.dimensions.length} / {selectedProduct2.specifications.dimensions.width} / {selectedProduct2.specifications.dimensions.height}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Сравнение особенностей</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">{selectedProduct1.title}</h3>
                            {selectedProduct1.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-gray-600 mb-2">
                                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">{selectedProduct2.title}</h3>
                            {selectedProduct2.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-gray-600 mb-2">
                                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ComparePage;
