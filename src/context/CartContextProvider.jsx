import React, { createContext, useEffect, useReducer } from 'react';

export const CartContext = createContext();

const INITIAL_STATE = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    checkoutConfirmed: JSON.parse(localStorage.getItem('checkoutConfirmed')) || false,
    orderConfirmed: JSON.parse(localStorage.getItem('orderState')) || false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            if (state.cartItems.find((elem) => elem.id === action.payload.id)) {
                return state;
            }
            return {...state, cartItems: [...state.cartItems, {...action.payload, cartQuantity: 1}]};
                    
        case 'REMOVE_PRODUCT':
            const cartItems = state.cartItems.filter((elem) => {
                return elem.id !== action.payload.id;
            });
            return {...state, cartItems: [...cartItems]};

        case 'CONTROL_QUANTITY':
            const updatedItems = state.cartItems.map((elem) => {
                if (elem.id === action.payload.id) {
                    elem = action.payload;
                }
                return elem;
            });
            return {...state, cartItems: [...updatedItems]};
        
        case 'CHECKOUT_CONFIRMED':
            return {...state, checkoutConfirmed: true};

        case 'ORDER_CONFIRMED':
            return {...state, orderConfirmed: true};

        case 'MAKE_CART_EMPTY':
            return {...state, cartItems: []};

        case 'RESET_CHECKOUT_STATE':
            return {...state, checkoutConfirmed: false};

        case 'RESET_ORDER_STATE':
            return {...state, orderConfirmed: false};
        
        default:
            return state;
    }
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('checkoutConfirmed', JSON.stringify(state.checkoutConfirmed));
        localStorage.setItem('orderConfirmed', JSON.stringify(state.orderConfirmed));
    });

    // calculate cart total
    let subTotal = 0;
    let discount = 0;
    let shippingCost = 60;
    let totalCost = 0;

    // calculate total amounts
    for (let i = 0; i < state.cartItems.length; i ++) {
        let elem = state.cartItems[i];
        subTotal += (elem.price - (elem.price * (elem.discount) / 100)) * elem.cartQuantity;
        discount += (elem.price * (elem.discount) / 100) * elem.cartQuantity;
    }

    totalCost = (shippingCost + subTotal).toFixed(1);
    subTotal = subTotal.toFixed(1);
    discount = discount.toFixed(1);

    return (
        <CartContext.Provider value={{cartItems: state.cartItems, subTotal, shippingCost, discount, totalCost,  checkoutConfirmed: state.checkoutConfirmed, orderConfirmed: state.orderConfirmed, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;