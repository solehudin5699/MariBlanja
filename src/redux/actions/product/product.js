import {product} from './actionTypes';

export const getProduct = (data) => {
  return {
    type: product.getProduct,
    payload: data,
  };
};
