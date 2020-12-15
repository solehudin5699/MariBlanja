import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {Text, Card, CardItem, Body, Thumbnail} from 'native-base';
import {Icon, SearchBar, Badge} from 'react-native-elements';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';

function Touchable(props) {
  // const navigation = useNavigation();
  return (
    <Pressable
    // onLongPress={() => {
    //   Number(dataLogin.level_id) === 1
    //     ? dispatch(modalEditDeleteAction(true, props.params))
    //     : null;
    // }}
    // title={`Go to ${props.screenName}`}
    // onPress={() => navigation.navigate(props.screenName, props.params)}
    >
      {props.children}
    </Pressable>
  );
}

export default function Index({data}) {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('window').width,
          justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}>
        <View style={{flex: 0.49}}>
          {data
            .filter((item, index) => {
              return (index + 1) % 2 == 1;
            })
            .map((item, index) => {
              return (
                <View key={index} style={{width: '100%'}}>
                  <Card style={{overflow: 'hidden', borderRadius: 10}}>
                    <Touchable screenName="BookDetail" params={{...item}}>
                      <CardItem cardBody>
                        <Image
                          source={item.image}
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
                            {item.title}
                          </Text>
                          <Badge
                            badgeStyle={{
                              backgroundColor: '#d6ffdd',
                              paddingHorizontal: 10,
                              borderRadius: 3,
                            }}
                            value={
                              <Text style={{color: '#10b51b', fontSize: 12}}>
                                Grosir
                              </Text>
                            }
                          />
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: 15,
                              fontWeight: 'bold',
                              marginVertical: 3,
                            }}>
                            Rp 120.000
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Thumbnail
                              source={unofficial}
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
                              Bandung
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
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                  <Icon
                                    key={index}
                                    name="star"
                                    size={10}
                                    color="gold"
                                    type="ant-design"
                                  />
                                ))}
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontFamily: 'arial',
                                    color: '#9fa6b0',
                                  }}>
                                  (100)
                                </Text>
                              </View>
                              <View>
                                <Thumbnail
                                  source={bebasongkir}
                                  style={{
                                    width: null,
                                    height: 20,
                                  }}
                                />
                              </View>
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
                                  name="ellipsis-horizontal"
                                  size={13}
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
            })}
        </View>
        <View style={{flex: 0.49}}>
          {data
            .filter((item, index) => {
              return (index + 1) % 2 == 0;
            })
            .map((item, index) => {
              return (
                <View key={index} style={{width: '100%'}}>
                  <Card style={{overflow: 'hidden', borderRadius: 10}}>
                    <Touchable screenName="BookDetail" params={{...item}}>
                      <CardItem cardBody>
                        <Image
                          source={item.image}
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
                            {item.title}
                          </Text>
                          <Badge
                            badgeStyle={{
                              backgroundColor: '#d6ffdd',
                              paddingHorizontal: 10,
                              borderRadius: 3,
                            }}
                            value={
                              <Text style={{color: '#10b51b', fontSize: 12}}>
                                Grosir
                              </Text>
                            }
                          />
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: 15,
                              fontWeight: 'bold',
                              marginVertical: 3,
                            }}>
                            Rp 120.000
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Thumbnail
                              source={official}
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
                              Bandung
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
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                  <Icon
                                    key={index}
                                    name="star"
                                    size={10}
                                    color="gold"
                                    type="ant-design"
                                  />
                                ))}
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontFamily: 'arial',
                                    color: '#9fa6b0',
                                  }}>
                                  (100)
                                </Text>
                              </View>
                              <View>
                                <Thumbnail
                                  source={bebasongkir}
                                  style={{
                                    width: null,
                                    height: 20,
                                  }}
                                />
                              </View>
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
                                  name="ellipsis-horizontal"
                                  size={13}
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
            })}
        </View>
      </View>
    </ScrollView>
  );
}
