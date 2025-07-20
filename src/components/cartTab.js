import React from 'react';
import CartItem from './cartItem';
import { useCart } from '../context/CartContext';

const CartTab = () => {
  const { items: carts, statusTab, toggleStatusTab } = useCart();

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={toggleStatusTab} className="text-gray-500 hover:text-gray-900">✕</button>
      </div>
      {carts.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {carts.map((item, idx) => (
            <CartItem data={item} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartTab;
