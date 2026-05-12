const Stats = () => {
  return (
    <div className="bg-[#7C3AED] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-white/20 md:divide-x">
        <div>
          <h2 className="text-5xl font-bold mb-2">50K+</h2>
          <p className="text-purple-100 uppercase tracking-wider text-sm">
            Active Users
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-2">200+</h2>
          <p className="text-purple-100 uppercase tracking-wider text-sm">
            Premium Tools
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-2">4.9</h2>
          <p className="text-purple-100 uppercase tracking-wider text-sm">
            Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
