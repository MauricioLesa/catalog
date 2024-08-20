import LoginDisplay from "./LoginDisplay"
import {loginAPI} from "../APIs/AuthAPI"
import {useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from "../MainPage/MainPage";
import { UserDataSet } from "../MainPage/useSessionData";



const Login = () =>{

    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    const navigate = useNavigate();
    const currentUser = useContext<UserDataSet|null>(userContext);
    const setUser = currentUser? currentUser.setUser:(()=>{});

    

    useEffect(() =>{
        if(currentUser?.data.email != ""){
            navigate("/");
        }
    },[currentUser])

    const onClickLogin = async (e:React.MouseEvent) => {
        e.preventDefault();
        let status = await loginAPI(email, password);
        switch(status.msg) {
            default:
                break;
            case "user_password_not_found":
                setMsg("usuario o contraseña equivocada");
                break;
            case "success":
                setUser();
                navigate("/");
                break;
        }
    }

    const onClickRegister = (e:React.MouseEvent) => {
        e.preventDefault();
        navigate("/register");
    }

    const onClickRegisterStore = (e:React.MouseEvent) => {
        e.preventDefault();
        navigate("/register-store");
    }

    return(
        <LoginDisplay 
            msg={msg}  
            setPassword={setPassword} 
            setEmail={setEmail}  
            onClickLogin={onClickLogin} 
            onClickRegister={onClickRegister}
            onClickRegisterStore={onClickRegisterStore}
        />
    )
}

export default Login;