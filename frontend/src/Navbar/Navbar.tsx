import { useContext } from "react";
import NavbarDisplay from "./NavbarDisplay"
import NavbarDisplayCustomer from "./NavbarDisplayCustomer"
import { userContext } from "../MainPage/MainPage";
import { UserDataSet } from "../MainPage/useSessionData";



const Navbar  = () => {
    const currentUser = useContext<UserDataSet|null>(userContext);
    const role:String = currentUser?.data.role[0]? currentUser.data.role[0].authority:"";
    console.log(currentUser);
    switch (role) {
        case "CUSTOMER":
            return( 
                <NavbarDisplayCustomer/>
            );

        default:
            return(
                <NavbarDisplay/>
            );
    }
    
}

export default Navbar