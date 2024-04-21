import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  TouchableOpacity
} from "react-native";
import React, { useContext, useEffect, useInsertionEffect, useState } from "react";
// const logoImg = require("../assets/logo.png");
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { user } from "@expo/vector-icons";
import * as Location from "expo-location";
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ( {data} ) => {
  const {userInfo,isLoading,logout} = useContext(AuthContext)

  // const handleLogout = () => {
  //   AsyncStorage.clear();
  //   navigation.navigate('Login');
  // };
 
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const url =  "https://api.restful-api.dev/objects";

  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  useEffect(() => {
    checkLocationEnabled();
    getCureentLocation();
    // fetch(url)
    // .then((resp) => resp.json())
    // .then((json) => setData(json))
    // .catch((error) => console.error(error))
    // .finally(() => setLoading(false));
  }, []);
  

  const checkLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "please enable the location services",

        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServiceEnabled(enabled);
    }
  };

  const getCureentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission is denied",
        "allow the app to use location services",

        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords)

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });

      // console.log(response)
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode} `;
        setdisplayCurrentAddress(address);
      }
    }
  };
  return (
    <>
      <ScrollView
        style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#F0F0F0" }}
      >
        {/* location and profile  */}
        <View 
         
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Entypo name="location" size={30} color="#E32636" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>
          <Pressable style={{ marginLeft: "auto", marginRight: 15 }}>
            <Image
              style={{ width: 35, height: 35, borderRadius: 20 }}
              source={{
                uri: "https://lh3.googleusercontent.com/ogw/AGvuzYb3BqoF3VVOZ4TaqMQzyoAIzj_d1KfkDiNfXMmbRg=s32-c-mo",
              }}
            />
          </Pressable>
        </View>
        <Spinner visible={isLoading} />
        <Spinner visible={isLoading} />
        <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text>Welcome {userInfo.user.name}</Text>
      <TouchableOpacity style={styles.button} onPress={ logout}>
        <Text style={styles.textButton}>Logout</Text>
      </TouchableOpacity>
    </View>

        {/* Search Bar  */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
          }}
        >
          <TextInput placeholder="Serach "></TextInput>
          <Feather name="search" size={18} color="#fd5c63" />
        </View>
        {/* <View style={{ marginTop: "100" }}>
          <Text>Login</Text>
        </View> */}
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={{ fontSize:50 ,}}>Pulzer</Text>
          <Feather name="user" size={28} color="#fd5c63" />

        </View>
        <View>
          <Text style={{fontSize:28,margin:15}}>Routes</Text>
          </View>
          <View style={{borderColor:"gray",borderWidth:4,  borderRadius:18}}>
          <TextInput  style = {{ fontSize:28, margin:15,color:"#98ABEE"}} placeholder="Search "></TextInput>
          {/* <Feather name="search" size={28} color="blue" /> */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:15 }}>
          <Text style={{fontSize:23}}>
          Route
          </Text>
          <Text style={{fontSize:23}}>
            Outlets
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:15,borderRadius:20 ,width:450,height:70,borderWidth:2,backgroundColor:"#98ABEE",
          
      }}>
      
       
        
        <Text style={{fontSize:20}}>
          Route X
          </Text>
          <Text style={{fontSize:20}}>
            Outlet
          </Text>

        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:15 ,borderRadius:25,  shadowColor:"98ABEE"}}>
        <Text style={{fontSize:20}}>
          Route X
          </Text>
          <Text style={{fontSize:20}}>
            Outlet
          </Text>

        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:15 ,borderRadius:25,  shadowColor:"98ABEE"}}>
        <Text style={{fontSize:20}}>
          Route X
          </Text>
          <Text style={{fontSize:20}}>
            999
          </Text>

        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:15 ,borderRadius:25,  shadowColor:"98ABEE"}}>
        <Text style={{fontSize:20}}>
          Route X
          </Text>
          <Text style={{fontSize:20}}>
            999
          </Text>

        </View>

        <View>
          <Text> {post.id} </Text>
          <Text> {post.name} </Text>
          <Text> {post.data} </Text>
        </View>
         
        

      
        <View style={{ marginTop:20}}>
        <Pressable onPress={() => navigation.navigate("OrderOutlet")}> 
         <Text>Back to Order Outlet </Text>
         </Pressable>
         </View>
      
      </ScrollView>
    </>
  );
  
};

export default HomeScreen;

const styles = StyleSheet.create({});
