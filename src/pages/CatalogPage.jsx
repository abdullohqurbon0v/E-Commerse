import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { catalogs, products } from '../constants/data';

const CatalogPage = () => {
    const { slug } = useParams();
    const filteredProducts = products.filter(
        (product) => product.catalog === slug
    );
    const category = catalogs.find(c => c.slug === slug);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 capitalize">
                Категория: {category ? category.title : slug}
            </h1>

            {filteredProducts.length === 0 ? (
                <p className="text-gray-600">Нет товаров в этой категории.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CatalogPage;
