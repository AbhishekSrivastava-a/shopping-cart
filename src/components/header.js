import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const { items: carts, toggleStatusTab } = useCart();
    
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    
    const handleOpenTabCart = () => {
        toggleStatusTab();
    }

    return (
        <header className='sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    
                    {/* Logo */}
                    <Link to="/" className='flex items-center space-x-2 group'>
                        <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <span className='text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
                            ShopHub
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <Link to="/" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'>
                            Home
                        </Link>
                        <Link to="/products" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'>
                            Products
                        </Link>
                        <Link to="/about" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'>
                            About
                        </Link>
                        <Link to="/contact" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'>
                            Contact
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className='hidden lg:flex items-center flex-1 max-w-md mx-8'>
                        <div className='relative w-full'>
                            <input 
                                type="text" 
                                placeholder="Search products..."
                                className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                            />
                            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center space-x-4'>
                        
                        {/* Search Icon (Mobile) */}
                        <button className='lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Wishlist */}
                        <button className='relative p-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>

                        {/* Cart */}
                        <button 
                            onClick={handleOpenTabCart}
                            className='relative p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 transform hover:scale-105 group'
                        >
                            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                            </svg>
                            {totalQuantity > 0 && (
                                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse'>
                                    {totalQuantity > 99 ? '99+' : totalQuantity}
                                </span>
                            )}
                        </button>

                        {/* User Menu */}
                        <div className='relative'>
                            <button className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium text-sm hover:scale-110 transition-transform'>
                                U
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
