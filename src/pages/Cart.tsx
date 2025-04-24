import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <h1 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some delicious products to your cart!</p>
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="font-serif text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-serif font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.weight}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 mt-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 mt-4 text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-serif text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full btn-primary"
              >
                Proceed to Checkout
              </button>
              
              <Link
                to="/shop"
                className="w-full btn-outline mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;