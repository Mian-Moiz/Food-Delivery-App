import React from 'react'
import { Text, View, TouchableOpacity, Linking, Platform, StyleSheet, } from 'react-native'
import Constants from '../Constants/Constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../Colors/Colors';

const Contactus = ({ navigation }) => {
  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${091123456789}';
    } else {
      number = 'tel:${091123456789}';
    }
    Linking.openURL(number);
  };
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style={{ paddingHorizontal: 10 }} >
            <EvilIcons name='cart' size={35} color='green' />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}  >
            <View style={{ flexDirection: 'row', paddingHorizontal: 8, justifyContent: 'center' }}>
              <MaterialIcons name='arrow-back-ios' color='black' size={25} />
            </View>
          </TouchableOpacity>
        ),
      });

    }),
  );
  return (
    <View >
      <View style={{ marginTop: 30, paddingHorizontal: 5 }}>
        <Text style={styles.contacttext}>CONTACT</Text>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.view1}>
          <Text style={styles.text}>Address </Text>
          <Text style={styles.text}>28 South Water St.
            Winona, MN 55987</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: Colors.lightGray, marginHorizontal: 20 }}>

        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>E-mail us</Text>
          <Text style={styles.text}>cimadi3395@iucake.com</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => openDialScreen()}>
        <View style={styles.callview}>
          <Text style={styles.calltext}>Call us</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Contactus
const styles = StyleSheet.create({
  text: { margin: 15, fontFamily: Constants.fontFamilyBold, color: Colors.gray, fontSize: 13 },
  contacttext: { padding: 10, color: Colors.gray, fontFamily: Constants.fontFamilyBold },
  calltext: { color: 'green', textAlign: 'center', padding: 15, fontFamily: Constants.fontFamilyBold },
  view1: { justifyContent: 'space-between', flexDirection: 'row', padding: 5, backgroundColor: Colors.white },
  view2: { justifyContent: 'space-between', flexDirection: 'row', padding: 5 },
  callview: {
    marginTop: 30, borderColor: Colors.gray, borderWidth: 0.4, backgroundColor: Colors.white
  }
})