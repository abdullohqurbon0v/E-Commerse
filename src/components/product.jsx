import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from '../context/FavoritesContext';

const ProductCard = ({ product }) => {
    const { toggleFavorite, isFavorite } = useFavorites();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const liked = isFavorite(product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation(); // предотвратить всплытие
        const productForCart = {
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.images[0]?.url || '',
        };

        addToCart(productForCart);
        toast.success("Товар добавлен в корзину");
    };

    const handleToggleFavorite = (e) => {
        e.stopPropagation(); // предотвратить всплытие
        toggleFavorite(product);
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="bg-white relative shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
        >
            <div
                className="absolute top-3 right-3 cursor-pointer z-10"
                onClick={handleToggleFavorite}
            >
                <Heart
                    size={24}
                    className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
                />
            </div>

            <div>
                <img
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    className="w-full h-56 object-contain"
                />
            </div>

            <div className="p-4 flex flex-col justify-between h-48">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-emerald-700">{product.price}</span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg z-10"
                    >
                        <ShoppingCart size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
