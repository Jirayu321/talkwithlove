import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import FirstAppStackScreen from './src/components/FirstAppScreen';
import RegisterStackScreen from './src/components/RegisterScreen';
import LoginStackScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/TopTabNavigator';
import QuestionnaireScreen from './src/components/QuestionnaireScreen';
import {DrawerContent} from './src/components/DrawerContent';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
        <Drawer.Screen name="FirstApp" component={FirstAppStackScreen} />
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen  name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Register" component={RegisterStackScreen} />
        <Drawer.Screen name="Question " component={QuestionnaireScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
    backgroundColor: '#FDEEF9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: '200'
    }
}}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title:'TALK WITH LOVE',
    headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor="#FDEEF9" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }} />
</HomeStack.Navigator>
);