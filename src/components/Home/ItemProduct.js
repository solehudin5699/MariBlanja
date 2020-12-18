import React, {useState} from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {Text, Card, CardItem, Body, Thumbnail} from 'native-base';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Icon, Badge} from 'react-native-elements';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
import ShorCutModal from './ShortCutMenu';
import ModalToCart from '../DetailProduct/ModalToCart';
import {addToCart} from '../../redux/actions/cart/cart';

function PressableComponent(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(props.screenName, props.params)}>
      {props.children}
    </Pressable>
  );
}

export default function ItemProduct({item}) {
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  let rating = Math.round(
    (Number(item.numLike) / Number(item.numLike + item.numUnlike)) * 5,
  );
  const [modalShortCutMenu, setModalShortCutMenu] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({product: item, store: item.store}));
  };
  const [modalToCart, setModalToCart] = useState(false);
  const handleCloseModal = () => {
    setModalToCart(false);
  };
  return (
    <>
      <View style={{width: '100%'}}>
        <Card style={{overflow: 'hidden', borderRadius: 10}}>
          <PressableComponent screenName="DetailProduct" params={{...item}}>
            <CardItem cardBody>
              <Image
                source={item.image[0]}
                style={{
                  height: 150,
                  width: null,
                  flex: 1,
                }}
              />
            </CardItem>
            <CardItem
              padding={0}
              style={{
                backgroundColor: '#FFFFFF',
              }}>
              <Body
                style={{
                  width: '100%',
                  margin: -5,
                }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 15,
                    color: '#000000',
                    lineHeight: 18,
                    fontFamily: 'arial',
                    marginBottom: 3,
                    fontWeight: '600',
                  }}>
                  {item.nameProduct}
                </Text>
                <Badge
                  badgeStyle={{
                    backgroundColor: '#d6ffdd',
                    paddingHorizontal: 10,
                    borderRadius: 3,
                  }}
                  value={
                    <Text style={{color: '#10b51b', fontSize: 12}}>Grosir</Text>
                  }
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginVertical: 3,
                  }}>
                  Rp {formatRupiah(item.price)}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Thumbnail
                    source={item.official ? official : unofficial}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'arial',
                      fontSize: 13,
                      color: '#73767b',
                    }}>
                    {item.location}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 3,
                    width: '100%',
                  }}>
                  <View style={{flex: 0.5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      {[1, 2, 3, 4, 5].map((val, index) => (
                        <Icon
                          key={index}
                          name="star"
                          size={10}
                          color={val > rating ? '#d7dbe1' : 'gold'}
                          type="ant-design"
                        />
                      ))}
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'arial',
                          color: '#9fa6b0',
                        }}>
                        {`(${item.numLike})`}
                      </Text>
                    </View>
                    {item.freeOngkir ? (
                      <View>
                        <Thumbnail
                          source={bebasongkir}
                          style={{
                            width: null,
                            height: 20,
                          }}
                        />
                      </View>
                    ) : null}
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      flex: 0.5,
                    }}>
                    <TouchableOpacity
                      onPress={() => setModalShortCutMenu(true)}
                      style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        paddingHorizontal: 3,
                      }}>
                      <Icon
                        name="ellipsis-horizontal"
                        size={15}
                        color="#9fa6b0"
                        type="ionicon"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Body>
            </CardItem>
          </PressableComponent>
        </Card>
      </View>
      <ShorCutModal
        isShow={modalShortCutMenu}
        closeModal={setModalShortCutMenu}
        handleAddToCart={handleAddToCart}
        openModalToCart={setModalToCart}
      />
      <ModalToCart
        isShow={modalToCart}
        closeModal={handleCloseModal}
        data={item}
      />
    </>
  );
}
