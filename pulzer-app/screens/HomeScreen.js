import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, {
  useContext,
  useEffect,
  useInsertionEffect,
  useState,
} from "react";
// const logoImg = require("../assets/logo.png");
const userImg = require("../assets/user.png");
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { user } from "@expo/vector-icons";
import * as Location from "expo-location";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);

  // const handleLogout = () => {
  //   AsyncStorage.clear();
  //   navigation.navigate('Login');
  // };
  const data = [
    { id: 1, route: "route x", outlet: 999 },
    { id: 2, route: "route x", outlet: 998 },
    { id: 3, route: "route x", outlet: 997 },
    { id: 4, route: "route x", outlet: 996 },
    { id: 5, route: "route x", outlet: 996 },
    { id: 6, route: "route x", outlet: 995 },
    { id: 7, route: "route x", outlet: 993 },
    { id: 8, route: "route x", outlet: 999 },
    { id: 9, route: "route x", outlet: 999 },
  ];

  const renderItem = ({ item }) => (
    <View style={{ flex:1,flexDirection:"row",alignContent:"space-between",borderBottomWidth:1,backgroundColor:"#ccccff",margin:10,paddingVertical:10,borderRadius:7}}>
      <Text style={styles.cell}> {item.route}</Text>
      <Text style={styles.cell}> {item.outlet}</Text>
      {/* <Text style={styles.cell}> {item.username }</Text> */}
    </View>
  );

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const url = "https://api.restful-api.dev/objects";

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
          {/* <Text style={styles.text}>Home</Text> */}
          {/* <Text>Welcome {userInfo.user.name}</Text> */}
          {/* <TouchableOpacity style={styles.button} onPress={ logout}>
        <Text style={styles.textButton}>Logout</Text>
      </TouchableOpacity> */}
        </View>

        
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "#201658" }}>
            PULZER
          </Text>
          <Image source={userImg} />
        </View>
        <View>
          <Text style={{ fontSize: 28, margin: 15 }}>Routes</Text>
        </View>
        <View style={{ backgroundColor: "#e6e6ff", borderRadius: 25 , flexDirection:"row",
             alignContent:"center"}}>
          <TextInput
            style={{
              color: 'black' ,
              margin: 15,
              borderBottomWidth:2,
              fontSize: 25,
              textAlign:"center",
     
              paddingVertical: 12,
            }}
            placeholder="Search "
          ></TextInput>
          {/* <Feather name="search" size={28} color="blue" /> */}
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 23 }}>Route</Text>
          <Text style={{ fontSize: 23 }}>Outlets</Text>
        </View> */}
        <View style={styles.container}>
          <View>
            {/* <Text style={styles.headerTopBarText}> Routes  </Text> */}
          </View>

          <View style={styles.header}>
            <Text style={styles.heading}>Route </Text>
            <Text style={styles.heading}>Outlets</Text>
            {/* <Text style={styles.heading}></Text> */}
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => {}}
            renderItem={renderItem}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("RoutexOutlet")}>
            <Text>Back to Order Outlet </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },

  headerTopBar: {
    // backgroundColor: "#ffff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 2,
    marginBottom: 15,
  },
  headerTopBarText: {
    color: "#fff",
    fontFamily: "poppinsMedium",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight:50,
    paddingVertical:20,
    marginBottom:20,
    margin:6
  },

  heading: {
    // fontFamily:'poppinsMedium',
    fontSize:40,
    fontWeight:"bold",
    color:"#201658",
    // flexDirection: "row",
    // justifyContent: "space-between",

  },
  row: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    elevation: 1,
    marign:15,
    height:'100%',
    width:'100%',
    borderRadius: 5,
    // borderColor: "#ffff",
    paddingRight: 15,
    // backgroundColor:" #ccccff",
    padding:15,
  },

  cell: {
    fontSize: 20,
    // fontFamily:'poppinRegular',
    textAlign:"justify",
    flex: 1,
  },
});
