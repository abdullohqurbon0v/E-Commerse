import { Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const total = cart.reduce((acc, item) => {
        const price = Number(String(item.price).replace(/\s|₽/g, '')) || 0;
        return acc + price * (item.quantity || 1);
    }, 0);

    return (
        <div className="max-w-6xl mx-auto p-6 flex gap-10">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-6">
                    Ваша Корзина ({cart.reduce((acc, item) => acc + (item.quantity || 1), 0)} {cart.reduce((acc, item) => acc + (item.quantity || 1), 0) === 1 ? 'товар' : 'товаров'})
                </h1>

                {cart.length === 0 ? (
                    <p className="text-gray-600">Ваша корзина пуста.</p>
                ) : (
                    <ul className="space-y-6">
                        {cart.map(item => {
                            const price = Number(String(item.price).replace(/\s|₽/g, '')) || 0;
                            const itemTotal = price * (item.quantity || 1);

                            return (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between p-4  rounded-lg shadow-sm bg-white"
                                >
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold">{item.title}</h2>
                                            <p className="text-gray-500">{item.category}</p>
                                            <div className="flex items-center gap-3 mt-3 bg-gray-100 rounded-full w-max px-4 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="bg-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200"
                                                >
                                                    -
                                                </button>
                                                <span className="font-semibold min-w-[20px] text-center">{item.quantity || 1}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="bg-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <strong className="mb-1">{itemTotal.toLocaleString()} ₽</strong>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                            aria-label="Удалить товар"
                                        >
                                            <Trash2 />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <div className="w-80 p-6 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Заказ</h2>
                <p>
                    Товары: <strong>{cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}</strong>
                </p>
                <p className="mt-2">
                    Сумма: <strong>{total.toLocaleString()} ₽</strong>
                </p>

                <div className="mt-6 flex flex-col gap-3">
                    <p className="text-lg font-semibold">
                        Итого: <span>{total.toLocaleString()} ₽</span>
                    </p>
                    <Link
                        to="/checkout"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg text-center"
                    >
                        Перейти к оформлению
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
