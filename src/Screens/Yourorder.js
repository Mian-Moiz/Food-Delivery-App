import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native'
import Constants from '../Constants/Constants'
import { ProgressBar} from 'react-native-paper';

const Yourorder = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <ScrollView>
                <View style={styles.datetext}>
                    <Text style={{ ...styles.text, fontSize: 30 }}>13:29</Text>
                    <Text style={{ ...styles.text1, fontFamily: Constants.fontFamilyBold, fontSize: 15 }}>Estimated arrival</Text>
                </View>
                <View style={{ padding: 15 }}>
                    <Text style={styles.text2}>Preparing your order...</Text>
                    <Text style={styles.text1}>Latest arrival by 13:49</Text>
                    <ProgressBar progress={0.5} color='green' style={{ marginTop: 20 }} />
                </View>
                <View style={{ paddingVertical: 80, alignItems: 'center' }} >
                    <Image source={require('../Assets/chef.png')}
                        style={{ height: 200, width: 200, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ backgroundColor: '#FAFAFA', padding: 15 }}>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.text2}>Delivery Details</Text>
                            <Text style={styles.text3}>Address</Text>
                            <Text style={styles.text1}>28 South Water St. Winona, MN 55987</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 15 }} >
                        <Text style={{ ...styles.text3, fontSize: 20, }}>Type</Text>
                        <Text style={styles.text1}>Deliver to door</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FAFAFA', padding: 15, marginVertical: 20 }}>
                    <Text style={styles.text}>Order Summary</Text>
                    <View style={{ marginVertical: 15 }}>
                        <Text style={{ ...styles.text1, fontSize: 20 }} >Bouche</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Text style={styles.notext}>4</Text>
                        <Text style={{ ...styles.text1, marginHorizontal: 10 }}>Chocolate Fondant</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Text style={styles.notext}>2</Text>
                        <Text style={{ ...styles.text1, marginHorizontal: 10 }}>Apple Tatin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Text style={styles.notext}>3</Text>
                        <Text style={{ ...styles.text1, marginHorizontal: 10 }}>Steak Frites</Text>
                    </View>
                    <View style={styles.totalview}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text1}>$183.00</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ ...styles.text, fontSize: 30, padding: 15 }}>Order Delivered</Text>
                </View>
                <View style={{ backgroundColor: '#FAFAFA', padding: 15 }}>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                        <View style={{ marginVertical: 10 }}>
                            <View style={{ marginVertical: 15 }}>
                                <Text style={styles.text2}>Delivery Details</Text>
                            </View>
                            <Text style={styles.text3}>Address</Text>
                            <Text style={styles.text1}>28 South Water St. Winona, MN 55987</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 15 }}>
                        <Text style={{ ...styles.text3, fontSize: 20 }}>Type</Text>
                        <Text style={styles.text1}>Deliver to door</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FAFAFA', padding: 15, marginVertical: 20 }}>
                    <Text style={styles.text}>Order Summary</Text>
                    <View style={{ marginVertical: 15 }}>
                        <Text style={{ ...styles.text1, fontSize: 20 }}>Bouche</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Text style={styles.notext}>4</Text>
                        <Text style={{ ...styles.text1, marginHorizontal: 10 }}>Chocolate Fondant</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Text style={styles.notext}>2</Text>
                        <Text style={{ ...styles.text1, marginHorizontal: 10 }}>Apple Tatin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Text style={styles.notext}>3</Text>
                        <Text style={{ ...styles.text1, marginHorizontal: 10 }}>Steak Frites</Text>
                    </View>
                    <View style={styles.totalview}>

                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text1}>$183.00</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Yourorder

const styles = StyleSheet.create({
    text: { color: 'black', fontFamily: Constants.fontFamilyBold, fontSize: 20 },
    text2: { color: '#565656', fontFamily: Constants.fontFamilyBold, fontSize: 20 },
    text1: { fontFamily: Constants.fontfamilyMdium, paddingTop: 5, fontSize: 18 },
    notext: { fontFamily: Constants.fontfamilyMdium, padding: 8, fontSize: 18, borderColor: 'black', backgroundColor: '#EDEEED', color: 'black' },
    text3: { fontFamily: Constants.fontFamilyBold, fontSize: 20 },
    Avatar: { paddingHorizontal: 10 },
    container: {
        backgroundColor: 'white'
    },
    infoContainer: {
        padding: 10,
    },
    name: {
        fontSize: 20,
        fontFamily: Constants.fontFamilyBold
    },
    price: {
        fontSize: 15,
        fontFamily: Constants.fontFamilyBold,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
    image: {
        height: 300,
        width: '100%'
    },
    logo: {
        width: '50%',
        height: '50%',
    },
    datetext: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10, padding: 15 },
    totalview:
        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }
})