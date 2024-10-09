import Login from '../Login/Login';
import {Routes, Route} from "react-router-dom";
import './MainRoutes.css'
import RegisterStore from '../Register/RegisterStore';
import StoreProducts from '../StoreProducts/StoreProducts';
import RegisterCustomer from '../Register/RegisterCustomer';
import { Home } from '../Home/Home';
import SearchPage from '../SearchPage/SearchPage';

const MainRoutes = () =>{
    return (
        <main className="d-flex flex-grow-1">
            <Routes>
                <Route 
                    path="/" 
                    element={<Home/>}  
                />
                <Route 
                    path="/login" 
                    element={<Login/>}  
                />
                <Route 
                    path="/register" 
                    element={<RegisterCustomer/>}  
                />
                <Route 
                    path="/register-store" 
                    element={<RegisterStore/>}  
                />
                <Route 
                    path="/store-products" 
                    element={<StoreProducts/>}  
                />
                <Route 
                    path="/search-page" 
                    element={<SearchPage/>}  
                />
            </Routes>
        </main>
    )
}

export default MainRoutes;