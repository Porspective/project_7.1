import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  imgUrl: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  imgUrl, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${imgUrl}')` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {title}
        </h1>
        <p 
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {subtitle}
        </p>
        <Link 
          to={buttonLink}
          className="btn-primary text-lg px-8 py-4"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;