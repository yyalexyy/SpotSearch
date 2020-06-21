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
        <SafeAreaView>
            <Text style={styles.textColor1}>What are you looking for today?</Text>
            
            <ScrollView style = {{marginBottom: 30}}>
                <View style = {{marginBottom: 100}}>
                <View style = {styles.boxes} backgroundColor = '#5ae6a4'>
                <Button title = "Food Areas"
                    color = 'white'
                    onPress={() => navigation.push('BudgetPage', { name: "Budget"})}/>
                </View>
                <View style = {styles.boxes} backgroundColor = '#cbe35f'>
                    <Button title = "Dinner Dates"
                    color = 'white'
                    onPress={() => navigation.push('BudgetPage', { name: "$Budget$"})}/>
                </View>
                <View style = {styles.boxes} backgroundColor = '#7ca7eb'>
                    <Button title = "Vacation Spot"
                    color = 'white'/>
                </View><View style = {styles.boxes} backgroundColor = '#3e4037'>
                    <Button title = "Rest Areas"
                    color = 'white'/>
                </View><View style = {styles.boxes}>
                    <Button title = "Recreational Locations"
                    color = 'white'/>
                </View><View style = {styles.boxes}>
                    <Button title = ""
                    color = 'white'/>
                </View><View style = {styles.boxes}>
                    <Button title = ""
                    color = 'white'/>
                </View><View style = {styles.boxes}>
                    <Button title = ""
                    color = 'white'/>
                </View><View style = {styles.boxes}>
                    <Button title = ""
                    color = 'white'/>
                </View>

                </View>
            </ScrollView>
        

        </SafeAreaView>
    );
  }


  /**
 * Budget Screen
 * @param {route} param0 to grab different info thats passed to screen 
 */
export const BudgetPage = ({ route }) => {
    return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.firstPage}>
                Great, what is your budget mate?
            </Text>

            {route.params.name && <Text>{route.params.name}</Text>}


            <View style={styles.box1}>
                <Button 
                color='white'
                title="Budget $$"
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

            <View style={styles.box1}>
                <Button 
                color='white'
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
                color='white'
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
    container: {
        position: 'absolute',
        top: 50,
        left: 20, 
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // logo: {
    //   width: 305,
    //   height: 159,
    //   marginBottom: 10,
    // },

    textColor1: {
        marginLeft: 30,
        marginRight: 30,
        color: '#9F9F9F',
        fontSize: 30,
        alignContent: 'center',
        marginBottom: 20,
        marginTop: 25,
        fontWeight: 'bold'
    },

    boxes: {
        marginTop: 30, 
        padding: 30, 
        backgroundColor: '#9F9F9F', 
        marginLeft: 50, 
        marginRight: 50, 
        borderRadius: 45
    }
});