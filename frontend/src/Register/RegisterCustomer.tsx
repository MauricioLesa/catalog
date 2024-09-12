import { useContext, useState } from "react"
import RegisterDisplay from "./RegisterCustomerDisplay"
import { registerCustomerAPI } from "../APIs/AuthAPI"
import { useNavigate } from "react-router-dom"
import { UserDataSet } from "../MainPage/useSessionData"
import { userContext } from "../MainPage/MainPage"


export interface Customer {
    id?: number,
    email: string
    password?: string,
    firstName?: string,
    lastName?: string,
}

export const emptyCustomerRegister:Customer = {
    email:"",
    password: "",
    firstName:"",
    lastName:"",
}

const RegisterCustomer = () => {

    const [customer, setCustomer] = useState<Customer>(emptyCustomerRegister)
    const navigate = useNavigate();
    const currentUser = useContext<UserDataSet|null>(userContext);

    if(currentUser?.data.email == ""){
        navigate("/");
    }

    const save = async (e:React.MouseEvent) => {
        e.preventDefault();
        await registerCustomerAPI(customer);
        navigate("/");
        currentUser?.setUser();
    }

    return(
        <RegisterDisplay save={save} customer={customer} setCustomer={setCustomer}/>
    )
}

export default RegisterCustomer;