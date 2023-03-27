import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Orderhistory = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => {
            navigation.navigate('Yourorder')
          }}>
            <EvilIcons name='cart' size={35} color='green' />
          </TouchableOpacity>
        ),

      });

    }),
  );
  return (
    <View>
      <Text> Your Order History Will Shown Here</Text>
    </View>
  )
}

export default Orderhistory