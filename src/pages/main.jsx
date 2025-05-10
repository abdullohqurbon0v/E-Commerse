import React from "react";
import Product from "../components/product";
import { products } from "../constants/data";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <section className="max-w-[1200px] mx-auto py-10">
                <h1 className="text-3xl font-semibold mb-4">Рекомендации</h1>
                <div className="grid grid-cols-4 gap-5">
                    {products.map(item => (
                        <Product product={item} />
                    ))}
                </div>
            </section>
        </div>
    );
}
