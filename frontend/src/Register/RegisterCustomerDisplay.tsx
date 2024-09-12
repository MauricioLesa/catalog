import { Customer } from "./RegisterCustomer";

interface RegisterDisplayProps {
    customer:Customer,
    setCustomer:React.Dispatch<React.SetStateAction<Customer>>,
    save:(e:React.MouseEvent) => void
}


const RegisterDisplay = (props:RegisterDisplayProps) => {

    return(
        <div className="flex-grow-1 d-flex text-center">
        <form className="register_form">  
                <h2>Registro de tienda</h2>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Email</span >
                    <input className='form-control' type="email" onChange={(e) => props.setCustomer({...props.customer,email:e.target.value})}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Nombre</span >
                    <input className='form-control' type="text" onChange={(e) => props.setCustomer({...props.customer,firstName:e.target.value})}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Apellido</span >
                    <input className='form-control' type="text" onChange={(e) => props.setCustomer({...props.customer,lastName:e.target.value})}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Contraseña</span >
                    <input className='form-control' type="password" onChange={(e) => props.setCustomer({...props.customer,password:e.target.value})}/>
                </div>
                <p className='login-msg'>{}</p>
                <button className="btn btn-secondary border"  onClick={props.save}>Guardar</button>
            </form>
        </div>
    )
}

export default RegisterDisplay;