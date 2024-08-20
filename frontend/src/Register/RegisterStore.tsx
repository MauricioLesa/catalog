import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterStoreDisplay from "./RegisterStoreDisplay";
import { registerStoreAPI } from "../APIs/Store.API";

const RegisterStore = () => {

    const [email,setEmail] = useState<string>("");    
    const [firstName,setFirstName] = useState<string>("");
    const [lastName,setLastName] = useState<string>("");
    const [storeName,setStoreName] = useState<string>("");
    const [storeDescription,setStoreDescription] = useState<string>("");
    const [storeDirection,setStoreDirection] = useState<string>("");
    const [password,setPassword] = useState<string>("");    
    const [msg,setMsg] = useState<string>("");    
    const navigate = useNavigate();

    const onClickRegister = async (e: React.MouseEvent) => {
        e.preventDefault();
        if(!validateData()) return
        let response = await registerStoreAPI({
            email,
            firstName,
            lastName,
            storeName,
            storeDescription,
            storeDirection,
            password
        });

        switch (response.msg) {
            case "email_user":
                setMsg("email ya usado");
                break;
            case "name_used":
                setMsg("nombre de tienda ya usado");
                break;
            default:
                setMsg("emrpesa guardada");
                break;
        }

        
        //navigate("/");

    }

    function validateData(){
        
        return validateEmail() &&
        validateFirstName() &&
        validateLastName() &&
        validateStoreName() &&
        validateStoreDescription() &&
        validateStoreDirection() &&
        validatePassword()
    }


    function validateEmail(){
        if(email === ""){
            setMsg("el email no puede ser vacio");
            return false;
        }
        
        return true;
    }

    function validateFirstName(){
        if(firstName === ""){
            setMsg("el nombre no puede ser vacio");
            return false;
        }
        
        return true;
    }

    function validateLastName(){
        if(lastName === ""){
            setMsg("el apellido no puede ser vacio");
            return false;
        }
        
        return true;
    }

    function validateStoreName(){
        if(storeName === ""){
            setMsg("la tienda no puede ser vacia");
            return false;
        }
        
        return true;
    }

    function validateStoreDescription(){
        if(storeDescription === ""){
            setMsg("la descripcion no puede ser vacio");
            return false;
        }
        
        return true;
    }

    function validateStoreDirection(){
        if(storeDirection === ""){
            setMsg("la direccion no puede ser vacio");
            return false;
        }
        
        return true;
    }

    function validatePassword(){
        if(password === ""){
            setMsg("la contraseña no puede ser vacia");
            return false;
        }
        if(password.length < 5){
            setMsg("la contraseña debe ser mayor a 5 caracteres");
            return false;
        }
        
        return true;
    }
    


    return(
        <>
            <RegisterStoreDisplay 
                setEmail={setEmail}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setStoreName={setStoreName}
                setDescription={setStoreDescription}
                setDirecction={setStoreDirection}
                setPassword={setPassword}
                msg={msg}            
                onClickRegister={onClickRegister}
            />
        </>
    )
}

export default RegisterStore;