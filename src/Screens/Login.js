import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Colors from '../Colors/Colors'
import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button_Component from '../Components/Button_Component'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextInput from '../Components/TextInput';
import Button from '../Components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { loginUser } from '../api/auth-api'
import Icon, { Icons } from '../Components/Icons';
import Constants from '../Constants/Constants';
import { DataContext } from '../ContextProvider/ContextProvider';

const Login = ({ navigation }) => {
  const { saveToAsyncStorageCredentials } = useContext(DataContext)
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState()
  const [error, setError] = useState()


  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    setLoading(true)
    const response = await loginUser({
      email: email.value,
      password: password.value,
    })
    if (response.user) {
      let initialData = {
        email: email
      }
      
      saveToAsyncStorageCredentials("initialData",initialData)
      navigation.navigate('MyDrawer')
    }
    else if (response.error) {
      Alert.alert('[Email/wrong-password] Please Provide a correct username or password')
      setError(response.error)
    }
    setLoading(false)
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{ marginHorizontal: 20, marginBottom: 30 }}>
          <Text style={styles.signintext}>Sign In</Text>
        </View>

        <KeyboardAvoidingView enabled>
          <View style={{ marginHorizontal: 20 }}>
            <TextInput
              placeholder="E-mail "
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password "
              returnKeyType="done"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text, error: '' })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />
          </View>
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Resetpassword')}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Button loading={loading} mode="contained" onPress={onLoginPressed} style={styles.loginbutton} >
              Log In
            </Button>
          </View>
          <View style={{ alignItems: 'center', marginVertical: 40 }}>
            <Text style={styles.oRtext}>OR</Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity style={styles.facebookbutton}>
              <Text style={styles.facebooktext}> Login With Facebook</Text>
            </TouchableOpacity>
          </View>
          <Button_Component
            iconType={Icons.FontAwesome}
            iconName={"apple"}

            text="Sign in with Apple"
            buttonStyle={styles.btnContainerChecked}
            textStyle={styles.txtContainerChecked}
            onPress={() => {
              navigation.navigate("LoginScreen", { userType: route.params.userType });
            }}
          />
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Signupwithnumber')}>
              <Text style={styles.phonenotext}>Login with phone number </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
  signintext: { fontSize: 30, marginTop: 40, textAlign: "left", color: Colors.green, fontFamily: Constants.fontFamilyBold },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: 5
  },
  forgot: {
    fontSize: 13,
    color: Colors.skyBlue,
    fontFamily: Constants.fontFamilyBold,
    marginHorizontal: 35
  },
  loginbutton: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    backgroundColor: Colors.green,
    marginTop: 10,
    fontSize: 16,
  },
  oRtext: { fontSize: 16, fontFamily: Constants.fontfamilyMdium, paddingTop: 5, textAlign: "center", color: Colors.grey },
  facebookbutton: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    backgroundColor: '#4267b2',
    marginTop: 10,
    fontSize: 16,
  },
  facebooktext: { fontSize: 18, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.white },
  btnContainerChecked: {
    flexDirection: "row",
    backgroundColor: Colors.black,
    paddingVertical: 25,
    marginHorizontal: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  txtContainerChecked: {
    fontSize: 20,
    lineHeight: Platform.OS == "android" ? null : wp(16),
    color: Colors.white,
    paddingLeft: 6,
    fontFamily: Constants.fontfamilyMdium


  },
  phonenotext: { fontSize: 15, fontFamily: Constants.fontFamilyBold, paddingTop: 30, textAlign: "center", color: Colors.skyBlue },




  
});