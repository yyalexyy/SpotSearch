import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
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
      option: props.route.params.option,
      cost: props.route.params.cost,
      drive: false,
      public_transit: false,
      walk: false,
    }

  }

  calculateRadius() {
    if (this.state.drive) 
      return this.calculateRadiusDriving();
    else if (this.state.public_transit)
      return this.calculateRadiusBicycle();
    else 
      return this.calculateRadiusWalking();
  }

  calculateRadiusWalking() {
    return (1.34 * 60 * this.state.selectedMinutes + 1.34 * 60 * 60 * this.state.selectedHours);
  }

  calculateRadiusDriving() {
    return (1341.12 * this.state.selectedMinutes + 80467.2 * this.state.selectedHours);
  }

  calculateRadiusBicycle() {
    return (416.6 * this.state.selectedMinutes + 25000 * this.state.selectedHours);
  }

  continue() {
    if (this.state.drive === true) {
      this.props.navigation.navigate('ResultPage', {cost: this.state.cost, option: this.state.option, radius: this.calculateRadius(), travelType: 'drive'}); 
    }
    else if (this.state.public_transit === true) {
      this.props.navigation.navigate('ResultPage', {cost: this.state.cost, option: this.state.option, radius: this.calculateRadius(), travelType: 'public_transport'}); 
    }
    else if (this.state.walk === true)
    this.props.navigation.navigate('ResultPage', {cost: this.state.cost, option: this.state.option, radius: this.calculateRadius(), travelType: 'walk'}); 
  }

  render() {
    const { selectedHours, selectedMinutes } = this.state;

    return (
      //Base View
      <SafeAreaView backgroundColor='#609FC2' style={{ flex: 1 }}>

        <View style={{ position: 'relative', marginTop: -20, marginBottom: 15, height: 2, backgroundColor: 'white', marginLeft: 10, marginRight: 10, zIndex: 999, opacity: .7 }} />

        {/** Questions Area */}
        <View style={styles.questionContainer}>

          <View style={{
            flexDirection: 'row', width: 360, height: 120, backgroundColor: 'white', alignItems: 'center', shadowColor: 'black',
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: .5,
            shadowRadius: 0,
            left: 10,
          }}>
            <Image
              style={{ position: 'absolute', height: hp('14%'), width: wp('24%'), marginLeft: 10, marginRight: 10 }}
              source={require('./assets/hourglass.png')} />

            <View>
              <Text style={styles.questionText}>What is your maximum drive time?</Text>
            </View>

          </View>


        </View>

        <Text style={{position:'absolute', color: 'white', fontSize: 35, top: 155, left: 10, zIndex: 999, fontWeight: '700'}}>Time</Text>

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
              onPress={() => this.continue()}>

              <View>
                <Text style={{ fontSize: 20, color: 'black', }}>Continue</Text>
              </View>

            </TouchableOpacity>
          </View>


          {/**Line Seperator */}
          <View style={styles.seperate} />

          {/**Vertical ScrollView */}
          <ScrollView style={{ position: 'relative', marginLeft: -12, height: 110, marginBottom: -10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.scroll}>

              <TouchableOpacity
                style={this.state.drive ? styles.driveOnPress : styles.button}
                activeOpacity={.8} 
                onPress={() => {
                  this.setState(state => ({
                    walk: false,
                    drive: !this.state.drive,
                    public_transit: false,
                  }));
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
                style={this.state.public_transit ? styles.publicTransitOnPress : styles.button}
                activeOpacity={.8} 
                onPress={() => {
                  this.setState(state => ({
                    walk: false,
                    drive: false,
                    public_transit: !this.state.public_transit,
                  }));
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
                style={this.state.walk ? styles.walkOnPress : styles.button}
                activeOpacity={.8} 
                onPress={() => {
                  this.setState(state => ({
                    walk: !this.state.walk,
                    drive: false,
                    public_transit: false,
                  }));
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
          <View style={{ marginLeft: 105, marginRight: 50, top: 40 }}>
            <Text style={{ fontSize: 20 }}>Hr(s)</Text>
          </View>

          <View style={{ marginLeft: 80, top: 40 }}>
            <Text style={{ fontSize: 20 }}>Min(s)</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#91C6E4',
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
    backgroundColor: '#91C6E4',
    marginTop: -177,
    height: hp('64%'),
    borderBottomRightRadius: 50
  },

  timeBox: {
    backgroundColor: '#ffffffff',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 220,
    marginHorizontal: 20,
    height: hp('27%'),
    width: wp('93%'),
    right: 20,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4},
    shadowOpacity: .5,
    shadowRadius: 0,
  },

  timePickerFormat: {
    alignItems: 'center',
    alignContent: 'center',
    top: -17
  },

  continueButton: {
    backgroundColor: '#ffffff',
    height: hp('15%'),
    width: 100,
    borderRadius: 100 / 2,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: 'white',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: .5,
    shadowRadius: 0,
  },

  seperate: {
    backgroundColor: '#ffffff',
    marginRight: 10,
    borderRadius: 10,
    height: hp('16%'),
    width: wp('.5%')
  },

  scroll: {
    flexDirection: 'row',
    height: 100,
    marginRight: 20,
  },

  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('15%'),
    width: 100,
    borderRadius: 100 / 2,
    marginLeft: 20,
    borderTopColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: .5,
    shadowRadius: 0,
    borderTopWidth: 70
  },

  driveOnPress: {
    top: 4,
    left: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('15%'),
    width: 100,
    borderRadius: 100 / 2,
    marginLeft: 20,
    shadowColor: 'white',
    shadowOffset: { height: .5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderTopColor: '#9DF5F5',
    borderTopWidth: 70
  },

  publicTransitOnPress: {
    top: 4,
    left: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('15%'),
    width: 100,
    borderRadius: 100 / 2,
    marginLeft: 20,
    borderTopColor: '#87A4EF',
    shadowColor: 'white',
    shadowOffset: { height: .5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderTopWidth: 70
  },

  walkOnPress: {
    top: 4,
    left: 4,
    borderTopColor: '#EAED70',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('15%'),
    width: 100,
    borderRadius: 100 / 2,
    marginLeft: 20,
    borderTopWidth: 70,
    shadowColor: 'white',
    shadowOffset: { height: .5 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});