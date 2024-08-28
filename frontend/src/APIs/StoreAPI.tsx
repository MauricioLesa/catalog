import { HEADERS } from "./Config";

interface registerStoreData {
    email:string,
    firstName:string,
    lastName:string,
    storeName:string,
    storeDescription:string,
    storeDirection:string,
    password:string
}


export const registerStoreAPI = async (data:registerStoreData) => {
    try{
        const response:Response = await fetch('http://localhost:8080/auth/register-store', {
            method: "POST",
            mode: 'cors',
            credentials:"include",
            body: JSON.stringify(data),
            headers: HEADERS
        });
        const content =  await response.json();
        return content;
    }
    catch (error){
        if (error instanceof Error) console.log(error.message);
        
    }
}