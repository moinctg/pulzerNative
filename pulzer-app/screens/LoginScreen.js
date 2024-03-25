import { KeyboardAvoidingView,StyleSheet,SafeAreaView,Text,TextInput,View,Image,ActivityIndicator } from "react-native";
import React , {useEffect,useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Ionicons } from "@expo/vector-icons";
const logoImg = require("../assets/logo.png");
import { useNavigation } from '@react-navigation/native';
// import logo from '../assets/logo.png';
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Pressable } from 'react-native';
// import { auth } from '../firebase';



const LoginScreen = () => {
    const navigation = useNavigation();
    const  [username,setUsername] =  useState("");
    const  [orgination,setOranization] = useState("");
    const [password,setPassword] = useState("");
    // const [loading,SetLoading] = useState(false);

   


  return (
    
    <SafeAreaView
    style={{
      flex: 1,
      // backgroundColor: "white",
      alignItems: "center",
      padding: 200,
    }}
  >
    
      <View style={{alignItems:"center",justifyContent:"center",flexDirection:"row",flex:1,marginTop:10}}>
        {/* <Text style={{marginRight:10}}>Loading</Text> */}
        {/* <ActivityIndicator size="large" color={"red"}/> */}
      </View>
     
      <KeyboardAvoidingView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
         marginRight:10,
        }}
      >
      <View>
      <Image
          
            source={logoImg } 
          />

      </View>
        {/* <Text style={{ fontSize: 30, color: "#662d91", fontWeight: "bold",textAlign:"center" }}>
          Sign In
        </Text> */}
{/* 
        <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
          Sign In to your account
        </Text> */}
      </View>

      <View style={{}}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          /> */}
          <TextInput
            placeholder="Organization Code"
            value={orgination}
            onChangeText={(text) => setOranization(text)}
            placeholderTextColor="black"
            style={{
              fontSize: orgination ? 18 : 18,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              marginLeft: 13,
              textAlign:'center',
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
            placeholder="username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholderTextColor="black"
            style={{
              fontSize: username ? 18 : 18,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              marginLeft: 13,
              width: 300,
              textAlign:'center',
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
              textAlign:'center',
              width: 300,
              marginVertical: 20,
            }}
          />
        </View>

        <Pressable
        // onPress=''
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
     
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Login
          </Text>
          
        </Pressable>
 

        <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
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
         <Pressable onPress={() => navigation.navigate("Home")}> 
         <Text>Back to Home </Text>
      
           </Pressable>

      </View>
    </KeyboardAvoidingView>
    
  </SafeAreaView>
    
  )
}

export default LoginScreen

