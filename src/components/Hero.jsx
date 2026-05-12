import React from 'react';
import bannerImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="text-purple-700 text-sm font-medium">New: AI-Powered Tools Available</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Supercharge Your <br />
            <span className="text-gray-800">Digital Workflow</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-purple-200 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold text-purple-700 transition-all">
               Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={bannerImg} 
              alt="Digital Workflow AI" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;