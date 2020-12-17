import {
  login,
  regist,
  logout,
  reset,
  update,
} from '../../actions/users/actionTypes';

const initialState = {
  user: {},
  isLogin: false,
  errorLogin: undefined,
  isLoginPending: false,
  isLoginFulfilled: false,
  isLoginRejected: false,

  dataRegist: {},
  errorRegist: undefined,
  isRegistPending: false,
  isRegistFulfilled: false,
  isRegistRejected: false,

  errorUpdate: undefined,
  isUpdatePending: false,
  isUpdateFulfilled: false,
  isUpdateRejected: false,
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case login.pending:
      return {
        ...prevState,
        isLoginPending: true,
      };
    case login.fulfilled:
      return {
        ...prevState,
        isLoginPending: false,
        isLoginRejected: false,
        isLoginFulfilled: true,
        user: action.payload,
        isLogin: true,
      };
    case login.rejected:
      return {
        ...prevState,
        isLoginPending: false,
        isLoginRejected: true,
        isLoginFulfilled: false,
        errorLogin: action.payload,
      };
    case regist.pending:
      return {
        ...prevState,
        isRegistPending: true,
      };
    case regist.fulfilled:
      return {
        ...prevState,
        isRegistPending: false,
        isRegistFulfilled: true,
        isRegistRejected: false,
        dataRegist: action.payload,
      };
    case regist.rejected:
      return {
        ...prevState,
        isRegistPending: false,
        isRegistRejected: true,
        isRegistFulfilled: false,
        errorRegist: action.payload,
      };
    case logout.logout:
      return {
        ...prevState,
        user: {},
        isLogin: false,
        errorLogin: undefined,
        isLoginPending: false,
        isLoginFulfilled: false,
        isLoginRejected: false,

        dataRegist: {},
        errorRegist: undefined,
        isRegistPending: false,
        isRegistFulfilled: false,
        isRegistRejected: false,
      };
    case update.pending:
      return {
        ...prevState,
        isUpdatePending: true,
      };
    case update.fulfilled: {
      let newUserData = {...prevState.user, imageUrl: action.payload.imageUrl};
      return {
        ...prevState,
        isUpdatePending: false,
        isUpdateRejected: false,
        isUpdateFulfilled: true,
        user: newUserData,
      };
    }
    case update.rejected:
      return {
        ...prevState,
        isUpdatePending: false,
        isUpdateRejected: true,
        isUpdateFulfilled: false,
        errorUpdate: action.payload,
      };
    case reset.error:
      return {
        ...prevState,
        isLoginRejected: false,
        isRegistRejected: false,
      };
    case reset.fulfilledRegist:
      return {
        ...prevState,
        isRegistFulfilled: false,
      };
    default:
      return prevState;
  }
};

export default authReducer;
