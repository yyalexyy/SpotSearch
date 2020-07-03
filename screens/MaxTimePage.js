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


/**
* Max Time Screen
* @param {*} param0 
*/
export const MaxTimePage = ({ navigation }) => {
    return (
        <SafeAreaView backgroundColor = '#116466'>
            <View>
                <Text>What is your maximum drive time?</Text>
            </View>

            <View style = {{marginTop: 40,  marginBottom: 175, marginLeft: 30, marginRight: 30, borderRadius:15, textAlign: 'center', backgroundColor: '#3AA4E0',}}>

                  <TouchableOpacity
                    style = {{alignItems: 'center', justifyContent: 'center', height: hp('8%')}}
                    onPress={() => navigation.push('RatingPage')} >

                      <View >
                        <Text style = {{fontSize: 25, color: '#ffffff'}}>Continue</Text>
                      </View>

                  </TouchableOpacity>

              </View>

        </SafeAreaView>
    );
}
