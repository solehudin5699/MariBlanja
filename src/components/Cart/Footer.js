import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Footer, Button} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteAll,
  setTotalPrice,
  deleteSelectedProduct,
} from '../../redux/actions/cart/cart';
import ConfirmBuy from './ConfirmBuy';

export default function FooterCart() {
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTotalPrice());
  }, [dispatch]);
  const {totalPriceSelected, totalNumOrder, cart} = useSelector(
    (state) => state.cart,
  );
  const [modalBuy, setModalBuy] = useState(false);
  const data = cart.filter((item) => item.isSelected === true);
  const handleBuy = () => {
    dispatch(deleteSelectedProduct());
  };
  return (
    <>
      <Footer style={styles.footer}>
        <View style={styles.container}>
          <View style={styles.totalPrice_wrap}>
            <Text style={styles.totalPrice_text}>Total Harga</Text>
            <Text style={styles.totalPrice_value}>
              Rp{formatRupiah(Number(totalPriceSelected))}{' '}
            </Text>
          </View>
          <View style={styles.button_wrap}>
            <Button
              style={styles.button_button}
              onPress={() => {
                setModalBuy(true);
              }}>
              <Text style={styles.button_text}>
                {totalNumOrder < 99 ? `Beli (${totalNumOrder})` : `Beli (99+)`}
              </Text>
            </Button>
          </View>
        </View>
      </Footer>
      <ConfirmBuy
        data={data}
        isShow={modalBuy}
        closeModal={setModalBuy}
        handleBuy={handleBuy}
      />
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    padding: 0,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 65,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    elevation: 5,
  },
  totalPrice_wrap: {
    flex: 0.55,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
  },
  totalPrice_text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  totalPrice_value: {
    color: '#fa591c',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginRight: 8,
  },
  button_wrap: {
    flex: 0.45,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  button_button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fa591c',
    paddingHorizontal: 9,
    height: 40,
    elevation: 0,
  },
  button_text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 15.5,
    textAlign: 'center',
  },
});
