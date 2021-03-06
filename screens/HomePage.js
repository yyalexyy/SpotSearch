import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
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

function Separate() {
  return <View style = {{
    position: 'relative',
    marginTop: 20,
    height: 3,
    backgroundColor: '#B8E5FF',
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: .6,
    shadowRadius: 1,
    zIndex: 999,
    }} />;
}

/**
 * Home Screen
 * @param {navigation} param0 
 */
/*Decide how to get the drawable sidebar.
Ex. Display a button, and then: 
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
    to open the sidebar when button pressed.
*/
export const HomePage = ({ navigation }) => {
    return (
      <SafeAreaView backgroundColor = '#B8E5FF'> 
          {/**#3AA4E0 */}
          <View style = {{position: 'relative', marginTop: -20, height: 2, backgroundColor: 'black', marginLeft: 10, marginRight: 10}}/>  


          <View style = {styles.topBox}>

            <View style = {{flexDirection: 'row'}}>
              <Image 
              style = {{height: hp('17%'), width: wp('32%'), position: 'absolute', marginLeft: -5, marginTop: 20, transform: [{ rotate: '340deg'}] }}
              source={require('./assets/dolphin.png')}/>
              <Text style={styles.textColor1}>What are you looking for today?</Text>
            </View>

          </View>
       

          <View style = {{backgroundColor: '#FFFFFF', marginTop: 10, marginBottom: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25,}}>
            {/**#0E2163 */}
            <Separate/>

            {/* oriented by column */}
            <ScrollView style = {{ marginBottom: 30}}>

              <View style = {styles.scViewFormat}>
                
                <View style = {styles.leftBox} backgroundColor = '#9DF5F5'>
                  
                  <TouchableOpacity
                    style = {styles.buttons} 
                    onPress={() => navigation.push('BudgetPage')} >

                        <Image 
                        style = {{height: 90, width: 90, marginTop: 10}}
                        source={require('./assets/DinnerDate.png')}
                        />
                        
                        <View style = {styles.bottomTextBorder}> 
                          <Text style = {styles.boxText}>Dinner Dates</Text>
                        </View>
                      
                      

                  </TouchableOpacity>

                </View>

                

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
      
              </View>
      
              <View style = {styles.scViewFormat}>
      
                <View style = {styles.leftBox} backgroundColor = '#EAED71'>
                  <TouchableOpacity
                    style = {styles.buttons} 
                    onPress={() => navigation.push('BudgetPage')} >

                      <Image
                      style = {{height: 90, width: 90, marginTop: 14}} 
                      source={require('./assets/kite.png')}/>

                      <View style = {styles.bottomTextBorder}> 
                        <Text style = {styles.boxText}>Vacation Spot</Text>
                      </View>

                  </TouchableOpacity>
                </View>
                
                <View style = {styles.rightBox} backgroundColor = '#74E17F'>
                  <TouchableOpacity
                    style = {styles.buttons} 
                    onPress={() => navigation.push('BudgetPage')} >

                      <Image
                      style = {{height: 90, width: 90, marginTop: 14}} 
                      source={require('./assets/landmark.png')}/>

                      <View style = {styles.bottomTextBorder}> 
                       <Text style = {styles.boxText}>Hangout Site</Text>
                      </View>

                  </TouchableOpacity>
                </View>
      
              </View>
                
              <View style = {styles.scViewFormat}>
      
                <View style = {styles.leftBox} backgroundColor = '#A994E4'>
                  <TouchableOpacity
                    style = {styles.buttons} 
                    onPress={() => navigation.push('BudgetPage')} >

                      <Image
                      style = {{height: 90, width: 90, marginTop: 14}} 
                      source={require('./assets/RecActivities.png')}/> 

                      <View style = {styles.bottomTextBorder}> 
                       <Text style = {styles.boxText}>Rec Activities</Text>
                      </View>
                      
                  </TouchableOpacity>
                </View>
                
                <View style = {styles.rightBox} backgroundColor = '#DAB8EA'>
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
          </View>

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
      marginLeft: 100,
      marginRight: 0,
      color: 'black',
      fontSize: 30,
      alignItems: "center",
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 20,
      width: wp('53.5%'),
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
      width: wp('42.1%'),     //158
      height: hp('23.7%'),    //148
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity: .8,
      shadowRadius: 3,
    },
  
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
  
    buttonResize: {
      backgroundColor: 'white', 
      width: wp('42%'), //153
      height: hp('22.4%'), //143
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttons: {
      alignItems: 'center',
      borderRadius: 10,
      height: wp('42%'), //154
    },
  
    topBox: {
      marginBottom: 8,
      backgroundColor: 'white',
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      height: wp('42%'), //154
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      marginTop: 20,
    },

    boxText: {
      justifyContent: 'flex-end',
      textAlign: 'center',
      //color: '#9957B8',
      color: 'black',
      fontSize: 22,
      marginTop: wp('1%') //4,
    },

    bottomTextBorder: {
      position: 'absolute' ,
      top: hp('17.7%'),  //108
      height: hp('6%'),       //40
      width: wp('42.1%'),     //158
      backgroundColor: 'white', 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10,
    }

  });