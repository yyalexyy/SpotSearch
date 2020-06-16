import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  firstPage: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
