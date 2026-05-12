import React from 'react';
import ProductCard from './ProductCard'; // পাথ চেক করে নিবেন

const products = [
  {
    title: "AI Writing Pro",
    desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: "$29",
    type: "/Mo",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
    badge: "Best Seller",
    badgeColor: "bg-[#FFEDD5] text-[#9A3412]",
    icon: "📝"
  },
  {
    title: "Design Templates Pack",
    desc: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: "$49",
    type: "/One-Time",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
    badge: "Popular",
    badgeColor: "bg-[#EEF2FF] text-[#4338CA]",
    icon: "🎨"
  },
  {
    title: "Premium Stock Assets",
    desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: "$19",
    type: "/Mo",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    badge: "New",
    badgeColor: "bg-[#F0FDF4] text-[#166534]",
    icon: "📷"
  },
  {
    title: "Automation Toolkit",
    desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: "$79",
    type: "/Mo",
    features: ["50+ automations", "API access", "Custom workflows"],
    badge: "Popular",
    badgeColor: "bg-[#EEF2FF] text-[#4338CA]",
    icon: "⚙️"
  },
  {
    title: "Resume Builder Pro",
    desc: "Create professional resumes and cover letters that land interviews.",
    price: "$15",
    type: "/One-Time",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    badge: "New",
    badgeColor: "bg-[#F0FDF4] text-[#166534]",
    icon: "📄"
  },
  {
    title: "Social Media Content Kit",
    desc: "Complete toolkit for creating engaging social media content across all platforms.",
    price: "$39",
    type: "/Mo",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    badge: "Best Seller",
    badgeColor: "bg-[#FFEDD5] text-[#9A3412]",
    icon: "📱"
  }
];

const ProductContainer = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[40px] md:text-[48px] font-bold text-[#0F172A] mb-4">Premium Digital Tools</h2>
        <p className="text-[#64748B] text-lg max-w-3xl mx-auto mb-10">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
        
        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1.5 bg-white border border-gray-100 rounded-full shadow-sm">
            <button className="bg-[#7C3AED] text-white px-8 py-2.5 rounded-full font-bold">
              Products
            </button>
            <button className="text-[#64748B] px-8 py-2.5 rounded-full font-bold hover:bg-gray-50">
              Cart (2)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;