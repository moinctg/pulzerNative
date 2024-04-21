
import ApiManager from "./ApiManager";

export const UserApi = async data => {
    try{
        const result = await ApiManager("/auth/login",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",

            },
            data:data,
        });
        return result;
        console.log(result)

    }
    catch(error){
        return error.response.data;

    }
};