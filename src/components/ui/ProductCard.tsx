import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the cart button
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <article className="card group">
        <div className="relative overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute top-4 right-4 bg-red-800 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              New
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-serif text-xl font-semibold mb-1 text-gray-900 hover:text-red-800 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-red-800 font-semibold text-lg">${product.price.toFixed(2)}</span>
            <div className="flex space-x-2">
              <button 
                onClick={handleAddToCart}
                className="bg-red-800 text-white p-2 rounded-full hover:bg-red-900 transition-colors"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;