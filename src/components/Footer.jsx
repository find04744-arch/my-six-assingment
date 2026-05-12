const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-white mb-6">DigiTools</h2>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6">Product</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Templates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6">Social Links</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition cursor-pointer">
              𝕏
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition cursor-pointer">
              f
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition cursor-pointer">
              in
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
