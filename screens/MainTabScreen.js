import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// importing screen pages from screens folder
import { Recent } from './Recent';
import { Favorites } from './Favorites';
import { HomePage } from './HomePage';
import { HomePageRedesign } from './HomePageRedesign';
import { BudgetPage } from './BudgetsPage';
import { MaxTimePage } from './MaxTimePage';
import { MaxDistancePage } from './MaxDistancePage';
import { RatingPage } from './RatingPage';
import { ResultPage } from './ResultPage';



const HomeStack = createStackNavigator();
const RecentStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recent"
        component={RecentStackScreen}
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clock-outline" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen;


//Component to render HomeStack navigator
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#3AA4E0',
        },
        headerTintColor: 'black',     //back button color
        headerTitleStyle: {             //header title
          fontWeight: 'bold',
          color: 'black'
        },
      }}>
        <HomeStack.Screen name="HomePageRedesign" component={HomePageRedesign} options={{ 
          title:"Home",
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#000000"           //menu tab color
              backgroundColor= "#3AA4E0"
              onPress={() => navigation.toggleDrawer()}/>
          )
          }} />
        
        <HomeStack.Screen name="BudgetPage" component={BudgetPage} options={{ 
          title:"Budget",
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#000000"           //menu tab color
              backgroundColor= "#B8E5FF"
              onPress={() => navigation.toggleDrawer()}/>
          )
        }} />
        <HomeStack.Screen name="MaxTimePage" component={MaxTimePage} options={{ title:"Time",
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#000000"           //menu tab color
              backgroundColor= "#B8E5FF"
              onPress={() => navigation.toggleDrawer()}/>
          )
        }}  />
        <HomeStack.Screen name="MaxDistancePage" component={MaxDistancePage} options={{ title:"Distance",
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#000000"           //menu tab color
              backgroundColor= "#B8E5FF"
              onPress={() => navigation.toggleDrawer()}/>
          )
        }}  />
        <HomeStack.Screen name="RatingPage" component={RatingPage} options={{   
          title:"Rating",
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#000000"           //menu tab color
              backgroundColor= "#B8E5FF"
              onPress={() => navigation.toggleDrawer()}/>
          )
        }} />
        <HomeStack.Screen name="ResultPage" component={ResultPage} options={{ 
          title:"Spot",
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#000000"           //menu tab color
              backgroundColor= "#B8E5FF"
              onPress={() => navigation.toggleDrawer()}/>
          )
        }} />
    </HomeStack.Navigator>
  )
  
  const RecentStackScreen = ({ navigation }) => (
    <RecentStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#C5CBE3',
        },
        //headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white'
        },
      }}>
        <RecentStack.Screen name="Recent" component={Recent} options={{ 
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#ffffff"
              backgroundColor= "#C5CBE3"
              onPress={() => navigation.toggleDrawer()}/>
          )
          }} />
    </RecentStack.Navigator>
  )
  
  
  const FavoritesStackScreen = ({ navigation }) => (
    <FavoritesStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#C5CBE3',
        },
        //headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white'
        },
      }}>
        <FavoritesStack.Screen name="Favorites" component={Favorites} options={{ 
          headerRight: () => (
            <Icon.Button 
              name= "menu"
              size={25}
              color="#ffffff"
              backgroundColor= "#C5CBE3"
              onPress={() => navigation.toggleDrawer()}/>
          )
          }} />
    </FavoritesStack.Navigator>
  )