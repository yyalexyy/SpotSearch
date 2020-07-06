import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { render } from 'react-dom';



/**
 * Budgets Screen
 */
 export class BudgetPage extends React.Component{
    constructor(props){
      super(props);
      this.state = { count: 0 }

    }

    // Alert budget message
    budgetAlert() {
      Alert.alert(
        'Alert Message',
        'Negative amount does not exist!',
        [
          {text: 'OK', onPress: () => console.log('OK button clicked')},
        ],
        {
          cancelable: false     //dismissing behavior altogether with cancelable property set to false
        }        
      );
    }

    // Increment count
    incrementCount() {        // incrementCount = () => { 
      this.setState((state) => {
        return {count: state.count + 1}
      });
    }

    // Decrement count
    decrementCount() {
      this.setState((state) => {
        return {count: state.count - 1}
      });
    }

    /* The number of times to either increment or decrement count.
        isIncr: if value is true, we increment count. If value is false, we decrement count.
        num: the number of times to increment of decrement count
    */
    numOfCount(isIncr, num){
      for(let i = 0; i < num; i++){
        if(isIncr == true)       //true means to increment count
          this.incrementCount();
        else
          this.decrementCount();
      }
      
    };

    /* Validate whether budget is negative. If yes, display alert message;
      otherwise, call numOfCount method.
        isIncr: If value is false, we validate whether count is negative.
        num: the number of times to increment of decrement count
    */
    isNegativeBudget(isIncr, num){
      let isNegative = false;   // initializing to false as count is positive
    
      if(isIncr == false){    // validate if count is negative
        if((this.state.count - num) < 0){
          isNegative = true;    // set true since count would be negative
          this.budgetAlert();
        }
      }
      
      if(isNegative == false){
        this.numOfCount(isIncr, num);
      }

    };


    render(){
      return (
        <SafeAreaView backgroundColor = '#3AA4E0'>
          <View>
            <Text style = {styles.mainQuestion}>What is your budget?</Text>
          </View>

          <View style = {styles.topBox}>
            <View style = {{position: 'absolute', flexDirection: 'column'}}>
                <Text style = {{paddingTop: 15, fontSize: hp('4.5%'), color: '#3AA4E0', marginLeft: -15}}>Max</Text>

                <Text style={styles.amountTextColor}>
                  ${this.state.count}.00
                </Text>

            </View>
          </View>

          <View style = {{backgroundColor: '#0E2163', marginTop: -65, marginBottom: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

          {/** Line Seperator between the top and the scrolling view */}
          <View style = {styles.seperate}/>

            <ScrollView contentContainerStyle={{paddingBottom: 100}}
            style = {{marginTop: 100, marginBottom: 30}}>
                {/** $1.00 view box*/}
                <View style={styles.scrollBoxes}>

                  <View style ={{paddingLeft: 50, paddingRight: 50}}>
                    <Text style = {styles.addDollarText}>$1.00</Text>
                  </View>

                  {/** Left decrement*/}
                  <TouchableOpacity onPress = { () => this.isNegativeBudget(false,1) }>
                    <View style={styles.decrementBox} backgroundColor = '#32D4D4'>

                            <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.7%'), backgroundColor: '#ffffff' }}/>
                    </View>
                  </TouchableOpacity>


                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,1) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#9DF5F5'>
                          
                              {/** Vertical line*/}
                              <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('3%'), height: hp('6.5%'), backgroundColor: '#ffffff',}}/>

                              {/** Left horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', right: 43}}/>

                              {/** Right horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', left: 43}}/>
                              
                      </View>
                  </TouchableOpacity>

                </View>

                {/** $5.00 view box*/}
                <View style={styles.scrollBoxes}>

                  <View style ={{paddingLeft: 48, paddingRight: 48}}>
                    <Text style = {styles.addDollarText}>$5.00</Text>
                  </View>

                  {/** Left decrement*/}
                  <TouchableOpacity onPress = { () => this.isNegativeBudget(false,5) }>
                      <View style={styles.decrementBox} backgroundColor = '#4062BA'>
                        
                              <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.7%'), backgroundColor: '#ffffff' }}/>
                      </View>
                  </TouchableOpacity>
                  
                  

                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,5) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#87A4EF'>
                          
                              {/** Vertical line*/}
                              <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('3%'), height: hp('6.5%'), backgroundColor: '#ffffff',}}/>

                              {/** Left horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', right: 43}}/>

                              {/** Right horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', left: 43}}/>

                      </View>
                  </TouchableOpacity>

                </View>

                {/** $10.00 view box*/}
                <View style={styles.scrollBoxes}>

                  <View style ={{paddingLeft: 41, paddingRight: 41}}>
                    <Text style = {styles.addDollarText}>$10.00</Text>
                  </View>

                  {/** Left decrement*/}
                  <TouchableOpacity onPress = { () => this.isNegativeBudget(false,10) }>
                      <View style={styles.decrementBox} backgroundColor = '#DBE011'>

                              <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.7%'), backgroundColor: '#ffffff' }}/>                  
                      </View>
                  </TouchableOpacity>

                  

                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,10) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#EAED71'>
                          
                            {/** Vertical line*/}
                              <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('3%'), height: hp('6.5%'), backgroundColor: '#ffffff',}}/>

                              {/** Left horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', right: 43}}/>

                              {/** Right horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', left: 43}}/>
                              
                      </View>
                  </TouchableOpacity>

                </View>

                {/** $20.00 view box*/}
                <View style={styles.scrollBoxes}>

                  <View style ={{paddingLeft: 39, paddingRight: 39}}>
                    <Text style = {styles.addDollarText}>$20.00</Text>
                  </View>

                  {/** Left decrement*/}
                  <TouchableOpacity onPress = { () => this.isNegativeBudget(false,20) }>
                      <View style={styles.decrementBox} backgroundColor = '#2AB938'>
                              
                              <View style={{borderColor: '#000000', borderWidth: 2, width: wp('8.5%'), height: hp('1.7%'), backgroundColor: '#ffffff' }}/>                    
                      </View>
                  </TouchableOpacity>


                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,20) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#74E17F'>
                        
                              {/** Vertical line*/}
                              <View style = {{borderColor: '#000000', borderWidth: 2, width: wp('3%'), height: hp('6.5%'), backgroundColor: '#ffffff',}}/>

                              {/** Left horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#000000', borderBottomColor: '#000000', borderRightColor: '#ffffff', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', right: 43}}/>

                              {/** Right horizontal line*/}
                              <View style = {{borderTopColor: '#000000', borderLeftColor: '#ffffff', borderBottomColor: '#000000', borderRightColor: '#000000', borderWidth: 2, width: hp('3%'), height: wp('3%'), position: 'absolute', backgroundColor: '#ffffff', left: 43}}/>
                              
                      </View>
                  </TouchableOpacity>

                </View>

                {/** Continue to next page button*/}
                <View style = {{marginTop: 30,  marginBottom: 175, marginLeft: 30, marginRight: 30, borderRadius:15, textAlign: 'center', backgroundColor: 'white', borderColor: 'black', borderWidth: '2'}}>

                    <TouchableOpacity
                      style = {{alignItems: 'center', justifyContent: 'center', height: hp('8%')}}
                      onPress={() => this.props.navigation.push('MaxTimePage')} >

                        <View >
                          <Text style = {{fontSize: 25, color: 'black'}}>Continue</Text>
                        </View>

                    </TouchableOpacity>

                </View>
            </ScrollView>

            
          </View>

        </SafeAreaView>
      );
    }
}


