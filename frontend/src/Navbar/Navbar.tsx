import { useContext } from "react";
import NavbarDisplay from "./NavbarDisplay"
import NavbarDisplayCustomer from "./NavbarDisplayCustomer"
import { userContext } from "../MainPage/MainPage";
import { UserDataSet } from "../MainPage/useSessionData";
import NavbarDisplayVendor from "./NavbarDisplayVendor";



const Navbar  = () => {
    const currentUser = useContext<UserDataSet|null>(userContext);
    const role:String = currentUser?.data.role[0]? currentUser.data.role[0].authority:"";
    switch (role) {
        case "CUSTOMER":
            return( 
                <NavbarDisplayCustomer/>
            );

        case "VENDOR":
            return( 
                <NavbarDisplayVendor/>
            );

        default:
            return(
                <NavbarDisplay/>
            );
    }
    
}

export default Navbar