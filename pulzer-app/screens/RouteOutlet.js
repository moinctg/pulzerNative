import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
const userImg = require("../assets/user.png");
const leftImg = require("../assets/left.png");

const RouteOutlet = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
     <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Text style={{ fontSize:50,color:"#201658", fontWeight:"bold"}}>PULZER</Text>
        <Image source={userImg}  />
        </View>
        <View style={{ marginTop:15, flex:1,flexDirection:"row"}}>
        <Image source={leftImg}  />
        <Text style={{fontSize:30,color:"#201658" ,fontWeight:"bold"}}>
        Order for Outlet KZ </Text>
        </View>
      <View
        style={{
          borderRadius: 25,
          // backgroundColor:"F6F5F2",
          shadowRadius: 15,
          marginTop:70,
        }}
      >
        <Text style={{fontSize:17}}>Order Successfully placeholder!</Text>
        <Text style={{fontSize:17}}>Total Amount: 9,000 </Text>
    
   
      
      </View>
      <View style={{ marginTop: 20 }}>

      <TouchableOpacity
        style={{alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#201658',
        colorl:"white",
        fontSize:25,
        borderRadius: 25,
        paddingVertical:18,
        margingLeft:30,
        width:"90%",
        marginTop: 25,}}
        // onPress={() => setScanned(false)}
        // disabled={scanned}
      >
         <Text style={{ color:"white", textAlign:"center", fontSize:25}}>Ok</Text>
      </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text>Back to Home </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default RouteOutlet;
