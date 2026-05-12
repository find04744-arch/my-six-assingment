import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      desc: "Sign up for free in seconds.",
      icon: userIcon,
    },
    {
      id: 2,
      title: "Choose Products",
      desc: "Browse our catalog and select.",
      icon: packageIcon,
    },
    {
      id: 3,
      title: "Start Creating",
      desc: "Download and start using immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-3 text-lg">Start using premium digital tools in minutes.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {steps.map((item) => (
          <div key={item.id} className="w-full md:w-80 bg-white border border-gray-100 p-10 text-center rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
            <div className="bg-[#F8F7FF] w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;