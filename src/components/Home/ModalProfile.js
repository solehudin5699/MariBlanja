import React from 'react';
import {Text, View, Dimensions, StatusBar, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalProfile = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector((state) => state.user);
  return (
    <>
      <StatusBar backgroundColor="#118b0d" />
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        deviceWidth={width}
        deviceHeight={height}
        coverScreen={true}
        isVisible={props.isShow}
        style={styles.modal}
        backdropOpacity={0.5}
        onBackButtonPress={() => {
          props.closeModal();
        }}
        onBackdropPress={() => {
          props.closeModal();
        }}
        onSwipeComplete={() => {
          props.closeModal();
        }}
        swipeDirection="down"
        // propagateSwipe
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}>
        <View style={styles.content}>
          <View
            onPress={() => {
              dispatch(logoutUser());
              navigation.navigate('Login');
            }}>
            <Icon
              name="ios-person-circle"
              size={75}
              color="#118b0d"
              type="ionicon"
            />
            <Text style={styles.nameOrUsername}>{user.username}</Text>
          </View>

          <View style={styles.container_button}>
            <Button
              onPress={() => {
                props.closeModal();
                props.handleLogout();
              }}
              style={styles.button}>
              <Text style={styles.logoutText}>Logout</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  content: {
    backgroundColor: '#ffffff',
    width: '90%',
    padding: 10,
    justifyContent: 'flex-end',
    borderRadius: 3,
    alignItems: 'center',
  },
  nameOrUsername: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000000',
    fontStyle: 'normal',
  },
  container_button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
  },
  button: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#118b0d',
  },
  logoutText: {fontSize: 15, color: '#FFFFFF', fontStyle: 'normal'},
});

export default ModalProfile;
