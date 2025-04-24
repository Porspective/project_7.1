import React from 'react';
import Hero from '../components/ui/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import AboutSection from '../components/sections/AboutSection';
import GoogleMap from '../components/ui/GoogleMap';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "Robertson's Hams - Premium Hams & Beef Jerky";
  }, []);

  return (
    <div>
      <Hero 
        title="Premium Hams & Beef Jerky"
        subtitle="Family tradition since 1947, featuring the finest quality meats smoked to perfection"
        imgUrl="Homepager.jpeg"
        buttonText="Shop Our Products"
        buttonLink="/shop"
      />
      
      <FeaturedProducts />
      
      <AboutSection />
      
      {/* Location/Visit Us Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Visit Our Store</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Stop by our store in Marietta, Oklahoma to see our complete selection and take home fresh products.
            </p>
          </div>
          
          <div className="mt-12">
            <GoogleMap />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg mb-2">
              <strong>Robertson's Hams</strong>
            </p>
            <p className="text-gray-700">
              110 Wanda St, Marietta, OK 73448
            </p>
            <p className="text-gray-700 mt-2">
              <a href="tel:5802766301" className="text-red-800 hover:underline">
                (580) 276-6301
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;