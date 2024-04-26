import React from 'react'
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
import { useNavigation } from "@react-navigation/native";
const userImg = require("../assets/user.png");
const leftImg = require("../assets/left.png");
const orderImg = require("../assets/order.png");
const boxRight = require("../assets/boxRight.png");

const RoutexOutlet = () => {
  const navigation = useNavigation();
  const data = [
    { id: 1, route: "route x"},
    { id: 2, route: "route x"},
    { id: 3, route: "route x"  },
    { id: 4, route: "route x"},
    { id: 5, route: "route x"},
    { id: 6, route: "route x" },
    { id: 7, route: "route x"},
    { id: 8, route: "route x" },
    { id: 9, route: "route x"},
  ];

  const renderItem = ({ item }) => (
    <View style={{ flexDirection:"row",alignContent:"space-between",borderBottomWidth:1,backgroundColor:"#ccccff",margin:10,paddingVertical:10,borderRadius:7}}>
  
      <Text style={styles.cell}> {item.route}</Text>
      <Pressable>
      <Image source={boxRight} style={styles.cell}  />
      {/* <Text style={styles.cell}> {item.username }</Text> */}
      </Pressable>
    </View>
  );
  return (
    <ScrollView>
    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Text style={{ fontSize:50,color:"#201658", fontWeight:"bold"}}>PULZER</Text>
        <Image source={userImg}  />

      </View>
      <View>
     
        </View>
        <View style={{ marginTop:15, flex:1,flexDirection:"row"}}>
        <Image source={leftImg}  />
        <Text style={{fontSize:30,color:"#201658" ,fontWeight:"bold"}}>
        Route X Outlets  </Text>
        
      </View>
        <View style={{borderColor:"gray", flex:1,flexDirection:"row",justifyContent:"space-between"}}>
        <TextInput  style = {{ textAlign:'center',borderRadius:25, borderWidth:1 ,backgroundColor:"#e6e6ff", width:"80%"}} placeholder="Search "></TextInput>
        {/* <Feather name="search" size={28} color="blue" /> */}
        <Image source={orderImg}  />
      </View>
      <View style={styles.container}>
          <View>
            {/* <Text style={styles.headerTopBarText}> Routes  </Text> */}
          </View>

          <View style={styles.header}>
            <Text style={styles.heading}>Outlet </Text>
            <Text style={styles.heading}>Order</Text>
            {/* <Text style={styles.heading}></Text> */}
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => {}}
            renderItem={renderItem}
          />
        </View>

        {/* <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("RoutexOutlet")}>
            <Text>Back to Order Outlet </Text>
          </Pressable>
        </View>
   */}
     
  
     
  
  <View style={{ marginTop:20}}>
      <Pressable onPress={() => navigation.navigate("ScanQRCode")}> 
       <Text>Back to  Scan QR Code </Text>
       </Pressable>
       </View>
       </ScrollView>
  )
}

export default RoutexOutlet

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

