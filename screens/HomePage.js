import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
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

function Separate() {
  return <View style = {{
    marginTop: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginLeft: 12,
    marginRight: 12,
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: .8,
    shadowRadius: 3,
    zIndex: 999
    }} />;
}
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
        <SafeAreaView backgroundColor = '#116466'>
    
          <View style = {styles.topBox}>
            <Text style={styles.textColor1}>What are you looking for today?</Text>
          </View>
        
          <Separate/>

        {/* oriented by column */}
          <ScrollView style = {{ marginBottom: 30}}>

            <View style = {styles.scViewFormat}>
              
              <View style = {styles.leftBox} backgroundColor = '#D9B08C'>
                <TouchableOpacity
                  style = {styles.buttons} 
                  onPress={() => navigation.push('HighBudgetPage')} >

                      <Image 
                      style = {{height: 90, width: 90, marginTop: 14}}
                      source={require('./assets/DinnerDate.png')}
                      />
                    
                    <View style = {{marginTop: 9}}>
                      <Text style = {styles.boxText}>Dinner Dates</Text>
                    </View>
                </TouchableOpacity>
              </View>

              <View style = {styles.bottomTextBorder}> 
                
              </View>

              <View style = {styles.rightBox} backgroundColor = '#D9B08C'>
                <TouchableOpacity
                  style = {styles.buttons} 
                  onPress={() => navigation.push('LowBudgetPage')} >

                    <Image
                    style = {{height: 90, width: 90, marginTop: 14}} 
                    source={require('./assets/FoodAreas.png')}/>

                    <View style = {{marginTop: 9}}>
                      <Text style = {styles.boxText}>Food Areas</Text>
                    </View> 
                </TouchableOpacity>
              </View>
    
            </View>
    
            <View style = {styles.scViewFormat}>
    
              <View style = {styles.leftBox} backgroundColor = '#D9B08C'>
                <TouchableOpacity
                  style = {styles.buttons} 
                  onPress={() => navigation.push('HighBudgetPage')} >

                    <Image
                    style = {{height: 90, width: 90, marginTop: 14}} 
                    source={require('./assets/Vacation.png')}/>

                    <View style = {{marginTop: 9}}>
                      <Text style = {styles.boxText}>Vacation Spot</Text>
                    </View> 

                </TouchableOpacity>
              </View>
              
              <View style = {styles.rightBox} backgroundColor = '#D9B08C'>
                <TouchableOpacity
                  style = {styles.buttons} 
                  onPress={() => navigation.push('HighBudgetPage')} >

                    <Image
                    style = {{height: 90, width: 90, marginTop: 14}} 
                    source={require('./assets/RestArea.png')}/>

                    <View style = {{marginTop: 9}}>
                      <Text style = {styles.boxText}>Rest Areas</Text>
                    </View> 

                </TouchableOpacity>
              </View>
    
            </View>
              
            <View style = {styles.scViewFormat}>
    
              <View style = {styles.leftBox}>
                <TouchableOpacity
                  style = {styles.buttons} 
                  onPress={() => navigation.push('HighBudgetPage')} >

                    <Image
                    style = {{height: 90, width: 90, marginTop: 14}} 
                    source={require('./assets/RecActivities.png')}/> 

                    <View style = {{marginTop: 9}}>
                      <Text style = {styles.boxText}>Rec Activities</Text>
                    </View> 
                    
                </TouchableOpacity>
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


const styles = StyleSheet.create({
    // logo: {
    //   width: 305,
    //   height: 159,
    //   marginBottom: 10,
    // },
  
    textColor1: {
      marginLeft: 30,
      marginRight: 30,
      color: 'black',
      fontSize: 30,
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
      marginTop: 25,  
      backgroundColor: '#D9B08C', 
      marginLeft: 20, 
      borderRadius: 10,
      width: 158,
      height: 148,
    },
  
    rightBox: {
      marginTop: 25,  
      backgroundColor: '#D9B08C', 
      marginRight: 20, 
      borderRadius: 10,
      width: 158,
      height: 148,
    },
  
    buttonResize: {
      backgroundColor: 'white', 
      width: 153, 
      height: 143, 
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttons: {
      alignItems: 'center',
      borderRadius: 10,
    },
  
    topBox: {
      marginBottom: 8,
      backgroundColor: 'white',
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      height: 154,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 3 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },

    boxText: {
      justifyContent: 'flex-end',
      textAlign: 'center',
      //color: '#9957B8',
      color: 'black',
      fontSize: 22,
    },

    bottomTextBorder: {
      position: 'absolute' ,
      top: 138,
      left: 20,
      height: 35, 
      width: 158, 
      backgroundColor: 'white', 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10
    }

  });