import "./RegisterStore.css"

interface RegisterStoreProps {
    onClickRegister: (e:React.MouseEvent) => void;
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setStoreName: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    setDirecction: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    msg:String;
}

const RegisterStoreDisplay = (props:RegisterStoreProps) => {

    return(
        <div className="flex-grow-1 d-flex text-center">
        <form className="register_form">  
                <h2>Registro de tienda</h2>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Nombre de tienda</span >
                    <input className='form-control' type="text" onChange={(e) => props.setStoreName(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Email</span >
                    <input className='form-control' type="email" onChange={(e) => props.setEmail(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Nombre</span >
                    <input className='form-control' type="text" onChange={(e) => props.setFirstName(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Apellido</span >
                    <input className='form-control' type="text" onChange={(e) => props.setLastName(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Descripcion</span >
                    <input className='form-control' type="text" onChange={(e) => props.setDescription(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Direccion</span >
                    <input className='form-control' type="text" onChange={(e) => props.setDirecction(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Contraseña</span >
                    <input className='form-control' type="password" onChange={(e) => props.setPassword(e.target.value)}/>
                </div>
                <p className='login-msg'>{props.msg}</p>
                <button className="btn btn-secondary border" onClick={props.onClickRegister} type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default RegisterStoreDisplay;