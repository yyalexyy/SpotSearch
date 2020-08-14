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
      data: [],
      option: props.route.params.option,
      cost: props.route.params.cost,
      radius: props.route.params.radius,
      ready: false,
      loca: { lat: null, log: null },
      error: null
    }
  }

  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,   //20 sec
      maximumAge: 60 * 60 * 24
    }
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(this.locaSuccess, this.locaFail, geoOptions);
  }

  locaSuccess = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);

    this.setState({
      ready: true,
      loca: { lat: position.coords.latitude, log: position.coords.longitude }
    })
  }

  locaFail = (error) => {
    this.setState({ error: error.message })
  }

  fetchData = async () => {
    // var data = {
    //   "option": this.state.option,
    //   "cost": this.state.cost,
    //   "hours": this.state.selectedHours,
    //   "mins": this.state.selectedMinutes
    // }

    // try{
    //   const response = await fetch("http://127.0.0.1:3000/send-data");
    //   const json = await response.json();
    //   this.setState( {data: json.title} );

    // } catch(err){
    //   console.error(err);
    // }

    const response = await fetch("https://api.scaleserp.com/search?api_key=demo&q=bitcoin");
    const json = await response.json();
    this.setState({ data: json.organic_results });
  }

  render() {
    return (
      <SafeAreaView backgroundColor='#116466'>
        {/* <FlatList
            data={this.state.data}
            keyExtractor={(x,i) => i}
            renderItem={ ({ item }) =>
              <Text >{item.title}</Text>}
          /> */}

        <Text style={{ textAlign: 'center' }}> {this.state.cost}, {this.state.option},{this.state.radius} </Text>

        <Text style={{ textAlign: 'center' }}>
          Chick-Fil-A
          </Text>

          { !this.state.ready && (
            <Text style={styles.big}>Using GeoLocation in REACT</Text>
          )}

          { this.state.error && (
            <Text style={styles.big}>{this.state.error}</Text>
          )} 

          { this.state.ready && (
            <Text style={styles.big}>{`Latitude: ${this.state.loca.lat} Longitude: ${this.state.loca.log}`}</Text>
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