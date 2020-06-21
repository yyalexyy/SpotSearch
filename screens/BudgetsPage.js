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
 * Low Budget Screen
 * @param {route} param0 to grab different info thats passed to screen 
 */
export const LowBudgetPage = ({ navigation }) => {
    return (
      <SafeAreaView backgroundColor = '#9957B8'>
        <View style = {styles.topBox}>
            <Text style={styles.textColor1}>Great, what is your budget mate?</Text>
        </View>

        <View style={styles.leftBox}>
          <Button 
            color='#9957B8'
            title="Budget $$"
            onPress={() => navigation.push('MaxDistancePage')}/>
        </View>

      </SafeAreaView>
    );
}


/**
 * High Budget Page
 * @param {*} param0 
 */
export const HighBudgetPage = ({ navigation }) => {
  return (
    <SafeAreaView backgroundColor = '#9957B8'>
      <View style = {styles.topBox}>
        <Text style={styles.textColor1}>Classy, what is your budget mate?</Text>
      </View>

      <View style={styles.leftBox}>
        <Button 
          color='#9957B8'
          title="Budget high"
          onPress={() => navigation.push('MaxDistancePage')}/>
      </View>

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