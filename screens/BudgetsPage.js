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
          <View style = {{flexDirection: 'column'}}>
              <Text style = {{paddingTop: 20, fontSize:30, color: '#C2CAD0'}}>Max</Text>

              <Text style={styles.amountTextColor}>
                $20.00
              </Text>

          </View>
        </View>

        <View style = {{backgroundColor: '#0E2163', marginTop: -65, marginBottom: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

          <ScrollView contentContainerStyle={{paddingBottom: 100}}
          style = {{marginTop: 70, marginBottom: 30}}>
              <View style={styles.scrollBoxes}>
                
                <View style={styles.addBox}>
                  <Text style = {styles.addDollarText}>Add $1.00</Text>
                </View>


                <View style = {{paddingLeft: 40, justifyContent: 'center'}}>
                  <TouchableOpacity
                    onPress = {() => {}}
                  >



                  </TouchableOpacity>
                </View>

              </View>

              <View style={styles.scrollBoxes}>
                
                <View style={styles.addBox}>
                  <Text style = {styles.addDollarText}>Add $5.00</Text>
                </View>


                <View style = {{paddingLeft: 40, justifyContent: 'center'}}>
                  <TouchableOpacity
                    onPress = {() => {}}
                  >

                  </TouchableOpacity>
                </View>

              </View>

              <View style={styles.scrollBoxes}>
                
                <View style={styles.addBox}>
                  <Text style = {styles.addDollarText}>Add $10.00</Text>
                </View>


                <View style = {{paddingLeft: 40, justifyContent: 'center'}}>
                  <Text>Plus</Text>
                </View>

              </View>

              <View style={styles.scrollBoxes}>
                
                <View style={styles.addBox}>
                  <Text style = {styles.addDollarText}>Add $20.00</Text>
                </View>


                <View style = {{paddingLeft: 40, justifyContent: 'center'}}>
                  <Text>Plus</Text>
                </View>

              </View>


              <View style = {{marginTop: 40,  marginBottom: 175, marginLeft: 30, marginRight: 30, borderRadius:15, height: '7%', backgroundColor: '#3AA4E0',}}>

                  <TouchableOpacity
                    style = {{alignItems: 'center'}}
                    onPress={() => navigation.push('MaxDistancePage')} >

                      <View >
                        <Text style = {{fontSize: 25, color: '#ffffff'}}>Continue</Text>
                      </View>

                  </TouchableOpacity>

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
    topBox: {
      marginTop: 20,
      backgroundColor: '#ffffffff',
      borderRadius: 20,
      marginLeft: 30,
      marginRight: 30,
      height: 144,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
    },
    amountTextColor: {
      marginLeft: 30,
      marginRight: 30,
      color: '#3AA4E0',
      fontSize: 60,
      alignItems: "center",
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
  
    scrollBoxes: {
      marginTop: 25,
      backgroundColor: '#ffffffff', 
      flexDirection: 'row',
      marginLeft: 8, 
      marginRight: 8,
      borderRadius: 15,
      height: 80,
    },
    
    addBox: {
      backgroundColor: '#24B5F3',
      borderRadius: 15,
      width: '70%',
      alignItems: "center",
      justifyContent: 'center',

    },
    addDollarText:{
      fontSize: 25,
      color: '#ffffff',

    }

    
  });