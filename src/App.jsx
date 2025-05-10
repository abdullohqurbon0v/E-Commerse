import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import MainPage from './pages/main'
import Product from './pages/product'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='/catalogs' element={<MainPage />} />
                <Route path='/product/:id' element={<Product />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App

const products = [
    {
        id: 1,
        title: "Gaz Plita"
    },
    {
        id: 2,
        title: "Chang Yutgich"
    }
]
