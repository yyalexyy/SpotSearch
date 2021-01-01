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
        if(this.state.cost === 0){
            this.setState({ priceLvl: 0 });
        }
        else if(this.state.cost > 0 && this.state.cost <= 10) {
            this.setState({ priceLvl: 1 });
        }
        else if(this.state.cost > 10 && this.state.cost <= 25) {
            this.setState({ priceLvl: 2 });
        }
        else if(this.state.cost > 25 && this.state.cost <= 100) {
            this.setState({ priceLvl: 3 });
        }
        else if(this.state.cost > 100){
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
        console.log(position.coords.latitude, position.coords.longitude);

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
        // console.log(this.state.data);
        // console.log(this.state.data[0].name);
        
        // Saving images to an array of objects with width, height, and reference
        for (let i = 0 ; i < this.state.data.length; i++) {
            const name = this.state.data[i].name;
            const height = this.state.data[i].photos[0].height;
            const width = this.state.data[i].photos[0].width;
            const reference = this.state.data[i].photos[0].photo_reference;
            const obj = { 'name': name, 'height': height, 'width': width, 'photo_reference': reference };
            let newImages = [...this.state.images, obj];
            this.setState({ images: newImages });
        }

        console.log(this.state.images);     //images = [Obj = JSON ; Obj; Obj]

        this.setState({loading: false});

        // for (let i = 0 ; i < 5; i++) { 
        //     console.log("Displaying item");
        //     console.log(this.state.images[i])
        // }
    }

    renderItem(item, idx) {
        // console.log("Item: "+ item);
        
        // console.log("Idx: "+ idx);
        // console.log("------------------------")


        const itemInt = parseInt(item)
        const view_style = itemInt % 2 == 0 ? styles.slide1 : styles.slide2
        
        return (
            <View style={view_style} key={idx}>
                {/* <Image style={{width: 100, height: 100}}
                    source={{uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + photoWidth + "&photoreference=" + photoRef + "&key=AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8"}}/> */}
                    {/* this.state.images[item].name */}
                <Text style={styles.text}>{this.state.images[item].name}</Text>
            </View>
        )

        // <View> 
        //<Text>{item.name}</Text>
        //<Image style={{width: 100, height: 100}}
        //  source={{uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + photoWidth + "&photoreference=" + photoRef + "&key=AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8"}}/>
        //</View>
        
    }


    onPageChanged(idx) {
        if (idx == 2) {
            const newPages = this.state.pages.map(i => (parseInt(i)+1).toString())
            this.setState({ pages: newPages, key: ((this.state.key+1)%2) })
        } 
        else if (idx == 0) {
            const newPages = this.state.pages.map(i => (parseInt(i)-1).toString())
            this.setState({ pages: newPages, key: ((this.state.key+1)%2) })
        }
    }

    render() {
        // console.log("Images: " +this.state.images)
        if (!this.state.loading) {
            return (
                <SafeAreaView backgroundColor='#91C6E4' flex="1">
                    {/* Display Result */}
                    <View style={{display:'flex', flexDirection: "row", alignItems: "center"}}>
                        <View style={{}}>
                            <TouchableOpacity style={{fontSize:80}}
                                onPress={() => this.props.navigation.goBack()}>
                                <Image style={styles.backBtn}
                                    source={require("./assets/goBack.png")}/>

                            </TouchableOpacity>
                        </View>

                        <View style={{}}>
                            <Text style={{color: "white", fontSize:30}}>Results</Text>
                        </View>

                    </View>

                    {/* <Swiper
                        loop={false}
                        showPagination={false}>

                        <View testID="Hello" style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper {this.state.images[0].name}</Text>
                        </View>
                        <View testID="Beautiful" style={styles.slide2}>
                            <Text style={styles.text}>Beautiful {this.state.images.name}</Text>
                        </View>
                        <View testID="Simple" style={styles.slide3}>
                            <Text style={styles.text}>And simple {this.state.images.name}</Text>
                        </View>

                    </Swiper> */}



                    <Swiper
                        index={1}
                        key={this.state.key}
                        loop={false}
                        showPagination={false}
                        showsButtons={true}
                        onIndexChanged={(index) => this.onPageChanged(index)}>
                            
                            {this.state.pages.map((item, idx) => this.renderItem(item, idx))}




                        {/* <View> */}
                            {/* Displaying fetched blurry image for background */}
                            {/* <View>
                            </View>
                        </View> */}




                    </Swiper>



                    {/* {!this.state.ready && (
                        <Text style={styles.big}>Using GeoLocation in REACT</Text>
                    )}
                    {this.state.error && (
                        <Text style={styles.big}>{this.state.error}</Text>
                    )}
                    {this.state.ready && (
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(x, i) => i}
                            renderItem={this.renderItem}
                        />
                    )} */}

                    {/* {
                        this.state.ready && this.state.data && this.state.data.map((item, i) => {
                            const photoRef = item.photos.map(item => item.photo_reference);
                            const photoWidth = item.photos.map(item => item.width);
                            return(
                                
                                <Swiper loop={false}
                                showPagination={false}
                                index={0}>
                                    <View> 
                                        <Text>{item.name}</Text>
                                        <Image style={{width: 100, height: 100}}
                                        source={{uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + photoWidth + "&photoreference=" + photoRef + "&key=AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8"}}/>
                                    </View>
                                </Swiper>
                            )
                        })
                    } */}

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
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      }

});