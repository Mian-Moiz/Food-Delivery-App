import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';
import Constants from '../Constants/Constants';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useFocusEffect } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../Colors/Colors';
const { width, height } = Dimensions.get('window');
const Home = ({ navigation }) => {
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
  const PRODUCTS = [
    {
      name: 'Burger',
      image: 'https://assets.exploreedmonton.com/images/_1200x675_crop_center-center_none/Edmonton_Restaurants_Campio_Brewing_Food.jpg?mtime=20191125144247&focal=55.15%25+43.44%25',
    },
    {
      name: 'Pizza',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1280,h_720,x_0,y_0,c_fill',
    },
    {
      name: 'Ramen',
      image: 'https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg',
    },
    {
      name: 'Sandwich',
      image: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
    },
    {
      name: 'Cake',
      image: 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591',
    }
  ];

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', }}>
        <Text style={styles.text}>Popular Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/burger.png')} />
              <Text style={styles.text1}>Burger</Text>
            </View>
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/sandwich.png')} />
              <Text style={styles.text1}>Sandwiches</Text>
            </View>
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/ramen.png')} />
              <Text style={styles.text1}>Ramen</Text>
            </View >
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/sushi.png')} />
              <Text style={styles.text1}>Japanese</Text>
            </View>
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/pizza.png')} />
              <Text style={styles.text1}>Pizza</Text>
            </View>
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/rice.png')} />
              <Text style={styles.text1}>Rice</Text>
            </View>
            <View style={styles.Avatar}>
              <Avatar.Image size={70} source={require('../Assets/cake.png')} />
              <Text style={styles.text1}>Cakes</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView >
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.text}>Best Deals</Text>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Cuisines')
            }}>
              <SwiperFlatList
                autoplay
                autoplayDelay={5}
                index={3}
                autoplayLoop
                autoplayInvertDirection
                showPagination
                data={PRODUCTS}
                renderItem={({ item }) => (
                  <View>
                    <ImageBackground
                      imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
                      resizeMode={"stretch"}
                      style={{
                        height: height * 0.4,
                        width: width,
                        backgroundColor: 'black'
                      }} source={{ uri: item.image }} >
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ ...styles.text, zIndex: 1, position: 'absolute', color: "white", fontSize: 25 }}>{item.name}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ marginVertical: 10, backgroundColor: Colors.lightGray, padding: 10 }}>
          <Text style={styles.text}>Most Popular</Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Fooditem', {
              imageData: require('../Assets/pizza.png')
            })}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.themodernproper.com/billowy-turkey/production/posts/2022/SteakFrites_14.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662581758&s=910d5c6660e3fec903d2eb118ebe1e3a',
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10 }}>
            <Text style={styles.name}>Steak Frites</Text>
            <Text style={styles.price}>$39</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Fooddetail', {
              imageData: require('../Assets/burger.png'),
            })}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/119549/108738771.jpg',
                }} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10 }}>
              <Text style={styles.name}>Trout Salad</Text>
              <Text style={styles.price}>$16</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://www.carnation.co.uk/sites/default/files/2019-10/choc-pud_0.png',
                }}
              />
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10 }}>
                <Text style={styles.name}>Chocolate Fondant</Text>
                <Text style={styles.price}>$15</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default Home
const styles = StyleSheet.create({
  text: { padding: 10, fontFamily: Constants.fontFamilyBold, fontSize: 20, color: '#28282B' },
  text1: { textAlign: 'center', paddingTop: 5, fontFamily: Constants.fontFamilyBold, color: '#28282B', fontSize: 13 },
  Avatar: { paddingHorizontal: 10 },
  container: {
    backgroundColor: 'white'
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontFamily: Constants.fontFamilyBold,
    color: '#28282B'
  },
  price: {
    fontSize: 15,
    fontFamily: Constants.fontFamilyBold,
    marginBottom: 8,
    color: '#28282B'
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  image: {
    height: 280,
    width: '100%'
  },
})