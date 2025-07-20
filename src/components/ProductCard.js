import React from 'react';
import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-200 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4 rounded"
      />
      <h3 className="text-lg font-extrabold text-gray-800 dark:text-white mb-1">{product.name}</h3>
      <p className="text-blue-600 text-md font-semibold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-shadow hover:shadow-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
