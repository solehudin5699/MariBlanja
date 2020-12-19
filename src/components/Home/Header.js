import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Header} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {Icon, SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getProduct} from '../../redux/actions/product/product';
import {data} from '../../dataDummy/data';
import {logoutUser} from '../../redux/actions/users/auth';
import ModalProfile from './ModalProfile';

export default function HeaderHome(props) {
  const navigation = useNavigation();
  const {cart} = useSelector((state) => state.cart);
  const [keyword, setKeyword] = useState('');
  const handleSearchInput = (value) => {
    setKeyword(value);
  };
  const dispatch = useDispatch();
  const handleSearch = (key) => {
    let newData = data.filter((item) => item.nameProduct.toLowerCase().includes(key.toLowerCase()));
    dispatch(getProduct(newData));
  };

  useEffect(() => {
    dispatch(getProduct(data));
  }, []);
  const [modalProfile, setModalProfile] = useState(false);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('Login');
  };
  const closeModalProfile = () => {
    setModalProfile(false);
  };
  return (
    <>
      <Header androidStatusBarColor="#118b0d" style={styles.header}>
        <SearchBar
          searchIcon={{
            name: 'search',
            color: 'rgba(58, 61, 66, 0.4)',
            type: 'material',
          }}
          clearIcon={{
            name: 'clear',
            color: 'rgba(58, 61, 66, 0.4)',
            type: 'material',
          }}
          showLoading={true}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Cari di sini..."
          placeholderTextColor="rgba(58, 61, 66, 0.4)"
          onChangeText={handleSearchInput}
          onEndEditing={() => {
            handleSearch(keyword);
          }}
          onClear={() => {
            handleSearch('');
          }}
          value={keyword}
          round={true}
        />
        <Pressable style={{flex: 0.11}}>
          <Icon name="grid" size={18} color="#646a72" type="ionicon" />
        </Pressable>
        <Pressable
          style={{flex: 0.11}}
          onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={18} color="#646a72" type="feather" />
          <View style={styles.cart_badgeContainer}>
            <Text style={styles.cart_badgeText}>{cart.length}</Text>
          </View>
        </Pressable>
        <Pressable style={{flex: 0.11}} onPress={() => setModalProfile(true)}>
          <Icon
            name="ios-person-circle"
            size={23}
            color="#646a72"
            type="ionicon"
          />
        </Pressable>
      </Header>
      <ModalProfile
        isShow={modalProfile}
        closeModal={closeModalProfile}
        handleLogout={handleLogout}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    width: '100%',
    padding: 0,
    borderBottomColor: 'rgba(201, 196, 196, 0.55)',
    borderBottomWidth: 1,
    // zIndex: 25,
  },
  cart_badgeContainer: {
    position: 'absolute',
    height: 18,
    width: 18,
    borderRadius: 15,
    backgroundColor: '#d8414a',
    // left: 18,
    top: -8,
    right: -3,
    zIndex: 10,
    justifyContent: 'center',
  },
  cart_badgeText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
    borderRadius: 15,
  },
  containerStyle: {
    padding: 0,
    backgroundColor: '#FFFFFF',
    margin: 0,
    borderWidth: 0,
    padding: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    flex: 0.67,
  },
  inputContainerStyle: {
    backgroundColor: '#f3f5f7',
    borderWidth: 0,
    height: 37,
  },
  inputStyle: {
    margin: 0,
    color: '#000000',
    borderWidth: 0,
    width: '100%',
    padding: 0,
  },
});
