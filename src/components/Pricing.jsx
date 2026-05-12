const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 italic">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative p-8 rounded-3xl border ${plan.isPopular ? "bg-[#7C3AED] text-white shadow-2xl scale-105 z-10" : "bg-white text-gray-800"}`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full uppercase">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-sm opacity-80 mb-6 font-medium">
              Best for {plan.name.toLowerCase()}s
            </p>
            <div className="mb-8">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span className="text-sm opacity-70">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-left">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span
                    className={
                      plan.isPopular ? "text-green-300" : "text-green-500"
                    }
                  >
                    ✓
                  </span>{" "}
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`btn w-full rounded-xl border-none ${plan.isPopular ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white"}`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
