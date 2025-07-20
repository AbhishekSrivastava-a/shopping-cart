import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useCart } from '../context/CartContext';

const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const { changeQuantity } = useCart();
    
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    
    const handleMinusQuantity = () => {
        changeQuantity({
            productId: productId,
            quantity: quantity - 1
        });
    }
    
    const handlePlusQuantity = () => {
        changeQuantity({
            productId: productId,
            quantity: quantity + 1
        });
    }
    
    return (
        <div className='bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 transition-all hover:shadow-xl hover:scale-[1.02] duration-300'>
            <div className='flex items-center gap-5'>
                <div className='relative flex-shrink-0'>
                    <img 
                        src={detail.image} 
                        alt={detail.name} 
                        className='w-20 h-20 rounded-xl object-cover shadow-md border-2 border-white dark:border-gray-600'
                    />
                    <div className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center'>
                        {quantity}
                    </div>
                </div>
                
                <div className='flex-1 space-y-2'>
                    <h3 className='font-bold text-gray-900 dark:text-white text-lg leading-tight'>
                        {detail.name}
                    </h3>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-2xl font-bold text-green-600 dark:text-green-400'>
                            ${(detail.price * quantity).toFixed(2)}
                        </span>
                        <span className='text-sm text-gray-500 dark:text-gray-400 line-through'>
                            ${(detail.price * quantity * 1.2).toFixed(2)}
                        </span>
                    </div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                        Unit price: ${detail.price}
                    </p>
                </div>
                
                <div className='flex flex-col items-center gap-3'>
                    <button 
                        className='group w-10 h-10 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110'
                        onClick={handleMinusQuantity}
                    >
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                        </svg>
                    </button>
                    
                    <div className='bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full'>
                        <span className='font-black text-gray-900 dark:text-white text-lg'>
                            {quantity}
                        </span>
                    </div>
                    
                    <button 
                        className='group w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110'
                        onClick={handlePlusQuantity}
                    >
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
