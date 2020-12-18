import {product} from '../../actions/product/actionTypes';

const initialState = {
  product: [],
};

const productReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case product.getProduct:
      return {
        ...prevState,
        product: action.payload,
      };
    default:
      return prevState;
  }
};

export default productReducer;
