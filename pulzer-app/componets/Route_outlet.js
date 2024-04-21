import React, { useState } from 'react'
import HomeScreen from '../screens/HomeScreen';

export const Route_outlet = () => {
    const [data, setData] = useState([]);
    const [loaddin,setLoading] = useState(true);
    const url =  "https://api.restful-api.dev/objects";
    useEffect(() => {
        
        fetch(url)
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }, []);
    

  return (
     <View>
    {loaddin ? (
    <Text>Loadding..</Text>
   ): (
    data.map(post => <HomeScreen
      key={post.id}
      post={post}
    
    >

    </HomeScreen>
    
    )
  
    
    
   )}


    </View>
  )
}
