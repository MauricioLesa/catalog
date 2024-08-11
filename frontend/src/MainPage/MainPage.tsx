import { BrowserRouter} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MainRoutes from '../Router/MainRoutes'
import React from "react";
import { UserDataSet, useSessionData } from "./useSessionData";




export const userContext:React.Context<UserDataSet|null> = React.createContext<UserDataSet|null>(null)


const MainPage = () => {    
    
    const data = useSessionData();



    return(
        <React.StrictMode> 
            <BrowserRouter>
            <userContext.Provider value={data}>
                <Navbar />
                <MainRoutes/>
            </userContext.Provider>
            </BrowserRouter>
        </React.StrictMode> 
    )
} 

export default MainPage;