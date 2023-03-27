import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'
import Icon, { Icons } from '../Components/Icons';
import Constants from '../Constants/Constants';

const Welcome = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: Colors.white, flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center',marginHorizontal:10 }}>
            <View >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Icon
                    type={Icons.MaterialIcons}
                    name='menu-book'
                    color={Colors.green}
                    size={150}
                />
                </View>
                <Text style={{ fontSize: 25, fontFamily: Constants.fontFamilyBold, paddingTop: 30,  color: Colors.green }}> Welcome to InstaEats</Text>
                <Text style={{ fontSize: 15, paddingTop: 15, paddingBottom: 40, textAlign: "center", color: Colors.gray, fontFamily: Constants.fontfamilyMdium }}>
                    Order food from our restaurant and {"\n"} make reservations in real-time.
                </Text>
           
            <View style={{marginHorizontal:25,}}>
                    <TouchableOpacity style={styles.SectionStyle1} onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={{ fontSize: 20, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.white }}>login</Text>
                    </TouchableOpacity>
            
               
                    <TouchableOpacity style={styles.SectionStyle2} onPress={() => {
                        navigation.navigate('Register')
                    }} >
                        <Text style={{ fontSize: 20, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.green, }}>
                            Sign up</Text>
                    </TouchableOpacity>
            </View>
            </View>
        



        </View>
    )
}

export default Welcome
const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 50,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        // margin: 10,
        backgroundColor: Colors.green,
        //  borderWidth: 1,
        borderRadius: 30,
        // borderColor: '#dadae8',
    },
    SectionStyle1: {
        flexDirection: 'row',
        height: 50,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        // margin: 10,
        backgroundColor: Colors.white,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: Colors.green,
        alignItems:"center",
        justifyContent:"center"
    },

    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        // borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
SectionStyle1: {
    padding: 15,
        borderWidth: 1,
            borderRadius: 30,
                borderColor: '#dadae8',
                    backgroundColor: Colors.green,
                        marginTop: 10,
                            fontSize: 16,
    },
SectionStyle2: {
    padding: 15,
        borderWidth: 1,
            borderRadius: 30,
    borderColor: Colors.green,
                    backgroundColor: Colors.white,
                        marginTop: 10,
                            fontSize: 16,
                            
    },
});