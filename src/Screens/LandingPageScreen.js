import React from 'react'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'

import Swiper from 'react-native-swiper'
import Colors from '../Colors/Colors'
import Button_Component from '../Components/Button_Component'
import styles from '../Styles/styles';
import SwiperComponent from '../Components/SwiperComponent';
import Icon, { Icons } from '../Components/Icons';


const image = require('../Assets/menu.png')
const image1 = require('../Assets/apple.png')
const image2 = require('../Assets/Truck.png')
const image3 = require('../Assets/binoculars.png')

const LandingPageScreen = ({ navigation, route }) => {

  return (

    <View style={{ flex: 1, backgroundColor: Colors.green, paddingBottom: 20 }}>
      <Swiper style={styles.wrapper}
        activeDotColor={Colors.white}
        showsButtons={false}>
       
        <SwiperComponent
          iconType={Icons.MaterialIcons}
          iconName={"menu-book"}
         
          swiperTitle={"Welome to InstaEats"}
          swipeDescription={'Log in and order delicious food from resturants around you'}

        >

        </SwiperComponent>
        <SwiperComponent
         
          iconType={Icons.MaterialCommunityIcons}
          iconName={"truck-delivery"}
          swiperTitle={"Order Food"}
          swipeDescription={'Hungry?Order food in just a few clicks and we will take care of you..'}

        >

        </SwiperComponent>
        <SwiperComponent
          iconType={Icons.FontAwesome}
          iconName="calendar"
          swiperTitle={"Reorder and Save"}
          swipeDescription={'Reorder in one click.Bookmark Your favorite restaurants.'}



        >



        </SwiperComponent>
        <SwiperComponent
          iconType={Icons.Octicons}
          iconName="telescope"
          swiperTitle={"Track Delivery"}
          swipeDescription={'track your food order in real-time with an interactive map'}

        >

        </SwiperComponent>

        <SwiperComponent
          iconType={Icons.AntDesign}
          iconName={"apple-o"}
          
          swiperTitle={"Seamless Payments"}
          swipeDescription={'Pay with your credit card , Apple Pay or Android Pay , with one click'}

        >

        </SwiperComponent>

      </Swiper>
      <View style={{ justifyContent: 'center', marginBottom: 20 }}>
      <Button_Component
          text="Skip"
          // buttonStyle={styles.btnContainerChecked}
          textStyle={styles.txtContainerChecked}
          onPress={() => {
            navigation.navigate('Welcome')
          }}
        />

      </View>
    </View>


  )
}

export default LandingPageScreen;

