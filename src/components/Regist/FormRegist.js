import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {registUser, resetError} from '../../redux/actions/users/auth';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^([a-z0-9]|_){0,}$/,
      'Only lowercase (a-z), number (0-9) and underscore (_) are allowed',
    )
    .min(4, 'Minimum length of 4 characters')
    .max(12, 'Max length of 12 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimum length of 8').required('Required'),
});

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isSecure, setSecure] = useState(true);
  const handleSecure = () => {
    let secure = !isSecure;
    setSecure(secure);
  };
  const {
    isRegistPending,
    isRegistFulfilled,
    isRegistRejected,
    errorRegist,
  } = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(resetError());
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  useEffect(() => {
    if (isRegistFulfilled) {
      navigation.navigate('Home');
    }
  }, [isRegistFulfilled]);
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        //Will submit if not error
        onSubmit={(values) => {
          let body = {
            username: values.username,
            email: values.email.toLowerCase(),
            password: values.password,
          };
          console.log(values);
          dispatch(registUser(body));
          if (isRegistFulfilled) {
            setTimeout(() => {
              values = null;
            }, 1000);
          }
        }}
        validationSchema={SignupSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isSubmitting,
        }) => {
          // console.log(touched);
          // console.log({...values});
          // console.log({...errors});
          return (
            <>
              {isRegistRejected ? (
                <View style={styles.containerError}>
                  <Text style={{fontSize: 16.5, color: 'red'}}>
                    {errorRegist.msg}
                  </Text>
                </View>
              ) : null}

              <Input
                inputContainerStyle={{
                  borderBottomColor:
                    values.username && !errors.username ? '#118b0d' : null,
                }}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                touched={touched.username}
                errorMessage={
                  touched.username && errors.username ? errors.username : null
                }
                placeholder="Enter your username"
                leftIcon={
                  <Icon
                    name="user"
                    size={22}
                    color={
                      values.username && !errors.username
                        ? '#118b0d'
                        : 'rgba(169, 169, 169, 0.8)'
                    }
                    type="antdesign"
                  />
                }
              />
              <Input
                keyboardType="email-address"
                inputContainerStyle={{
                  borderBottomColor:
                    values.email && !errors.email ? '#118b0d' : null,
                }}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched.email}
                errorMessage={
                  touched.email && errors.email ? errors.email : null
                }
                placeholder="Enter your e-mail"
                leftIcon={
                  <Icon
                    name="email"
                    size={22}
                    color={
                      values.email && !errors.email
                        ? '#118b0d'
                        : 'rgba(169, 169, 169, 0.8)'
                    }
                    type="fontisto"
                  />
                }
              />
              <Input
                inputContainerStyle={{
                  borderBottomColor:
                    values.password && !errors.password ? '#118b0d' : null,
                }}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched.password}
                errorMessage={
                  touched.password && errors.password ? errors.password : null
                }
                secureTextEntry={isSecure ? true : false}
                placeholder="Enter your password"
                leftIcon={
                  <Icon
                    name="lock"
                    size={22}
                    color={
                      values.password && !errors.password
                        ? '#118b0d'
                        : 'rgba(169, 169, 169, 0.8)'
                    }
                    type="feather"
                  />
                }
                rightIcon={
                  <Icon
                    onPress={() => handleSecure()}
                    name={isSecure ? 'eye' : 'eye-off'}
                    size={22}
                    color={
                      values.password && !errors.password
                        ? '#118b0d'
                        : 'rgba(169, 169, 169, 0.8)'
                    }
                    type="feather"
                  />
                }
              />

              <View style={styles.containerButton}>
                <Button style={styles.button} onPress={handleSubmit}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    Sign Up
                  </Text>
                  {isRegistPending ? (
                    <View style={styles.containerLoading}>
                      <ActivityIndicator
                        animating
                        size="small"
                        color="#FFFFFF"
                        style={{marginLeft: 5, marginTop: 3}}
                      />
                    </View>
                  ) : null}
                </Button>
              </View>
              <Text style={styles.textAlreadyAccount}>
                Already have an account? Let's{' '}
                <Text
                  style={{color: '#FF5F54'}}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  Sign In
                </Text>
              </Text>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default FormRegister;

const styles = StyleSheet.create({
  containerError: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    marginBottom: 30,
    // padding: 20,
  },
  button: {
    width: '95%',
    backgroundColor: '#118b0d',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  containerLoading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlreadyAccount: {
    alignSelf: 'center',
    marginRight: 20,
    lineHeight: 23,
    fontSize: 16,
  },
});
