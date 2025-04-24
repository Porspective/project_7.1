import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard';
import { ChevronRight } from 'lucide-react';

const HamStandPage: React.FC = () => {
  const accessories = allProducts.filter(product => product.category === 'accessories');
  const hamStands = accessories.filter(product => product.name.toLowerCase().includes('stand'));
  
  React.useEffect(() => {
    document.title = "Ham Stands - Robertson's Hams";
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
            <li>
              <Link to="/shop?category=accessories" className="text-gray-500 hover:text-red-800">
                Accessories
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-700 font-medium">Ham Stands</li>
          </ol>
        </nav>
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4 text-gray-900">
            Ham Stands
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our hand-crafted ham stands make carving and serving your Robertson's Ham easier and more elegant than ever.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src="https://images.pexels.com/photos/5907596/pexels-photo-5907596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Wooden Ham Stand" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">
              Why You Need a Ham Stand
            </h2>
            <div className="prose prose-lg">
              <p>
                Our custom-designed wooden ham stands are an essential tool for anyone serving a whole country ham. These sturdy stands securely hold your ham in place while carving, making the process safer and more efficient.
              </p>
              <p>
                Each stand is handcrafted from quality hardwood and designed to last for generations. The angled design holds the ham at the optimal position for thin, consistent slicing, ensuring you get the most from your premium Robertson's Ham.
              </p>
              <p>
                Available in several styles to match your needs, from our classic wooden design to our premium adjustable stand with carving board.
              </p>
              
              <h3>Features:</h3>
              <ul>
                <li>Sturdy hardwood construction</li>
                <li>Optimal carving angle</li>
                <li>Non-slip base for stability</li>
                <li>Easy to clean and maintain</li>
                <li>Makes a perfect gift along with a Robertson's Ham</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hamStands.map((stand) => (
            <ProductCard key={stand.id} product={stand} />
          ))}
        </div>
        
        {/* Carving Tips */}
        <div className="bg-amber-50 rounded-lg p-8 mt-12">
          <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">
            Ham Carving Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-lg">
              <p>
                Using your Robertson's Ham Stand properly will ensure you get the most from your ham. Here are our expert tips for perfect carving:
              </p>
              
              <ol>
                <li>Secure your ham in the stand with the hock end facing upward</li>
                <li>Start carving from the larger end, using a sharp, thin carving knife</li>
                <li>Make thin slices parallel to the bone for the best texture</li>
                <li>Rotate the ham as needed to maintain a comfortable carving angle</li>
                <li>Store leftover ham in your refrigerator, keeping the bone for soups and beans</li>
              </ol>
              
              <p>
                For a detailed video demonstration, visit our YouTube channel or contact our customer service team for assistance.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/17020350/pexels-photo-17020350/free-photo-of-wood-light-restaurant-lunch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ham Carving" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamStandPage;