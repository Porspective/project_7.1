import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard';
import { ChevronRight } from 'lucide-react';

const BeefJerkyPage: React.FC = () => {
  const jerky = allProducts.filter(product => product.category === 'beef-jerky');
  
  React.useEffect(() => {
    document.title = "Beef Jerky - Robertson's Hams";
  }, []);

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
            <li className="text-gray-700 font-medium">Beef Jerky</li>
          </ol>
        </nav>
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4 text-gray-900">
            Premium Beef Jerky
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Handcrafted beef jerky made from premium cuts of beef, seasoned with our signature spice blend and slowly smoked for exceptional flavor.
          </p>
        </div>
        
        {/* Featured Product */}
        <div className="bg-red-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-red-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Bestseller
              </span>
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">
                Original Beef Jerky
              </h2>
              <p className="text-gray-700 mb-6">
                Our signature Original Beef Jerky starts with lean cuts of USDA Choice beef, marinated in our special blend of spices, and slowly smoked to perfection. The result is a tender, flavorful jerky that's been a customer favorite for generations.
              </p>
              <Link to="/product/jerky-01" className="btn-primary">
                View Details
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="Jerky.jpeg"
                alt="Original Beef Jerky" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {jerky.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeefJerkyPage;