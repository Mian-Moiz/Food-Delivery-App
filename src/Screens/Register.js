import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView, Platform, } from 'react-native';
import Colors from '../Colors/Colors'
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useTheme, Avatar } from 'react-native-paper';
import Constants from '../Constants/Constants';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator ,LastnameValidator} from '../helpers/nameValidator'

import { signUpUser } from '../api/auth-api'
const Register = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' })
    const [lastName, setLastName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    const { colors } = useTheme();

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
    }

    renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);
    const onSignUpPressed = async () => {
        const nameError = nameValidator(name.value)
        const lastError = LastnameValidator(lastName.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError })
           setLastName({ ...lastName, error: lastError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return

        }
        setLoading(true)


        const response = await signUpUser({
            name: name.value,
           lastname: lastName.value,
            email: email.value,
            password: password.value,
        })
        navigation.navigate('Login')
        if (response.error) {
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
                <View style={{ alignItems: 'center' }}>

                    <Text style={styles.text}>Create new account</Text>
                </View>

                <View style={styles.container}>
                    <BottomSheet
                        ref={this.bs}
                        snapPoints={[330, 0]}
                        renderContent={this.renderInner}
                        renderHeader={this.renderHeader}
                        initialSnap={1}
                        callbackNode={this.fall}
                        enabledGestureInteraction={true}
                    />
                    <Animated.View style={{
                        margin: 20,
                        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                                <View style={{ borderWidth: 1, borderRadius: 50, padding: 30 }}>
                                    <Feather
                                        name="camera"
                                        size={35}
                                        color="#000000"
                                        style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </Animated.View>
                    {/* <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.container}>
                   */}
                    <View style={{ marginHorizontal: 20 }}>
                        <TextInput
                            returnKeyType="next"
                            value={name.value}
                            onChangeText={(text) => setName({ value: text, error: '' })}
                            error={!!name.error}
                            errorText={name.error}
                            placeholder="First Name"
                        />
                        <TextInput
                            returnKeyType="next"
                            value={lastName.value}
                            onChangeText={(text) => setLastName({ value: text, error: '' })}
                            error={!!lastName.error}
                            errorText={lastName.error}
                            placeholder="Last Name"
                        />
                        <TextInput
                            placeholder="E-mail Address"
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
                            placeholder="Password"
                            returnKeyType="done"
                            value={password.value}
                            onChangeText={(text) => setPassword({ value: text, error: '' })}
                            error={!!password.error}
                            errorText={password.error}
                            secureTextEntry
                        />
                    </View>
                    <View style={{ marginHorizontal: 50, marginTop: 10 }}>
                        <Button
                            loading={loading}
                            mode="contained"
                            onPress={onSignUpPressed}
                            style={styles.signupbutton}
                        >
                            <Text style={styles.signuptext}>Sign up</Text>
                        </Button>
                    </View>
                    {/* </KeyboardAvoidingView> */}
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>

                        <Text style={styles.ortext}>OR</Text>
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signupwithnumber')}>
                            <Text style={styles.signupwithno}>Sign up with phone number</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={styles.term}>By creating an account you agree with our </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={styles.termuse}>Terms of use</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Register;

const styles = StyleSheet.create({

    signuptext:
        { fontSize: 20, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.white },
    ortext: { fontSize: 20, fontFamily: Constants.fontfamilyMdium, paddingTop: 5, textAlign: "center", color: Colors.grey },
    signupwithno:
        { fontSize: 16, fontFamily: Constants.fontFamilyBold, paddingTop: 20, textAlign: "center", color:'#58A8FF' },
    term:
        { fontSize: 15, fontFamily: Constants.fontfamilyMdium, paddingTop: 50, textAlign: "center", color: Colors.black },
    termuse: { fontSize: 15, fontFamily: Constants.fontFamilyBold, textAlign: "center", color:'#4A4AFF',paddingBottom:20 },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,


    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
        fontFamily: Constants.fontfamilyMdium
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
        fontFamily: Constants.fontfamilyMdium
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: Colors.green,
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 15,
        fontFamily: Constants.fontFamilyBold,
        color: 'white',
    },
    text: { fontSize: 25, fontFamily: Constants.fontFamilyBold, marginTop: 40, textAlign: "center", color: Colors.green },
    signupbutton: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: Colors.green,
        marginTop: 10,
        fontSize: 16,
    },
    container: {
        flex: 1,
    },

});