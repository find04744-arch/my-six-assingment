import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductContainer from './components/ProductContainer';
import CartItem from './components/CartItem'; 
import Steps from './components/Steps';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [activeTab, setActiveTab] = useState('product'); 
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!product) return;
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.error("Item removed!");
  };

  const handleCheckout = () => {
    setCart([]);
    setActiveTab('product');
    toast.info("Checkout successful! Cart cleared.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />
      
      <div className="flex flex-col items-center py-12">
        {/* Toggle Buttons */}
        <div className="inline-flex p-1 bg-gray-100 rounded-full mb-10">
          <button 
            onClick={() => setActiveTab('product')}
            className={`px-10 py-2.5 rounded-full font-bold transition-all ${activeTab === 'product' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-10 py-2.5 rounded-full font-bold transition-all ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* content logic */}
        <div className="w-full max-w-7xl mx-auto px-6">
          {activeTab === 'product' ? (
            <ProductContainer onAddToCart={handleAddToCart} />
          ) : (
            <CartItem 
              cartItems={cart} 
              onRemove={handleRemoveItem} 
              onCheckout={handleCheckout} 
            />
          )}
        </div>
      </div>

      <Steps />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;