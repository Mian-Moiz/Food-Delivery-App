import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from '../Constants/Constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SwitchToggle from "react-native-switch-toggle";
import Colors from '../Colors/Colors';

const Setting = ({navigation}) => {
  const [toggle, setToggle] = useState(false);
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
      <View style={{ marginTop: 30 }}>
        <Text style={styles.headertext}>SECURITY</Text>
      </View>
      <View style={{ backgroundColor: 'white',borderWidth:1,borderColor:Colors.lightGray }}>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5, backgroundColor: 'white',alignItems:'center' }}>
          <Text style={styles.text}>Allow Push Notification</Text>
          <SwitchToggle switchOn={toggle} onPress={() => setToggle(!toggle)}
            circleColorOff='#fff'
            circleColorOn='#fff'
            backgroundColorOn='#34C759'
            backgroundColorOff='#E9E9EB'
            containerStyle={{
              margin: 15,
              width: 70,
              height: 38,
              borderRadius: 25,
              padding: 5,
            }}
            circleStyle={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }} />
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={ styles.text }>Enable Face ID / Touch ID</Text>
          <SwitchToggle switchOn={toggle} onPress={() => setToggle(!toggle)}
            circleColorOff='#fff'
            circleColorOn='#fff'
            backgroundColorOn='#34C759'
            backgroundColorOff='#E9E9EB'
            containerStyle={{
              margin: 15,
              width: 70,
              height: 38,
              borderRadius: 25,
              padding: 5,
            }}
            circleStyle={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }} />
        </View>


      </View>
      <View style={{ marginTop: 30, }}>
        <Text style={styles.headertext}>PUSH NOTIFICATIONS</Text>
      </View>
      <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: Colors.lightGray }}>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', PaddingVertical: 10 ,alignItems:'center'}}>
          <Text style={styles.text}>Order updates </Text>
         
            <SwitchToggle switchOn={toggle} onPress={() => setToggle(!toggle)} 
            circleColorOff='#fff'
            circleColorOn='#fff'
            backgroundColorOn='#34C759'
            backgroundColorOff='#E9E9EB'
            containerStyle={{
            margin: 15,
              width: 70,
              height: 38,
              borderRadius: 25,
              padding: 5,
            }}
              circleStyle={{
                width: 30,
                height: 30,
                borderRadius: 20,
              }} />
        
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.text}>New arrivals</Text>
          <SwitchToggle switchOn={toggle} onPress={() => setToggle(!toggle)}
            circleColorOff='#fff'
            circleColorOn='#fff'
            backgroundColorOn='#34C759'
            backgroundColorOff='#E9E9EB'
            containerStyle={{
              margin: 15,
              width: 70,
              height: 38,
              borderRadius: 25,
              padding: 5,
            }}
            circleStyle={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }} />
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.text}>Promotions</Text>
          <SwitchToggle switchOn={toggle} onPress={() => setToggle(!toggle)}
            circleColorOff='#fff'
            circleColorOn='#fff'
            backgroundColorOn='#34C759'
            backgroundColorOff='#E9E9EB'
            containerStyle={{
              margin: 15,
              width: 70,
              height: 38,
              borderRadius: 25,
              padding: 5,
            }}
            circleStyle={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }} />
        </View>

      </View>
     
     <View style={{marginTop:30}}>
      
      <Text style={styles.headertext}>Account</Text>
     </View>
      <TouchableOpacity>
        <View style={styles.saveview}>
          <Text style={styles.savetext}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Setting
const styles = StyleSheet.create({
  text: { margin: 15, fontFamily: Constants.fontfamilyMdium, color: Colors.gray, fontSize: 15 },

  savetext: { color: '#34C759', textAlign: 'center', padding: 15, fontFamily: Constants.fontFamilyBold },
  view1: { justifyContent: 'space-between', flexDirection: 'row', padding: 5, backgroundColor: Colors.white },
  view2: { justifyContent: 'space-between', flexDirection: 'row', padding: 5 },
  saveview: {
    borderColor: Colors.gray, borderWidth: 0.4, backgroundColor: Colors.white
  },
headertext: {
  padding: 10, color: '#888888', fontFamily: Constants.fontFamilyBold, fontSize: 15 },
  buttonstyles:{
    
  }
})