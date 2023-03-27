import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon, { Icons } from '../Components/Icons';
import Onboarding from 'react-native-onboarding-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors/Colors';
import Constants from '../Constants/Constants';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'white' : 'grey';

    return (
        <View
            style={{
                width: 10,
                height: 10,
                marginHorizontal: 3,
                borderRadius:100,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16, color: 'white', fontFamily: Constants.fontFamilyBold }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16, color: 'white', fontFamily: Constants.fontFamilyBold }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 18, color: 'white', fontFamily: Constants.fontFamilyBold }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation, iconType, iconName }) => {
    return (
        <Onboarding
        
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            
            onSkip={() => navigation.replace("Welcome")}
            onDone={() => navigation.navigate("Welcome")}
            pages={[
                {
                    backgroundColor: '#5EA23A',
                    image: <MaterialIcons name='menu-book' size={150} color={Colors.white} />,
                    title: <Text style={styles.text}>Welome to InstaEats</Text>,
                    subtitle:'Log in and order delicious food from  resturants around you',
                    subTitleStyles: { fontSize: 15, color: 'white', fontFamily: Constants.fontfamilyMdium }
                },
                {
                    backgroundColor: '#5EA23A',
                    image: <MaterialCommunityIcons name='truck-delivery' size={150} color={Colors.white} />,
                    title: <Text style = { styles.text }> Order Food</Text> ,
                    subtitle:'Hungry?Order food in just a few clicks and we will take care of you..',
                    subTitleStyles: { fontSize: 15, color: 'white', fontFamily: Constants.fontfamilyMdium }
                },
                {
                    backgroundColor: '#5EA23A',
                   
                    image: <FontAwesome name='calendar' size={150} color={Colors.white} />,
                    title: <Text style={styles.text}>Reorder and Save</Text>,
                    subtitle:'Reorder in one click. Bookmark Your favorite restaurants',
                    subTitleStyles: { fontSize: 15, color: 'white', fontFamily: Constants.fontfamilyMdium}
                },
                {
                    backgroundColor: '#5EA23A',
                    image: <Octicons size={150} name='telescope' color={Colors.white} />,
                    title: <Text style={styles.text}>Track Delivery</Text>,

                    subtitle:'Track your food order in real-time with an interactive map',
                    subTitleStyles: { fontSize: 15, color: 'white', fontFamily: Constants.fontfamilyMdium }
                },
                {
                    backgroundColor: '#5EA23A',
                    image: <AntDesign name='apple-o' size={150} color={Colors.white} />,
                    title: <Text style={styles.text}>Seamless Payments</Text>,
                    subtitle: 'Pay with your credit card , Apple Pay or Android Pay , with one click', subTitleStyles: { fontSize: 15, color: 'white', fontFamily: Constants.fontfamilyMdium }
                   
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 25, color: 'white', fontFamily: Constants.fontFamilyBold,paddingBottom:25
    },
    subtitle:{
        fontSize: 15, color: 'white', fontFamily: Constants.fontfamilyMdium
    }
});