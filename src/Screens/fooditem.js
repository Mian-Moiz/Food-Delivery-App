import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Constants from '../Constants/Constants'
import Colors from '../Colors/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { DataContext } from '../ContextProvider/ContextProvider';

const Fooditem = ({ route,navigation }) => {


    const { saveToAsyncStorageCredentials } = useContext(DataContext)
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count == 1 ? count : count - 1);
  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={route.params.imageData}
      />
      <Text style={styles.name}>Salmon dish and serve with pesto dressed veggies for the perfect</Text>
      <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center', borderWidth: 1, borderRadius: 30, padding: 10, alignItems: 'center', marginHorizontal: 120, borderColor:'#B7B7B7' }}>

        <TouchableOpacity onPress={() => decrementCount()} >

          <Entypo name='minus' size={26} color='black' />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingHorizontal: 20, color:'black',fontFamily:Constants.fontFamilyBold }}>
          {count}
        </Text>
        <TouchableOpacity onPress={() => incrementCount()}>
          <Entypo name='plus' size={26} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>

        <TouchableOpacity style={styles.SectionStyle2}
        >
          <Text style={{ fontSize: 13, fontFamily: Constants.fontFamilyBold, textAlign: "center", color: Colors.black }}>$39.00</Text>
        </TouchableOpacity>
        <View style={styles.TextInputview}>

          <TouchableOpacity style={styles.input} onPress={() => navigation.navigate('Yourorder')} >
            <Text style={{ fontSize: 15, fontFamily: Constants.fontFamilyBold, textAlign: "center", color: Colors.white }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Fooditem

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    alignSelf:'center',
  },
  SectionStyle1: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#5EA23A',
    marginTop: 30,
  },
  SectionStyle2: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    borderColor: '#B7B7B7',
    borderWidth: 1,
    alignItems: 'center',
  },
  view: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 },
  text: { flex: 1, color: '#606060', fontFamily: Constants.fontFamilyBold, fontSize: 15, textAlign: 'right' },
  TextInputview:{
    flex: 4,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    marginHorizontal: 12,
    backgroundColor: '#FAFAFC',
    borderRadius: 10,
    backgroundColor: '#5EA23A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontFamily: Constants.fontfamilyMdium,
    margin: 20,
    color: 'black'
  },
})