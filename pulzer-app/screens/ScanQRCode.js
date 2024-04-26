
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
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
const userImg = require("../assets/user.png");
const leftImg = require("../assets/left.png");
import React, { useState, useEffect } from 'react';


const ScanQRCode = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    fetch(`https://example.com/api/v1/qr-code?type=${type}&data=${data}`)
      .then(response => response.json())
      .then(data => {
        console.log(data,type)
        setScanned (true)
       
      });
  };
  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Text style={{ fontSize:50,color:"#201658", fontWeight:"bold"}}>PULZER</Text>
        <Image source={userImg}  />
        </View>
        <View style={{ marginTop:15, flex:1,flexDirection:"row"}}>
        <Image source={leftImg}  />
        <Text style={{fontSize:30,color:"#201658" ,fontWeight:"bold"}}>
        Scan Outlet QR Code  </Text>
        
      </View>
        <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome to the Pulzer App!</Text>
      <Text style={styles.paragraph}>Scan Outlet QR Code</Text> */}
      {renderCamera()}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setScanned(false)}
        disabled={scanned}
      >
        <Text style={styles.buttonText}>Scan Outlet</Text>
      </TouchableOpacity>
    </View>
      
      <View style={{ marginTop:20}}>
        <Pressable onPress={() => navigation.navigate("scanReport")}> 
         <Text>Back to  Scan Report </Text>
         </Pressable>
         </View>
         </ScrollView>
  )
}

export default ScanQRCode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#201658',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});