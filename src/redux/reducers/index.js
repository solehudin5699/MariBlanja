import {combineReducers} from 'redux';
import userReducer from './users/users';
import cartReducer from './cart/cart';
//Combine reducers
const indexReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default indexReducer;
