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
    if (!form.phone.match(/^\d{10,15}$/)) errs.phone = 'Введите корректный номер телефона';
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

      // Имитация асинхронной отправки (например, запрос к серверу)
      setTimeout(() => {
        setLoading(false);
        setOrderComplete(true);

        // Сохраняем заказ в localStorage (для примера)
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(form);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Можно очистить форму или не очищать, по желанию
        setForm({
          name: '',
          email: '',
          cardNumber: '',
          phone: '',
        });
      }, 2000);
    }
  };

  if (orderComplete) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Спасибо за заказ!</h1>
        <p className="mb-6">Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.</p>
        <button
          onClick={() => setOrderComplete(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Сделать новый заказ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl mb-6 font-bold">Оформление заказа</h1>
      <form onSubmit={handleSubmit} noValidate>
        {['name', 'email', 'cardNumber', 'phone'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block mb-1 font-semibold capitalize" htmlFor={field}>
              {field === 'cardNumber' ? 'Номер карты' : field === 'phone' ? 'Телефон' : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              maxLength={field === 'cardNumber' ? 16 : undefined}
              className={`w-full p-2 border rounded ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
              id={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              disabled={loading}
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold transition ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
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
            </span>
          ) : (
            'Оплатить'
          )}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
