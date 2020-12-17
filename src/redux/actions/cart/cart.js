import {cart} from './actionTypes';
export const addToCart = (data) => {
  return {
    type: cart.add,
    payload: data,
  };
};
export const increaseQuantity = (data) => {
  return {
    type: cart.increase,
    payload: data,
  };
};
export const decreaseQuantity = (data) => {
  return {
    type: cart.decrease,
    payload: data,
  };
};
export const setTotalPrice = () => {
  return {
    type: cart.setTotalPrice,
  };
};
export const selectProduct = (id) => {
  return {
    type: cart.selectProduct,
    payload: id,
  };
};
export const selectAllProductPerStore = (storeName) => {
  return {
    type: cart.selectAllProductPerStore,
    payload: storeName,
  };
};
export const selectAllProducts = () => {
  return {
    type: cart.selectAllProducts,
  };
};
export const deleteSelectedProduct = () => {
  return {
    type: cart.deleteSelectedProduct,
  };
};
export const deleteProduct = (idProduct) => {
  return {
    type: cart.deleteProduct,
    payload: idProduct,
  };
};
export const deleteAll = () => {
  return {
    type: 'DEL',
  };
};
