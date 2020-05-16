import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import  MainScreen  from "./MainScreen";

import AccountMoreDetails from './AccountMoreDetails';
import { Button } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          options={{headerShown:false}}
          name="Home"
          component={MainScreen}
        />
        <Stack.Screen
          name="AccountMoreDetails"
          component={AccountMoreDetails}

         
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


