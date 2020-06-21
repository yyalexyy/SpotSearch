import 'react-native-gesture-handler';      //Dont add any other import above this
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// importing screen pages from screens folder
import { Recent } from './screens/Recent';
import { Favorites } from './screens/Favorites';
import { HomePage } from './screens/HomePage';
import { LowBudgetPage, HighBudgetPage } from './screens/BudgetsPage';
import { MaxDistancePage } from './screens/MaxDistancePage';
import { RatingPage } from './screens/RatingPage';
import { ResultPage } from './screens/ResultPage';

//diplaying the splash screen
import { SplashScreen } from 'expo'
SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 3000);



function Separate() {
  return <View style = {{marginVertical: 30,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,}} />
}



const SideBarDrawer = createDrawerNavigator();     //creating drawer navigator
const HomeStack = createStackNavigator();   

//Component to render HomeStack navigator
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomePage" component={HomePage} options={{ title:"Home" }} />
    <HomeStack.Screen name="LowBudgetPage" component={LowBudgetPage} options={{ title:"Budget" }} />
    <HomeStack.Screen name="HighBudgetPage" component={HighBudgetPage} options={{ title:"Budget Classy" }} />
    <HomeStack.Screen name="MaxDistancePage" component={MaxDistancePage} options={{ title:"Distance" }}  />
    <HomeStack.Screen name="RatingPage" component={RatingPage} options={{ title:"Rating" }} />
    <HomeStack.Screen name="ResultPage" component={ResultPage} options={{ title:"Spot" }} />
  </HomeStack.Navigator>
)


/**
 * Drawer Navigator Custom Content 
 * @param {*} props 
 */
function CustomDrawerContent(props){
  return (
    <DrawerContentScrollView {...props}>
      <View>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="home-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('HomePage')}
          />

          <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="clock-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Recent"
              onPress={() => props.navigation.navigate('Recent')}
          />

          <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="heart-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Favorites"
              onPress={() => props.navigation.navigate('Favorites')}
          />

          {/*<DrawerItemList {...props} />     <- only list them*/}     

          <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
          />
      </View>
      
    </DrawerContentScrollView>


  );
}
/**
 * Drawer Navigator Base
 */
function MyDrawer() {
    return (
    <SideBarDrawer.Navigator drawerContent = {props => <CustomDrawerContent {...props} />}>
      <SideBarDrawer.Screen 
      name="HomeStackScreen" component={HomeStackScreen} options={{ title: "Home" }} />
      <SideBarDrawer.Screen name="Recent" component={Recent} />
      <SideBarDrawer.Screen name="Favorites" component={Favorites} />
    </SideBarDrawer.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});