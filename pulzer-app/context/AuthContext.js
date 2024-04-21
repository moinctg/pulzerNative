import  React , {createContext, useEffect, useState} from  'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
import axios from 'axios';
import Base_URL  from '../config'


export const AuthProvider = ({ children }) => {

  // const Base_URL =  'http://127.0.0.1:8000/api';


  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
    
    const register = (username, password,first_name,last_name) => {
        setIsLoading(true);
    
        axios
          .post(`${BASE_URL}/auth/register`, {
            username,
            password,
            first_name,
            last_name
            
          })
          .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
          })
          .catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);
          });
      };


     
      // const login = (username, password) => {
     
      //   try {
      //     setIsLoading(true);
      //     fetch(`${BASE_URL}}/auth/login`, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username : username,
      //     password: password,
      //     // title: "Post title",
      //     // body: "Post body",
      //   }),
      // })
      // .then(res => {
      //       let userInfo = res.data;
      //       console.log(userInfo);
      //       setUserInfo(userInfo);
      //       AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      //       setIsLoading(false);
      //   })
      //   .done();
      //   }
      //   catch(error){
      //     console.log(error)
      //     setIsLoading(false);

      //   }
       
        // .catch(e => {
        //       console.log(`login error ${e}`);
        //       setIsLoading(false);
        //     });
          

        const login = (username, password) => {
     
        axios
          .post(`${Base_URL}/auth/login`, {
            username,
            password,
          })
          .then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
          })
          .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
          });

        }
      









      // fetch("https://jsonplaceholder.typicode.com/posts", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     userId: 55,
      //     id: 101,
      //     title: "Post title",
      //     body: "Post body",
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((responseData) => {
      //     console.log(JSON.stringify(responseData));
      //   })
      //   .done();







      
      const logout = () => {
        setIsLoading(true);
    
        axios
          .post(
            `${BASE_URL}/auth/logout`,
            {},
            {
              headers: {Authorization: `Bearer ${userInfo.access_token}`},
            },
          )
          .then(res => {
            console.log(res.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
          })
          .catch(e => {
            console.log(`logout error ${e}`);
            setIsLoading(false);
          });
      };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
   
    return(
    <AuthContext.Provider value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}>
    {children}
    </AuthContext.Provider>)
     ;
   

}