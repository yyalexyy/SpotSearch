import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import TimePicker from 'react-native-simple-time-picker';


/**
* Max Time Screen
* @param {*} param0 
*/
 export class MaxTimePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedHours: 0,
      selectedMinutes: 0,
    }

  }




    render(){
      const { selectedHours, selectedMinutes } = this.state;

      return (
          //Base View
          <SafeAreaView backgroundColor = '#0E2163' style ={{flex: 1}}>

              {/** Questions Area */}
              <View style = {styles.questionContainer}>

                  <View style = {{flexDirection: 'row'}}>
                      <Image
                        style = {{position: 'absolute', height: hp('16%'), width: wp('28%'), marginLeft: 0, marginRight: 10}}
                        source={require('./assets/hourglass.png')}/>

                    <View>
                      <Text style = {styles.questionText}>What is your maximum drive time?</Text>

                    </View>

                  </View>
              </View>
              
              {/** Time Area */}
              <View style = {styles.timeContainer}>
                  {/**Timer */}
                  <View style = {styles.timeBox}>
                    {/* <Text>{selectedHours}hr:{selectedMinutes}min</Text> */}

                    <TimePicker
                      selectedHours = {selectedHours} //initial value
                      selectedMinutes = {selectedMinutes} //initial Minutes value
                      onChange= {(hours, minutes) => this.setState({
                        selectedHours: hours, selectedMinutes: minutes
                      })}
                    />


                    {/* <Text style = {{fontSize: hp('4.5%'), color: '#3AA4E0', marginTop: 10, marginLeft: 15}}>Max</Text>
                    <View style = {{position: 'absolute', flexDirection: 'column'}}>
                      <Text style = {{justifyContent: 'center', alignItems: 'center', fontSize: hp('11%'), fontWeight: '200', marginTop: 65, marginLeft: 30, marginRight: 20}}>0 Hr 30 Min</Text>
                    </View> */}

                  </View>

                  {/** Scrolling Wheel */}
                  {/* <View style = {{backgroundColor: '#ffffff', borderRadius: 20, height: hp('40%'), width: wp('5%'),marginTop: 200, marginLeft: 15}}></View> */}

              </View>

              <View style= {{position: 'relative', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>

                  {/**Continue Button */}
                  <View style = {styles.continueButton}>

                      <TouchableOpacity
                        style = {{alignItems: 'center', justifyContent: 'center', height: hp('15%')}}
                        onPress={() => this.props.navigation.push('RatingPage')} >

                          <View >
                            <Text style = {{fontSize: 25, color: 'black', }}>Continue</Text>
                          </View>

                      </TouchableOpacity>
                  </View>


                  {/**Line Seperator */}
                  <View style = {styles.seperate}/>


                  {/**Vertical ScrollView */}
                  <ScrollView style={{ position: 'relative' }} horizontal={true}>
                      <View style={styles.scroll}>

                        <TouchableOpacity
                          style = {{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('15%'), width: 100, borderRadius: 100/2, 
                          marginLeft: 20,
                          shadowColor: 'white',
                          shadowOffset: { width: 4, height: 4 },
                          shadowOpacity: .5,
                          shadowRadius: 0,}}
                        >
                            <Image></Image>

                            <View >
                              <Text style = {{fontSize: 25, color: 'black', }}>Drive</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                          style = {{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('15%'), width: 100,borderRadius: 100/2, marginLeft: 20,}}
                        >
                            <Image></Image>

                            <View >
                              <Text style = {{fontSize: 25, color: 'black', }}>Bus</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                          style = {{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('15%'), width: 100,borderRadius: 100/2, marginLeft: 20,}}
                        >
                            <Image></Image>

                            <View >
                              <Text style = {{fontSize: 25, color: 'black', }}>Walk</Text>
                            </View>

                        </TouchableOpacity>

                      </View>

                  </ScrollView>


              </View>

              {/**Hrs and Mins Text for the TimePicker */}
              <View style={{position: "absolute", flexDirection: "row", marginTop: 238, }}>
                    <View style={{marginLeft: 120, marginRight: 50}}>
                      <Text style={{fontSize: 20}}>Hr(s)</Text>
                    </View>

                    <View style={{marginLeft: 80}}>
                      <Text style={{ fontSize: 20}}>Min(s)</Text>
                    </View>
              </View>
          </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor : '#3AA4E0',
    justifyContent: 'center',       // Set content's vertical alignment.
    alignItems: 'center',           // Set content's horizontal alignment.
    marginTop: -20,
    zIndex: 5,
    height: hp('18%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  questionText: {
    marginLeft: 140,
    marginRight: 0,
    color: '#ffffff',
    fontSize: 30,
  },

  timeContainer: {
    flexDirection: 'row',
    backgroundColor : '#2A7FAE',
    marginTop: -177,
    height: hp('72%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  timeBox: {
    backgroundColor: '#ffffffff',
    borderRadius: 20,
    marginTop: 200,
    marginHorizontal: 20,
    height: hp('40%'),
    width: wp('90%'),
  },

  continueButton: {
    backgroundColor: '#ffffff',
    height: hp('15%'),
    width: 100,
    borderRadius: 100/2,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    

  },

  seperate: {
    backgroundColor: '#ffffff',
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: hp('16%'),
    width: wp('2%')
  },

  scroll: {
    flexDirection: 'row',
    height: 100,
    marginRight: 20,
},


});