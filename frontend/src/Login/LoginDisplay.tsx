import './Login.css'

interface props {
    onClickLogin: (e:React.MouseEvent) => void;
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    msg:String;
}

const LoginDisplay = (props:props) => {

    return(
        <div className="flex-grow-1 d-flex text-center">
            <form className="login_form">  
                <h2>Inicio de sesión</h2>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Usuario</span >
                    <input className='form-control' type="text" onChange={(e) => props.setEmail(e.target.value)}/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Contraseña</span >
                    <input className='form-control' type="password" onChange={(e) => props.setPassword(e.target.value)}/>
                </div>
                <p className='login-msg'>{props.msg}</p>
                <button className="btn btn-secondary border" onClick={props.onClickLogin} type="submit">Iniciar session</button>
                <p className='mt-2'>o</p>
                <button className="btn btn-dark" >Registrarse</button>
            </form>
        </div>
    )
}

export default LoginDisplay;