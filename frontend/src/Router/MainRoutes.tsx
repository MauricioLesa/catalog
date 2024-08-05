import Login from '../Login/Login';
import ErrorScreen from '../Errors/ErrorScreen';
import {Routes, Route} from "react-router-dom";
import './MainRoutes.css'

const MainRoutes = () =>{
    return (
        <main className="d-flex flex-grow-1">
            <Routes>
                <Route 
                    path="/login" 
                    element={<Login/>}  
                    errorElement={<ErrorScreen message={'Error al cargar la pagina'} />} 
                    loader={async () => {
                        const res = await fetch(`http://localhost:5173/favicon.ico`);
                        if (res.status === 404) {
                            throw new Error("Could not fetch project");
                        }
                        return { res };
                    } }
                />
            </Routes>
        </main>
    )
}

export default MainRoutes;