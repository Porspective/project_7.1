import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { ArrowRight } from 'lucide-react';
import { featuredProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Products</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover our most popular premium meats, prepared with traditional recipes passed down through generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;