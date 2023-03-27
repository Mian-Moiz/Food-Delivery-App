import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../Colors/Colors'
import Button_Component from '../Components/Button_Component'
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon, { Icons } from '../Components/Icons';
import Constants from '../Constants/Constants';

const Signupwithnumber = ({ navigation }) => {
    const [number, setNumber] = useState('')

    return (
        <View>
            <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
                <Text style={styles.signintext}>Sign In</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <TextInput
                    style={styles.inputStyle1}
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                    underlineColorAndroid="#f000"
                    placeholder="Phone number "
                    placeholderTextColor={Colors.gray}
                    keyboardType="numeric"
                />
            </View>
            <View style={{ marginHorizontal: 40, marginTop: 40 }}>

                <TouchableOpacity style={styles.SectionStyle1}>
                    <Text style={styles.sendcode}>Send Code</Text>
                </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'center', marginVertical: 40 }}>

                <Text style={styles.oRtext}>OR</Text>
            </View>
            <View style={{ marginHorizontal: 40 }}>
                <TouchableOpacity style={styles.facebookbutton}>
                    <Text style={{ fontSize: 18, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.white }}> Login With Facebook</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signinwithemail}>Sign in with E-mail </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Signupwithnumber
const styles = StyleSheet.create({
    signintext: { fontSize: 30, marginTop: 40, textAlign: "left", color: Colors.green, fontFamily: Constants.fontFamilyBold },
    sendcode: { fontSize: 18, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.white },
    SectionStyle1: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: Colors.green,
        marginTop: 10,
        fontSize: 16,
    },
    oRtext: { fontSize: 16, fontFamily: Constants.fontfamilyMdium, paddingTop: 5, textAlign: "center", color: Colors.grey },
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
    signinwithemail: { fontSize: 18, fontFamily: Constants.fontFamilyBold, paddingTop: 30, textAlign: "center", color: Colors.skyBlue },
    inputStyle1: {
        color: Colors.grey,
        padding: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: Colors.white,
        marginTop: 10,
        fontSize: 15,
        fontFamily: Constants.fontfamilyMdium
    },
    facebookbutton: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: '#4267b2',
        marginTop: 10,
        fontSize: 16,
    },
});