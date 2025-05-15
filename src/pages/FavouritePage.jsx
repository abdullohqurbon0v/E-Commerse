import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext';

export const FavouritePage = () => {
    const { favorites } = useFavorites();

    if (!favorites.length) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
                <h2 className="text-2xl mb-4">Избранных товаров нет</h2>
                <p>Добавьте товары в избранное, чтобы увидеть их здесь.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen  py-10 px-5 max-w-[1200px] mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-emerald-700">Избранные товары</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {favorites.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};
