import {combineReducers} from 'redux';
import userReducer from './users/users';
import cartReducer from './cart/cart';
import productReducer from './product/product';

//Combine reducers
const indexReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
});

export default indexReducer;
