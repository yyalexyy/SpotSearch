//import 'react-native-gesture-handler';      //Dont add any other import above this
import * as React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import logo from './assets/logo.png';
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
    <View style={styles.container}>
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

    </View>
  );
}

function Recent(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recent Screen</Text>
    </View>
  );
}

function Favorites(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props){
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

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
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20, 
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  firstPage: {
    color: '#9F9F9F',
    fontSize: 25,
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  box1: {
    position: 'absolute',
    top: 100,
    backgroundColor: '#9F9F9F',
    margin: 10,
    padding: 30,
    textAlign: "center",
    borderRadius: 45, 
  },
  box2: {
    position: "absolute",
    top: 250,
    padding: 30,
    width: 280,
    backgroundColor: '#9F9F9F',
    margin: 10,
    
    borderRadius: 45, 
  },
});
