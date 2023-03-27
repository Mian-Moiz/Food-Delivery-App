import React from 'react'
import { View, Text,StyleSheet, Dimensions, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import Constants from '../Constants/Constants';

import { useFocusEffect } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const { width, height } = Dimensions.get('window');
const Cuisines = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => {
                        navigation.navigate('Yourorder')
                    }} >
                        <EvilIcons name='cart' size={35} color='green' />
                    </TouchableOpacity>
                ),

            });

        }),
    );
    const PRODUCTS = [
        {
            id: 0,
            name: 'Burger',
            image: 'https://assets.exploreedmonton.com/images/_1200x675_crop_center-center_none/Edmonton_Restaurants_Campio_Brewing_Food.jpg?mtime=20191125144247&focal=55.15%25+43.44%25',
        },
        {
            id: 1,
            name: 'Pizza',
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1280,h_720,x_0,y_0,c_fill',
        },
        {
            id: 2,
            name: 'Ramen',
            image: 'https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg',
        },
        {
            id: 3,
            name: 'Sandwich',
            image: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
        },
        {
            id: 4,
            name: 'Cake',
            image: 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591',
        },
        {
            id: 5,
            name: 'Sushi',
            image: 'https://i0.wp.com/bamboounion.pk/wp-content/uploads/2022/02/best-sushi-restaurant-in-Lahore.jpg?fit=1183%2C756&ssl=1',
        },
        {
            id: 6,
            name: 'Bar Food',
            image: 'https://images.squarespace-cdn.com/content/v1/52686290e4b05b8fbefac5c0/1645723613878-C3BC9RHQFUQP3ACID85F/Lelabar_Food_Combination3388.jpg',
        },
        {
            id: 7,
            name: 'BreakFast',
            image: 'https://www.acouplecooks.com/wp-content/uploads/2020/12/How-to-Make-Eggs-Sunny-Side-Up-051.jpg',
        },
        {
            id: 8,
            name: 'Italian',
            image: 'https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg',
        },
        {
            id: 9,
            name: 'Japanese',
            image: 'https://miro.medium.com/max/749/1*jjmPz8f-Nz25Fu46XG7Fqw@2x.jpeg',
        },
        {
            id: 10,
            name: 'New Mexican',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202104-birriatacos-058-1619806492.jpg',
        },
        {
            id: 11,
            name: 'Mediterranean',
            image: 'https://images.everydayhealth.com/images/diet-nutrition/mediterranean-diet/mediterranean-diet-recipes-01-722x406.jpg',
        }
    ];
    const renderItem = ({ item }) => {
        return (
            <ImageBackground
                imageStyle={{ flexGrow: 0, opacity: 0.7, backgroundColor: "black" }}
                style={{
                    height: height * 0.2,
                    width: width / 2.1,
                    margin: 5,
                    backgroundColor: 'black'
                }} source={{ uri: item.image }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} key={item.id}>
                    <Text style={{ ...styles.text, zIndex: 1, position: 'absolute', color: "white", fontSize: 20 }}>{item.name}</Text>
                </View>
            </ImageBackground>
        );
    };
    return (
        <View>
            <FlatList
                data={PRODUCTS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default Cuisines

const styles = StyleSheet.create({
    text: { padding: 10, color: '#888888', fontFamily: Constants.fontFamilyBold, fontSize: 20 },
})