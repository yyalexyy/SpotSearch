import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';

/**
 * Recreation Types Screen
 */
export const CasualBitesTypes = () => {
    return(
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CasualBitesTypes Screen</Text>
        </SafeAreaView>
    );
}