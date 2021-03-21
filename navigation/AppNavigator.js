import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import FirstAppStackScreen from '../screens/FirstAppScreen';
import RegisterStackScreen from '../screens/RegisterScreen';
import LoginStackScreen from '../screens/LoginScreen';
import HomeStackScreen from '../screens/HomeStackScreen';
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import {DrawerContent} from '../screens/DrawerContent';



const Drawer = createDrawerNavigator();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
        <Drawer.Screen name="FirstApp" component={FirstAppStackScreen} />
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen  name="Login" component={LoginStackScreen}  />
        <Drawer.Screen name="Register" component={RegisterStackScreen} />
        <Drawer.Screen name="Question" component={QuestionnaireScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;