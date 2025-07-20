import React from 'react';
import CartItem from './cartItem';
import { useCart } from '../context/CartContext';

const CartTab = () => {
  const { items: carts, statusTab, toggleStatusTab } = useCart();

  return (
    <>
      {/* only show when cart is open */}
      {statusTab && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleStatusTab}
        ></div>
      )}
      
      <div className={`fixed right-0 top-0 w-full sm:w-96 md:w-[450px] lg:w-[500px] h-full bg-white dark:bg-gray-900 shadow-xl z-50 p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        statusTab ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Cart</h2>
            {carts.length > 0 && (
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-2 py-1 rounded-full">
                {carts.length} {carts.length === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>
          <button 
            onClick={toggleStatusTab} 
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            ✕
          </button>
        </div>
        
        {/* Cart Content */}
        {carts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your cart is empty</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <button 
              onClick={toggleStatusTab}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              {carts.map((item, idx) => (
                <CartItem data={item} key={idx} />
              ))}
            </div>
            
            {/* Cart Summary */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6 bg-gray-50 dark:bg-gray-800 -mx-6 px-6 pb-6">
              
              {/* Order Summary */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Total Items:</span>
                    <span className="font-medium">{carts.reduce((total, item) => total + item.quantity, 0)} items</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Subtotal:</span>
                    <span className="font-medium">
                      ${carts.reduce((total, item) => {
                        // This is a placeholder calculation
                        return total + (item.quantity * 25.99); // Replace with actual price
                      }, 0).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Shipping:</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${carts.reduce((total, item) => {
                          return total + (item.quantity * 25.99); // Replace with actual price
                        }, 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Proceed to Checkout</span>
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={toggleStatusTab}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Continue Shopping</span>
                  </button>
                  
                  <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Save for Later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartTab;
