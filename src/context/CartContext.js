import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
    items: JSON.parse(localStorage.getItem("carts")) || [],
    statusTab: false
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { productId, quantity } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.productId === productId);
            
            let newItems;
            if (existingItemIndex >= 0) {
                newItems = state.items.map((item, index) => 
                    index === existingItemIndex 
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                newItems = [...state.items, { productId, quantity }];
            }
            
            localStorage.setItem("carts", JSON.stringify(newItems));
            return { ...state, items: newItems };
        }
        
        case 'CHANGE_QUANTITY': {
            const { productId, quantity } = action.payload;
            let newItems;
            
            if (quantity > 0) {
                newItems = state.items.map(item => 
                    item.productId === productId 
                        ? { ...item, quantity }
                        : item
                );
            } else {
                newItems = state.items.filter(item => item.productId !== productId);
            }
            
            localStorage.setItem("carts", JSON.stringify(newItems));
            return { ...state, items: newItems };
        }
        
        case 'TOGGLE_STATUS_TAB':
            return { ...state, statusTab: !state.statusTab };
            
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (payload) => {
        dispatch({ type: 'ADD_TO_CART', payload });
    };

    const changeQuantity = (payload) => {
        dispatch({ type: 'CHANGE_QUANTITY', payload });
    };

    const toggleStatusTab = () => {
        dispatch({ type: 'TOGGLE_STATUS_TAB' });
    };

    return (
        <CartContext.Provider value={{
            items: state.items,
            statusTab: state.statusTab,
            addToCart,
            changeQuantity,
            toggleStatusTab
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};
