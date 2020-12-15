import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import {
  Container,
  Header,
  Button,
  Content,
  CardItem,
  Card,
  Thumbnail,
  Footer,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {useRoute, useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
import qna from '../../assets/images/qna.png';
import carIcon from '../../assets/images/delivery.png';

export default function Index(props) {
  const navigation = useNavigation();
  const route = useRoute();
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody style={{zIndex: 9}}>
            <Swiper
              height={300}
              onMomentumScrollEnd={(e, state, context) =>
                console.log('index:', state.index)
              }
              loop={false}
              dotStyle={{
                backgroundColor: '#f3f5f7',
                width: 7,
                height: 7,
                borderRadius: 4,
              }}
              activeDotStyle={{
                backgroundColor: '#118b0d',
                width: 7,
                height: 7,
                borderRadius: 4,
              }}
              paginationStyle={{
                bottom: 15,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {route.params.image.map((item, index) => (
                <Image
                  key={index}
                  source={item}
                  style={{height: 300, width: null, flex: 1}}
                />
              ))}
            </Swiper>
            <View
              style={{
                position: 'absolute',
                bottom: -25,
                right: 20,
                zIndex: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  elevation: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="heart"
                  size={25}
                  color="#6b727b"
                  type="ionicon"
                  style={{alignSelf: 'center'}}
                />
              </View>
            </View>
          </CardItem>
          <CardItem bordered>
            <View style={{flex: 1, flexDirection: 'column', marginTop: 7}}>
              <View style={{justifyContent: 'flex-start', marginBottom: 8}}>
                <Text numberOfLines={2} style={styles.textProduct}>
                  {route.params.nameProduct}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  marginBottom: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.textPrice}>
                  Rp{formatRupiah(route.params.price)}
                </Text>
                {route.params.freeOngkir ? (
                  <View>
                    <Thumbnail
                      source={bebasongkir}
                      style={{
                        width: 70,
                        height: 23,
                      }}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  marginBottom: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text numberOfLines={2} style={styles.textProductfrom}>
                  Product dari
                </Text>
                <Thumbnail
                  source={route.params.official ? official : unofficial}
                  style={{
                    width: 15,
                    height: 15,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={
                    route.params.official
                      ? styles.textStoreOfficial
                      : styles.textStoreUnOfficial
                  }>
                  {route.params.official
                    ? 'Official Store'
                    : `${route.params.store}`}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  marginBottom: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.textStock}>Stok tersedia</Text>
              </View>
            </View>
          </CardItem>
          <CardItem bordered>
            <View style={{}}>
              <Text style={styles.textTitleDesc}>Deskripsi Produk</Text>
              <Text style={styles.textDesc}>{route.params.description}</Text>
            </View>
          </CardItem>
          <CardItem bordered>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginVertical: -10,
              }}>
              <View
                style={{
                  flex: 1 / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.textStar1}>
                  {(
                    (Number(route.params.numLike) /
                      Number(route.params.numLike + route.params.numUnlike)) *
                    5
                  ).toFixed(1)}
                </Text>
                <Icon name="star" size={20} color="gold" type="ant-design" />
                <Text style={styles.textStar2}>/5</Text>
              </View>
              <View
                style={{
                  flex: 1 / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  source={qna}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text style={styles.textDiscuss}>30 Diskusi</Text>
              </View>
              <View
                style={{
                  flex: 1 / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  source={carIcon}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text style={styles.textDelivery}>Pengiriman</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </Content>
      <Footer
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: 65,
          paddingVertical: 10,
          borderTopWidth: 0.1,
          borderTopColor: '#73767b',
        }}>
        <Button
          style={{
            backgroundColor: '#FFFFFF',
            width: 45,
            height: 45,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#118b0d',
            elevation: 0,
          }}>
          <Icon
            // reverse
            name="chatbubble-ellipses"
            size={25}
            color="#118b0d"
            type="ionicon"
            style={{alignSelf: 'center'}}
          />
        </Button>
        <Button
          style={{
            width: '25%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#fa591c',
            height: 45,
            elevation: 0,
          }}>
          <Text
            style={{
              color: '#fa591c',
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontSize: 15.5,
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </Button>
        <Button
          style={{
            width: '45%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#fa591c',
            paddingHorizontal: 9,
            height: 45,
            elevation: 0,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontSize: 15.5,
              textAlign: 'center',
            }}>
            Tambah ke Keranjang
          </Text>
        </Button>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  textProduct: {
    color: '#000000',
    fontSize: 18,
  },
  textPrice: {
    color: '#fa591c',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginRight: 8,
  },
  textTitleDesc: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    marginRight: 8,
    letterSpacing: 1,
    marginBottom: 5,
  },
  textDesc: {
    color: '#73767b',
    fontSize: 14,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
    textAlign: 'justify',
  },
  textProductfrom: {
    color: '#73767b',
    fontSize: 14.5,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
  },
  textStoreOfficial: {
    color: '#71029e',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textStoreUnOfficial: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textStock: {
    color: '#73767b',
    fontSize: 14.5,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
  },
  textDiscuss: {
    color: '#118b0d',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'arial',
  },
  textDelivery: {
    color: '#118b0d',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'arial',
  },
  textStar1: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textStar2: {
    marginBottom: -5,
    fontFamily: 'arial',
    fontStyle: 'normal',
    color: '#000000',
  },
  footer: {
    backgroundColor: 'white',
  },
});
