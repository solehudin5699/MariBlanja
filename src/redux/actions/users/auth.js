import {login, regist, logout, reset} from './actionTypes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// SIGN IN
export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(loginPending());
    dispatch(resetError());
    const user = {
      email: data.email,
      password: data.password,
    };
    return auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        return data.user.getIdToken().then((token) => {
          return firestore()
            .collection('users')
            .where('email', '==', user.email)
            .get()
            .then((dataUser) => {
              let dataLogin;
              dataUser.forEach((doc) => {
                dataLogin = {
                  userId: doc.data().userId,
                  name: doc.data().name,
                  username: doc.data().username,
                  email: doc.data().email,
                  imageUrl: doc.data().imageUrl,
                  token,
                  status: 200,
                };
              });
              dispatch(loginFulfilled(dataLogin));
            });
        });
      })

      .catch((err) => {
        let error = {
          status: 500,
          msg: 'Email or password is wrong, please try again',
        };
        dispatch(loginRejected(error));
      });
  };
};
const loginPending = () => {
  return {
    type: login.pending,
  };
};
const loginFulfilled = (data) => {
  return {
    type: login.fulfilled,
    payload: data,
  };
};
const loginRejected = (error) => {
  return {
    type: login.rejected,
    payload: error,
  };
};

// SIGN UP
export const registUser = (data) => {
  return (dispatch) => {
    dispatch(registPending());
    dispatch(resetError());
    const newUser = {
      // name: data.name,
      email: data.email,
      password: data.password,
      username: data.username,
    };
    let token, userId;
    let userCredentials;
    firestore()
      .collection('users')
      .doc(`${newUser.username}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let error = {status: 500, msg: 'Username is already registered'};
          dispatch(registRejected(error));
        } else {
          return auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((data) => {
              userId = data.user.uid;
              console.log('2');
              return data.user.getIdToken();
            })
            .then((idtoken) => {
              token = idtoken;
              userCredentials = {
                name: '',
                username: newUser.username,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                imageUrl: '',
                userId,
              };
              console.log('3');
              return firestore()
                .collection('users')
                .doc(`${newUser.username}`)
                .set(userCredentials);
            })
            .then(() => {
              let result = {
                status: 200,
                msg:
                  'Registration is suceess, please check your email for verivication',
              };
              dispatch(registFulfilled(result));
              dispatch(loginFulfilled(userCredentials));
            });
        }
      })
      .catch((err) => {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
          let error = {status: 500, msg: 'Email already in use'};
          dispatch(registRejected(error));
        } else {
          let error = {
            status: 500,
            msg: 'Something went wrong, please try again',
          };
          dispatch(registRejected(error));
        }
      });
  };
};

const registPending = () => {
  return {
    type: regist.pending,
  };
};
const registFulfilled = (result) => {
  return {
    type: regist.fulfilled,
    payload: result,
  };
};
const registRejected = (error) => {
  return {
    type: regist.rejected,
    payload: error,
  };
};

//LOG OUT
export const logoutUser = () => {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        dispatch({
          type: logout.logout,
          payload: true,
        });
      })
      .catch((err) => {
        dispatch({
          type: logout.logout,
          payload: false,
        });
      });
  };
};

export const resetError = () => {
  return {
    type: reset.error,
  };
};
export const resetRegist = () => {
  return {
    type: reset.fulfilledRegist,
  };
};
