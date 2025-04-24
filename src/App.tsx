import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

// Product pages
import HamPage from './pages/products/HamPage';
import BeefJerkyPage from './pages/products/BeefJerkyPage';
import HamStandPage from './pages/products/HamStandPage';
import LovesBeefJerkyPage from './pages/products/LovesBeefJerkyPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Toaster position="top-right" />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* Specific product pages */}
            <Route path="/products/ham" element={<HamPage />} />
            <Route path="/products/beef-jerky" element={<BeefJerkyPage />} />
            <Route path="/products/ham-stand" element={<HamStandPage />} />
            <Route path="/products/loves-beef-jerky" element={<LovesBeefJerkyPage />} />
            
            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;