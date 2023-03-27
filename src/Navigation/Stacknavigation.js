import React, { useEffect, useLayoutEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Signupwithnumber from '../Screens/Signupwithnumber';
import Resetpassword from '../Screens/Resetpassword';
import OnboardingScreen from '../Screens/OnboardingScreen';
import Home from '../Screens/Home';
import MyDrawer from './Drawernavigation';
import CRUD from '../Screens/CRUD';
import Add from '../Screens/Add';
import SignInScreen from '../Screens/Signin';
import Cuisines from '../Screens/Cuisines';
import Constants from '../Constants/Constants';
import Yourorder from '../Screens/Yourorder';
import fooditem from '../Screens/fooditem';
import Fooddetail from '../Screens/Fooddetail';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {

  const [screen, setScreen] = useState("");

  useLayoutEffect(() => {
    AsyncStorage.getItem("initialData").then((value) => {
      
      if (value == null || value == "") {
        setScreen("Login");
      } else {
        setScreen("MyDrawer")
      }
    })
  }, [])
  return (
    <>
      {screen == 'MyDrawer' &&(
        <Stack.Navigator initialRouteName='MyDrawer' screenOptions={{
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: Constants.fontFamilyBold
          },
          headerTitleAlign: 'center',
        }} >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Signupwithnumber" component={Signupwithnumber} options={{ headerShown: false }} />
          <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
          <Stack.Screen name="CRUD" component={CRUD} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
          <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cuisines" component={Cuisines} options={{ headerShown: true }} screenOptions={{
            headerTitle: ' Cuisines', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
          <Stack.Screen name="Yourorder" component={Yourorder} options={{ headerShown: true }} screenOptions={{
            headerTitle: 'Your order', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
          <Stack.Screen name="Fooditem" component={fooditem} options={{ headerShown: true }} screenOptions={{
            headerTitle: ' fooditem', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
          <Stack.Screen name="Fooddetail" component={Fooddetail} options={{ headerShown: true }} screenOptions={{
            headerTitle: 'Food Detail', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
        </Stack.Navigator> )}
      {screen == 'Login' && (<Stack.Navigator initialRouteName='Login' screenOptions={{
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: Constants.fontFamilyBold
          },
          headerTitleAlign: 'center',
        }} >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Signupwithnumber" component={Signupwithnumber} options={{ headerShown: false }} />
          <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
          <Stack.Screen name="CRUD" component={CRUD} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
          <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cuisines" component={Cuisines} options={{ headerShown: true }} screenOptions={{
            headerTitle: ' Cuisines', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
          <Stack.Screen name="Yourorder" component={Yourorder} options={{ headerShown: true }} screenOptions={{
            headerTitle: 'Your order', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
          <Stack.Screen name="Fooditem" component={fooditem} options={{ headerShown: true }} screenOptions={{
            headerTitle: ' fooditem', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
          <Stack.Screen name="Fooddetail" component={Fooddetail} options={{ headerShown: true }} screenOptions={{
            headerTitle: 'Food Detail', headerTitleAlign: 'center', headerTitleStyle: {
              fontFamily: Constants.fontFamilyBold
            }
          }} />
        </Stack.Navigator>)}
    </>
  )
}

export default Stacknavigation