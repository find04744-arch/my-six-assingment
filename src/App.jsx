import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductContainer from './components/ProductContainer';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("Already in cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Checkout successful!");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />
      <ProductContainer 
        addToCart={addToCart} 
        cart={cart} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
      />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;
