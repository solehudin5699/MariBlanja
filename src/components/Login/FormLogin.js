import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {loginUser, resetRegist} from '../../redux/actions/users/auth';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimum length of 8').required('Required'),
});

const FormLogin = (props) => {
  const [isSecure, setSecure] = useState(true);
  const handleSecure = () => {
    let secure = !isSecure;
    setSecure(secure);
  };
  const navigation = useNavigation();
  const {
    isLogin,
    isLoginPending,
    isLoginFulfilled,
    isLoginRejected,
    errorLogin,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      navigation.navigate('Home');
    }
  }, [isLogin]);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //Will submit if not error
      onSubmit={(values) => {
        let body = {
          email: values.email,
          password: values.password,
        };
        dispatch(loginUser(body));
      }}
      validationSchema={SigninSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isSubmitting,
        resetForm,
      }) => {
        return (
          <>
            {isLoginRejected ? (
              <View style={styles.container_error}>
                <Text style={styles.errorText}>{errorLogin.msg}</Text>
              </View>
            ) : null}
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
              errorMessage={touched.email && errors.email ? errors.email : null}
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
            <Text style={styles.forgotPassText}>Forgot Password?</Text>

            <View style={styles.containerButton}>
              <Button style={styles.button} onPress={handleSubmit}>
                <Text style={styles.signinText}>Sign In</Text>
                {isLoginPending ? (
                  <View style={styles.container_loading}>
                    <ActivityIndicator
                      animating
                      size="small"
                      color="#FFFFFF"
                      style={styles.loading}
                    />
                  </View>
                ) : null}
              </Button>
            </View>
            <Text style={styles.dontHaveAccountText}>
              Don't have an account? Let's{' '}
              <Text
                style={{color: '#FF5F54'}}
                onPress={() => {
                  navigation.navigate('Register');
                  dispatch(resetRegist());
                }}>
                Sign Up
              </Text>
            </Text>
          </>
        );
      }}
    </Formik>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container_error: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {fontSize: 16.5, color: 'red'},
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    marginBottom: 30,
    // padding: 20,
  },
  forgotPassText: {alignSelf: 'flex-end', marginRight: 20},
  button: {
    width: '95%',
    backgroundColor: '#118b0d',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  signinText: {color: '#FFFFFF', fontSize: 20},
  container_loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontHaveAccountText: {alignSelf: 'center', marginRight: 20},
  loading: {marginLeft: 5, marginTop: 3},
});
