import {
    StyleSheet,
    View,
    Text,
  
} from 'react-native';
import React, { useState, createRef } from 'react';
import Colors from '../Colors/Colors'
import Constants from '../Constants/Constants';
import { emailValidator } from '../helpers/emailValidator'
import { sendEmailWithPassword } from '../api/auth-api'
import Button from '../Components/Button'
import Toast from '../Components/Toast'

import TextInput from '../Components/TextInput';

const Resetpassword = () => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({ value: '', type: '' })
    const sendResetPasswordEmail = async () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({ ...email, error: emailError })
            return
        }
        setLoading(true)
        const response = await sendEmailWithPassword(email.value)
        if (response.error) {
            setToast({ type: 'error', message: response.error })
        } else {
            setToast({
                type: 'success',
                message: 'Email with password has been sent.',
            })
        }
        setLoading(false)
    }
  return (
    <View>
          <View style={{  marginBottom: 30 }}>

              <Text style={{ fontSize: 28, fontFamily: Constants.fontFamilyBold, marginTop: 50, textAlign: "left", color: Colors.green ,marginLeft:20 }}>Reset Password</Text>
          </View>
          <View style={{marginHorizontal:20}}>
              {/* <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                  underlineColorAndroid="#f000"
                  placeholder="E-mail "
                  placeholderTextColor="#8b9cb5"
                  keyboardType="email-address"
                  ref={emailInputRef}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                      passwordInputRef.current &&
                      passwordInputRef.current.focus()
                  }
                  blurOnSubmit={false}
              /> */}
              <TextInput
                  placeholder="E-mail "
                  returnKeyType="done"
                  value={email.value}
                  onChangeText={(text) => setEmail({ value: text, error: '' })}
                  error={!!email.error}
                  errorText={email.error}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  
              />
          </View>
         <View style={{ marginHorizontal: 40 }}>
         
              <Button
                  loading={loading}
                  mode="contained"
                  onPress={sendResetPasswordEmail}
                  style={styles.buttonStyle}
              >
                  <Text style={styles.signuptext}>Send Link </Text>
              </Button>
              <Toast {...toast} onDismiss={() => setToast({ value: '', type: '' })} />
          </View>
    </View>
    

            
          
      
  )
}

export default Resetpassword
const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 47,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: Colors.green,
        
        marginTop: 10,
        fontSize: 16,
    },
  
    inputStyle: {
        color: 'black',
        padding: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: Colors.white,
        marginTop: 15,
        fontSize: 16,
        fontFamily: Constants.fontFamilyBold 
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 15,
        color: Colors.skyBlue,
        fontWeight: 'bold',
        marginHorizontal: 35
    },
    btnContainerChecked: {
        flexDirection: "row",
        backgroundColor: Colors.black,
        height: 60,
        marginHorizontal: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    txtContainerChecked: {
        fontSize: 20,
        lineHeight: Platform.OS == "android" ? null : wp(16),
        color: Colors.white,
        paddingLeft: 6
        // marginLeft: 20

    },
    signuptext:
        { fontSize: 18, fontFamily: Constants.fontfamilyMdium, textAlign: "center", color: Colors.white },
});
