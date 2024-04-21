
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, ActivityIndicator,Text, View} from 'react-native';

const splash = ({navigation}) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //       handleGetToken();
    //     }, 2000);
    //   });

    // const handleGetToken = async () => {
    //     const dataToken = await AsyncStorage.getItem('AccessToken');
    //     if (!dataToken) {
    //       navigation.replace('Login');
    //     } else {
    //       navigation.replace('Home');
    //     }
  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#06bcee'}}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
);
}


export default splash
