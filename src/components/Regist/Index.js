import React from 'react';
import {View, StatusBar, Dimensions, StyleSheet} from 'react-native';
import {Container, Content, Text, Thumbnail} from 'native-base';
import logoIcon from '../../assets/images/logoForSplash.png';
import FormRegist from './FormRegist';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor="#118b0d" />
      <Container style={styles.container}>
        <Content style={styles.content}>
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
              <Text style={styles.signupText}>SignUp</Text>
            </View>
            <View style={styles.fromWrap}>
              <FormRegist />
            </View>
          </View>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#d6ffdd'},
  content: {margin: 0, padding: 0},
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
  signupText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  fromWrap: {width: '100%', zIndex: 10, marginTop: 50},
});
