export const isLoggedAPI = async () => {
    try{
        const response:Response = await fetch('http://localhost:8080/auth/sessionData', {
            method: "GET",
            mode: 'cors',
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Credentials':'*',
                "Access-Control-Allow-Origin":'*',
                'SameSite': 'None',
            }
        });
        const content =  await response.json();
        return content;
    }
    catch (error){
        if (error instanceof Error) console.log(error.message);
        
    }
}

export const loginAPI = async (email:String, password:String) => {
    try{
        const response = await fetch('http://localhost:8080/auth/login', {
            method: "POST",
            mode: 'cors',
            credentials:"include",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                "Content-Type": "application/json",
                'Access-Control-Allow-Credentials':'*',
                "Access-Control-Allow-Origin":'*',
                'SameSite': 'None',
            }
        });
        const content =  await response.json();
        return content;
    }
    catch (error){
        console.log(error);
    }
}