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
            finDineOp: .5,
            casBitesOp: .5,
            recOp: .5,
            landmarksOp: .5,
            continColor: 'white',
            option: '...',
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

    /**
     * Route to Budget Screen
     */
    toFineDining = () => {
        this.setState((state) => { return { option: "restaurant"} }, () => {this.props.navigation.navigate('BudgetPage', { option: this.state.option })});
       
    }
    /**
     * Route to Casual Bites Category Screen
     */
    toCasualBites = () => {
        this.setState((state) => { return { option: "bakery" } }, () => {this.props.navigation.navigate('CasualBitesTypes', { option: this.state.option })});
    }
    /**
     * Route to Recreation Category Screen
     */
    toRecreation = () => {
        this.setState((state) => { return { option: "amusement_park" } }, () => {this.props.navigation.navigate('RecreationTypes', { option: this.state.option })});
    }
    /**
     * Route to LandMarks Screen
     */
    toLandMarks = () => {
        this.setState((state) => { return { option: "tourist_attraction" } }, () => {this.props.navigation.navigate('MaxTimePage', { option: this.state.option })});
    }

    Continue = () => {
        if (this.state.continColor !== 'white') {
            if (this.state.option === 'Fine Dining') {
                this.toFineDining()
            }
            else if (this.state.option === 'Casual Bites') {
                this.toCasualBites()
            }
            else if (this.state.option === 'Recreation') {
                this.toRecreation()
            }
            else if (this.state.option === 'Landmarks') {
                this.toLandMarks()
            }
        }
    }

    toggle = (color) => {
        if (color === 'FD') {
            this.state.finDineOp === .5 ? this.setState((state) => { return { finDineOp: 1, casBitesOp: .5, recOp: .5, landmarksOp: .5 } }) : this.setState((state) => { return { finDineOp: .5 } });
        } else if (color === 'CB') {
            this.state.casBitesOp === .5 ? this.setState((state) => { return { finDineOp: .5, casBitesOp: 1, recOp: .5, landmarksOp: .5 } }) : this.setState((state) => { return { casBitesOp: .5 } });
        } else if (color === 'Rec') {
            this.state.recOp === .5 ? this.setState((state) => { return { finDineOp: .5, casBitesOp: .5, recOp: 1, landmarksOp: .5 } }) : this.setState((state) => { return { recOp: .5 } });
        } else if (color === 'LM') {
            this.state.landmarksOp === .5 ? this.setState((state) => { return { finDineOp: .5, casBitesOp: .5, recOp: .5, landmarksOp: 1 } }) : this.setState((state) => { return { landmarksOp: .5 } });
        }
    }

    render() {
        return (
            <LinearGradient colors={['#609FC2', '#C7EBFF']} style={{position: 'absolute'}}> 
            <SafeAreaView>
                {/* Faint line below "Home" */}
                    <View style={{ position: 'relative', marginTop: -20, marginBottom: 15, height: 2, backgroundColor: 'white', marginLeft: 0, marginRight: 0, zIndex: 999, opacity: .7 }} />

                    {/* Faint line below "Catergories" */}
                    <View style={{ position: 'absolute', marginTop: hp('44.5%'), height: 2, marginLeft: wp('5%'), width: 340, marginRight: wp('5%'), backgroundColor: 'white', zIndex: 999, opacity: .5 }} />

                    {/* Light Blue Section that contains the Dolphin and Header */}
                    <View style={{ backgroundColor: '#91C6E4', height: hp('100%'), width: wp('100%'), marginTop: -20 }}>

                        {/* The second section of the screen that contains the horizontal scroll bar */}
                        <View style={{ flexDirection: "row", backgroundColor: "#91C6E4", marginTop: hp('45%'), width: wp('100%'), height: hp('45%'), borderTopLeftRadius: 30 }}>

                            {/* Vertical Line that ends the scrollview */}
                            <View style={{ marginTop: 90, marginLeft: -40, position: 'absolute', height: 8, width: 150, backgroundColor: 'white', borderRadius: 20, transform: [{ rotate: "90deg" }], shadowColor: 'black', shadowRadius: 1, shadowOffset: { height: -2, width: 3 }, shadowOpacity: .5, zIndex: 999 }} />

                            <ScrollView style={{ position: 'relative', marginLeft: 40, marginTop: 20, height: 400 }} horizontal={true}>

                                {/* View that contains all the buttons within ScrollView */}
                                <View style={styles.scroll}>

                                    {/* Buttons */}
                                    <TouchableOpacity
                                        onPress={() => { this.setColor('#9DF5F5'); this.toggle('FD'); this.setState(state => ({ option: 'Fine Dining' })); }}
                                        style={this.state.finDineOp === 1 ? styles.finDineButtonPressed : styles.preButton}
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
                                        style={this.state.casBitesOp === 1 ? styles.casBitesButtonPressed : styles.preButton}
                                        onPress={() => { this.setColor('#87A4EF'); this.toggle('CB'); this.setState(state => ({ option: 'Casual Bites' })); }}
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
                                        style={this.state.recOp === 1 ? styles.recButtonPressed : styles.preButton}
                                        onPress={() => { this.setColor('#EAED71'); this.toggle('Rec'); this.setState(state => ({ option: 'Recreation' })); }}
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
                                        style={this.state.landmarksOp === 1 ? styles.landmarksButtonPressed : styles.preButton}
                                        onPress={() => { this.setColor('#F08C44'); this.toggle('LM'); this.setState(state => ({ option: 'Landmarks' })); }}
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
                        <Text style={styles.header}>
                            Categories
                    </Text>

                    </View>

            </SafeAreaView>
            </LinearGradient> 

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
        marginTop: hp('36%'),
        marginLeft: wp('4%'),
        fontSize: 40,
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

    finDineButtonPressed: {
        backgroundColor: '#9DF5F5',
        top: 9,
        left: 4,
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: '#9DF5F5',
        shadowOffset: { width: .5, height: .5 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },

    foodAreaButton: {
        backgroundColor: '#ffffff',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        top: 5,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },

    casBitesButtonPressed: {
        backgroundColor: '#87A4EF',
        top: 9,
        left: 4,
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: '#87A4EF',
        shadowOffset: { width: .5, height: .5 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },

    VacSpotButton: {
        backgroundColor: '#ffffff',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        top: 5,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },

    recButtonPressed: {
        backgroundColor: '#EAED71',
        top: 9,
        left: 4,
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: '#EAED71',
        shadowOffset: { width: .5, height: .5 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },

    HangSpotButton: {
        backgroundColor: '#ffffff',
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        top: 5,
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },

    landmarksButtonPressed: {
        backgroundColor: '#F08C44',
        top: 9,
        left: 4,
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: '#F08C44',
        shadowOffset: { width: .5, height: .5 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },

});