import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import logo from './assets/logo.png';
import { SplashScreen } from 'expo'
SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 4000);

export default function App() {
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
