import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, Assets } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { render } from 'react-dom';

export const HomePageRedesign = ({ navigation }) => {
  return (
    
    <View style = {styles.rightBox} backgroundColor = '#87A4EF'>
    <TouchableOpacity
      style = {styles.buttons} 
      onPress={() => navigation.push('BudgetPage')} >

        <Image
        style = {{height: 90, width: 90, marginTop: 14}} 
        source={require('./assets/FoodAreas.png')}/>

        <View style = {styles.bottomTextBorder}> 
          <Text style = {styles.boxText}>Food Areas</Text>
        </View>

        
    </TouchableOpacity>
  </View>

  );
}


const styles = StyleSheet.create({

  rightBox: {
    marginTop: 25,  
    backgroundColor: '#D9B08C', 
    marginRight: 20, 
    borderRadius: 10,
    width: wp('42.1%'),
    height: hp('23.7%'),
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: .8,
    shadowRadius: 3,
  },

});