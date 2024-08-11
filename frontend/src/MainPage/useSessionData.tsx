import { useState, useEffect } from "react";
import { isLoggedAPI } from "../APIs/AuthAPI";

interface Authority{
    authority:string
}

export interface Data {
    email: string,
    role: Array<Authority>,
}

export interface UserDataSet {
    data:Data,
    setUser: (()=>{})
}


export const useSessionData = ():UserDataSet =>{

    const [data, setData] = useState<Data>({email:"",role:[]});
    
    const loadUser = async () => {
        const res = await isLoggedAPI();
        if(res) setData(res);
    }
    
    useEffect(() => {
        loadUser();
    },[])
    

    return {data:data, setUser:loadUser};

}

