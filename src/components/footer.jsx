import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="max-w-[1200px]  border-gray-700 mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">auto.uz</h2>
                        <p className="text-sm  mb-2 text-gray-600 font-semibold">
                            Авто.уз — один из самых посещаемых автомобильных сайтов в российском интернете.
                        </p>
                        <p className="text-sm text-gray-600 font-semibold">
                            Мы предлагаем большой выбор легковых автомобилей, грузового и коммерческого транспорта, мототехники, спецтехники и многих других видов транспортных средств.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold  mb-4">Навигация</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-sm  hover:text-blue-400 transition-colors">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="/cars" className="text-sm  hover:text-blue-400 transition-colors">
                                    Автомобили
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-sm  hover:text-blue-400 transition-colors">
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-sm  hover:text-blue-400 transition-colors">
                                    Пользовательское соглашение
                                </a>
                            </li>
                            <li>
                                <a href="/rules" className="text-sm  hover:text-blue-400 transition-colors">
                                    Правила рекомендаций
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold  mb-4">Контакты</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm ">
                                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                                <a href="mailto:support@auto.uz" className="hover:text-blue-400 transition-colors">
                                    support@auto.uz
                                </a>
                            </li>
                            <li className="flex items-center text-sm ">
                                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                                <a href="tel:+998123456789" className="hover:text-blue-400 transition-colors">
                                    +998 123 456 789
                                </a>
                            </li>
                            <li className="flex items-center text-sm ">
                                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                                <span>Ташкент, Узбекистан</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm  mb-4 md:mb-0">
                        <p>ООО «Сервисы размещения объявлений»</p>
                        <p>© 2025 auto.uz. Все права защищены.</p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-blue-400 transition-colors"
                        >
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-blue-400 transition-colors"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-blue-400 transition-colors"
                        >
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
