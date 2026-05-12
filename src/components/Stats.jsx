import React from 'react';

const Stats = () => {
  return (
    <section className="w-full bg-[#7C3AED] py-16 mb-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-center text-white">
        
        {/* Active Users */}
        <div className="flex-1 text-center px-4">
          <h2 className="text-5xl font-bold mb-3 tracking-tight">50K+</h2>
          <p className="text-purple-100 text-lg font-medium opacity-90">Active Users</p>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block w-[1.5px] h-20 bg-white/20"></div>

        {/* Premium Tools */}
        <div className="flex-1 text-center px-4 py-10 md:py-0">
          <h2 className="text-5xl font-bold mb-3 tracking-tight">200+</h2>
          <p className="text-purple-100 text-lg font-medium opacity-90">Premium Tools</p>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block w-[1.5px] h-20 bg-white/20"></div>

        {/* Rating */}
        <div className="flex-1 text-center px-4">
          <h2 className="text-5xl font-bold mb-3 tracking-tight">4.9</h2>
          <p className="text-purple-100 text-lg font-medium opacity-90">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;