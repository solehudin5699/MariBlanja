import {cart} from '../../actions/cart/actionTypes';

const initalState = {
  cart: [],
  store: [],
  totalPriceSelected: 0,
  totalNumOrder: 0,
};
const cartReducer = (prevState = initalState, action) => {
  switch (action.type) {
    case cart.add: {
      let newCart = [
        ...prevState.cart,
        {
          ...action.payload.product,
          numOrder: 1,
          isSelected: true,
          priceBasedNumOrder: action.payload.product.price,
        },
      ];
      let isStoreReady = prevState.store.includes(action.payload.store);
      let newStore;
      if (isStoreReady) {
        newStore = prevState.store;
      } else {
        newStore = [...prevState.store, action.payload.store];
      }
      return {
        ...prevState,
        store: newStore,
        cart: newCart,
      };
    }
    case cart.increase: {
      let newCart = prevState.cart.map((item) => {
        if (Number(item.id) == Number(action.payload)) {
          return {
            ...item,
            numOrder: Number(item.numOrder) + 1,
            priceBasedNumOrder:
              Number(item.priceBasedNumOrder) + Number(item.price),
          };
        } else {
          return item;
        }
      });
      return {
        ...prevState,
        cart: newCart,
      };
    }
    case cart.decrease: {
      let newCart = prevState.cart.map((item) => {
        if (Number(item.id) == Number(action.payload) && item.numOrder > 1) {
          return {
            ...item,
            numOrder: Number(item.numOrder) - 1,
            priceBasedNumOrder:
              Number(item.priceBasedNumOrder) - Number(item.price),
          };
        } else {
          return item;
        }
      });

      return {
        ...prevState,
        cart: newCart,
      };
    }

    case cart.setTotalPrice: {
      let total = prevState.cart
        .filter((item) => {
          return item.isSelected;
        })
        .map((item) => {
          return Number(item.priceBasedNumOrder);
        });

      let totalValue = 0;
      for (let i = 0; i < total.length; i++) {
        totalValue += Number(total[i]);
      }
      let numOrder = prevState.cart
        .filter((item) => {
          return item.isSelected;
        })
        .map((item) => {
          return Number(item.numOrder);
        });

      let totalNumOrder = 0;
      for (let i = 0; i < numOrder.length; i++) {
        totalNumOrder += Number(numOrder[i]);
      }
      return {
        ...prevState,
        totalPriceSelected: totalValue,
        totalNumOrder: totalNumOrder,
      };
    }
    case cart.selectProduct: {
      let newCart = prevState.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        } else {
          return item;
        }
      });
      return {
        ...prevState,
        cart: newCart,
      };
    }
    case cart.selectAllProductPerStore: {
      let newCart = prevState.cart.map((item) => {
        if (item.store === action.payload) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        } else {
          return item;
        }
      });
      return {
        ...prevState,
        cart: newCart,
      };
    }
    case cart.selectAllProducts: {
      let newCart = prevState.cart.map((item) => {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      });
      return {
        ...prevState,
        cart: newCart,
      };
    }
    case cart.deleteSelectedProduct: {
      let newCart = prevState.cart.filter((item) => {
        return item.isSelected === false;
      });
      return {
        ...prevState,
        cart: newCart,
      };
    }
    case cart.deleteProduct: {
      let newCart = prevState.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...prevState,
        cart: newCart,
      };
    }
    case 'DEL':
      return {
        ...prevState,
        cart: [],
        store: [],
        totalPriceSelected: 0,
      };
    default:
      return prevState;
  }
};

export default cartReducer;
