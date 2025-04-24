import React, { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { Search, Filter } from 'lucide-react';
import { allProducts, ProductCategory } from '../data/products';

const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  
  const categories: Array<ProductCategory | 'all'> = [
    'all',
    'ham',
    'beef-jerky',
    'sausage',
    'bacon',
    'cheese',
    'turkey',
    'pork-loin',
    'pet-treats',
    'jar-items',
    'accessories',
    'gift-sets'
  ];
  
  const categoryNames = {
    'all': 'All Products',
    'ham': 'Smoked Hams',
    'beef-jerky': 'Beef Jerky',
    'sausage': 'Smoked Sausage',
    'bacon': 'Smoked Bacon',
    'cheese': 'Smoked Cheese',
    'turkey': 'Smoked Turkey',
    'pork-loin': 'Smoked Pork Loin',
    'pet-treats': 'Dog Jerky Treats',
    'jar-items': 'Jar Items',
    'accessories': 'Accessories',
    'gift-sets': 'Gift Sets'
  };
  
  // Filter products based on search term and category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  React.useEffect(() => {
    document.title = "Shop - Robertson's Hams";
  }, []);

  return (
    <div>
      {/* Shop Header Banner */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
           style={{
             minHeight: "25vh",
             backgroundImage: "url('https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
             backgroundSize: "cover",
             backgroundPosition: "center"
           }}>
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-white font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Browse our selection of premium meats, cheeses, and specialty items
            </p>
          </div>
        </div>
      </div>
      
      {/* Shop Content */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            {/* Search Bar */}
            <div className="relative mb-4 md:mb-0 w-full md:w-auto md:flex-grow md:max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="mr-2 font-medium">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === category 
                        ? 'bg-red-800 text-white' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {categoryNames[category]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;