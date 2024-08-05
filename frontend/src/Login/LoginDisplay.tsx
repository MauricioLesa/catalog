import './Login.css'



const LoginDisplay = () =>{

    return(
        <div className="flex-grow-1 d-flex text-center">
            <form className="login_form">  
                <h2>Inicio de sesión</h2>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Usuario</span >
                    <input className='form-control' type="text"/>
                </div>
                <div className='input-group my-4'>
                    <span  className="input-group-text" >Contraseña</span >
                    <input className='form-control' type="password"/>
                </div>
                <button className="btn btn-secondary border" type="submit">Iniciar session</button>
                <p className='mt-2'>o</p>
                <button className="btn btn-dark" >Registrarse</button>
            </form>
        </div>
    )
}

export default LoginDisplay;