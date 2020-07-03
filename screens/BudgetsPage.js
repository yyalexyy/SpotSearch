import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
              <Text style = {{paddingTop: 10, fontSize: hp('4.5%'), color: '#3AA4E0'}}>Max</Text>

              <Text style={styles.amountTextColor}>
                $20.00
              </Text>

          </View>
        </View>

        <View style = {{backgroundColor: '#0E2163', marginTop: -65, marginBottom: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

          <ScrollView contentContainerStyle={{paddingBottom: 100}}
          style = {{marginTop: 70, marginBottom: 30}}>
              <View style={styles.scrollBoxes}>

                <View style ={{paddingLeft: 45, paddingRight: 35}}>
                  <Text style = {styles.addDollarText}>$1.00</Text>
                </View>

                {/*Left decrement*/}
                <View style={styles.decrementBox} backgroundColor = '#32D4D4'>
                    <TouchableOpacity>
                        <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.3%'), backgroundColor: '#ffffff' }}/>
                    </TouchableOpacity>
                    
                </View>
                

                {/*Right decrement*/}
                <View style = {styles.incrementBox} backgroundColor = '#9DF5F5'>
                    <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}}>

                        {/*Vertical line*/}
                        <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('2%'), height: hp('6%'), backgroundColor: '#ffffff',}}/>

                        {/*Left horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', right: 5.5}}/>

                        {/*Right horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', left: 5.5}}/>
                        
                    </TouchableOpacity>
                </View>


              </View>

              <View style={styles.scrollBoxes}>

                <View style ={{paddingLeft: 39, paddingRight: 35}}>
                  <Text style = {styles.addDollarText}>$5.00</Text>
                </View>

                {/*Left decrement*/}
                <View style={styles.decrementBox} backgroundColor = '#4062BA'>
                    <TouchableOpacity>
                        <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.5%'), backgroundColor: '#ffffff' }}/>
                    </TouchableOpacity>
                    
                </View>
                

                {/*Right decrement*/}
                <View style = {styles.incrementBox} backgroundColor = '#87A4EF'>
                    <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}}>

                        {/*Vertical line*/}
                        <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('2%'), height: hp('6%'), backgroundColor: '#ffffff',}}/>

                        {/*Left horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', right: 5.5}}/>

                        {/*Right horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', left: 5.5}}/>

                    </TouchableOpacity>
                </View>


              </View>

              <View style={styles.scrollBoxes}>

                <View style ={{paddingLeft: 23, paddingRight: 35}}>
                  <Text style = {styles.addDollarText}>$10.00</Text>
                </View>

                {/*Left decrement*/}
                <View style={styles.decrementBox} backgroundColor = '#DBE011'>
                    <TouchableOpacity>
                        <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.5%'), backgroundColor: '#ffffff' }}/>
                    </TouchableOpacity>
                    
                </View>
                

                {/*Right decrement*/}
                <View style = {styles.incrementBox} backgroundColor = '#EAED71'>
                    <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}}>

                       {/*Vertical line*/}
                        <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('2%'), height: hp('6%'), backgroundColor: '#ffffff',}}/>

                        {/*Left horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', right: 5.5}}/>

                        {/*Right horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', left: 5.5}}/>
                        
                    </TouchableOpacity>
                </View>


              </View>

              <View style={styles.scrollBoxes}>

                <View style ={{paddingLeft: 18, paddingRight: 35}}>
                  <Text style = {styles.addDollarText}>$20.00</Text>
                </View>

                {/*Left decrement*/}
                <View style={styles.decrementBox} backgroundColor = '#2AB938'>
                    <TouchableOpacity>
                        <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.5%'), backgroundColor: '#ffffff' }}/>
                    </TouchableOpacity>
                    
                </View>
                

                {/*Right decrement*/}
                <View style = {styles.incrementBox} backgroundColor = '#74E17F'>
                    <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}}>

                        {/*Vertical line*/}
                        <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('2%'), height: hp('6%'), backgroundColor: '#ffffff',}}/>

                        {/*Left horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', right: 5.5}}/>

                        {/*Right horizontal line*/}
                        <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('2%'), position: 'absolute', backgroundColor: '#ffffff', left: 5.5}}/>
                        
                    </TouchableOpacity>
                </View>


              </View>

              {/*Continue to next page button*/}
              <View style = {{marginTop: 40,  marginBottom: 175, marginLeft: 30, marginRight: 30, borderRadius:15, textAlign: 'center', backgroundColor: '#3AA4E0',}}>

                  <TouchableOpacity
                    style = {{alignItems: 'center', justifyContent: 'center', height: hp('8%')}}
                    onPress={() => navigation.push('MaxTimePage')} >

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
      marginLeft: 20,
      marginRight: 20,
      height: 144,
      justifyContent: 'center',       // Set content's vertical alignment.
      alignItems: 'center',           // Set content's horizontal alignment.
      zIndex: 5,
    },
    amountTextColor: {
      marginLeft: 30,
      marginRight: 30,
      color: '#000000',
      fontSize: hp('10%'),     //60
      alignItems: "center",
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
  
    scrollBoxes: {
      marginTop: 25,
      backgroundColor: '#ffffffff', 
      flexDirection: 'row',
      marginLeft: 20, 
      marginRight: 20,
      borderRadius: 15,
      height: hp('11%'),       //80
      overflow: 'hidden',
      alignItems: "center",
      borderWidth: 2,       // Set border width
    },

    decrementBox: {
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderColor: 'black',
      borderWidth: 2,
      alignItems: "center",
      justifyContent: 'center',
      width: wp('21%'),
      height: hp('11%'),
    },

    incrementBox: {
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      width: wp('21%'),
      height: hp('11%'),
      alignItems: "center",
      justifyContent: 'center',
      
    },

    addDollarText:{
      fontSize: hp('5.5%'),     //35
      color: '#000000',
      alignSelf: 'center',
    }

    
  });