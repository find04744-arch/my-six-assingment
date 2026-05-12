import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      isHighlighted: false
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      isHighlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      isHighlighted: false
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#64748B] text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative w-full max-w-sm rounded-[2rem] p-10 transition-all duration-300 ${
              plan.isHighlighted 
                ? "bg-[#8B2CFF] text-white scale-105 shadow-2xl z-10" 
                : "bg-white border border-gray-100 text-[#1E293B] shadow-sm"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFEDD5] text-[#9A3412] px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                {plan.badge}
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className={`${plan.isHighlighted ? "text-purple-100" : "text-[#64748B]"} mb-8`}>
              {plan.desc}
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span className={`${plan.isHighlighted ? "text-purple-100" : "text-[#94A3B8]"} text-lg`}>
                /Month
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <FaCheck className={`${plan.isHighlighted ? "text-white" : "text-[#10B981]"}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${
                plan.isHighlighted
                  ? "bg-white text-[#8B2CFF] hover:bg-gray-50"
                  : "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg shadow-purple-100"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;