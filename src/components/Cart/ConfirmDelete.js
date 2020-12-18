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
import bebasongkir from '../../assets/images/bebasongkir.png';
import {useNavigation} from '@react-navigation/native';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalToCart = (props) => {
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
          <Pressable
            onPress={() => {
              props.closeModal(false);
            }}
            style={styles.closeIcon}>
            <Icon name="close" size={25} color="#646a72" type="ionicon" />
            <Text style={styles.deleteQuestion}>
              Hapus produk ini dari keranjang?
            </Text>
          </Pressable>

          <View style={{marginTop: 10}}>
            <Card style={{overflow: 'hidden', borderRadius: 10}}>
              <CardItem
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                {props.isShow &&
                  props.data.map((dataItem, indexData) => {
                    return (
                      <View
                        key={indexData}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          marginBottom: 15,
                        }}>
                        <Thumbnail
                          source={props.isShow && dataItem.image[0]}
                          style={{
                            width: 35,
                            height: 35,
                            marginRight: 5,
                            borderRadius: 3,
                          }}
                        />
                        <View style={{alignItems: 'flex-start', marginLeft: 5}}>
                          <Text numberOfLines={1} style={styles.nameProduct}>
                            {props.isShow ? `${dataItem.nameProduct}` : null}
                          </Text>
                          <Text style={styles.storeText}>
                            Toko{' '}
                            <Text numberOfLines={1} style={styles.nameStore}>
                              {props.isShow ? dataItem.store : null}
                            </Text>
                          </Text>

                          {props.isShow && dataItem.freeOngkir ? (
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
                    );
                  })}

                <Button
                  onPress={() => {
                    props.closeModal(false);
                    props.handleDelete();
                  }}
                  style={styles.button_button}>
                  <Text style={styles.button_text}>Hapus</Text>
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

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeIcon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingTop: 5,
    alignItems: 'center',
  },
  deleteQuestion: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 16,
    fontStyle: 'normal',
  },
  nameProduct: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginRight: 35,
  },
  storeText: {
    color: '#73767b',
    fontSize: 14,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
    textAlign: 'left',
  },
  nameStore: {
    color: '#000000',
    fontSize: 14,
    fontStyle: 'normal',
    marginRight: 35,
    fontWeight: 'bold',
  },
  button_button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fa591c',
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
