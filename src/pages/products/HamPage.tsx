import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard';
import { ChevronRight } from 'lucide-react';

const HamPage: React.FC = () => {
  const hams = allProducts.filter(product => product.category === 'ham');
  
  React.useEffect(() => {
    document.title = "Hams - Robertson's Hams";
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
            <li className="text-gray-700 font-medium">Hams</li>
          </ol>
        </nav>
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4 text-gray-900">
            Hickory Smoked Hams
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our signature hickory-smoked hams have been a Southern tradition since 1947. Slow-cured and smoked over real hickory wood for an unforgettable flavor.
          </p>
        </div>
        
        {/* Featured Product */}
        <div className="bg-amber-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-red-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Customer Favorite
              </span>
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">
                Whole Country Ham
              </h2>
              <p className="text-gray-700 mb-6">
                Our award-winning whole country ham is cured the old-fashioned way, aged for a minimum of 6 months to develop its rich, deep flavor. Each ham is hand-selected and smoked over hickory for days to achieve perfection.
              </p>
              <Link to="/product/ham-01" className="btn-primary">
                View Details
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="Cooked_ham.jpeg"
                alt="Whole Country Ham" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {hams.map((ham) => (
            <ProductCard key={ham.id} product={ham} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HamPage;