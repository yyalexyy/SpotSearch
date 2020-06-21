import 'react-native-gesture-handler';      //Dont add any other import above this
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

import { SplashScreen } from 'expo'
SplashScreen.preventAutoHide();       //diplaying the splash screen
setTimeout(SplashScreen.hide, 3000);



/**
 * Home Screen
 * @param {*} param0 
 */
/*Decide how to get the drawable sidebar.
Ex. Display a button, and then: 
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
    to open the sidebar when button pressed.
*/
export const HomePage = ({ navigation }) => {
    return (
        <SafeAreaView backgroundColor = '#9957B8'>
    
          <View style = {styles.topBox}>
            <Text style={styles.textColor1}>What are you looking for today?</Text>
          </View>
        
        {/* oriented by column */}
          <ScrollView style = {{marginBottom: 30}}>
            
            <View style = {styles.scViewFormat}>
    
              <Text style = {{position: "absolute"}}>
                Dinner Date
              </Text>
              
              <View style = {styles.leftBox} backgroundColor = 'white'>
                <View style = {styles.buttonResize}>
                  <Button 
                  title = 'Food Areas'
                  color = '#9957B8'
                  onPress={() => navigation.push('LowBudgetPage')}/>
                </View>
              </View>
    

              <View style = {styles.rightBox} backgroundColor = 'white'>
                <Button title = "Dinner Dates"
                color = '#9957B8'
                onPress={() => navigation.push('HighBudgetPage')}/>
                </View>
    
            </View>
    
            <View style = {styles.scViewFormat}>
    
              <View style = {styles.leftBox} backgroundColor = 'white'>
                <Button title = "Vacation Spot"
                color = '#9957B8'/>
              </View>
              
              <View style = {styles.rightBox} backgroundColor = 'white'>
                <Button title = "Rest Areas"
                color = '#9957B8'/>
              </View>
    
            </View>
              
            <View style = {styles.scViewFormat}>
    
              <View style = {styles.leftBox}>
                <Button title = "Recreational Locations"
                color = '#9957B8'/>
              </View>
              
              <View style = {styles.rightBox}>
                <Button title = ""
                color = '#9957B8'/>
              </View>
    
            </View>
              
            <View style = {styles.scViewFormatFinal}>
    
              <View style = {styles.leftBox}>
                <Button title = ""
                color = '#9957B8'/>
              </View>
              
              <View style = {styles.rightBox}>
                <Button title = ""
                color = '#9957B8'/>
              </View>
            
            </View>
    
          </ScrollView>
        
    
        </SafeAreaView>
    );
}

  /**
 * Low Budget Screen
 * @param {route} param0 to grab different info thats passed to screen 
 */
export const LowBudgetPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.firstPage}>
                Great, what is your budget mate?
            </Text>

            <View style={styles.leftBox}>
                <Button 
                color='#9957B8'
                title="Budget $$"
                onPress={() => navigation.push('maxDistancePage')}/>
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
      <SafeAreaView style={styles.container}>
          <Text style={styles.firstPage}>
              Classy, what is your budget mate?
          </Text>

          <View style={styles.leftBox}>
              <Button 
              color='#9957B8'
              title="Budget high"
              onPress={() => navigation.push('maxDistancePage')}/>
          </View>

      </SafeAreaView>
  );
}

/**
* Max Distance Screen
* @param {*} param0 
*/
export const maxDistancePage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.firstPage}>
                Cool, what is your max distance?
            </Text>

            <View style={styles.buttonResize}>
                <Button 
                color='#9957B8'
                title="1 mile"
                onPress={() => navigation.push('ratingPage')}/>
            </View>

        </SafeAreaView>
    );
}

/**
* Rating Screen
* @param {*} param0 
*/
export const ratingPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.firstPage}>
                Any rating preference?
            </Text>

            <View style={styles.box1}>
                <Button 
                color='#9957B8'
                title="5 star"
                onPress={() => navigation.push('resultPage')}/>
            </View>

        </SafeAreaView>
    );
}

/**
* Result Screen
* @param {*} param0 
*/
export const resultPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.firstPage}>
                Chick-fil-A
            </Text>
        </SafeAreaView>
    );
}




  //Dont really need logo for now (cuz we dont have logo in any screen)
  const styles = StyleSheet.create({
    // logo: {
    //   width: 305,
    //   height: 159,
    //   marginBottom: 10,
    // },
  
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
      marginLeft: 20, 
      borderRadius: 10,
      width: 153,
      height: 143,
    },
  
    rightBox: {
      marginTop: 40,  
      backgroundColor: 'white', 
      marginRight: 20, 
      borderRadius: 10,
      width: 153,
      height: 143,
    },
  
    buttonResize: {
      backgroundColor: 'white', 
      width: 153, 
      height: 143, 
      borderRadius: 10, 
      alignItems: 'center', 
      justifyContent: 'center'
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