import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-[#7C3AED] text-3xl font-extrabold tracking-tight">
          DigiTools
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium text-sm">
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Products</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Features</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Testimonials</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">FAQ</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Cart Icon with Count */}
          <div className="relative cursor-pointer group">
            <FiShoppingCart className="text-slate-700 group-hover:text-[#7C3AED] transition-colors" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>

          <button className="text-slate-700 font-bold text-sm hover:text-[#7C3AED] transition-colors">
            Login
          </button>

          <button className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg shadow-purple-200 hover:opacity-90 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;