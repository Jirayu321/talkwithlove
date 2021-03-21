import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { 
  View, 
} from 'react-native'; 
 
import Home from './HomeScreen'; 
import ListChatScreen from './ListChatScreen';
import NotificationsScreen from './NotificationsScreen';
import Icon from 'react-native-vector-icons/FontAwesome' 

const Tab = createMaterialBottomTabNavigator();



export default function MyTabs() {
  return (
    <View style={{ flex: 1}}>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#ffff',
        inactiveTintColor: '#ffff',
        labelStyle: {  color:'#ffff'},
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