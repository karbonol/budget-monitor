import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import  MainScreen  from "./MainScreen";
import { StyleSheet, Text, View} from 'react-native';
import styles from './styles';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
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


