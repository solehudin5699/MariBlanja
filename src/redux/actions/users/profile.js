import {update} from './actionTypes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';
import {utils} from '@react-native-firebase/app';

async function getPathForFirebaseStorage(uri) {
  if (Platform.OS === 'ios') return uri;
  const stat = await RNFetchBlob.fs.stat(uri);
  console.log(stat);
  return stat.path;
}

export const updateProfile = (data) => {
  return (dispatch) => {
    dispatch(updatePending());
    const storageRef = storage().ref().child('profile');
    let imageUrl;
    const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${data.name}`;
    return storageRef
      .child(`${data.username}.${data.type.split('/')[1]}`)
      .putFile(data.uri)
      .then((res) => {
        console.log('Success');
      })
      .then(() => {
        return storageRef
          .child(`${data.username}.${data.type.split('/')[1]}`)
          .getDownloadURL();
      })
      .then((url) => {
        imageUrl = url;
        return firestore()
          .collection('users')
          .doc(`${data.username}`)
          .update({imageUrl});
      })
      .then(() => {
        console.log('Succesfull');
        let result = {
          status: 200,
          msg: 'Succes updating profile',
          imageUrl,
        };
        dispatch(updateFulfilled(result));
      })
      .catch((err) => {
        let error = {
          status: 500,
          msg: 'Error updating profile',
        };
        console.log(err);
        dispatch(updateRejected(error));
      });
  };
};

const updatePending = () => {
  return {
    type: update.pending,
  };
};
const updateFulfilled = (data) => {
  return {
    type: update.fulfilled,
    payload: data,
  };
};
const updateRejected = (error) => {
  return {
    type: update.rejected,
    payload: error,
  };
};
