import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Recreation Types Screen
 */
export class CasualBitesTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            continColor: '#fff',
            button: '',
            option: '',
        };
    }

    _continue = () => {
        if (this.state.continColor !== '#fff') {
            this.setState({continColor: '#fff'})

            if (this.state.button === 'Bakery') {
                this.setState({button: ''})
                this.setState({ option: "bakery"} , () => {this.props.navigation.navigate('MaxTimePage', { option: "bakery" })});
            }
            else if (this.state.button === 'Cafe') {
                this.setState({button: ''})
                this.setState({ option: "cafe"} , () => {this.props.navigation.navigate('MaxTimePage', { option: "cafe" })});
            }
        }
    }

    render() {
        return(
            <SafeAreaView>
                {/* Faint line below "Budget" */}
                <View style={{ position: 'relative', height: 2, backgroundColor: 'white', marginTop: -20,marginLeft: 0, marginRight: 0, zIndex: 5, opacity: .7 }} />

                <LinearGradient colors={['#C7EBFF', '#609FC2']} style={{ marginTop: -20, height: hp('100%'), width: wp('100%'), }}>
                    {/* Header Text */}
                    <View style={{ position: 'absolute', backgroundColor: '#000', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: hp('21%'), width: wp('85%'), marginTop: hp('3%'), borderTopRightRadius: 30, borderBottomRightRadius: 100, borderColor: '#fff', borderWidth: 5, zIndex: 10,}}>
                        <Text style={{ fontSize: hp('5%'), color: '#fff', marginLeft: wp('3%'), }}>Choose a category</Text>
                        <Text style={{ fontSize: hp('3%'), color: '#fff', marginLeft: wp('3%'),}}>(Press the Icon)</Text>
                    </View>
                    

                    {/* Bakery Box */}
                    <View style ={{ position: 'absolute', backgroundColor: '#FBB957', height: hp('38%'), width: wp('85%'), right: 0, marginTop: hp('10%'), borderBottomLeftRadius: 100, borderColor: '#fff', borderWidth: 5, zIndex: 8}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Text style={{ fontSize: hp('5.5%'), fontWeight: 'bold', color: '#000', marginTop: hp('20%'), marginLeft: wp('8%'), top: 25}}>Bakery</Text>
                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress={() => { this.state.button === "Bakery" ? this.setState({button:"", continColor: "#fff"}) : this.setState({button: "Bakery", continColor: "#FBB957"}) }}
                                    style={ this.state.button === "Bakery" ? [styles.preButton, styles.buttonPressed, {backgroundColor: '#FBB957', marginRight: wp('1%'), marginBottom: hp('1%'), top: 80 } ] : [styles.preButton, {backgroundColor: '#FBB957', marginRight: wp('1%'), marginBottom: hp('1%'), top: 80 }]}
                                    activeOpacity={.8}
                                >
                                    <Image
                                        style={{ height: hp('17%'), width: wp('30%'), alignSelf: 'center' }}
                                        source={require('./assets/casBitesTypeImg/bread.png')}
                                    />

                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                    {/* Cafe Box */}
                    <View style ={{ position: 'absolute', backgroundColor: '#FB5757', height: hp('38%'), width: wp('85%'), marginTop: hp('32%'), borderBottomRightRadius: 100, borderColor: '#fff', borderWidth: 5 }}>
                        <View style={{flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => { this.state.button === "Cafe" ? this.setState({button:"", continColor: "#fff"}) : this.setState({button: "Cafe", continColor: "#FB5757"}) }}
                                    style={ this.state.button === "Cafe" ? [styles.preButton, styles.buttonPressed, { backgroundColor: '#FB5757', marginTop: hp('15%') }] : [styles.preButton, { backgroundColor: '#FB5757', marginTop: hp('15%') }] }
                                    activeOpacity={.8}
                                >
                                    <Image
                                        style={{ height: hp('17%'), width: wp('30%'), marginVertical: hp('2%'), alignSelf: 'center' }}
                                        source={require('./assets/casBitesTypeImg/cafe.png')}
                                    />

                                </TouchableOpacity>
                            </View>

                            <View>
                                <Text style={{ fontSize: hp('5.5%'), fontWeight: 'bold', color: '#000', marginLeft: wp('6%'), marginTop: hp('20%') }}>Cafe</Text>
                            </View>
                        </View>
                    </View>

                    {/* Continue */}
                    <View style={{position: 'absolute', backgroundColor: '#C1E9FF', height: hp('13%'), width: wp('95%'), right: 0, marginTop: hp('72%'), borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderColor: '#fff', borderWidth: 5 }}>
                        <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{fontSize: hp('4%'), fontWeight: 'bold', color: '#000', marginLeft: wp('4%')}}>Continue</Text>
                            </View>

                            <View style={{marginLeft: wp('30%'), marginVertical: 2}}>
                                <TouchableOpacity
                                    onPress={() => this._continue()}
                                    style={[styles.continue, { backgroundColor: this.state.continColor }]}
                                >
                                    <Image
                                        style={{ height: hp('5%'), width: wp('9%'), marginVertical: hp('2.5%'), alignSelf: 'center', justifyContent: 'center' }}
                                        source={require('./assets/casBitesTypeImg/continue_arrow.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </LinearGradient>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    preButton: {
        height: wp('35%'),
        width: hp('20%'),
        marginLeft: wp('4%'),
        borderRadius: 45,
        borderColor: '#000',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
    buttonPressed: {
        marginLeft: wp('4%'),
        shadowOffset: { width: .5, height: .5 },
        shadowOpacity: 1,
        shadowRadius: 7,
    },

    continue: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        borderColor: '#000',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: .5,
        shadowRadius: 0,
    },
});