const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, icon } = item;

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-gray-50 rounded-2xl border border-gray-100 transition hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white p-2 rounded-xl border flex items-center justify-center">
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-primary font-semibold text-sm">${price}</p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(id)}
        className="text-red-500 hover:text-red-700 font-bold text-sm transition-colors px-4 py-2"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
