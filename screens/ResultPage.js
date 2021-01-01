import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert, FlatList } from 'react-native';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import Swiper from 'react-native-swiper';

const cache = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten"
}

/**
* Result Screen
* @param {*} param0 
*/
export class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: props.route.params.option,
            cost: props.route.params.cost,              //users budget
            radius: props.route.params.radius,
            ready: false,
            where: { lat: null, lng: null },
            error: null,
            data: [],
            pages: ["0", "1", "2"],
            key: 1,                 //for Swiper
            priceLvl: 0,                               //converted price levels
            images: [],
            loading: true,
        }
    }

    /** Converting users budget to the price levels.
     *  Price Levels from 0 (most affordable) ~ 4 (most expensive).
     * */
    priceLevelConvert() {
        if (this.state.cost === 0) {
            this.setState({ priceLvl: 0 });
        }
        else if (this.state.cost > 0 && this.state.cost <= 10) {
            this.setState({ priceLvl: 1 });
        }
        else if (this.state.cost > 10 && this.state.cost <= 25) {
            this.setState({ priceLvl: 2 });
        }
        else if (this.state.cost > 25 && this.state.cost <= 100) {
            this.setState({ priceLvl: 3 });
        }
        else if (this.state.cost > 100) {
            this.setState({ priceLvl: 4 });
        }
    }

    componentDidMount() {
        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,   //20 sec
            maximumAge: 60 * 60 * 24
        }
        this.setState({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);
    }
    geoSuccess = (position) => {
        console.log("Location: " + position.coords.latitude, position.coords.longitude);

        this.setState({
            ready: true,
            where: { lat: position.coords.latitude, lng: position.coords.longitude }
        })

        this.priceLevelConvert();
        this.fetchData();
    }
    geoFailure = (err) => {
        this.setState({ error: err.message })
    }

    fetchData = async () => {
        const API_KEY = "AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8"; //process.env.API_PLACES_KEY;
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
            `${this.state.where.lat}` + "," + `${this.state.where.lng}` +
            "&radius=" + `${this.state.radius}` +
            "&maxprice=" + `${this.state.priceLvl}` +
            "&rankby=prominence" +
            "&type=restaurant" +
            "&key=" + API_KEY;
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        this.setState({ data: json.results });

        // Saving images to an array of objects with width, height, and reference
        // Only saving 10 different locations that match price level
        for (let i = 0; i < 10; i++) {
            const obj = { "name": this.state.data[i].name, "photoDetails": this.state.data[i].photos };
            let newImages = [...this.state.images, obj];
            this.setState({ images: newImages });
        }
        this.setState({ loading: false });
        console.log(this.state.images);
    }

    render() {
        if (!this.state.loading) {
            return (
                <SafeAreaView backgroundColor='#91C6E4' flex="1">
                    {/* Display Result */}
                    <View style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                        <View style={{}}>
                            <TouchableOpacity style={{ fontSize: 80 }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Image style={styles.backBtn}
                                    source={require("./assets/goBack.png")} />

                            </TouchableOpacity>
                        </View>

                        <View style={{}}>
                            <Text style={{ color: "white", fontSize: 30 }}>Results</Text>
                        </View>

                    </View>

                    <Swiper
                        loop={false}
                        showPagination={false}>

                        <View testID="Hello" style={styles.slide1}>
                            <Text style={styles.text}>{this.state.images[0].name}</Text>
                        </View>
                        <View testID="Beautiful" style={styles.slide2}>
                            <Text style={styles.text}>{this.state.images[1].name}</Text>
                        </View>
                        <View testID="Simple" style={styles.slide3}>
                            <Text style={styles.text}>{this.state.images[2].name}</Text>
                        </View>
                        <View testID="Hello" style={styles.slide1}>
                            <Text style={styles.text}>{this.state.images[3].name}</Text>
                        </View>
                        <View testID="Beautiful" style={styles.slide2}>
                            <Text style={styles.text}>{this.state.images[4].name}</Text>
                        </View>
                        <View testID="Simple" style={styles.slide3}>
                            <Text style={styles.text}>{this.state.images[5].name}</Text>
                        </View>
                        <View testID="Hello" style={styles.slide1}>
                            <Text style={styles.text}>{this.state.images[6].name}</Text>
                        </View>
                        <View testID="Beautiful" style={styles.slide2}>
                            <Text style={styles.text}>{this.state.images[7].name}</Text>
                        </View>
                        <View testID="Simple" style={styles.slide3}>
                            <Text style={styles.text}>{this.state.images[8].name}</Text>
                        </View>
                        <View testID="Hello" style={styles.slide1}>
                            <Text style={styles.text}>{this.state.images[9].name}</Text>
                        </View>

                    </Swiper>

                </SafeAreaView>
            );

        } else {
            return (
                <SafeAreaView backgroundColor='#91C6E4' flex="1">
                    {/* Display Result */}
                    <View style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                        <View style={{}}>
                            <TouchableOpacity style={{ fontSize: 80 }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Image style={styles.backBtn}
                                    source={require("./assets/goBack.png")} />

                            </TouchableOpacity>
                        </View>

                        <View style={{}}>
                            <Text style={{ color: "white", fontSize: 30 }}>Results</Text>
                        </View>

                    </View>

                    <View>
                        <Text> LOADING </Text>
                    </View>

                </SafeAreaView>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    backBtn: {
        height: 40,
        width: 40,
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "180deg" }, { scale: .7 }]
    },


    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },


    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }

});