import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createAppContainer, ThemeColors } from 'react-navigation';
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
      this.state = { 
        count: 0, 
        option: props.route.params.option,
      }

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
          //this.budgetAlert();
          this.setState((state) => {
            return {count: 0}
          });
        }
      }
      
      if(isNegative == false){
        this.numOfCount(isIncr, num);
      }

    };


    render(){
      return (
        <SafeAreaView backgroundColor = '#3AA4E0'>
          <View style = {{position: 'relative', marginTop: -20, height: 2, backgroundColor: 'black', marginLeft: 10, marginRight: 10}}/>
          <View>
            <Text style = {styles.mainQuestion}>What is your budget?</Text>
          </View>

          <View style = {styles.topBox}>
            <Text style = {{fontSize: hp('4%'), color: '#3AA4E0', marginBottom: 80, marginRight: 240}}>Max</Text>
            
            <View style = {{position: 'absolute', flexDirection: 'column'}}>

                <Text style={styles.amountTextColor}>
                 ${this.state.count}.00
                </Text> 

            </View>
          </View>

          <View style = {{backgroundColor: '#2A7FAE', marginTop: -65, marginBottom: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

            {/** Line Seperator between the top and the scrolling view */}
            <View style = {styles.seperate}/>

            <ScrollView contentContainerStyle={{paddingBottom: 225}}
            style = {{position: 'relative', marginTop: 100, marginBottom: 80}}>
                {/** $1.00 view box*/}
                <View style={styles.scrollBoxes}>

                  <View style ={{paddingLeft: 50, paddingRight: 50}}>
                    <Text style = {styles.addDollarText}>$1.00</Text>
                  </View>

                  {/** Left decrement*/}
                  <TouchableOpacity onPress = { () => this.isNegativeBudget(false,1) }>
                    <View style={styles.decrementBox} backgroundColor = '#32D4D4'>

                            <View style={styles.decrementLine}/>
                    </View>
                  </TouchableOpacity>


                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,1) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#9DF5F5'>
                          
                              {/** Vertical line*/}
                              <View style = {styles.plusVerticalLine}/>

                              {/** Left horizontal line*/}
                              <View style = {styles.plusLeftHoriLine}/>

                              {/** Right horizontal line*/} 
                              <View style = {styles.plusRightHoriLine}/>
                              
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
                        
                              <View style={styles.decrementLine}/>
                      </View>
                  </TouchableOpacity>
                  
                  

                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,5) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#87A4EF'>
                          
                              {/** Vertical line*/}
                              <View style = {styles.plusVerticalLine}/>

                              {/** Left horizontal line*/}
                              <View style = {styles.plusLeftHoriLine}/>

                              {/** Right horizontal line*/}
                              <View style = {styles.plusRightHoriLine}/>

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

                              <View style={styles.decrementLine}/>                  
                      </View>
                  </TouchableOpacity>

                  

                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,10) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#EAED71'>
                          
                            {/** Vertical line*/}
                              <View style = {styles.plusVerticalLine}/>

                              {/** Left horizontal line*/}
                              <View style = {styles.plusLeftHoriLine}/>

                              {/** Right horizontal line*/}
                              <View style = {styles.plusRightHoriLine}/>
                              
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
                      <View style={styles.decrementBox} backgroundColor = '#F08C44'>
                              
                              <View style={styles.decrementLine}/>                    
                      </View>
                  </TouchableOpacity>


                  {/** Right decrement*/}
                  <TouchableOpacity 
                    style = {{justifyContent: 'center', alignItems: 'center'}}
                    onPress = { () => this.isNegativeBudget(true,20) }
                  >
                      <View style = {styles.incrementBox} backgroundColor = '#F0AB79'>
                        
                              {/** Vertical line*/}
                              <View style = {styles.plusVerticalLine}/>

                              {/** Left horizontal line*/}
                              <View style = {styles.plusLeftHoriLine}/>

                              {/** Right horizontal line*/}
                              <View style = {styles.plusRightHoriLine}/>
                              
                      </View>
                  </TouchableOpacity>

                </View>

                
            </ScrollView>

            
          </View>

          {/* The final section of the screen that contains the continue button */}
          <View style={{ alignItems: 'center', position: 'absolute', backgroundColor: "#0E2163", marginTop: hp('73%'), width: wp('100%'), height: hp('10%'), borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
            
            <TouchableOpacity
              style = {styles.continue}
              onPress={() => this.props.navigation.push('MaxTimePage', {cost: this.state.count, option: this.state.option})} >

                <View >
      <Text style = {{fontSize: 25, color: '#000000'}}>Continue</Text>
                </View>

            </TouchableOpacity>

          </View>

        </SafeAreaView>
      );
    }
}


const styles = StyleSheet.create({  
    mainQuestion: {
      marginBottom: 0,
      marginLeft: 20,
      color: 'black',
      fontSize: 25,
      marginTop: 20,

    },
    topBox: {
      marginTop: 15,
      backgroundColor: '#ffffffff',
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      height: hp('20%'),                    //144
      justifyContent: 'center',       // Set content's vertical alignment.
      alignItems: 'center',           // Set con]tent's horizontal alignment.
      zIndex: 5,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 4},
      shadowOpacity: .6,
      shadowRadius: 3,
    },
    amountTextColor: {
      marginTop: 35,
      marginLeft: 30,
      marginRight: 30,
      color: '#000000',
      fontSize: hp('8%'),     //60
      alignItems: "center",
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 0,
      fontWeight: '400'
    },

    seperate:{
      marginTop: 90,
      marginBottom: -100,
      height: 3,
      backgroundColor: '#B8E5FF',
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 2},
      shadowOpacity: .6,
      shadowRadius: 2,
      zIndex: 999,
    },
  
    scrollBoxes: {
      marginTop: 25,
      backgroundColor: '#ffffffff', 
      flexDirection: 'row',
      marginLeft: 20, 
      marginRight: 15,
      borderRadius: 15,
      height: hp('11%'),       //80
      alignItems: "center",
      //overflow: "hidden",
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 3},
      shadowOpacity: .6,
      shadowRadius: 4,
    },

    decrementBox: {
      marginLeft: 5,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
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
      fontWeight: '500',
      color: '#000000',
      alignSelf: 'center',
    },

    decrementLine: {
      borderColor: '#000000', 
      borderWidth: 2, 
      width: wp('8.5%'), 
      height: hp('1.7%'), 
      backgroundColor: '#ffffff' 
    },
    plusVerticalLine: {
      borderColor: '#000000', 
      borderWidth: 2, 
      width: wp('3%'), 
      height: hp('6.5%'), 
      backgroundColor: '#ffffff',
    },
    plusLeftHoriLine: {
      borderTopColor: '#000000',
      borderLeftColor: '#000000',
      borderBottomColor: '#000000',
      borderRightColor: '#ffffff',
      borderWidth: 2,
      width: hp('3%'),
      height: wp('3%'),
      position: 'absolute', 
      backgroundColor: '#ffffff', 
      right: 43
    },
    plusRightHoriLine:{
      borderTopColor: '#000000', 
      borderLeftColor: '#ffffff', 
      borderBottomColor: '#000000', 
      borderRightColor: '#000000', 
      borderWidth: 2, width: hp('3%'), 
      height: wp('3%'), 
      position: 'absolute', 
      backgroundColor: '#ffffff', 
      left: 43
    },

    continue: {
      backgroundColor: 'white',
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

  });