const styles = StyleSheet.create({  
    mainQuestion: {
      marginBottom: 10,
      marginLeft: 20,
      color: '#ffffffff',
      fontSize: 30,

    },
    topBox: {
      marginTop: 15,
      backgroundColor: '#ffffffff',
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      height: 144,
      justifyContent: 'center',       // Set content's vertical alignment.
      alignItems: 'center',           // Set content's horizontal alignment.
      zIndex: 5,
      borderColor: 'black',
      borderWidth: 2,
    },
    amountTextColor: {
      marginLeft: 30,
      marginRight: 30,
      color: '#000000',
      fontSize: hp('10%'),     //60
      alignItems: "center",
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 5,
      fontWeight: '300'
    },

    seperate:{
      marginTop: 90,
      marginBottom: -100,
      borderBottomColor: 'white',
      borderBottomWidth: 4,
      borderRadius: 10,
      marginLeft: 15,
      marginRight: 15,
      shadowOffset: { width: 0, height: 4},
      shadowOpacity: .8,
      shadowRadius: 3,
      zIndex: 999
    },
  
    scrollBoxes: {
      marginTop: 25,
      backgroundColor: '#ffffffff', 
      flexDirection: 'row',
      marginLeft: 20, 
      marginRight: 20,
      borderRadius: 15,
      height: hp('11%'),       //80
      overflow: 'hidden',
      alignItems: "center",
      borderWidth: 2,       // Set border width
    },

    decrementBox: {
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderColor: 'black',
      borderWidth: 2,
      alignItems: "center",
      justifyContent: 'center',
      width: wp('21%'),
      height: hp('11%'),
    },

    incrementBox: {
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      width: wp('21%'),
      height: hp('11%'),
      alignItems: "center",
      justifyContent: 'center',
      
    },

    addDollarText:{
      fontSize: hp('4.4%'),     //35
      color: '#000000',
      alignSelf: 'center',
      fontWeight: '300'
    }

    
  });