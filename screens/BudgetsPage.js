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
 * Budgets Screen
 * @param {route} param0 to grab different info thats passed to screen 
 */
export const BudgetPage = ({ navigation }) => {
    return (
      <SafeAreaView backgroundColor = '#3AA4E0'>
        <View>
          <Text style = {styles.mainQuestion}>What is your budget?</Text>

        </View>

        <View style = {styles.topBox}>
            <Text style={styles.textColor1}>

            </Text>
        </View>

        <View style = {{backgroundColor: '#0E2163', marginTop: 190, marginBottom: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25, width: '100%', position: 'absolute'}}>

          <ScrollView style = {{marginBottom: 30}}>
              <View>
                <View style={styles.incrementBox}>

                </View>
              </View>






              <View>
                <Button
                  color='#9957B8'
                  title="Continue"
                  onPress={() => navigation.push('MaxDistancePage')}/>
              </View>
          </ScrollView>

          
        </View>

      </SafeAreaView>
    );
}


const styles = StyleSheet.create({  
    mainQuestion: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      color: '#ffffffff',
      fontSize: 30,


    },
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
  
    incrementBox: {
      marginTop: 40,  
      backgroundColor: 'white', 
      marginLeft: 8, 
      marginRight: 8,
      borderRadius: 10,
      height: 80,
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
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      marginLeft: 30,
      marginRight: 30,
      height: 144,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });