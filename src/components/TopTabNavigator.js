import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { 
  View, 
} from 'react-native';
import { Header} from 'react-native-elements'; 
 
import Home from './HomeScreen'; 
import ListChatScreen from './ListChatScreen';
import NotificationsScreen from './NotificationsScreen';
import Icon from 'react-native-vector-icons/FontAwesome' 

const Tab = createMaterialTopTabNavigator();



export default function MyTabs() {
  return (
    <View style={{ flex: 1}}>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#ffff',
        labelStyle: { fontSize: 12 },
        showIcon: true,  
        showLabel:false, 
        style: { backgroundColor: '#FDEEF9' }
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{ tabBarIcon:({tintColor, focused})=>(  
          <Icon  
              name={focused ? 'users' : 'users'}  
              color={tintColor}  
              size={20}  
          />  
      )}}
      />
      <Tab.Screen
        name="ListChat"
        component={ListChatScreen}
        options={{ tabBarIcon:({tintColor, focused})=>(  
          <Icon  
              name={focused ? 'comment' : 'comment'}  
              color={tintColor}  
              size={20}  
          />  
      )}}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarIcon:({tintColor, focused})=>(  
          <Icon  
              name={focused ? 'bell' : 'bell'}  
              color={tintColor}  
              size={25}  
          />  
      )}}
      />
    </Tab.Navigator>
    </View>
  );
}