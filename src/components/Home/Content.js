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
import {Icon, Badge} from 'react-native-elements';
import example from '../../assets/images/coverbook.jpg';
import MasonryLayout from './MasonryLayout';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
const data = [
  {
    id: 1,
    nameProduct: 'React-Native 1',
    store: 'PT. Gramedia',
    official: false,
    image: [example, example, example],
    freeOngkir: false,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 10,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 2,
    nameProduct:
      'React-Native Tutorial React-Native Tutorial React-Native Tutorial 2',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 5,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 3,
    nameProduct: 'React-Native 3',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example, example, example],
    freeOngkir: true,
    location: 'Jakarta',
    grosir: true,
    price: 150000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 100,
    numUnlike: 20,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 4,
    nameProduct: 'React-Native 4',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 220000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 1,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 5,
    nameProduct: 'React-Native 5',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Cirebon',
    grosir: true,
    price: 100000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 1,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 6,
    nameProduct: 'React-Native 6',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 1,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 7,
    nameProduct: 'React-Native 7',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 100,
    numUnlike: 100,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
];

function Touchable(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      // onLongPress={() => {
      //   Number(dataLogin.level_id) === 1
      //     ? dispatch(modalEditDeleteAction(true, props.params))
      //     : null;
      // }}
      // title={`Go to ${props.screenName}`}
      onPress={() => navigation.navigate(props.screenName, props.params)}>
      {props.children}
    </Pressable>
  );
}

const Item = ({item}) => {
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  let rating = Math.round(
    (Number(item.numLike) / Number(item.numLike + item.numUnlike)) * 5,
  );
  return (
    <View style={{width: '100%'}}>
      <Card style={{overflow: 'hidden', borderRadius: 10}}>
        <Touchable screenName="DetailProduct" params={{...item}}>
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
                  fontWeight: '100',
                  fontFamily: 'arial',
                  marginBottom: 3,
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
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}>
                    <Icon
                      onPress={() => alert('Hallo')}
                      name="ellipsis-horizontal"
                      size={15}
                      color="#9fa6b0"
                      type="ionicon"
                    />
                  </View>
                </View>
              </View>
            </Body>
          </CardItem>
        </Touchable>
      </Card>
    </View>
  );
};

export default function Content(props) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 1.5,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: Dimensions.get('window').width,
      }}>
      <MasonryLayout data={data} renderItem={(item) => <Item item={item} />} />
      <View
        style={{
          position: 'absolute',
          bottom: 15,
          zIndex: 5,
          padding: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            borderRadius: 20,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 170,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="sort-amount-down-alt"
              type="font-awesome-5"
              size={18}
              color="#73767b"
            />
            <Text style={{color: '#73767b', marginLeft: 2}}>Sort</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="filter" type="ant-design" size={18} color="#73767b" />
            <Text style={{color: '#73767b', marginLeft: 2}}>Filter</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
