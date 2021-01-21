import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Recreation Types Screen
 */

export class RecreationTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            continColor: 'white',
            button: "",
        };
    }

    render() {
        return (
            <SafeAreaView>
                {/* Faint line below "Categories" */}
                <View style={{ position: 'relative', marginTop: -20, height: 3, backgroundColor: 'white', marginHorizontal: wp("5%"), zIndex: 999, opacity: .7 }} />

                {/* Background of page which is a linear gradiant */}
                <LinearGradient colors={['#C7EBFF', '#609FC2']} style={styles.background}>

                    {/* Contains all the categories options */}
                    <ScrollView style={{ top: 3, marginBottom: hp("25%") }}>

                        {/* View box containing ART GALLERY and ZOO buttons */}
                        <View style={styles.scroll}>

                            {/* art gallery */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Art" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Art", continColor: "#FB5792"})}
                                style={this.state.button === "Art" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#FB5792',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,
                                } : 
                                {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#FB5792',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,
                                }}
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Art" ? { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#FB5792" , height: hp("14%"), width: wp("25%"), borderRadius: 25 } : { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "white" , height: hp("14%"), width: wp("25%"), borderRadius: 25 }}>
                                {/* <View style={{ alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#FB5792" , height: hp("14%"), width: wp("25%"), borderRadius: 25 }}> */}
                                    <Image
                                        style={{ height: hp("12%"), width: wp("20%"), marginTop: 7 }}
                                        source={require('./assets/statue.png')}
                                    />
                                </View>
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Art Gallery
                                </Text>
                            </TouchableOpacity>

                            {/* zoo */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Zoo" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Zoo", continColor: "#FBEA57"})}
                                style={this.state.button === "Zoo" ? {
                                backgroundColor: 'white',
                                marginHorizontal: 25,
                                height: wp('35%'),
                                width: hp('20%'),
                                borderRadius: 15,
                                alignItems: 'center',
                                marginLeft: 20,
                                top: 5,
                                left: 5,
                                shadowColor: '#FBEA57',
                                shadowOffset: { height: .5, width: .5 },
                                shadowOpacity: 1,
                                shadowRadius: 25,} 
                                : 
                                {backgroundColor: 'white',
                                marginHorizontal: 25,
                                height: wp('35%'),
                                width: hp('20%'),
                                borderRadius: 15,
                                alignItems: 'center',
                                marginLeft: 20,
                                shadowColor: '#FBEA57',
                                shadowOffset: { width: 4, height: 4 },
                                shadowOpacity: 1,
                                shadowRadius: 0,}}
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Zoo" ? { marginTop: 8, marginLeft: -50, backgroundColor: "#FBEA57", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } : { marginTop: 8, marginLeft: -50, backgroundColor: "white", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 }} />
                                <Image
                                    style={{ height: hp("11.5%"), width: wp("22%"), marginTop: 7 }}
                                    source={require('./assets/track.png')}
                                />
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Zoo
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* View box containing AQUARIUM and PARK buttons */}
                        <View style={styles.scroll}>

                            {/* aquarium */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Aqua" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Aqua", continColor: "#57C0FB"})}
                                style={this.state.button === "Aqua" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#57C0FB',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,} 
                                    : 
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#57C0FB',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}}
                                    activeOpacity={.8}
                                >
                                <View style={this.state.button === "Aqua" ? { marginTop: 8, marginLeft: -50, backgroundColor: "#57C0FB", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } : { marginTop: 8, marginLeft: -50, backgroundColor: "white", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } } />
                                <Image
                                    style={{ height: hp("11.5%"), width: wp("21%"), marginTop: 7 }}
                                    source={require('./assets/seaweed.png')}
                                />
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Aquarium
                                </Text>
                            </TouchableOpacity>

                            {/* park */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Park" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Park", continColor: "#5767FB"})}
                                style={this.state.button === "Park" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#5767FB',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    : {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#5767FB',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}}
                                    activeOpacity={.8}
                                >
                                <View style={this.state.button === "Park" ? { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#5767FB", height: hp("14%"), width: wp("25%"), borderRadius: 25 } : { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "white", height: hp("14%"), width: wp("25%"), borderRadius: 25 }}>
                                    <Image
                                        style={{ height: hp("10%"), width: wp("18%"), marginTop: 12 }}
                                        source={require('./assets/park.png')}
                                    />
                                </View>
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Park
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* View box containing MOVIE THEATER and MUSEUM buttons */}
                        <View style={styles.scroll}>

                            {/* movie theater */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Movie" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Movie", continColor: "#57FBE7"})}
                                style={this.state.button === "Movie" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#57FBE7',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    : {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#57FBE7',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}}
                                    activeOpacity={.8}
                                >
                                <View style={this.state.button === "Movie" ? { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#57FBE7", height: hp("14%"), width: wp("25%"), borderRadius: 25 } : { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "white", height: hp("14%"), width: wp("25%"), borderRadius: 25 }}>
                                    <Image
                                        style={{ height: hp("12%"), width: wp("20%"), marginTop: 7 }}
                                        source={require('./assets/theater.png')}
                                    />
                                </View>
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Movie Theater
                                </Text>
                            </TouchableOpacity>

                            {/* museum */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Muse" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Muse", continColor: '#FF8E4F'})}
                                style={this.state.button === "Muse" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#FF8E4F',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    : {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#FF8E4F',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Muse" ? { marginTop: 8, marginLeft: -50, backgroundColor: "#FF8E4F", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } : { marginTop: 8, marginLeft: -50, backgroundColor: "white", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 }} />
                                <Image
                                    style={{ height: hp("11.5%"), width: wp("22%"), marginTop: 7 }}
                                    source={require('./assets/exhibition.png')}
                                />
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Museum
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* View box containing THEME PARK and MALL buttons */}
                        <View style={styles.scroll}>

                            {/* theme park */}
                            <TouchableOpacity  
                                onPress = {() => this.state.button === "Theme" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Theme", continColor: "#FB5757"})}
                                style={this.state.button === "Theme" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#FB5757',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    :
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#FB5757',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Theme" ? { marginTop: 8, marginLeft: -50, backgroundColor: "#FB5757", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } : { marginTop: 8, marginLeft: -50, backgroundColor: "white", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 }} />
                                <Image
                                    style={{ height: hp("11.5%"), width: wp("21%"), marginTop: 7 }}
                                    source={require('./assets/roller-coaster.png')}
                                />
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Theme Park
                                </Text>
                            </TouchableOpacity>

                            {/* mall */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Mall" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Mall", continColor: "#C657FB"})}
                                style={this.state.button === "Mall" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#C657FB',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    :
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#C657FB',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Mall" ? { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#C657FB", height: hp("14%"), width: wp("25%"), borderRadius: 25 } : { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "white", height: hp("14%"), width: wp("25%"), borderRadius: 25 }}>
                                    <Image
                                        style={{ height: hp("10%"), width: wp("18%"), marginTop: 12 }}
                                        source={require('./assets/mall.png')}
                                    />
                                </View>
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Mall
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* View box containing BOWLING ALLEY and SPA buttons */}
                        <View style={styles.scroll}>

                            {/* bowling alley */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Bowl" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Bowl", continColor: "#76FF35"})}
                                style={this.state.button === "Bowl" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#76FF35',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    :
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#76FF35',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Bowl" ? { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#76FF35", height: hp("14%"), width: wp("25%"), borderRadius: 25 } : { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "white", height: hp("14%"), width: wp("25%"), borderRadius: 25 }}>
                                    <Image
                                        style={{ height: hp("10.5%"), width: wp("18.5%"), marginTop: 10 }}
                                        source={require('./assets/bowling.png')}
                                    />
                                </View>
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Bowling Alley
                                </Text>
                            </TouchableOpacity>

                            {/* spa */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Spa" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Spa", continColor: "#FBB957"})}
                                style={this.state.button === "Spa" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#FBB957',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    :
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#FBB957',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Spa" ? { marginTop: 8, marginLeft: -50, backgroundColor: "#FBB957", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } : { marginTop: 8, marginLeft: -50, backgroundColor: "white", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 }} />
                                <Image
                                    style={{ height: hp("11.5%"), width: wp("22%"), marginTop: 7 }}
                                    source={require('./assets/spa.png')}
                                />
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Spa
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* View box containing CITY HALL and BAR buttons */}
                        <View style={styles.scroll}>

                            {/* city hall */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "City" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "City", continColor: "#57CAFB"})}
                                style={this.state.button === "City" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#57CAFB',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    :
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#57CAFB',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "City" ? { marginTop: 8, marginLeft: -50, backgroundColor: "#57CAFB", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 } : { marginTop: 8, marginLeft: -50, backgroundColor: "White", height: hp("1.5%"), width: wp("17%"), borderRadius: 10 }} />
                                <Image
                                    style={{ height: hp("11.5%"), width: wp("21%"), marginTop: 7 }}
                                    source={require('./assets/city-hall.png')}
                                />
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    City Hall
                                </Text>
                            </TouchableOpacity>

                            {/* bar */}
                            <TouchableOpacity 
                                onPress = {() => this.state.button === "Bar" ? this.setState({button: "", continColor: "white"}) : this.setState({button: "Bar", continColor: "#FB57EA"})}
                                style={this.state.button === "Bar" ? {
                                    backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    top: 5,
                                    left: 5,
                                    shadowColor: '#FB57EA',
                                    shadowOffset: { height: .5, width: .5 },
                                    shadowOpacity: 1,
                                    shadowRadius: 25,}
                                    :
                                    {backgroundColor: 'white',
                                    marginHorizontal: 25,
                                    height: wp('35%'),
                                    width: hp('20%'),
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    marginLeft: 20,
                                    shadowColor: '#FB57EA',
                                    shadowOffset: { width: 4, height: 4 },
                                    shadowOpacity: 1,
                                    shadowRadius: 0,}} 
                                activeOpacity={.8}
                                >
                                <View style={this.state.button === "Bar" ? { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "#FB57EA", height: hp("14%"), width: wp("25%"), borderRadius: 25 } : { alignItems: 'center', marginTop: 10, marginHorizontal: 30, backgroundColor: "white", height: hp("14%"), width: wp("25%"), borderRadius: 25 }}>
                                    <Image
                                        style={{ height: hp("10%"), width: wp("18%"), marginTop: 12 }}
                                        source={require('./assets/bar.png')}
                                    />
                                </View>
                                <Text style={{ position: 'relative', fontSize: 18, marginTop: 2 }}>
                                    Bar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* Extra view for alignment of the scrollview so that the final options can be fully shown */}
                        <View style={{ height: 45 }}></View>

                    </ScrollView>

                    {/* Viewbox that contains the continue button */}
                    <View style={{ alignItems: 'center', position: 'absolute', backgroundColor: "#609FC2", marginTop: hp('73%'), width: wp('100%'), height: hp('10%'), borderTopLeftRadius: 30 }}>
                        <TouchableOpacity style={[styles.continue, { backgroundColor: this.state.continColor }]}
                            onPress={() => this.Continue()}>
                            <Text style={styles.continueText}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: hp("100%")
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
    scroll: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 10,
    },
    buttons: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        height: wp('35%'),
        width: hp('20%'),
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: 20,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },

})