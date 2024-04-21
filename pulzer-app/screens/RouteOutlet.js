import React from 'react'
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
} from "react-native";
import { Feather } from "@expo/vector-icons";

const RouteOutlet = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
     <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={{ fontSize:50 ,}}>Pulzer</Text>
          <Feather name="user" size={28} color="#fd5c63" />

        </View>
        <View>
          <Text style={{fontSize:28,margin:15}}>Order For Outlet </Text>
          </View>
          <View style={{borderColor:"gray",borderWidth:4,  borderRadius:18}}>
          <TextInput  style = {{ fontSize:28, margin:15,color:"#98ABEE"}} placeholder="Search "></TextInput>
          {/* <Feather name="search" size={28} color="blue" /> */}
        </View>
        <View style={{ flexDirection: "row",  justifyContent: 'space-between', alignItems:"center", marginTop:15 ,width:400,height:70,shadowOpacity:"2",

 
      }}>
        <Text style={{fontSize:20}}>
           Product 
          </Text>
          <Text style={{fontSize:20}}>
            Quantity
          </Text>

        </View>
        <View style={{ marginTop:20}}>
        <Pressable onPress={() => navigation.navigate("Home")}> 
         <Text>Back to  Home </Text>
         </Pressable>
         </View>
    </ScrollView>
  )
}

export default RouteOutlet
