import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Button, Card, CardItem, Thumbnail} from 'native-base';
import Modal from 'react-native-modal';
import {Icon} from 'react-native-elements';
import example from '../../assets/images/kemeja.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import {resetRegist} from '../../redux/actions/users/auth';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalToCart = (props) => {
  // const dispatch = useDispatch();
  const navigation = useNavigation();
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
        <View style={styles.container}>
          <Pressable
            onPress={() => props.closeModal()}
            style={styles.closeIcon}>
            <Icon name="close" size={25} color="#646a72" type="ionicon" />
          </Pressable>

          <View style={{marginTop: 10}}>
            <Card style={{overflow: 'hidden', borderRadius: 10}}>
              <CardItem
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // paddingHorizontal: 15,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <Thumbnail
                    source={props.data.image[0]}
                    style={{
                      width: 35,
                      height: 35,
                      marginRight: 5,
                      borderRadius: 3,
                    }}
                  />
                  <View style={{alignItems: 'flex-start', marginLeft: 5}}>
                    <Text style={styles.successAdd}>
                      Produk berhasil ditambahkan
                    </Text>
                    <Text numberOfLines={1} style={styles.nameProduct}>
                      {props.data.nameProduct}
                    </Text>
                    {props.data.freeOngkir ? (
                      <View>
                        <Thumbnail
                          source={bebasongkir}
                          style={{
                            width: 50,
                            height: 20,
                          }}
                        />
                      </View>
                    ) : null}
                  </View>
                </View>
                <Button
                  onPress={() => {
                    props.closeModal();
                    navigation.navigate('Cart');
                  }}
                  style={styles.button_nutton}>
                  <Text style={styles.button_text}>Lihat Keranjang</Text>
                </Button>
              </CardItem>
            </Card>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalToCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 10,
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 70,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeIcon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingTop: 5,
  },
  successAdd: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  nameProduct: {
    color: '#000000',
    fontSize: 14,
    fontStyle: 'normal',
    marginRight: 35,
  },
  button_nutton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#118b0d',
    height: 40,
    elevation: 0,
    marginTop: 10,
    marginBottom: -3,
  },
  button_text: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 15.5,
    textAlign: 'center',
  },
});
