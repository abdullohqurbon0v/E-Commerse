import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import CheckoutPage from './pages/CheckoutPage';
import ComparePage from './pages/ComparePage';
import { FavouritePage } from './pages/FavouritePage';
import MainPage from './pages/main';
import Product from './pages/product';

const App = () => {
    return (

        <FavoritesProvider>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path="/catalog/:slug" element={<CatalogPage />} />
                    <Route index element={<MainPage />} />
                    <Route path="/catalogs" element={<MainPage />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/favorites" element={<FavouritePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path='/compare' element={<ComparePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
                <Toaster position="top-center" />
                <Footer />
            </CartProvider>
        </FavoritesProvider>

    );
};

export default App;
