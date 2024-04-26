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
  FlatList,
  TouchableOpacity,
} from "react-native";
const userImg = require("../assets/user.png");
const leftImg = require("../assets/left.png");
const rightImg = require("../assets/right.png");
const outbox = require("../assets/outbox.png");
const OrderOutlet = () => {
  const navigation = useNavigation();

  const data = [
    { id: 1, Product: "M ", Quntity: 999, price: 900 },
    { id: 2, Product: "M ", Quntity: 999, price: 900 },
    { id: 3, Product: " M ", Quntity: 999, price: 900 },
    { id: 4, Product: " M ", Quntity: 999, price: 900 },
    { id: 6, Product: "  M ", Quntity: 999, price: 900 },
    { id: 8, Product: "  M ", Quntity: 999, price: 900 },
    { id: 9, Product: "  M ", Quntity: 999, price: 900 },
    { id: 10, Product: "M ", Quntity: 999, price: 900 },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        borderBottomWidth: 1,
        backgroundColor: "#ccccff",
        margin: 10,
        paddingVertical: 10,
        borderRadius: 7,
      }}
    >
      <Image source={outbox} style={{ padding: 7 }} />
      <Text style={styles.cell}>
        {" "}
        Product: {item.Product} {"\n"} Price:৳ {item.price}
      </Text>
      <Text style={styles.cell}> </Text>

      <Image source={leftImg} />
      <Text style={styles.cell}> {item.Quntity}</Text>
      <Image source={rightImg} />
    </View>
  );
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 50, color: "#201658", fontWeight: "bold" }}>
          PULZER
        </Text>
        <Image source={userImg} />
      </View>
      <View style={{ marginTop: 15, flex: 1, flexDirection: "row" }}>
        <Image source={leftImg} />
        <Text style={{ fontSize: 30, color: "#201658", fontWeight: "bold" }}>
          Order for Outlet KZ{" "}
        </Text>
      </View>
      <View
        style={{
          borderColor: "gray",
          
        }}
      >
        <TextInput
          style={{
            textAlign: "center",
            borderRadius: 18,
            borderWidth: 1,
            marginVertical:18,
            padding:5,
            backgroundColor: "#e6e6ff",
            width:"100%"
  
          }}
          placeholder="Search "
        ></TextInput>
       
      </View>
      {/* <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:15,backgroundColor:"gray" }}>
          
          <Text style={{fontSize:23,color:"#201658"}}>
          Product
          </Text>
          <Text style={{fontSize:23,color:"#201658"}}>
           Quntity
          </Text>
        </View> */}

      <View style={styles.header}>
        <Text style={styles.heading}>Product </Text>
        <Text style={styles.heading}>Quntity</Text>
        {/* <Text style={styles.heading}></Text> */}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => {}}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#201658",
          fontSize: 25,
          borderRadius: 25,
          paddingVertical: 18,
          margingLeft: 30,
          width: "90%",
          marginTop: 25,
        }}
        // onPress={() => setScanned(false)}
        // disabled={scanned}
      >
        <Text style={styles.buttonText}> Create Order </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Pressable onPress={() => navigation.navigate("RouteOutlet")}>
          <Text>Back to Route Outlet</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default OrderOutlet;

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
    paddingRight: 50,
    paddingVertical: 20,
    marginBottom: 20,
    margin: 6,
  },

  heading: {
    // fontFamily:'poppinsMedium',
    fontSize: 40,
    fontWeight: "bold",
    color: "#201658",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    elevation: 1,
    marign: 15,
    height: "100%",
    width: "100%",
    borderRadius: 5,
    // borderColor: "#ffff",
    paddingRight: 15,
    // backgroundColor:" #ccccff",
    padding: 15,
  },

  cell: {
    fontSize: 13,
    // fontFamily:'poppinRegular',
    textAlign: "left",
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
