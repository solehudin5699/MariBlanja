import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {
  selectAllProducts,
  setTotalPrice,
  deleteSelectedProduct,
} from '../../redux/actions/cart/cart';
import ConfirmDelete from './ConfirmDelete';

export default function HeaderCart() {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cart);
  const [modalDelete, setModalDelete] = useState(false);
  const data = cart.filter((item) => item.isSelected === true);
  const handleDeleteSelected = () => {
    dispatch(deleteSelectedProduct());
    dispatch(setTotalPrice());
  };
  return (
    <>
      <View style={styles.allSelect}>
        <View style={styles.allSelect_Checkbox}>
          <CheckBox
            tintColors={{true: '#118b0d', false: '#A5A1A1'}}
            value={!Boolean(cart.find((item) => item.isSelected === false))}
            onValueChange={() => {
              dispatch(
                selectAllProducts(
                  !Boolean(cart.find((item) => item.isSelected === false)),
                ),
              );
              dispatch(setTotalPrice());
            }}
          />
          <Text style={styles.allSelect_Text}>Pilih semua produk</Text>
        </View>
        <Pressable
          style={styles.allSelect_Delete}
          onPress={() => {
            setModalDelete(true);
          }}>
          <Text style={styles.allSelect_DeleteText}>Hapus</Text>
        </Pressable>
      </View>
      <ConfirmDelete
        data={data}
        handleDelete={handleDeleteSelected}
        isShow={modalDelete}
        closeModal={setModalDelete}
      />
    </>
  );
}

const styles = StyleSheet.create({
  allSelect: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    zIndex: 5,
    borderBottomColor: 'rgba(201, 196, 196, 0.55)',
    borderBottomWidth: 1,
  },
  allSelect_Checkbox: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  allSelect_Text: {
    fontSize: 15,
    fontStyle: 'normal',
    color: '#646a72',
  },
  allSelect_Delete: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  allSelect_DeleteText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#118b0d',
  },
});
