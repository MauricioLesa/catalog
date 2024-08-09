import LoginDisplay from "./LoginDisplay"


const onClickLogin = async (e:React.MouseEvent) => {

    e.preventDefault();


    const response = await fetch('http://localhost:8080/auth/login', {
        method: "POST",
        mode: 'cors',
        credentials:"include",
        body: JSON.stringify({
            email:"asd@asd",
            password:"asdsa"
        }),
        headers: {
            'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials':'*',
            "Access-Control-Allow-Origin":'*',
            'SameSite': 'None',
        }
      });

     
    const json = await response.json();
    console.log(json);
    
}


const Login = () =>{

    return(
        <LoginDisplay onClickLogin={onClickLogin}/>
    )
}

export default Login;