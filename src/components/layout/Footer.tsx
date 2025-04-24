import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-white">Robertson's Hams</h3>
            <p className="text-gray-300 mb-4">
              Providing the highest quality hams and beef jerky since 1947. Family-owned and operated.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products/ham" className="text-gray-300 hover:text-white transition-colors">
                  Hams
                </Link>
              </li>
              <li>
                <Link to="/products/beef-jerky" className="text-gray-300 hover:text-white transition-colors">
                  Beef Jerky
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  110 Wanda St, Marietta, OK 73448
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                <a href="tel:5802766301" className="text-gray-300 hover:text-white transition-colors">
                  (580) 276-6301
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@robertsonsonline.com" className="text-gray-300 hover:text-white transition-colors">
                  info@robertsonsonline.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Store Hours</h4>
            <ul className="text-gray-300 space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Robertson's Hams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;