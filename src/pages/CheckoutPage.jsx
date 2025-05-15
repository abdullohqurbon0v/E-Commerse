import React, { useState } from 'react';

const CheckoutPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        cardNumber: '',
        phone: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Введите имя';
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Неверный email';
        if (!form.cardNumber.match(/^\d{16}$/)) errs.cardNumber = 'Введите 16 цифр номера карты';
        return errs;
    };

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setOrderComplete(true);
                const orders = JSON.parse(localStorage.getItem('orders')) || [];
                orders.push(form);
                localStorage.setItem('orders', JSON.stringify(orders));
                setForm({
                    name: '',
                    email: '',
                    cardNumber: '',
                    phone: '',
                });
            }, 1000);
        }
    };

    if (orderComplete) {
        return (
            <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg text-center transform transition-all duration-500 scale-100">
                <div className="flex justify-center mb-4">
                    <svg className="w-16 h-16 text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Спасибо за заказ!</h1>
                <p className="mb-6 text-gray-600">Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.</p>
                <button
                    onClick={() => setOrderComplete(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                    Сделать новый заказ
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 mt-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Оформление заказа</h1>
            <div className="space-y-6">
                {['name', 'email', 'cardNumber', 'phone'].map((field) => (
                    <div className="relative" key={field}>
                        <input
                            type={field === 'email' ? 'email' : field === 'cardNumber' ? 'text' : 'tel'}
                            maxLength={field === 'cardNumber' ? 16 : undefined}
                            className={`w-full p-3 pt-5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${errors[field] ? 'border-red-500' : 'border-gray-300'
                                } peer`}
                            id={field}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder=" "
                        />
                        <label
                            htmlFor={field}
                            className="absolute left-3 top-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            {field === 'cardNumber' ? 'Номер карты' :
                                field === 'phone' ? 'Телефон' :
                                    field === 'name' ? 'Имя' : 'Email'}
                        </label>
                        {errors[field] && <p className="text-red-500 text-sm mt-1 animate-pulse">{errors[field]}</p>}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                        } flex items-center justify-center gap-2`}
                >
                    {loading ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Оплата...
                        </>
                    ) : (
                        'Оплатить'
                    )}
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
