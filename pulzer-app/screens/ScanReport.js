import React from 'react'
import { ScrollView ,Image,View,Text,StyleSheet,TouchableOpacity,Pressable,} from 'react-native'
import { useNavigation } from "@react-navigation/native";
const userImg = require("../assets/user.png");
const leftImg = require("../assets/left.png");
const ScanReport = () => {
const Navigation = useNavigation();
  return (
    <ScrollView>
   < View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Text style={{ fontSize:50,color:"#201658", fontWeight:"bold"}}>PULZER</Text>
        <Image source={userImg}  />
        </View>
        <View style={{ marginTop:15, flex:1,flexDirection:"row",}}>
        <Image source={leftImg}  />
        <Text style={{fontSize:30,color:"#201658" ,fontWeight:"bold"}}>
        Scan Outlet QR Code  </Text>
        
      </View>
        <View style={styles.container}>
      <Text style={styles.title}>Outlet KZ</Text>
      <Text style={styles.paragraph}>Owner name</Text>
      <Text style={styles.paragraph}>Owner phone</Text>
      </View>
      <View>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => setScanned(false)}
        // disabled={scanned}
      >
        <Text style={styles.buttonText}>Create Order </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9575DE',
        fontSize:25,
        borderRadius: 25,
        paddingVertical:18,
        margingLeft:30,
        width:"90%",
        marginTop: 25,}}
        // onPress={() => setScanned(false)}
        // disabled={scanned}
      >
        <Text style={styles.buttonText}>Add to Route  </Text>
      </TouchableOpacity>
    </View>
      
      <View style={{ marginTop:20}}>
        <Pressable onPress={() => Navigation.navigate("OrderOutlet")}> 
         <Text>Back to  Order Outlet </Text>
         </Pressable>
         </View>
         </ScrollView>
  )
}

export default ScanReport
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadious:10,
      width:"70%",
      backgroundColor:"#F0F0F0",
      shadowOpacity:2,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 16,
      marginBottom: 40,
    },
    cameraContainer: {
      width: '80%',
      aspectRatio: 1,
      overflow: 'hidden',
      borderRadius: 10,
      marginBottom: 40,
    },
    camera: {
      flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent:"center",
        // justifyContent: 'center',
        width:"90%",
        backgroundColor: '#201658',
        fontSize:25,
        margingLeft:30,
        borderRadius: 22,
        paddingVertical:18,
        marginTop: 25,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });