import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Constants from '../Constants/Constants'

const Fooddetail = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Text style={{ fontSize: 20, fontFamily: Constants.fontFamilyBold ,color:'black'}}>Steak Frites</Text>
            ),
        })
    }, [])
    return (
        <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' ,marginVertical:16}}>
            <View style={{ flexDirection: 'column', padding: 10, flex: 3, justifyContent: 'center', marginHorizontal: 5, }}>

                <Text style={{ ...styles.name, fontFamily: Constants.fontFamilyBold, }}>Steak Frites</Text>
                <Text style={{ ...styles.name, fontSize: 13 }}>Salmon dish and serve with Pesto dressed veggies for the perfect</Text>
                <Text style={styles.price}>$39</Text>
            </View>
            <View style={{ flex: 2, margin: 5 }}>

                <Image
                    style={{
                        resizeMode: 'contain',
                        height: 150,
                        width: 150,
                    }}
                    source={route.params.imageData}

                />
            </View>



        </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', padding: 10, flex: 3, justifyContent: 'center', marginHorizontal: 5, }}>

                    <Text style={{ ...styles.name, fontFamily: Constants.fontFamilyBold, }}>Steak Frites</Text>
                    <Text style={{ ...styles.name, fontSize: 15 }}>Salmon dish and serve with Pesto dressed veggies for the perfect</Text>
                    <Text style={styles.price}>$39</Text>
                </View>
                <View style={{ flex: 2, margin: 5 }}>

                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 150,
                            width: 150,
                        }}
                        source={route.params.imageData}

                    />
                </View>



            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', padding: 10, flex: 3, justifyContent: 'center', marginHorizontal: 5, }}>

                    <Text style={{ ...styles.name, fontFamily: Constants.fontFamilyBold, }}>Steak Frites</Text>
                    <Text style={{ ...styles.name, fontSize: 15 }}>Salmon dish and serve with Pesto dressed veggies for the perfect</Text>
                    <Text style={styles.price}>$39</Text>
                </View>
                <View style={{ flex: 2, margin: 5 }}>

                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 150,
                            width: 150,
                        }}
                        source={route.params.imageData}

                    />
                </View>



            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', padding: 10, flex: 3, justifyContent: 'center', marginHorizontal: 5, }}>

                    <Text style={{ ...styles.name, fontFamily: Constants.fontFamilyBold, }}>Steak Frites</Text>
                    <Text style={{ ...styles.name, fontSize: 15 }}>Salmon dish and serve with Pesto dressed veggies for the perfect</Text>
                    <Text style={styles.price}>$39</Text>
                </View>
                <View style={{ flex: 2, margin: 5 }}>

                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 150,
                            width: 150,
                        }}
                        source={route.params.imageData}

                    />
                </View>



            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', padding: 10, flex: 3, justifyContent: 'center', marginHorizontal: 5, }}>

                    <Text style={{ ...styles.name, fontFamily: Constants.fontFamilyBold, }}>Steak Frites</Text>
                    <Text style={{ ...styles.name, fontSize: 15 }}>Salmon dish and serve with Pesto dressed veggies for the perfect</Text>
                    <Text style={styles.price}>$39</Text>
                </View>
                <View style={{ flex: 2, margin: 5 }}>

                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 150,
                            width: 150,
                        }}
                        source={route.params.imageData}

                    />
                </View>



            </View>
        </View>
    )
}

export default Fooddetail

const styles = StyleSheet.create({
    name: {
        fontSize: 22,
        fontFamily: Constants.fontfamilyMdium,
        paddingVertical: 5
    },
    price: {
        fontSize: 18,
        fontFamily: Constants.fontfamilyMdium,

    },
    image: {
        height: 200,
        width: 200,


    },
})