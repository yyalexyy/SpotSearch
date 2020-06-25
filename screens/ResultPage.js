import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
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
export const ResultPage = ({ navigation }) => {
    return (
        <SafeAreaView backgroundColor = '#116466'>
            <Text style={{textAlign: 'center'}}>
                Chick-fil-A
            </Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({  
    textColor1: {
      marginLeft: 30,
      marginRight: 30,
      color: '#9957B8',
      fontSize: 25,
      alignItems: "center",
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
  
    scViewFormat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    scViewFormatFinal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 175,
    },
  
    leftBox: {
      marginTop: 40,  
      backgroundColor: 'white', 
      marginLeft: 8, 
      borderRadius: 10,
      width: 145,
      height: 143,
    },
  
    rightBox: {
      marginTop: 40,  
      backgroundColor: 'white', 
      marginRight: 8, 
      borderRadius: 10,
      width: 145,
      height: 143,
    },
  
    buttonResize: {
      backgroundColor: 'white', 
      width: 153, 
      height: 143, 
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  
    topBox: {
      marginTop: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      height: 154,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });