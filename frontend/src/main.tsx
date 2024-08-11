import './style.css'
import { createRoot} from "react-dom/client";
import MainPage from './MainPage/MainPage';

const root = createRoot(document.getElementById("app")!);



root.render(

    <MainPage/>
    
);