import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
//import logo from './assets/logo.png';     //import logo

export class HomePageRedesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: "",
            continColor: 'white',
            option: "",
        };
    }

    Continue = () => {
        if (this.state.continColor !== 'white') {
            this.setState({continColor: 'white'})
            if (this.state.button === 'Restaurant') {
                this.setState({button: ''})
                this.setState({ option: "restaurant"} , () => {this.props.navigation.navigate('BudgetPage', { option: "restaurant" })});
            }
            else if (this.state.button === 'Casual Bites') {
                this.setState({button: ''})
                this.setState({ option: "Casual Bites"} , () => {this.props.navigation.navigate('CasualBitesTypes', { option: "Casual Bites" })});
            }
            else if (this.state.button === 'Recreation') {
                this.setState({button: ''})
                this.setState({ option: "Recreation"} , () => {this.props.navigation.navigate('RecreationTypes', { option: "Recreation" })});
            }
            else if (this.state.button === 'Landmarks') {
                this.setState({button: ''})
                this.setState({ option: "restaurant"} , () => {this.props.navigation.navigate('MaxTimePage', { option: "restaurant" })});
            }
        }
    }

    render() {
        return (
            <SafeAreaView>
                {/* Faint line below "Home" */}
                    <View style={{ position: 'relative', marginTop: -20, marginBottom: 15, height: 2, backgroundColor: 'white', marginLeft: 0, marginRight: 0, zIndex: 999, opacity: .7 }} />

                    {/* Faint line below "Categories" */}
                    <View style={{ position: 'absolute', marginTop: hp('44.5%'), height: 2, marginLeft: wp('5%'), width: 340, marginRight: wp('5%'), backgroundColor: 'white', zIndex: 999, opacity: .5 }} />

                    {/* Background Section that contains the Dolphin and Header */}
                    <LinearGradient colors={['#C7EBFF', '#609FC2']} style={{ backgroundColor: '#91C6E4', height: hp('100%'), width: wp('100%'), marginTop: -20 }}> 

                        {/* The second section of the screen that contains the horizontal scroll bar */}
                        <View style={{ flexDirection: "row", marginTop: hp('45%'), width: wp('100%'), height: hp('45%'), borderTopLeftRadius: 30 }}>

                            {/* Vertical Line that ends the scrollview */}
                            <View style={{ marginTop: 90, marginLeft: -40, position: 'absolute', height: 8, width: 150, backgroundColor: 'white', borderRadius: 20, transform: [{ rotate: "90deg" }], shadowColor: 'black', shadowRadius: 1, shadowOffset: { height: -2, width: 3 }, shadowOpacity: .5, zIndex: 999 }} />

                            <ScrollView style={{ position: 'relative', marginLeft: 40, marginTop: 20, height: 400 }} horizontal={true}>

                                {/* View that contains all the buttons within ScrollView */}
                                <View style={styles.scroll}>

                                    {/* Buttons */}
                                    <TouchableOpacity
                                        onPress={() => { this.state.button === "Restaurant" ? this.setState({button:"", continColor: "white"}) : this.setState({button: "Restaurant", continColor: "#9DF5F5"}) }}
                                        style={ this.state.button === "Restaurant" ? [styles.preButton, styles.buttonPressed, {backgroundColor: '#9DF5F5', shadowColor: '#9DF5F5'} ] : styles.preButton}
                                        activeOpacity={.8} >
                                        <View style={{ alignItems: 'center' }}>

                                            <Image
                                                style={{ height: 80, width: 80, marginTop: 10 }}
                                                source={require('./assets/DinnerDate.png')}
                                            />

                                            <View style={styles.bottomTextBorder}>
                                                <Text style={styles.boxText}>Fine Dining</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={this.state.button === "Casual Bites" ? [styles.preButton, styles.buttonPressed, {backgroundColor: '#87A4EF', shadowColor: '#87A4EF'}] : styles.preButton}
                                        onPress={() => { this.state.button === "Casual Bites" ? this.setState({button:"", continColor: "white"}) : this.setState({button: "Casual Bites", continColor: "#87A4EF"}) }}
                                        activeOpacity={.8} >
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 80, width: 80, marginTop: 10 }}
                                                source={require('./assets/FoodAreas.png')}
                                            />

                                            <View style={styles.bottomTextBorder}>
                                                <Text style={styles.boxText}>Casual Bites</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={this.state.button === "Recreation" ? [styles.preButton, styles.buttonPressed, {backgroundColor: '#EAED71', shadowColor: '#EAED71'}] : styles.preButton}
                                        onPress={() => { this.state.button === "Recreation" ? this.setState({button:"", continColor: "white"}) : this.setState({button: "Recreation", continColor: "#EAED71"}) }}
                                        activeOpacity={.8} >
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 80, width: 80, marginTop: 10 }}
                                                source={require('./assets/kite.png')}
                                            />

                                            <View style={styles.bottomTextBorder}>
                                                <Text style={styles.boxText}>Recreation</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={ this.state.button === "Landmarks" ? [styles.preButton, styles.buttonPressed, { backgroundColor: '#F08C44', shadowColor: '#F08C44'}] : styles.preButton}
                                        onPress={() => { this.state.button === "Landmarks" ? this.setState({button:"", continColor: "white"}) : this.setState({button: "Landmarks", continColor: "#F08C44"}) }}
                                        activeOpacity={.8} >
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 80, width: 80, marginTop: 10 }}
                                                source={require('./assets/landmark.png')}
                                            />

                                            <View style={styles.bottomTextBorder}>
                                                <Text style={styles.boxText}>Landmarks</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                            </ScrollView>

                            {/* The final section of the screen that contains the continue button */}
                            <View style={{ alignItems: 'center', position: 'absolute', backgroundColor: "#609FC2", marginTop: hp('28%'), width: wp('100%'), height: hp('30%'), borderTopLeftRadius: 30 }}>
                                <TouchableOpacity style={[styles.continue, { backgroundColor: this.state.continColor }]}
                                    onPress={() => this.Continue()}>
                                    <Text style={styles.continueText}>Continue</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/* The Dolphin */}
                        <Image style={styles.dolphin}
                            source={require('./assets/dolphin.png')} />

                        {/* The Header */}
                        <Text style={styles.header}>Categories</Text>
                    </LinearGradient>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({

    buttonPressed: {
        shadowOffset: { width: .5, height: .5 },
        shadowOpacity: 1,
        shadowRadius: 7,
        top: 9, 
        left: 4,
    },

    dolphin: {
        position: 'absolute',
        transform: [{ translateX: 20 }, { translateY: -110 }, { rotate: "-30deg" }, { scale: .7 }]
    },

    header: {
        position: 'absolute',
        color: 'white',
        marginTop: hp('36%'),
        marginLeft: wp('4%'),
        fontSize: 40,
        fontWeight: 'bold',
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

    preButton: {
        backgroundColor: '#ffffff',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        top: 5,
        shadowColor: '#ffffff',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },

});