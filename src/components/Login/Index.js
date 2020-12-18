import React from 'react';
import {View, StatusBar, Dimensions, StyleSheet} from 'react-native';
import {Container, Thumbnail, Content, Text, Button} from 'native-base';
import logoIcon from '../../assets/images/logoForSplash.png';
import FormLogin from './FormLogin';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor="#118b0d" />
      <Container style={styles.container}>
        <Content>
          <View style={styles.container_form}>
            <View style={styles.container_header}>
              <Thumbnail
                source={logoIcon}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <Text style={styles.mariText}>
                Mari
                <Text style={styles.blanjaText}>blanja</Text>
              </Text>
              <Text style={styles.signinText}>SignIn</Text>
            </View>
            <View style={styles.formWrap}>
              <FormLogin />
            </View>
          </View>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#d6ffdd'},
  container_form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    width: '100%',
    height: Dimensions.get('window').height - 50,
  },
  container_header: {
    backgroundColor: '#118b0d',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '100%',
  },
  mariText: {
    color: '#fa591c',
    fontSize: 32,
    fontWeight: 'bold',
  },
  blanjaText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  signinText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  formWrap: {width: '100%', zIndex: 10, marginTop: 50},
});
