import {SET_CART,SET_SEARCH,ADD_TO_CART} from './action'

let cart = localStorage.getItem('cart')

cart = cart ? JSON.parse(cart) : []
const initialState  = {
    cart: cart,
    search:''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
            break;
        case SET_SEARCH:
            return { ...state, search: action.payload };
            break;
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
              };    
        default:
            return state;
    }
};

export default rootReducer;