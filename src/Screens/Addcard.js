import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { CountryPicker } from "react-native-country-codes-picker";
import Constants from '../Constants/Constants';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../Colors/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
const Addcard = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count == 1 ? count : count - 1);
  }
  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Steak Frites</Text>

      </View>
      <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center', borderWidth: 1, borderRadius: 30, padding: 10, alignItems: 'center', marginHorizontal: 120, borderColor: '#B7B7B7' }}>

        <TouchableOpacity onPress={() => decrementCount()} >

          <Entypo name='minus' size={26} color='black' />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingHorizontal: 20, color: 'black', fontFamily: Constants.fontFamilyBold }}>
          {count}
        </Text>
        <TouchableOpacity onPress={() => incrementCount()}>
          <Entypo name='plus' size={26} color='black' />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
      >
        <Text style={styles.panelButtonTitle}>Update Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.removefromcart}>Remove from cart</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity> */}
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
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[300, 0]}
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
    </View>
  )
}

export default Addcard

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
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
  removefromcart: {
    fontSize: 17,
    fontFamily: Constants.fontFamilyBold,
    color: 'red',
    textAlign: 'center',
    paddingVertical: 10
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
    marginTop: 25,
  },
  panelButtonTitle: {
    fontSize: 15,
    fontFamily: Constants.fontFamilyBold,
    color: 'white',
  },
})