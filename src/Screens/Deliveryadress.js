import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import Constants from '../Constants/Constants';
import Colors from '../Colors/Colors';

const Deliveryadress = () => {
    const [Line1, setLine1] = useState('');
    const [Line2, setLine2] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={styles.view}>
                <Text style={styles.text}>Line 1</Text>
                <View style={styles.TextInputview}>

                    <TextInput
                        style={styles.input}
                        value={Line1}
                        onChangeText={(text) => setLine1(text)}
                        underlineColorAndroid="#f000"
                        placeholder="103 Street no "
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"

                    />
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Line 2</Text>
                <View style={styles.TextInputview}>

                    <TextInput
                        style={styles.input}
                        value={Line2}
                        onChangeText={(text) => setLine2(text)}
                        underlineColorAndroid="#f000"
                        placeholder="Apt #6400 "
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"

                    />
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Zipcode</Text>
                <View style={styles.TextInputview}>

                    <TextInput
                        style={styles.input}
                        value={zip}
                        onChangeText={(text) => setZip(text)}
                        underlineColorAndroid="#f000"
                        placeholder="94102 "
                        placeholderTextColor="#8b9cb5"
                        keyboardType="numeric"

                    />
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>City</Text>
                <View style={styles.TextInputview}>

                    <TextInput
                        style={styles.input}
                        value={city}
                        onChangeText={(text) => setCity(text)}
                        underlineColorAndroid="#f000"
                        placeholder="London "
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"

                    />
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>Country</Text>
                <View style={styles.TextInputview}>

                    <TextInput
                        style={styles.input}
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                        underlineColorAndroid="#f000"
                        placeholder="United Kingdom "
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"

                    />
                </View>
            </View>

            <View style={{ marginHorizontal: 20 }}>

                <TouchableOpacity style={styles.SectionStyle1}
                >
                    <Text style={{ fontSize: 13, fontFamily: Constants.fontFamilyBold, textAlign: "center", color: Colors.white }}>SAVE ADDRESS</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default Deliveryadress

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#FAFAFC'


    },
    text: { flex:1,color: '#606060', fontFamily: Constants.fontFamilyBold, fontSize: 15,textAlign:'right' },
    SectionStyle1: {
        padding: 18,

        borderRadius: 10,

        backgroundColor: '#5EA23A',
        marginTop: 30,

    },
    view: { flexDirection: 'row', alignItems: 'center', padding: 10 },
    TextInputview:
    {
        flex: 4,
        justifyContent: 'center',

    }
})