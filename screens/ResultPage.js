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
export class ResultPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://api.scaleserp.com/search?api_key=9419519988374534B1FE7DFCD3D80C2A&q=Restaurant");
    const json = await response.json();
    this.setState( {data: json.organic_results} );

  }


  render(){
      return(
        <SafeAreaView backgroundColor = '#116466'>
          <FlatList
            data={this.state.data}
            keyExtractor={(x,i) => i}
            renderItem={ ({ item }) =>
              <Text >{item.title}</Text>}
          />

          <Text style={{textAlign: 'center'}}>
                Chick-fil-A
            </Text>

        </SafeAreaView>
      );

  }
}


const styles = StyleSheet.create({  
    container:{
      flex: 1,
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      justifyContent: 'center',

    },
    item:{
      flex: 1,
      alignSelf: 'stretch',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
    }

  });