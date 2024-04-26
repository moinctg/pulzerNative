import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";


import React, { useContext, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
const logoImg = require("../assets/logo.png");
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from "@react-navigation/native";
// import { UserApi } from "../api/UserApi";
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  // const  [orgination,setOranization] = useState("");
  const [password, setPassword] = useState("");
  const {isLoading, login} = useContext(AuthContext);


  // const handleUsername = text => {
  //   let re = /\S+@\S+\.\S+/;
  //   let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  //   setUsername(text);
  //   if (re.test(text) || regex.test(text)) {
  //     setCheckValiduser(false);
  //   } 
  //   else {
  //     setCheckValiduser(true);
  //   }
  // };

  // const checkPasswordValidity = value => {
  //   const isNonWhiteSpace = /^\S*$/;
  //   if (!isNonWhiteSpace.test(value)) {
  //     return 'Password must not contain Whitespaces.';
  //   }
    
    
  //   // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  //   // if (!isContainsUppercase.test(value)) {
  //   //   return 'Password must have at least one Uppercase Character.';
  //   // }

  //   // const isContainsLowercase = /^(?=.*[a-z]).*$/;
  //   // if (!isContainsLowercase.test(value)) {
  //   //   return 'Password must have at least one Lowercase Character.';
  //   // }

  //   const isContainsNumber = /^(?=.*[0-9]).*$/;
  //   if (!isContainsNumber.test(value)) {
  //     return 'Password must contain at least one Digit.';
  //   }

  //   const isValidLength = /^.{8,16}$/;
  //   if (!isValidLength.test(value)) {
  //     return 'Password must be 8-16 Characters Long.';
  //   }

  //   // const isContainsSymbol =
  //   //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  //   // if (!isContainsSymbol.test(value)) {
  //   //   return 'Password must contain at least one Special Symbol.';
  //   // }

  //   return null;
  // };



  //   const handleLogin = () => {
  //     const checkPassowrd = checkPasswordValidity(password);
  //     if (!checkPassowrd) {
  //       UserApi({
  //         username: username,
  //         password: password,
  //         // orgination:orgination
  //       })
  //         .then((result) => {
  //           console.log(result)
  //           if (result.status == 200) {
  //             AsyncStorage.setItem("AccessToken", result.data.token);
  //             navigation.replace("Home");
  //           }
  //         })

  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     } else {
  //       alert(checkPassowrd);
  //     }
   
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: "white",
        alignItems: "center",
        padding: 200,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flex: 1,
          marginTop: 10,
        }}
      >
        {/* <Text style={{marginRight:10}}>Loading</Text> */}
        {/* <ActivityIndicator size="large" color={"red"}/> */}
      </View>

      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
         
          <View>
            <Image source={logoImg} />
          </View>
          {/* <Text style={{ fontSize: 30, color: "#662d91", fontWeight: "bold",textAlign:"center" }}>
          Sign In
        </Text> */}
          {/* 
        <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
          Sign In to your account
        </Text> */}
        </View>
        <Spinner visible={isLoading} />
        <View style={{}}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          /> */}
            <TextInput
              placeholder="username"
              value={username}
              onChangeText={text => setUsername(text)}
              placeholderTextColor="black"
              style={{
                fontSize: username ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                textAlign: "center",
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Ionicons name="key-outline" size={24} color="black" /> */}
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                textAlign: "center",
                width: 300,
                marginVertical: 20,
              }}
            />
          </View>

          {/* <Pressable
            onPress={handleLogin}
            style={{
              width: 400,
              backgroundColor: "#201658",
              padding: 15,
              borderRadius: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center", color: "white" }}>
              Log In
            </Text>
          </Pressable> */}
          {/* {username == '' || password == '' || checkValidUser == true ?  ( */}
            {/* <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity> */}
      {/* ) : ( */}
        <TouchableOpacity style={styles.button} onPress={()=> {
          login(username,password)
        }}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
      {/* )} */}

          <Pressable
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "#201658",
                fontWeight: "500",
              }}
            >
              Forgot Password!
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "#201658",
                fontWeight: "500",
              }}
            >
              New User?
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text>Back to Home </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("data")}>
            <Text> data </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
            };
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                justifyContent: 'center',
                marginHorizontal: 20,
              },
              wrapperInput: {
                borderWidth: 0.5,
                borderRadius: 5,
                borderColor: 'grey',
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              },
              input: {
                padding: 10,
                width: '100%',
              },
              wrapperIcon: {
                position: 'absolute',
                right: 0,
                padding: 10,
              },
              icon: {
                width: 30,
                height: 24,
              },
              button: {
                // padding: 10,
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: '#201658',
                fontSize:25,
                borderRadius: 22,
                paddingVertical:18,
      
                marginTop: 25,
              },
              buttonDisable: {
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'grey',
                borderRadius: 5,
                marginTop: 25,
              },
              text: {
                color: 'white',
                fontWeight: '700',
              
              },
              textFailed: {
                alignSelf: 'flex-end',
                color: 'red',
              },
            });
 

export default LoginScreen;


