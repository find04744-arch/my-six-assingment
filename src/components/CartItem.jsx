import React from 'react';

const CartItem = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-3xl border-2 border-dashed">
        <p className="text-2xl font-bold text-gray-400">Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 border rounded-[32px] shadow-sm">
      <h3 className="text-2xl font-bold mb-8">Your Cart</h3>
      <div className="space-y-4 mb-8">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            <button onClick={() => onRemove(item.id)} className="text-red-500 font-bold hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center py-6 border-t font-bold text-2xl">
        <span className="text-gray-400">Total:</span>
        <span>${total}</span>
      </div>
      <button onClick={onCheckout} className="w-full bg-purple-600 text-white py-4 mt-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartItem;