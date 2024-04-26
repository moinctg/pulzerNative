import React, { useEffect, useState } from 'react'
import { View ,Text} from 'react-native';

const Test = () => {
    const [data,setData] = useState([])
    useEffect( () => {
      dataFetch();


    }
        ,[])
    const dataFetch = () => {
  fetch('http://localhost:8000/')
  .then((response) => response.json())
  .then((json) => console.log(json));

    }
  return (
    <View>
      <Text> this is text </Text>
       <Text> this is text </Text>
    
    </View>
  )
}

export default Test
