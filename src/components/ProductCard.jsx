const ProductCard = ({ product, addToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon } =
    product;

  return (
    <div className="card bg-white shadow-xl border border-gray-100 relative p-6 rounded-3xl">
      {/* dynamic badge based on tagType */}
      {tag && (
        <div
          className={`absolute top-4 right-4 badge badge-sm py-3 px-4 border-none font-semibold text-white ${
            tagType === "best-seller"
              ? "bg-orange-400"
              : tagType === "popular"
                ? "bg-purple-500"
                : "bg-green-500"
          }`}
        >
          {tag}
        </div>
      )}

      <div className="mb-4 text-4xl bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
      </div>

      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <span className="text-2xl font-bold">${price}</span>
        <span className="text-gray-400 text-sm italic">/{period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-sm text-gray-600 font-medium"
          >
            <span className="text-green-500">✓</span> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className="btn btn-primary w-full rounded-xl font-bold tracking-wide"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
