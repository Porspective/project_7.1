import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  React.useEffect(() => {
    document.title = "Page Not Found - Robertson's Hams";
  }, []);

  return (
    <div className="pt-24 pb-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="font-serif text-6xl font-bold mb-6 text-red-800">404</h1>
      <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">
        Page Not Found
      </h2>
      <p className="text-gray-600 text-lg max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn-primary">
          Return to Homepage
        </Link>
        <Link to="/shop" className="btn-outline">
          Browse Our Products
        </Link>
      </div>
    </div>
  );
};

export default NotFound;