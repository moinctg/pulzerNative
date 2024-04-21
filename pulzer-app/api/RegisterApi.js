import ApiManager from "./ApiManager";

export const RegisterApi = async data => {
    try{ 
        const result = await ApiManager("/auth/register",{

            method:"POST",
            headers:{
                "Content-Type": "application/json",

            },
           data:data
        });
        
        return result ;


    }
    catch(error){
        return error.response.data;
    }
}