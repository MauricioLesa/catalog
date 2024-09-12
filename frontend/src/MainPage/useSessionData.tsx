import { useState, useEffect } from "react";
import { isLoggedAPI } from "../APIs/AuthAPI";
import { Await } from "react-router";

interface Authority{
    authority:string
}

export interface Data {
    email: string,
    role: Array<Authority>,
}

export const emptyData = {
    email: "",
    role: []
}

export interface UserDataSet {
    data:Data,
    setUser: (()=>{})
}


export const useSessionData = ():UserDataSet =>{

    const [data, setData] = useState<Data>(emptyData);
    
    const loadUser = async () => {
        const res = await isLoggedAPI();
        if(res) setData(res);
    }
    
    useEffect(() => {
        loadUser();
    },[])
    

    return {data:data, setUser:loadUser};

}

