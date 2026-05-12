import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-[24px] p-8 text-left shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative flex flex-col h-full">
      
      {/* Badge */}
      <div className={`absolute top-6 right-6 px-3 py-1 rounded-lg text-[12px] font-bold ${product.badgeColor}`}>
        {product.badge}
      </div>

      {/* Icon Container */}
      <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-gray-50">
        {product.icon}
      </div>

      <h3 className="text-[22px] font-bold text-[#1E293B] mb-3">{product.title}</h3>
      <p className="text-[#64748B] text-[15px] leading-relaxed mb-6 flex-grow">
        {product.desc}
      </p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-[32px] font-extrabold text-[#1E293B]">{product.price}</span>
        <span className="text-[#94A3B8] font-semibold text-[16px]">{product.type}</span>
      </div>

      {/* Features Section */}
      <ul className="space-y-4 mb-10 border-t border-gray-50 pt-8">
        {product.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3 text-[#475569] font-medium text-[15px]">
            <FaCheck className="text-[#10B981] text-[14px]" />
            {feat}
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#6D28D9] transition-all shadow-lg shadow-purple-100 active:scale-95 mt-auto">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;