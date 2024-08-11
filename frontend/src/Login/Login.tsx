import LoginDisplay from "./LoginDisplay"
import {loginAPI} from "../APIs/AuthAPI"
import {useContext, useState} from "react"
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


    const onClickLogin = async (e:React.MouseEvent) => {

        e.preventDefault();


        let status = await loginAPI(email, password);
        switch(status) {
            default:
                break;
            case 401:
                setMsg("usuario o contraseña equivocada");
                break;
            case 403:
                setMsg("usuario o contraseña equivocada");
                break;
            case 200:
                setUser();
                navigate("/");
                break;
        }
    }

    return(
        <LoginDisplay msg={msg}  setPassword={setPassword} setEmail={setEmail}  onClickLogin={onClickLogin}/>
    )
}

export default Login;