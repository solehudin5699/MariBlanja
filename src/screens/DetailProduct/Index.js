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
              }}
              loop>
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
                  // reverse
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
            <Text>Haloo</Text>
          </CardItem>
        </Card>
      </Content>
      <Footer
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        {/* <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
            flexDirection: 'row',
          }}> */}
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
        {/* </View> */}
        {/* <View
          style={{flex: 0.35, justifyContent: 'center', flexDirection: 'row'}}> */}
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
        {/* </View> */}
        {/* <View
          style={{flex: 0.5, justifyContent: 'center', flexDirection: 'row'}}> */}
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
        {/* </View> */}
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
  starColor: {
    color: '#d8414a',
  },
  footer: {
    backgroundColor: 'white',
  },
});
