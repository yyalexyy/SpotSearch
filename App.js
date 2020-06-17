//import 'react-native-gesture-handler';      //Dont add any other import above this
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import {Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { SplashScreen } from 'expo'
SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 4000);


/**
 * Home Screen
 * @param {*} param0 
 */
/*Decide how to get the drawable sidebar.
Ex. Display a button, and then: 
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
    to open the sidebar when button pressed.
*/
function Home({ navigation }){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.firstPage}>
        What can I do for you today?
      </Text>

      <View style={styles.box1}>
        <Button 
          color='white'
          title="Looking for a place to eat"
          onPress={() => Alert.alert('Hello I have been pushed')}/>
      </View>

      <View style={styles.box2}>
        <Button 
        color='white'
        title="Looking for a place to "
        onPress={() => Alert.alert('Hello I have been pushed')}/>
      </View>

    </SafeAreaView>
  );
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
/**
 * Drawer Navigator Base
 */
function MyDrawer() {
    return (
    <Drawer.Navigator drawerContent = {props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
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


//Dont really need logo for now (cuz we dont have logo in any screen)
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20, 
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // logo: {
  //   width: 305,
  //   height: 159,
  //   marginBottom: 10,
  // },
  firstPage: {
    color: '#9F9F9F',
    fontSize: 25,
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  box1: {
    position: 'absolute',
    top: 125,
    backgroundColor: '#9F9F9F',
    margin: 10,
    padding: 30,
    textAlign: "center",
    borderRadius: 45, 
  },
  box2: {
    position: "absolute",
    top: 275,
    padding: 30,
    width: 280,
    backgroundColor: '#9F9F9F',
    margin: 10,
    
    borderRadius: 45, 
  },
});
