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


/**
* Result Screen
* @param {*} param0 
*/
export class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: [],
            option: props.route.params.option,
            cost: props.route.params.cost,
            radius: props.route.params.radius,
            ready: false,
            where: { lat: null, lng: null },
            error: null,
            data: [],
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
            "&type=restaurant" +
            "&key=" + API_KEY;
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        this.setState({ data: json.results });
    }

    renderItem = ({item}) => {
        const photoRef = item.photos.map(item => item.photo_reference);
        const photoWidth = item.photos.map(item => item.width);
        return (
            <View> 
                <Text>{item.name}</Text>
                <Image style={{width: 100, height: 100}}
                 source={{uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + photoWidth + "&photoreference=" + photoRef + "&key=AIzaSyCFZJZFTA4espyw0NRs6MBdgc2upvYXoh8"}}/>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView backgroundColor='#116466'>

                {!this.state.ready && (
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
                )}

            </SafeAreaView>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    }

});