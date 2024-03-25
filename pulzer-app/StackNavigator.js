import React from 'react'
import { StyleSheet,Text,View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import OrderOutlet from './screens/OrderOutlet'
import RouteOutlet from './screens/RouteOutlet'
import ScanQRCode from './screens/ScanQRCode'
import ForgotPassword from './screens/ForgotPassword'

export default function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}  options={{headShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen}  options={{headShown:false}}/>
      <Stack.Screen name="OrderOutlet" component={OrderOutlet}  options={{headShown:false}}/>
      <Stack.Screen name="RouteOutlet" component={RouteOutlet}  options={{headShown:false}}/>
      <Stack.Screen name="ScanQRCode" component={ScanQRCode}  options={{headShown:false}}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{headShown:false}}/>
      </Stack.Navigator>
      </NavigationContainer>
    
  )
}
