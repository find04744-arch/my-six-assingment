import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CartItem from './CartItem';

const ProductContainer = ({ addToCart, cart, removeFromCart, clearCart }) => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-12" id="products">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-3">Premium Digital Tools</h2>
          <p className="text-gray-500">Curated software and assets for modern creators.</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-2xl">
          <button 
            onClick={() => setIsCartOpen(false)}
            className={`px-6 py-2 rounded-xl font-bold transition ${!isCartOpen ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`px-6 py-2 rounded-xl font-bold transition flex items-center gap-2 ${isCartOpen ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {!isCartOpen ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white border rounded-3xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h3 className="text-2xl font-bold">Your Shopping Cart</h3>
            <button onClick={clearCart} className="text-sm text-red-500 font-bold hover:underline">Clear All</button>
          </div>
          {cart.length > 0 ? (
            <>
              {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
              ))}
              <div className="mt-8 pt-6 border-t flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Total Price</p>
                  <p className="text-3xl font-black text-primary">${cart.reduce((sum, item) => sum + Number(item.price), 0)}</p>
                </div>
                <button onClick={clearCart} className="btn btn-primary btn-lg rounded-2xl px-12">Checkout Now</button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🛒</p>
              <p className="text-gray-400 font-medium text-lg">Your cart is empty.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;