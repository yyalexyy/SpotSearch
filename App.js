import 'react-native-gesture-handler';      //Dont add any other import above this
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';  // import safe areas to display on screen
import { ScrollView, Button, Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert, useWindowDimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import logo from './assets/logo.png';     //import logo
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,       //Currently not needed
  DrawerItem,
} from '@react-navigation/drawer';

import {
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// importing screen pages from screens folder
import MainTabScreen from './screens/MainTabScreen';
import { Recent } from './screens/Recent';
import { Favorites } from './screens/Favorites';
import { HomePage } from './screens/HomePage';
import { BudgetPage } from './screens/BudgetsPage';
import { MaxTimePage } from './screens/MaxTimePage';
import { MaxDistancePage } from './screens/MaxDistancePage';
import { RatingPage } from './screens/RatingPage';
import { ResultPage } from './screens/ResultPage';

//diplaying the splash screen
import { SplashScreen } from 'expo'
import { Header } from 'react-native/Libraries/NewAppScreen';
SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 3000);


const SideBarDrawer = createDrawerNavigator();     //creating drawer navigator


/**
 * Drawer Navigator Custom Content 
 * @param {*} props 
 */
function CustomDrawerContent(props){
  
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }


  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          
          <Drawer.Section>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="home-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                onPress={() => props.navigation.navigate('HomePageRedesign')}
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
          </Drawer.Section>

          <Drawer.Section title="Preferences">
              <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents = "none">
                          <Switch value={isDarkTheme}/>
                        </View>
                    </View>
              </TouchableRipple>
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>
      
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Exit"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}        
        />
      </Drawer.Section>
      
    </View>


    // <DrawerContentScrollView {...props}>
    //   <View>
    //       <DrawerItem
    //         icon={({ color, size }) => (
    //           <Icon
    //             name="home-outline"
    //             color={color}
    //             size={size}
    //           />
    //         )}
    //         label="Home"
    //         onPress={() => props.navigation.navigate('HomePage')}
    //       />

    //       <DrawerItem
    //           icon={({ color, size }) => (
    //             <Icon
    //               name="clock-outline"
    //               color={color}
    //               size={size}
    //             />
    //           )}
    //           label="Recent"
    //           onPress={() => props.navigation.navigate('Recent')}
    //       />

    //       <DrawerItem
    //           icon={({ color, size }) => (
    //             <Icon
    //               name="heart-outline"
    //               color={color}
    //               size={size}
    //             />
    //           )}
    //           label="Favorites"
    //           onPress={() => props.navigation.navigate('Favorites')}
    //       />

    //       {/*<DrawerItemList {...props} />     <- only list them*/}     

    //       <DrawerItem
    //         label="Close drawer"
    //         onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
    //       />
    //   </View>
      
    // </DrawerContentScrollView>


  );
}
/**
 * Drawer Navigator Base
 */
function MyDrawer() {
    const dimensions = useWindowDimensions();

    return (
    <SideBarDrawer.Navigator
      drawerContent = {props => <CustomDrawerContent {...props} />}
      drawerPosition= 'right'
      drawerType={dimensions.width >= 768 ? 'permanent' : 'back'}     //permanent drawer is shown as a sidebar when large screens, else drawer is revealed behind the screen on swipe
      drawerStyle={{
        width: 200,
      }}
      edgeWidth={0}           //disable swipe to open (doesn't respond to gesture)
    >
      <SideBarDrawer.Screen 
      name="Home" component={MainTabScreen} options={{ title: "Home" }} />
      {/* <SideBarDrawer.Screen name="Recent" component={RecentStackScreen} />
      <SideBarDrawer.Screen name="Favorites" component={FavoritesStackScreen} /> */}
    </SideBarDrawer.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content"/>
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