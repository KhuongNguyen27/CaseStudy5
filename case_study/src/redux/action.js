const SET_CART = 'SET_CART';
const GET_CART = 'GET_CART';
const SET_SEARCH = 'SET_SEARCH';
const ADD_TO_CART = 'ADD_TO_CART';
export const addtoCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};
export {SET_CART, GET_CART, SET_SEARCH, ADD_TO_CART}