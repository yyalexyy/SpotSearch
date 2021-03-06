
import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
//import logo from './assets/logo.png';     //import logo
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BouncingPreloader from 'react-native-bouncing-preloader';
import Swiper from 'react-native-swiper';
import openMap from 'react-native-open-maps';
import { LinearGradient } from 'expo-linear-gradient';


/**
* Result Screen
* @param {*} param0 
*/
export class ResultPage extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            option: props.route.params.option,
            cost: props.route.params.cost,              //users budget
            radius: props.route.params.radius,
            travelType: props.route.params.travelType,
            ready: false,
            where: { lat: null, lng: null },
            destination: '',
            location_idx: 1,
            prev_idx: 1,
            swipe_direc: 1,
            error: null,
            data: [],
            pages: [],  //Changed to
            key: 1,                 //for Swiper
            priceLvl: 0,                               //converted price levels
            images: [],
            loading: true,
        }

        this.toLocation = this.toLocation.bind(this);

    }

    

    //Tells render to stop auto rendering and only renders once
    shouldComponentUpdate = () => false

    /** Converting users budget to the price levels.
     *  Price Levels from 0 (most affordable) ~ 4 (most expensive).
     */
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
        else {
            this.setState({ priceLvl: -1 });
        }
    }

    /** Opening google maps
     *  Params: 
     *      travelType: determine transportation type. (enumeration : [drive, walk,public_transport])
     *      end: The destination that can be interpreted as a geolocation
     *      provider: string [google,apple]
     *      navigate_mode: Determines whether map should open in preview mode or in navigate mode (string [preview,navigate])
     */
    toLocation() {
        openMap({ travelType: `${this.state.travelType}`, 
            end: `${this.state.images[this.state.location_idx].address}`,
            provider: 'google', 
            navigate_mode: "navigate" })
    }


    componentDidMount() {
        this._isMounted = true;

        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,   //20 sec
            maximumAge: 60 * 60 * 24
        }
        if (this._isMounted) {
            this.setState({ ready: false, error: null });
        }
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
        const API_KEY = "Your_API_Key"; //process.env.API_PLACES_KEY;
        var url = "";

        if (this.state.priceLvl === -1) {
            url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
            `${this.state.where.lat}` + "," + `${this.state.where.lng}` +
            "&radius=" + `${this.state.radius}` +
            "&type=" + `${this.state.option}` +
            "&key=" + API_KEY;
        }
        else {
            url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
            `${this.state.where.lat}` + "," + `${this.state.where.lng}` +
            "&radius=" + `${this.state.radius}` +
            "&maxprice=" + `${this.state.priceLvl}` +
            "&type=" + `${this.state.option}` +
            "&key=" + API_KEY;
        }

        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        if (this._isMounted) {
            this.setState({ data: json.results });

            // console.log(this.state.data);
            // console.log(this.state.data[0].name);

            // Saving images to an array of objects with width, height, and reference
            for (let i = 0; i < this.state.data.length && i < 10; i++) {
                const location_name = this.state.data[i].name;
                const img_height = this.state.data[i].photos[0].height;
                const img_width = this.state.data[i].photos[0].width;
                const img_reference = this.state.data[i].photos[0].photo_reference;
                const location = this.state.data[i].vicinity;
                const rating = this.state.data[i].rating;
                const obj = {'name': location_name, 'height': img_height, 'width': img_width, 'photo_reference': img_reference, 'address': location, 'rating': rating};
                let newImages = [...this.state.images, obj];
                this.setState({ images: newImages });
            }

            console.log("Locations Found: " + this.state.images.length)

            this.setState({pages:(new Array(this.state.images.length))})
            for (let i = 0; i < this.state.pages.length; i++) {
                const temp = [...this.state.pages]
                temp[i] = i.toString()
                this.setState({pages: temp})
            }

            //console.log(this.state.images);     //images = [Obj = JSON ; Obj; Obj]
            this.setState({ loading: false });

            //Tells render to update so that it can switch from loading screen
            this.forceUpdate();

        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderItem(item, idx) {
        // const itemInt = parseInt(item)
        // const view_style = itemInt % 2 == 0 ? styles.slide1 : styles.slide2

        let img_width = this.state.images[item].width;
        let img_reference = this.state.images[item].photo_reference;
        // let fSize = Math.sqrt(wp("30%")*hp("10%")/this.state.images[item].address.length)
        let viewBoxHeight = this.state.images[item].address.length > 40 ? "10.5%" : "8%"
        // console.log(viewBoxHeight);

        return (
            <View style={styles.backgroundImgContainer} key={idx}>
                <ImageBackground style={styles.backgroundImg} blurRadius={7}
                    source={{ uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + img_width + "&photoreference=" + img_reference + "&key=Your_API_Key", crop: { width: wp("50%"), height: hp("100%") } }}>
                    
                    {/* Bottom Flap which contains location and address*/}
                    <View style = {{flexDirection: "row", position: 'absolute', height: hp("8%"), marginHorizontal: 45, bottom: 200}}>

                        {/* View box that contains address */}
                        <View style = {{ alignItems: 'center', backgroundColor: '#A8DDFC', position: 'relative', width: wp("50%"), height: hp("8%"), borderBottomLeftRadius: 15, borderBottomRightRadius: 15, shadowOffset:{width: 2,height: 2}, shadowColor: 'black', shadowOpacity: .5}}>
                            <ScrollView style={{marginHorizontal: 7, height: hp("8%")}}>
                                <Text adjustsFontSizeToFit style={{backgroundColor: 'black', color: "#ffffff", fontSize: 15, fontWeight: "bold", textAlign: 'left', marginTop: 10, height: hp("8%"), width: wp("50%")}}>
                                    {this.state.images[item].address}
                                </Text>
                            </ScrollView>
                        </View>

                        {/* View box that contains rating */}
                        <View style = {{backgroundColor: '#FDCC0D', position: 'relative', width: wp("25%"), height: hp("6%"), borderBottomLeftRadius: 15, borderBottomRightRadius: 15, shadowOffset:{width: 2, height: 2}, shadowColor: 'black', shadowOpacity: .5}}>
                            <Text style={{ color: "#ffffff", fontSize: 13, fontWeight: "bold", textAlign: 'center', marginTop: 12.5}}>
                                Rating: {this.state.images[item].rating}
                            </Text>
                        </View>
                    </View> 

                    {/* Middle Box */}
                    <View>
                        {/* Photo Box */}
                        <View style={{ alignItems: 'center' , shadowOffset:{width: 2, height: 2}, shadowColor: 'black', shadowOpacity: .5, top: -50}}>

                            <TouchableOpacity 
                                activeOpacity={0.8}
                                style={{ position: 'relative', height: hp("40%"), width: wp("80%"), borderRadius: 20}}
                                onPress={this.toLocation}>
                                <Image style={{ position: 'absolute', height: hp("40%"), width: wp("80%"), borderRadius: 20, borderColor: "#ffffff", borderWidth: 5}}
                                    source={{ uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + img_width + "&photoreference=" + img_reference + "&key=Your_API_Key" }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ position: 'absolute', flexDirection: "column-reverse", marginHorizontal: 50, bottom: 60}}>
                            <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold", textAlign: 'left'}} numberOfLines={3} ellipsizeMode='tail' >
                                {this.state.images[item].name}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    
    async onPageChanged(idx) {
        // Get user's swipe direction
        if (idx == 9 && this.state.prev_idx == 0) {         //edge case swipe left
            await this.setState({swipe_direc: 0})
        }
        else if (idx == 0 && this.state.prev_idx == 9) {    //edge case swipe right
            await this.setState({swipe_direc: 2})
        }
        else if (idx > this.state.prev_idx) {               //swiping right
            await this.setState({swipe_direc: 2})
        }
        else if (idx < this.state.prev_idx) {               //swiping left
            await this.setState({swipe_direc: 0})
        }
        // console.log("swipe_direc: " +this.state.swipe_direc )
        // Set the states
        if (this.state.swipe_direc == 2) {          // Set state when swiping right
            const newPages = this.state.pages.map(i => ((parseInt(i) + 1) % 10).toString())      // Update the array

            this.setState({ location_idx: ((this.state.location_idx + 1) % 10)})
            this.setState({ pages: newPages, key: ((this.state.key + 1) % 2), prev_idx: idx })

        }
        else if (this.state.swipe_direc == 0) {    // Set state when swiping left
            const newPages = this.state.pages.map(i => ((((parseInt(i) - 1) % 10) + 10) % 10).toString())       // Update the array (A problem would occur when use % for negative num, so we add 10 then mod 10)
            this.setState({ location_idx: ( (((this.state.location_idx - 1) % 10) +10) %10 ) })
            this.setState({ pages: newPages, key: ((this.state.key + 1) % 2), prev_idx: idx })

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
                <SafeAreaView flex="1">
                    <LinearGradient colors={['#C7EBFF', '#609FC2']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -20}}> 
                        <View style={{marginTop: hp("40%")}}>
                        <BouncingPreloader
                            icons={[
                                require('./assets/DinnerDate.png'),
                                require('./assets/FoodAreas.png'),
                                require('./assets/kite.png'),
                                require('./assets/landmark.png'),
                                require('./assets/dolphin.png'),
                            ]} />
                            <Text>Loading</Text>
                        </View> 
                    </LinearGradient>
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
