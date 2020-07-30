import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, Assets } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { render } from 'react-dom';
 
export class HomePageRedesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dinDateOp: .5,
            foodAreaOp: .5,
            vacSpotOp: .5,
            hangOutOp: .5,
            continColor: 'white',            
        };
    }

    setColor = (color) => {
        if (color === this.state.continColor) {
            this.setState(state => ({
                continColor: 'white'
            }));
        } else {
            this.setState(state => ({
                continColor: color
            }));
        }

    }

    Continue = () => {
        if (this.state.continColor !== 'white')
            this.props.navigation.navigate('BudgetPage');
    }

    toggle = (color) => {
        if (color === 'DD') {
            if (this.state.dinDateOp === .5)
                this.setState((state) => {
                    return {dinDateOp: 1, foodAreaOp: .5, vacSpotOp: .5, hangOutOp: .5 }
                });
            else
                this.setState((state) => {
                    return { dinDateOp: .5 }
                });
        } else if (color === 'FA') {
            if (this.state.foodAreaOp === .5)
                this.setState((state) => {
                    return {dinDateOp: .5, foodAreaOp: 1, vacSpotOp: .5, hangOutOp: .5 }
                });
            else
                this.setState((state) => {
                    return {foodAreaOp: .5}
                });
        } else if (color === 'VS') {
            if (this.state.vacSpotOp === .5)
                this.setState((state) => {
                    return {dinDateOp: .5, foodAreaOp: .5, vacSpotOp: 1, hangOutOp: .5 }
                });
            else
                this.setState((state) => {
                    return {vacSpotOp: .5}
                });
        } else if (color === 'HS') {
            if (this.state.hangOutOp === .5)
                this.setState((state) => {
                    return { dinDateOp: .5, foodAreaOp: .5, vacSpotOp: .5, hangOutOp: 1 }
                });
            else
                this.setState((state) => {
                    return { hangOutOp: .5 }
                });
        }
    }

    render() {
        return (
            <SafeAreaView backgroundColor='#3AA4E0'>
 
                {/* Light Blue Section that contains the Dolphin and Header */}
                <View style={{ backgroundColor: '#3AA4E0', height: hp('100%'), width: wp('100%'), marginTop: -20 }}>
 
                    {/* The second section of the screen that contains the horizontal scroll bar */}
                    <View style={{ flexDirection: "row", backgroundColor: "#2A7FAE", marginTop: hp('45%'), width: wp('100%'), height: hp('45%'), borderTopLeftRadius: 30 }}>
 
                        {/* Vertical Line that ends the scrollview */}
                        <View style={{ marginTop: 90, marginLeft: -40, position: 'absolute', height: 8, width: 150, backgroundColor: 'white', borderRadius: 20, transform: [{ rotate: "90deg" }], shadowColor: 'black', shadowRadius: 1, shadowOffset: { height: -2, width: 3 }, shadowOpacity: .5 }} />
 
                        <ScrollView style={{ position: 'relative', marginLeft: 40, marginTop: 30 }} horizontal={true}>
 
                            {/* View that contains all the buttons within ScrollView */}
                            <View style={styles.scroll}>
 
                                {/* Buttons */}
                                <TouchableOpacity
                                    onPress={() => {this.setColor('#9DF5F5'); this.toggle('DD'); }} 
                                    style={styles.dinDateButton} >
                                    <View style={{opacity: this.state.dinDateOp, alignItems: 'center'}}>
 
                                        <Image
                                            style={{ height: 80, width: 80, marginTop: 10 }}
                                            source={require('./assets/DinnerDate.png')}
                                        />

                                        <View style={styles.bottomTextBorder}>
                                            <Text style={styles.boxText}>Dinner Date</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.foodAreaButton}
                                    onPress={() => { this.setColor('#87A4EF'); this.toggle('FA');  }} >
                                    <View style={{ opacity: this.state.foodAreaOp, alignItems: 'center' }}>
                                        <Image
                                            style={{ height: 80, width: 80, marginTop: 10 }}
                                            source={require('./assets/FoodAreas.png')}
                                        />

                                        <View style={styles.bottomTextBorder}>
                                            <Text style={styles.boxText}>Food Areas</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.VacSpotButton}
                                    onPress={() => { this.setColor('#EAED71'); this.toggle('VS');}} >
                                    <View style={{ opacity: this.state.vacSpotOp, alignItems: 'center' }}>
                                        <Image
                                            style={{ height: 80, width: 80, marginTop: 10 }}
                                            source={require('./assets/Vacation.png')}
                                        />

                                        <View style={styles.bottomTextBorder}>
                                            <Text style={styles.boxText}>Vacation Spot</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.HangSpotButton}
                                    onPress={() => { this.setColor('#74E17F'); this.toggle('HS');}} >
                                    <View style={{ opacity: this.state.hangOutOp, alignItems: 'center' }}>
                                        <Image
                                            style={{ height: 80, width: 80, marginTop: 10 }}
                                            source={require('./assets/HangoutSite.png')}
                                        />

                                        <View style={styles.bottomTextBorder}>
                                            <Text style={styles.boxText}>Hangout Spot</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
 
                            </View>
 
                        </ScrollView>
 
                        {/* The final section of the screen that contains the continue button */}
                        <View style={{ alignItems: 'center', position: 'absolute', backgroundColor: "#0E2163", marginTop: hp('28%'), width: wp('100%'), height: hp('30%'), borderTopLeftRadius: 30 }}>
                            <TouchableOpacity style={[styles.continue, {backgroundColor: this.state.continColor}]}
                                onPress={() => this.Continue()}>
                                <Text style={styles.continueText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
 
 
                    </View>
 
                    {/* The Dolphin */}
                    <Image style={styles.dolphin}
                        source={require('./assets/dolphin.png')} />
 
                    {/* The Header */}
                    <Text style={styles.header}>
                        Categories
                </Text>
 
                </View>
 
            </SafeAreaView>
        );
    }
}
 
 
const styles = StyleSheet.create({
 
    dolphin: {
        position: 'absolute',
        transform: [{ translateX: 20 }, { translateY: -110 }, { rotate: "-30deg" }, { scale: .7 }]
    },
 
    header: {
        position: 'absolute',
        color: 'white',
        marginTop: hp('37%'),
        marginLeft: wp('4%'),
        fontSize: 35,
    },
 
    bottomTextBorder: {
        backgroundColor: 'white',
        marginTop: 10,
        width: hp('20%'),
        height: wp('8.4%'),
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
 
    boxText: {
        marginTop: 3,
        fontSize: 18
    },
 
    scroll: {
        flexDirection: 'row',
        height: 200,
        marginRight: 20,
    },
 
    continue: {
        marginTop: 17,
        height: hp('5%'),
        width: wp('90%'),
        alignItems: 'center',
        borderRadius: 40,
        shadowColor: 'white',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
 
    continueText: {
        fontSize: 25,
    },

    dinDateButton: {
        backgroundColor: '#9DF5F5',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
 
    foodAreaButton: {
        backgroundColor: '#87A4EF',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
 
    VacSpotButton: {
        backgroundColor: '#EAED71',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
 
    HangSpotButton: {
        backgroundColor: '#74E17F',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
 
});