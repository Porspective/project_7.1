import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard';
import { ChevronRight, MapPin } from 'lucide-react';

const LovesBeefJerkyPage: React.FC = () => {
  const jerky = allProducts.filter(product => 
    product.category === 'beef-jerky' && 
    product.name.toLowerCase().includes('love')
  );
  
  React.useEffect(() => {
    document.title = "Love's Beef Jerky - Robertson's Hams";
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
              <Link to="/products/beef-jerky" className="text-gray-500 hover:text-red-800">
                Beef Jerky
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-700 font-medium">Love's Beef Jerky</li>
          </ol>
        </nav>
        
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.pexels.com/photos/4349762/pexels-photo-4349762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Robertson's at Love's Travel Stops" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
            <div className="container-custom text-white">
              <div className="max-w-2xl">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  Robertson's Beef Jerky at Love's Travel Stops
                </h1>
                <p className="text-xl text-gray-100 mb-6">
                  Find our premium beef jerky at select Love's Travel Stops locations across Oklahoma and Texas
                </p>
                <Link to="/shop?category=beef-jerky" className="btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">
              Our Partnership with Love's
            </h2>
            <div className="prose prose-lg">
              <p>
                We're proud to partner with Love's Travel Stops to bring our premium beef jerky to travelers nationwide. Founded in 1964, Love's has grown to over 550 locations in 41 states, making it easy for customers to find our products while on the road.
              </p>
              <p>
                Our partnership began in 2005 when Love's approached us about featuring local Oklahoma products. What started with a few stores has expanded to dozens of locations, bringing the Robertson's flavor to more customers than ever before.
              </p>
              <p>
                For the Love's partnership, we've created special packaging and portion sizes perfect for travelers. You'll find the same premium quality and taste that Robertson's is known for, now in convenient grab-and-go formats.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-serif text-xl font-bold mb-4 text-gray-900">
              Find Our Products at Love's
            </h3>
            <p className="text-gray-700 mb-4">
              Look for Robertson's Beef Jerky at these Love's Travel Stops locations:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Love's #xxx - Ardmore, OK</p>
                  <p className="text-gray-600 text-sm">1124 N. Commerce St., Ardmore, OK 73401</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Love's #xxx - Marietta, OK</p>
                  <p className="text-gray-600 text-sm">27275 I-35, Marietta, OK 73448</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Love's #xxx - Thackerville, OK</p>
                  <p className="text-gray-600 text-sm">12055 Ladd Rd., Thackerville, OK 73459</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Love's #xxx - Gainesville, TX</p>
                  <p className="text-gray-600 text-sm">4574 N I-35, Gainesville, TX 76240</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              *Available at select locations. Product availability may vary by store.
            </p>
          </div>
        </div>
        
        {/* Love's Special Products */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold mb-8 text-gray-900">
            Special Products for Love's
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jerky.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-red-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Customer testimonial" 
                className="w-full h-auto rounded-full aspect-square object-cover max-w-[200px] mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <svg className="h-10 w-10 text-red-800 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg italic mb-4">
                "I always look forward to stopping at Love's when I'm on the road because I know I can pick up Robertson's Beef Jerky. It's become a road trip tradition for my family. The quality is so much better than other brands, and we love supporting an Oklahoma business!"
              </p>
              <p className="font-medium">- James T., Truck Driver from Dallas, TX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovesBeefJerkyPage;