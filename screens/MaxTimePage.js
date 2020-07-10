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
<<<<<<< HEAD
        <SafeAreaView>
          {/*Top Section*/}
            <View>
                
            </View>
            
          {/*Middle Section*/}
            <View>
=======
        <SafeAreaView backgroundColor = '#0E2163' style ={{flex: 3}}>
          {/** Base View */}
          <View>

            {/** Questions Area */}
            <View style = {{ flex: 2, backgroundColor : '#3AA4E0'}}>
                <View>
                  <Text>What is your maximum drive time?</Text>

                </View>



            </View>
            
            {/** Time Area */}
            <View style = {{ flex: 2, backgroundColor : '#2A7FAE'}}>



            </View>

>>>>>>> cc69bdbf6ef93d3b453d85f65be14d380e40540f

            </View>

          {/*Bottom Section*/}
            <View>

            </View>
<<<<<<< HEAD
=======



          </View>

>>>>>>> cc69bdbf6ef93d3b453d85f65be14d380e40540f

        </SafeAreaView>
    );
}
