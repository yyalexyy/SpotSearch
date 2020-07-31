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
  constructor(props) {
    super(props);
    this.state = {
      selectedHours: 0,
      selectedMinutes: 0,
    }

  }

  render() {
    const { selectedHours, selectedMinutes } = this.state;

    return (
      //Base View
      <SafeAreaView backgroundColor='#0E2163' style={{ flex: 1 }}>

        {/** Questions Area */}
        <View style={styles.questionContainer}>


          <View style={{
            flexDirection: 'row', width: 340, height: 120, backgroundColor: 'white', borderRadius: 20, alignItems: 'center', shadowColor: 'black',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: .5,
            shadowRadius: 2,
          }}>
            <Image
              style={{ position: 'absolute', height: hp('14%'), width: wp('24%'), marginLeft: 10, marginRight: 10 }}
              source={require('./assets/hourglass.png')} />

            <View>
              <Text style={styles.questionText}>What is your maximum drive time?</Text>

            </View>

          </View>


        </View>

        {/** Time Area */}
        <View style={styles.timeContainer}>
          {/**Timer */}
          <View style={styles.timeBox}>
            {/* <Text>{selectedHours}hr:{selectedMinutes}min</Text> */}
            <View style={styles.timePickerFormat}>
              <TimePicker
                selectedHours={selectedHours} //initial value
                selectedMinutes={selectedMinutes} //initial Minutes value
                onChange={(hours, minutes) => this.setState({
                  selectedHours: hours, selectedMinutes: minutes
                })}
              />
            </View>
          </View>
        </View>

        <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>

          {/**Continue Button */}
          <View style={styles.continueButton}>

            <TouchableOpacity
              style={{ alignItems: 'center', justifyContent: 'center', height: hp('15%') }}
              onPress={() => this.props.navigation.push('RatingPage')} >

              <View >
                <Text style={{ fontSize: 20, color: 'black', }}>Continue</Text>
              </View>

            </TouchableOpacity>
          </View>


          {/**Line Seperator */}
          <View style={styles.seperate} />


          {/**Vertical ScrollView */}
          <ScrollView style={{ position: 'relative', marginLeft: -12, height: 110, marginBottom: -10 }} horizontal={true}>
            <View style={styles.scroll}>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('15%'), width: 100, borderRadius: 100 / 2,
                  marginLeft: 20,
                  shadowColor: 'white',
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: .5,
                  shadowRadius: 0,
                  borderTopColor: '#9DF5F5',
                  borderTopWidth: 70
                }}
              >
                <Image
                  style={{ position: 'absolute', height: 70, width: 70, top: -65 }}
                  source={require('./assets/car.png')}
                />

                <View>
                  <Text style={{ marginTop: -5, fontSize: 20, color: 'black', }}>Drive</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('15%'), width: 100, borderRadius: 100 / 2, marginLeft: 20, borderTopColor: '#87A4EF', shadowColor: 'white',
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: .5,
                  shadowRadius: 0,
                  borderTopWidth: 70
                }}
              >
                <Image
                  style={{ position: 'absolute', height: 70, width: 70, top: -65 }}
                  source={require('./assets/bus.png')}
                />

                <View >
                  <Text style={{ marginTop: -5, fontSize: 20, color: 'black', }}>Bus</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('15%'), width: 100, borderRadius: 100 / 2, marginLeft: 20, shadowColor: 'white',
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: .5,
                  shadowRadius: 0,
                  borderTopColor: '#EAED71',
                  borderTopWidth: 70
                }}
              >
                <Image
                  style={{ position: 'absolute', height: 55, width: 55, top: -60 }}
                  source={require('./assets/travel.png')}
                />

                <View >
                  <Text style={{ marginTop: -5, fontSize: 20, color: 'black', }}>Walk</Text>
                </View>

              </TouchableOpacity>

            </View>

          </ScrollView>


        </View>

        {/**Hrs and Mins Text for the TimePicker */}
        <View style={{ position: "absolute", flexDirection: "row", marginTop: 238, }}>
          <View style={{ marginLeft: 120, marginRight: 50 , top: 40}}>
            <Text style={{ fontSize: 20 }}>Hr(s)</Text>
          </View>

          <View style={{ marginLeft: 75, top: 40 }}>
            <Text style={{ fontSize: 20 }}>Min(s)</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#3AA4E0',
    justifyContent: 'center',       // Set content's vertical alignment.
    alignItems: 'center',           // Set content's horizontal alignment.
    marginTop: -20,
    zIndex: 5,
    height: hp('24%'),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
    
  },

  questionText: {
    marginLeft: 140,
    marginRight: 0,
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },

  timeContainer: {
    flexDirection: 'row',
    backgroundColor: '#2A7FAE',
    marginTop: -177,
    height: hp('66%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  timeBox: {
    backgroundColor: '#ffffffff',
    borderRadius: 40,
    marginTop: 195,
    marginHorizontal: 20,
    height: hp('33.5%'),
    width: wp('90%'),
    shadowColor: 'black',
    shadowOffset: { width: 6, height: 6},
    shadowOpacity: .5,
    shadowRadius: 3,
  },

  timePickerFormat: {
    alignItems: 'center',
    alignContent: 'center',
    top: 5
  },

  continueButton: {
    backgroundColor: '#ffffff',
    height: hp('15%'),
    width: 100,
    borderRadius: 100 / 2,
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