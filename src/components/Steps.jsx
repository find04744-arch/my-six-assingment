import React from 'react';
import { CiUser } from "react-icons/ci";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: <CiUser />
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: <CiUser />},
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: <CiUser />
  }
];

const Steps = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* bold and precise title as requested */}
          <h2 className="text-[42px] md:text-[52px] font-black text-[#0F172A] tracking-tight mb-5">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#64748B] text-[17px] font-normal">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white border border-gray-100 rounded-[32px] p-10 md:p-14 text-center shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 group"
            >
              {/* Step Number Badge */}
              <div className="absolute top-7 right-7 bg-[#7C3AED] text-white text-[11px] font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-purple-100 group-hover:scale-110 transition-transform">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-9 group-hover:bg-[#EDE9FE] transition-colors">
                {step.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-[26px] font-bold text-[#1E293B] mb-5">
                {step.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-[#64748B] text-[16px] leading-relaxed max-w-[280px] mx-auto font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;