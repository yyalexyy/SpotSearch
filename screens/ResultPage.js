
import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
//import logo from './assets/logo.png';     //import logo
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BouncingPreloader from 'react-native-bouncing-preloader';
import Swiper from 'react-native-swiper';

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

    // var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    // `${this.state.where.lat}` + "," + `${this.state.where.lng}` +
    // "&radius=" + `${this.state.radius}` +
    // "&maxprice=" + `${this.state.priceLvl}` +
    // "&type=restaurant" +
    // "&key=" + API_KEY;
    fetchData = async () => {
        const API_KEY = "AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8"; //process.env.API_PLACES_KEY;
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
            `${this.state.where.lat}` + "," + `${this.state.where.lng}` +
            "&radius=" + `${this.state.radius}` +
            "&type=restaurant" +
            "&key=" + API_KEY;
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        this.setState({ data: json.results });
        // console.log(this.state.data);
        // console.log(this.state.data[0].name);

        // Saving images to an array of objects with width, height, and reference
        for (let i = 0; i < this.state.data.length && i < 10; i++) {
            const location_name = this.state.data[i].name;
            const img_height = this.state.data[i].photos[0].height;
            const img_width = this.state.data[i].photos[0].width;
            const img_reference = this.state.data[i].photos[0].photo_reference;
            const obj = { 'name': location_name, 'height': img_height, 'width': img_width, 'photo_reference': img_reference };
            let newImages = [...this.state.images, obj];
            this.setState({ images: newImages });
        }

        // console.log(this.state.images);     //images = [Obj = JSON ; Obj; Obj]

        this.setState({ loading: false });
    }

    renderItem(item, idx) {
        // const itemInt = parseInt(item)
        // const view_style = itemInt % 2 == 0 ? styles.slide1 : styles.slide2

        let img_height = this.state.images[item].height;
        let img_width = this.state.images[item].width;
        let img_reference = this.state.images[item].photo_reference;


        // console.log("img_height: " + img_height)
        // console.log("img_width: " + img_width)
        // console.log("img_reference: " + img_reference)
        // console.log("------------------------------- ")

        // console.log("Item:" + item)
        // console.log("Idx:" +idx)
        // console.log("RenderItem Pages: " + this.state.pages);

        return (
            <View style={styles.backgroundImgContainer} key={idx}>
                <ImageBackground  style={styles.backgroundImg} blurRadius={7}
                    source={{uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" +  img_width + "&photoreference=" + img_reference + "&key=AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8", crop: {width: wp("50%"), height: hp("100%")} }}>
                        {/* <Text style = {{color: "white", fontSize: 42, fontWeight: "bold", textAlign: "center", backgroundColor: "#000000a0"}}>{this.state.images[item].name}</Text> */}

                        {/* Middle Box */}
                        <View>
                            {/* Photo Box */}
                            <View style = {{alignItems: 'center'}}>
                                <Image style={{height: hp("35%"), width: wp("70%"), borderRadius: 20, borderColor: "#ffffff", borderWidth: 5, top: -50}}
                                    source={{uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" +  img_width + "&photoreference=" + img_reference + "&key=AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8" }}/>

                                    <View style={{alignItems: 'center', position: 'absolute', flexDirection: "row", marginLeft: 30, marginRight: 30}}>
                                        <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold", top: 100, marginHorizontal: 10}}>{this.state.images[item].name}</Text>
                                    </View>
    
                            </View>

                            <View style={{position: 'absolute', }}>
                               
                            </View>

                            <View>

                            </View>
                        </View>
                </ImageBackground>
            </View>
        )
    }

    // [0,1,2]     1,2,3
    onPageChanged(idx) {
        if (idx == 2) {     // When swiping right
            const newPages = this.state.pages.map(i => ((parseInt(i) + 1) % 10).toString())      // Update the array
            this.setState({ pages: newPages, key: ((this.state.key + 1) % 2) })
        }
        else if (idx == 0) {    // When swiping left
            const newPages = this.state.pages.map(i => ((((parseInt(i) - 1) % 10) + 10) % 10).toString())       // Update the array (A problem would occur when use % for negative num, so we add 10 then mod 10)
            this.setState({ pages: newPages, key: ((this.state.key + 1) % 2) })
        }
    }

    render() {
        // console.log("Images: " +this.state.images)
        //backgroundColor='#91C6E4'
        if (!this.state.loading) {
            return (
                <SafeAreaView backgroundColor="white" flex="1">
                    {/* Display Result */}
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: hp("-5%") }}>
                        <Swiper
                            index={1}
                            key={this.state.key}
                            loop={true}
                            showPagination={true}
                            showsButtons={true}
                            dotStyle={{ width: 0, height: 0 }}
                            activeDotStyle={{ width: 0, height: 0 }}
                            onIndexChanged={(index) => this.onPageChanged(index)}>
                            {this.state.pages.map((item, idx) => this.renderItem(item, idx))}
                        </Swiper>
                    </View>
                </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView backgroundColor='white' flex="1">
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: hp("30%")}}>
                        <BouncingPreloader
                            icons={[
                                require('./assets/DinnerDate.png'),
                                require('./assets/FoodAreas.png'),
                                require('./assets/Vacation.png'),
                                require('./assets/fireplace.png'),
                                require('./assets/dolphin.png'),
                            ]} />
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
    backgroundImgContainer: {
        flex: 1, 
        position: 'absolute',
        justifyContent: "center",
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,
    },
    backgroundImg: {
        flex: 1, 
        justifyContent: 'center', 
        resizeMode: 'cover',
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