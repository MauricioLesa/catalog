import { Data, emptyData } from "../MainPage/useSessionData";
import { Customer } from "../Register/RegisterCustomer";
import { HEADERS } from "./Config";

export const isLoggedAPI = async ():Promise<Data> => {
    try{
        const response:Response = await fetch('http://localhost:8080/auth/sessionData', {
            method: "GET",
            mode: 'cors',
            credentials:"include",
            headers: HEADERS
        });
        const content =  await response.json();
        return content;
    }
    catch (error){
        if (error instanceof Error) console.log(error.message);
        return emptyData;
        
    }
}

export const loginAPI = async (email:String, password:String) => {
    try{
        const response = await fetch('http://localhost:8080/auth/login', {
            method: "POST",
            mode: 'cors',
            credentials:"include",
            body: JSON.stringify({
                email,
                password
            }),
            headers: HEADERS
        });
        const content =  await response.json();
        return content;
    }
    catch (error){
        console.log(error);
    }
}

export const registerCustomerAPI = async (data:Customer) => {
    try{
        const response:Response = await fetch('http://localhost:8080/auth/register', {
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