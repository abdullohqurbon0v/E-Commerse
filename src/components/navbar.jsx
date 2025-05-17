import { ArrowLeftRight, Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoritesCounter from '../components/FavoritesCounter';
import { catalogs } from '../constants/data';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart = [] } = useCart();

    return (
        <nav className="bg-white shadow-lg py-3 relative z-50">
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="h-7 w-7" />
                    </button>
                    <h1 className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <Link to="/" className="focus:outline-none">auto.ru</Link>
                    </h1>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center group cursor-pointer">
                        <FavoritesCounter />
                        <p className="text-sm text-gray-600 group-hover:text-red-500 transition-colors duration-200 hidden md:block">
                            Избранное
                        </p>
                    </div>
                    <Link to={'/compare'}>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <ArrowLeftRight className="h-7 w-7 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" />
                            <p className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors duration-200 hidden md:block">
                                Сравнить
                            </p>
                        </div>
                    </Link>

                    <Link to="/cart" className="relative flex flex-col items-center group">
                        <ShoppingCart className="h-7 w-7 text-gray-600 group-hover:text-green-500 transition-colors duration-200" />
                        <p className="text-sm text-gray-600 group-hover:text-green-500 transition-colors duration-200 hidden md:block">
                            Корзина
                        </p>
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">Каталог</h2>
                    <button
                        className="text-gray-700 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="overflow-y-auto h-full p-4 space-y-2">
                    {catalogs.map((catalog) => (
                        <Link
                            to={`/catalog/${catalog.slug}`}
                            key={catalog.id}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100 transition"
                        >
                            {catalog.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
