import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Constants from '../Constants/Constants';
import firebase from '@react-native-firebase/app'
import { logoutUser } from '../api/auth-api'
import auth from '@react-native-firebase/auth';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
    const [userName, setUserName] = useState('')
    const signOutUser = async () => {

        await AsyncStorage.removeItem('initialData')
        firebase.auth().signOut()
        props.navigation.navigate('Login');
    };

    useEffect(() => {
        AsyncStorage.getItem("initialData").then((value) => {
            if (value == null || value == "") {
                setUserName("");
            } else {
                setUserName(JSON.parse(value).email.value)
            }
        })
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#fff' }}>
                <View style={{ margin: 10 }}>
                    <Image
                        source={require('../Assets/profile.png')}
                        style={styles.Image}
                    />
                    <Text
                        style={styles.text}>
                        {userName}
                    </Text>
                </View>
                <View
                    style={styles.view}>
                    <DrawerItemList {...props} />
                </View>
                <TouchableOpacity style={styles.TouchableOpacitystyle} onPress={() => signOutUser()}>
                    <View style={styles.view2}>
                        <Text
                            style={styles.logouttext}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 18,
        fontFamily: Constants.fontFamilyBold,
        marginBottom: 5,
        textAlign: 'center',

    },
    logouttext:
    {
        fontSize: 15,
        fontFamily: Constants.fontFamilyBold,
        marginLeft: 5,
        textAlign: 'center',

    },
    TouchableOpacitystyle:
        { borderWidth: 1, borderColor: '#ccc', marginHorizontal: 8 },
    Image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
        alignSelf: 'center',
    },
    view2:
        { alignItems: 'center', padding: 8 },
    view:
    {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,

    }
})