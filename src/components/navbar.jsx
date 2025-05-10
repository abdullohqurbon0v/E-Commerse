import { ArrowLeftRight, Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import { catalogs } from '../constants/data';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg py-3 relative">
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button
                        className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-7 w-7" />
                    </button>
                    <h1 className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <a href="/" className="focus:outline-none">auto.uz</a>
                    </h1>
                </div>
                <form className="hidden md:flex items-center w-full max-w-xl bg-gray-100 rounded-2xl px-5 py-2 shadow-sm">
                    <Search className="h-6 w-6 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search cars..."
                        className="bg-transparent w-full ml-3 outline-none text-gray-800 placeholder-gray-500 text-base"
                    />
                </form>
                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center group">
                        <Heart className="h-7 w-7 text-gray-600 group-hover:text-red-500 transition-colors duration-200" />
                        <p className="text-sm text-gray-600 group-hover:text-red-500 transition-colors duration-200 hidden md:block">
                            Избранное
                        </p>
                    </div>
                    <div className="flex flex-col items-center group">
                        <ArrowLeftRight className="h-7 w-7 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" />
                        <p className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors duration-200 hidden md:block">
                            Сравнения
                        </p>
                    </div>
                    <div className="flex flex-col items-center group">
                        <ShoppingCart className="h-7 w-7 text-gray-600 group-hover:text-green-500 transition-colors duration-200" />
                        <p className="text-sm text-gray-600 group-hover:text-green-500 transition-colors duration-200 hidden md:block">
                            Корзина
                        </p>
                    </div>
                    <button
                        className="md:flex hidden flex-col items-center group text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-7 w-7" />
                        <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-200 hidden md:block">
                            Каталог
                        </p>
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full max-w-[500px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Каталог</h2>
                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X className="h-7 w-7" />
                    </button>
                </div>
                <div className="p-6">
                    <form className="flex items-center bg-gray-100 rounded-xl px-5 py-3 mb-6 shadow-sm">
                        <Search className="h-6 w-6 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search cars..."
                            className="bg-transparent w-full ml-4 outline-none text-gray-800 placeholder-gray-500 text-base"
                        />
                    </form>
                    <ul className="space-y-4">
                        <p className="text-lg font-semibold text-gray-900">Каталог</p>
                        {catalogs.map((catalog) => (
                            <li key={catalog.id}>
                                <a
                                    href={`/catalog/${catalog.slug}`}
                                    className="block text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200 py-2 hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {catalog.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-opacity-60 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;
