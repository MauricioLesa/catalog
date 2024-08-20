import Login from '../Login/Login';
import ErrorScreen from '../Errors/ErrorScreen';
import {Routes, Route} from "react-router-dom";
import './MainRoutes.css'
import Register from '../Register/Register';
import RegisterStore from '../Register/RegisterStore';
import StoreProducts from '../StoreProducts/StoreProducts';

const MainRoutes = () =>{
    return (
        <main className="d-flex flex-grow-1">
            <Routes>
                <Route 
                    path="/login" 
                    element={<Login/>}  
                />
                <Route 
                    path="/register" 
                    element={<Register/>}  
                />
                <Route 
                    path="/register-store" 
                    element={<RegisterStore/>}  
                />
                <Route 
                    path="/store-products" 
                    element={<StoreProducts/>}  
                />
            </Routes>
        </main>
    )
}

export default MainRoutes;