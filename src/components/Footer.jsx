import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. 
            Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-white text-[#7C3AED] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all active:scale-95 shadow-xl shadow-purple-900/20">
              Explore Products
            </button>
            <button className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              View Pricing
            </button>
          </div>
          <p className="text-purple-200 text-sm opacity-80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <footer className="bg-[#0B1120] text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm mb-8">
              <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Community</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
            
            <h4 className="font-semibold mb-6 text-white">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all">
                <FaFacebookF size={18} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all">
                <FaXTwitter size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;