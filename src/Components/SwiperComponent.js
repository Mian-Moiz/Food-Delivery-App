import React from 'react'
import { Text, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../Colors/Colors';
import styles from '../Styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon, { Icons } from '../Components/Icons';



const SwiperComponent = ({ iconType, iconName, imageSrc, swiperTitle, swipeDescription }) => {
  return (
    <View style={styles.slide1}>
      <View style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.green
      }}>
       
        <Icon
          type={iconType}
          name={iconName}
          color={Colors.white}
          size={74}
        />
        <Text style={{ fontSize: 20, fontWeight: "600", paddingTop: 30, textAlign: "center", color: Colors.white }}>
          {swiperTitle}
        </Text>
        <Text style={{ fontSize: 16, paddingTop: 15, textAlign: "center", color: Colors.white }}>
          {swipeDescription}
        </Text>
      </View>
    




    </View>

  )
};

export default SwiperComponent;