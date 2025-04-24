import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CartIcon from '../cart/CartIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}Robertsons_540x.png`}
            alt="Robertson's" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
          >
            About Us
          </NavLink>
          <CartIcon />
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
              onClick={() => setIsOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <Link 
              to="/cart" 
              className="btn-primary"
              onClick={() => setIsOpen(false)}
            >
              <CartIcon />
              View Cart
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;