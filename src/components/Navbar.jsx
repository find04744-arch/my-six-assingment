const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-white border-b px-4 md:px-12 h-20">
      <div className="navbar-start">
        <a className="text-2xl font-black tracking-tighter text-purple-600">DigiTools</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-6">
          <li><a className="hover:text-purple-600">Home</a></li>
          <li><a className="hover:text-purple-600">Products</a></li>
          <li><a className="hover:text-purple-600">Pricing</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <div className="indicator mr-4">
          <span className="indicator-item badge badge-primary badge-sm">{cartCount}</span> 
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
        </div>
        <button className="btn btn-primary rounded-xl px-8 font-bold">Login</button>
      </div>
    </div>
  );
};

export default Navbar;