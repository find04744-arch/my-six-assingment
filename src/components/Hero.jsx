import React from 'react';
import { FaPlay } from 'react-icons/fa';
import heroImg from '../assets/hero.png'; 

const Hero = () => {
  return (
    <section className="bg-white pt-16 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="lg:w-[55%] text-left">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8E1FF] text-[#6366F1] px-4 py-1.5 rounded-full mb-8 border border-purple-100">
            <span className="w-2.5 h-2.5 bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
            <span className="text-sm font-semibold">New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-[52px] md:text-[64px] font-extrabold text-[#1E293B] leading-[1.05] tracking-tight mb-8">
            Supercharge Your <br /> 
            Digital Workflow
          </h1>

          <p className="text-[#64748B] text-[18px] mb-2 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>
          
          <button className="text-[#94A3B8] text-[15px] mb-12 hover:text-[#7C3AED] transition-colors block">
            Explore Products
          </button>

          <div className="flex items-center gap-5">
            {/* Primary Button */}
            <button className="bg-[#7C3AED] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#6D28D9] transition-all shadow-xl shadow-purple-200 active:scale-95">
              Explore Products
            </button>
            
            {/* Secondary Button */}
            <button className="flex items-center gap-3 border border-purple-200 text-[#7C3AED] px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all active:scale-95">
              <span className="w-7 h-7 border-2 border-[#7C3AED] rounded-md flex items-center justify-center">
                <FaPlay size={10} className="ml-0.5" />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[45%] flex justify-end">
          <div className="relative w-full max-w-[500px]">
            <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <img 
                src={heroImg} 
                alt="Digital Workflow UI" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;