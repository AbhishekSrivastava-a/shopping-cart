import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">🛒 Your cart is empty</h2>
        <Link to="/" className="text-blue-600">← Back to shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>${item.price} × {item.qty} = <strong>${item.price * item.qty}</strong></p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.qty - 1)}
                className="bg-gray-200 px-2 rounded"
              >-</button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQuantity(item.id, item.qty + 1)}
                className="bg-gray-200 px-2 rounded"
              >+</button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-600 hover:underline"
              >Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-6 text-right">
        <h3 className="text-xl font-bold">Total: ${total}</h3>
      </div>
    </div>
  );
};

export default CartPage;
