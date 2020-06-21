import 'react-native-gesture-handler';      //Dont add any other import above this
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

import { SplashScreen } from 'expo'
SplashScreen.preventAutoHide();       //diplaying the splash screen
setTimeout(SplashScreen.hide, 3000);

import { HomePage, BudgetPage, maxDistancePage, ratingPage, resultPage } from './Screens';


function Separate() {
  return <View style = {{marginVertical: 30,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,}} />
}

/**
 * Recent Screen
 */
function Recent(){
  return(
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recent Screen</Text>
    </SafeAreaView>
  );
}

/**
 * Favorites Screen
 */
function Favorites(){
  return(
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites Screen</Text>
    </SafeAreaView>
  );
}

/**
 * Drawer Navigator Custom Content 
 * @param {*} props 
 */
function CustomDrawerContent(props){
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();     //creating drawer navigator
const HomeStack = createStackNavigator();   

//Component to render HomeStack navigator
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomePage" component={HomePage} options={{ title:"Home" }} />
    <HomeStack.Screen name="BudgetPage" component={BudgetPage}
      options={({ route }) => ({ title: route.params.name })}
    />
    <HomeStack.Screen name="maxDistancePage" component={maxDistancePage} options={{ title:"Distance" }} />
    <HomeStack.Screen name="ratingPage" component={ratingPage} options={{ title:"Rating" }} />
    <HomeStack.Screen name="resultPage" component={resultPage} options={{ title:"Spot" }} />
  </HomeStack.Navigator>
)


/**
 * Drawer Navigator Base
 */
function MyDrawer() {
    return (
    <Drawer.Navigator drawerContent = {props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
      name="HomeStackScreen" component={HomeStackScreen} options={{ title: "Home" }} />
      <Drawer.Screen name="Recent" component={Recent} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    //To ensure content isn't hidden behind hardware elements (Need to code Landscape Mode if the app supports in teh future)
    <SafeAreaProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}