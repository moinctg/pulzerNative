import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  KeyboardAvoiding,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
const logoImg = require("../assets/logo.png");
// import { RegisterApi } from "../api/RegisterApi";
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
const SignupScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const {isLoading,register} = useContext(AuthContext)

  // const handleLogin = () => {
   
  //     RegisterApi({
  //       username:"username",
  //       password:"password",
  //       first:"first",
  //       last:"last"
  //     })
  //       .then(result => {
  //         console.log(result)
  //         if (result.status == 200) {
  //          alert("Successfull Register")
  //           navigation.replace('login');
  //         }
  //       })
  //       .catch(error=>console.log(error))
        
        
      
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
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholderTextColor="black"
              style={{
                fontSize: username ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                textAlign: "center",
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          /> */}
            <TextInput
              placeholder="Password "
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                textAlign: "center",
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          /> */}
            <TextInput
              placeholder="First Name"
              value={first}
              onChangeText={(text) => setFirst(text)}
              placeholderTextColor="black"
              style={{
                fontSize: first ? 18 : 18,
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
              placeholder=" Last Name"
              value={last}
              onChangeText={(text) => setLast(text)}
              placeholderTextColor="black"
              style={{
                fontSize: last ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                textAlign: "center",
                marginVertical: 10,
              }}
            />
          </View>

          <Pressable
            onPress={()=> {register(username,password,first_name,last_name)}}
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
              Sign Up
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Login")}
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
              Log in ?
            </Text>
          </Pressable>
          {/* <Pressable onPress={() => navigation.navigate("Home")}> 
         <Text>Back to Home </Text>
      
           </Pressable> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;
