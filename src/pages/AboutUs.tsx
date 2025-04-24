import React from 'react';
import GoogleMap from '../components/ui/GoogleMap';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AboutUs: React.FC = () => {
  React.useEffect(() => {
    document.title = "About Us - Robertson's Hams";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}OriginalRobertsons.jpeg)`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A family tradition of quality and excellence since 1947
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Heritage
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Robertson's Hams has been a family tradition since 1947, when Bill and Elva Robertson began selling country hams in Southern Oklahoma. What started as a small operation in their home kitchen soon grew into a beloved regional business known for quality meats prepared the old-fashioned way.
                </p>
                <p>
                  Today, the third and fourth generations of the Robertson family continue to use those same time-honored recipes and smoking methods that made our products famous. We're proud to maintain the tradition of excellence while bringing our premium hams and beef jerky to customers across the country.
                </p>
                <p>
                  Our commitment to quality has never wavered. We still smoke our hams for days using real hickory wood, and our beef jerky is made from only the finest cuts of meat, seasoned with our proprietary blend of spices that hasn't changed in over 70 years.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={`${import.meta.env.BASE_URL}aboutus3.jpeg`}
                alt="Robertson's original delivery cart from 1947" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <img 
                src={`${import.meta.env.BASE_URL}aboutus4.jpeg`}
                alt="The original Robertson's store" 
                className="rounded-lg shadow-md w-full h-auto object-cover mt-8"
              />
              <img 
                src={`${import.meta.env.BASE_URL}aboutus2.jpeg`}
                alt="Robertson's famous beef jerky production" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <img 
                src={`${import.meta.env.BASE_URL}aboutus5.jpeg`}
                alt="The Robertson family through generations" 
                className="rounded-lg shadow-md w-full h-auto object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-gray-900">
                Visit Our Store
              </h2>
              <p className="text-gray-700 mb-8">
                We invite you to visit our store in Marietta, Oklahoma to see our complete selection of products and experience the Robertson's difference firsthand. Our friendly staff is always ready to help you find exactly what you're looking for.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-700">110 Wanda St, Marietta, OK 73448</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-red-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-red-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:5802766301" className="text-red-800 hover:underline">
                        (580) 276-6301
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-red-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@robertsonsonline.com" className="text-red-800 hover:underline">
                        info@robertsonsonline.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;