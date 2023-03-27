import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants from '../Constants/Constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import Colors from '../Colors/Colors';

const Accountdetail = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity >
            <Text style={{ color: '#027AFF', paddingHorizontal: 8, fontFamily: Constants.fontFamilyBold }}>
              Done
            </Text>
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
      <View style={{ marginTop: 30 }}>
        <Text style={styles.Headertext}>PUBLIC PROFILE</Text>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.view1}>
          <Text style={styles.text}>First Name</Text>
          <Text style={styles.text}>Marco</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: Colors.lightGray, marginHorizontal: 20 }}>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.text}>Last Name</Text>
          <Text style={styles.text}>Polo</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.Headertext}>PRIVATE DETAILS</Text>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.text}>E-mail Address</Text>
          <Text style={styles.text}>Your email Address</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: Colors.lightGray, marginHorizontal: 20 }}>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.text}>Phone Number</Text>
          <Text style={styles.text}>+16090078601</Text>
        </View>
      </View>
    </View>
  )
}

export default Accountdetail

const styles = StyleSheet.create({
  text: { margin: 15, fontFamily: Constants.fontFamilyBold, color: Colors.gray, fontSize: 13 },
  Headertext: { padding: 10, color: Colors.gray, fontFamily: Constants.fontFamilyBold },
  calltext: { color: 'green', textAlign: 'center', padding: 15, fontFamily: Constants.fontFamilyBold },
  view1: { justifyContent: 'space-between', flexDirection: 'row', padding: 5, backgroundColor: Colors.white },
  view2: { justifyContent: 'space-between', flexDirection: 'row', padding: 5 },
  callview: {
    marginTop: 30, borderColor: Colors.gray, borderWidth: 0.4, backgroundColor: Colors.white
  }
})