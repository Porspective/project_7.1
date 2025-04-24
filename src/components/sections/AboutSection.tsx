import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}aboutus2.jpeg`}
              alt="Family business heritage" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-800 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif text-3xl font-bold">Since 1947</p>
              <p className="text-red-100">Family-owned & operated</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Robertson's family-owned business has existed since 1946, when V.B. "Tup" Robertson opened his first store in downtown Marietta. In the early days, we could fit just 15 hams in our humble little smokehouse. But like our family, our business grew.
            </p>
            <p className="text-gray-700 mb-6">
              During the 1950s, we began advertising our smoked meats on highway billboards. When the early '60s brought the building of Interstate 35, things changed forever for our little business. What had been seasonal spikes during the summer and around Christmas became consistent year-round business. This meant opportunities for expansion.
            </p>
            <p className="text-gray-700 mb-6">
              In 1972 Tup heard about a product called beef jerky. Tup asked, "what the hell is beef jerky and how do you make it?" Experiments began and it was an instant hit.
            </p>
            <p className="text-gray-700 mb-8">
              In addition to the company store in Marietta, there are four franchise stores in Oklahoma and Texas. They look like the company store and feature the same old-fashioned ham, turkey, bacon, sausage, pork loin and real beef jerky.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-full mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Time-Honored</h3>
                <p className="text-gray-600 text-sm">Traditional smoking methods since 1947</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-full mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Highest grade meats and ingredients</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-full mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Family Legacy</h3>
                <p className="text-gray-600 text-sm">Four generations of expertise</p>
              </div>
            </div>
            
            <Link to="/about-us" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;