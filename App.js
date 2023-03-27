
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './src/Navigation/Stacknavigation';
import ContextProvider from './src/ContextProvider/ContextProvider';


const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stacknavigation />
      </NavigationContainer>
    </ContextProvider>

  )
}

export default App

// }
// import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

// import PhoneInput from 'react-native-phone-number-input';

// export default function App() {

//   const [phoneNumber, setPhoneNumber] = useState('');

//   const phoneInput = useRef(null);

//   const getPhoneNumber = () => {
//     Alert.alert(phoneNumber);
//   };

//   return (
//     <View style={styleSheet.MainContainer}>

//       <Text style={styleSheet.heading}> Example of React Native Phone Number Input </Text>

//       <PhoneInput
//         ref={phoneInput}
//         defaultValue={phoneNumber}
//         defaultCode="IN"
//         layout="first"
//         withShadow
//         autoFocus
//         containerStyle={styleSheet.phoneNumberView}
//         textContainerStyle={{ paddingVertical: 0 }}
//         onChangeFormattedText={text => {
//           setPhoneNumber(text);
//         }}
//       />

//       <TouchableOpacity style={styleSheet.button} onPress={() => getPhoneNumber()}>
//         <Text style={styleSheet.buttonText}>Get Phone Number</Text>
//       </TouchableOpacity >
//     </View>
//   );
// };

// const styleSheet = StyleSheet.create({

//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   heading: {
//     fontSize: 24,
//     textAlign: 'center',
//     paddingBottom: 20,
//     color: 'black'
//   },

//   phoneNumberView: {
//     width: '80%',
//     height: 50,
//     backgroundColor: 'white'
//   },

//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 25,
//     width: '80%',
//     padding: 8,
//     backgroundColor: '#00B8D4',
//   },

//   buttonText: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: 'white'
//   }
// });

