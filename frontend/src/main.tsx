import './style.css'
import { createRoot} from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MainRoutes from './Router/MainRoutes'

const root = createRoot(document.getElementById("app")!);

root.render(
    <BrowserRouter>
        <Navbar/>
        <MainRoutes/>
    </BrowserRouter>
);