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
        <SafeAreaView>
          {/*Top Section*/}
            <View>
                
            </View>
            
          {/*Middle Section*/}
            <View>

            </View>

          {/*Bottom Section*/}
            <View>

            </View>

        </SafeAreaView>
    );
}
