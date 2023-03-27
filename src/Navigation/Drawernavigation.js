import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import CustomDrawer from './CustomDrawer';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Accountdetail from '../Screens/Accountdetail';
import Setting from '../Screens/Setting';
import Contactus from '../Screens/Contactus';
import Orderhistory from '../Screens/Orderhistory';
import Constants from '../Constants/Constants';
import Deliveryadress from '../Screens/Deliveryadress';
import Addcard from '../Screens/Addcard';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 15,
                    fontFamily: Constants.fontFamilyBold,
                },
            }}>
            <Drawer.Screen name="Home" component={Home} options={{
                headerTitle: 'Home', headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: Constants.fontFamilyBold
                },
                drawerIcon: ({ color }) => (
                    <Entypo name="home" size={22} color={color} />
                ),
            }} />
            <Drawer.Screen name="Account Detail" component={Accountdetail} options={{
                headerTitle: 'Edit Profile', headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: Constants.fontFamilyBold
                },
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle-outline" size={25} color='blue' />
                ),
            }} />
            <Drawer.Screen name="Order History" component={Orderhistory} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name='truck-delivery' size={25} color={color} />
                ),
            }} />
            <Drawer.Screen name="Settings" component={Setting} options={{
                headerTitle: 'Settings', headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: Constants.fontFamilyBold
                },
                drawerIcon: ({ color }) => (
                    <Feather name="settings" size={22} color={color} />
                ),
            }} />
            <Drawer.Screen name="Contactus" component={Contactus} options={{

                headerTitle: 'Contact us', headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: Constants.fontFamilyBold
                },
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="phone-in-talk" size={22} color='green' />
                ),
            }} />
            <Drawer.Screen name="Deliveryadress" component={Deliveryadress} options={{

                headerTitle: ' Delivery Address', headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: Constants.fontFamilyBold
                },
                drawerIcon: ({ color }) => (
                    <FontAwesome
                        name="address-card" size={22} color='green' />
                ),
            }} />
            <Drawer.Screen name="Addcard" component={Addcard} options={{

                headerTitle: ' Add a Card', headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: Constants.fontFamilyBold
                },
                drawerIcon: ({ color }) => (
                    <Entypo
                        name="credit-card" size={22} color='green' />
                ),
            }} />
        </Drawer.Navigator>

    );
}
export default MyDrawer