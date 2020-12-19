import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ShortCutMenu = (props) => {
  const navigation = useNavigation();
  const {cart} = useSelector((state) => state.cart);
  let isReadyInCart =
    props.isShow && cart.find((item) => item.id === props.data.id);

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
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
        backdropOpacity={0.5}
        onBackButtonPress={() => {
          props.closeModal(false);
        }}
        onBackdropPress={() => {
          props.closeModal(false);
        }}
        onSwipeComplete={() => {
          props.closeModal(false);
        }}
        swipeDirection="down"
        // propagateSwipe
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}>
        <View style={styles.container}>
          <View style={{marginTop: 10}}>
            <Card style={{overflow: 'hidden', borderRadius: 10}}>
              <CardItem
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (isReadyInCart) {
                      props.closeModal(false);
                      navigation.navigate('Cart');
                    } else {
                      props.handleAddToCart();
                      props.closeModal(false);
                      props.openModalToCart(true);
                    }
                  }}
                  style={{
                    borderBottomColor: 'rgba(201, 196, 196, 0.55)',
                    borderBottomWidth: 1,
                    width: '100%',
                    alignItems: 'flex-start',
                    marginVertical: 3,
                  }}>
                  <Text style={styles.listTitle}>
                    {isReadyInCart
                      ? 'Sudah di keranjang, lihat keranjang?'
                      : 'Tambahkan ke keranjang'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    marginVertical: 3,
                  }}>
                  <Text style={styles.listTitle}>Tambahkan ke whistlist</Text>
                </TouchableOpacity>
              </CardItem>
            </Card>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ShortCutMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 10,
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: 0,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listTitle: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 16,
    fontStyle: 'normal',
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: -3,
  },
});
