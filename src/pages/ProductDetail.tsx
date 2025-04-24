import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ChevronRight, Clock, Truck } from 'lucide-react';
import { allProducts } from '../data/products';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/ui/ProductCard';
import toast from 'react-hot-toast';
import type { Product } from '../types/product';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  
  useEffect(() => {
    // Simulate a data fetch
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === id);
      setProduct(foundProduct || null);
      setIsLoading(false);
      
      if (foundProduct) {
        document.title = `${foundProduct.name} - Robertson's Hams`;
      } else {
        document.title = "Product Not Found - Robertson's Hams";
      }
    }, 300);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast.success(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart!`);
    }
  };
  
  if (isLoading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-800"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="btn-primary">
          Return to Shop
        </Link>
      </div>
    );
  }
  
  // Find related products (same category)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  // Handle quantity changes
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-red-800">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link to="/shop" className="text-gray-500 hover:text-red-800">
                Shop
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link 
                to={`/products/${product.category}`} 
                className="text-gray-500 hover:text-red-800"
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-700 font-medium">
              {product.name}
            </li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <span className="text-amber-500 mr-2">★★★★★</span>
              <span className="text-gray-600">(24 reviews)</span>
            </div>
            
            <p className="text-2xl font-semibold text-red-800 mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="prose prose-lg mb-6">
              <p>{product.description}</p>
              <p>
                All of our products are made with the finest ingredients and prepared using traditional methods passed down through generations of the Robertson family.
              </p>
            </div>
            
            {/* Shipping & Returns */}
            <div className="flex space-x-6 mb-8">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Processing Time</h4>
                  <p className="text-gray-600 text-sm">Ships within 1-2 business days</p>
                </div>
              </div>
              <div className="flex items-start">
                <Truck className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Shipping</h4>
                  <p className="text-gray-600 text-sm">2-3 business days delivery</p>
                </div>
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block font-medium mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={handleDecreaseQuantity}
                  className="w-10 h-10 bg-gray-200 rounded-l-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 h-10 border-y border-gray-300 text-center focus:outline-none"
                />
                <button 
                  onClick={handleIncreaseQuantity}
                  className="w-10 h-10 bg-gray-200 rounded-r-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex-grow md:flex-grow-0 md:min-w-[200px]"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="btn-outline">
                <Heart className="w-5 h-5 mr-2" />
                Save
              </button>
              <button className="btn-outline">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
            
            {/* Product Meta */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm">
                <span className="font-medium text-gray-700">Categories:</span>{' '}
                <Link to={`/products/${product.category}`} className="text-red-800 hover:underline">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}
                </Link>
              </p>
              {product.weight && (
                <p className="text-gray-600 text-sm mt-1">
                  <span className="font-medium text-gray-700">Weight:</span> {product.weight}
                </p>
              )}
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-medium text-gray-700">SKU:</span> {product.id}
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-bold mb-8 text-gray-900">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;