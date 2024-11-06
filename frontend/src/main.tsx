import './style.css'
import { createRoot} from "react-dom/client";
import MainPage from './MainPage/MainPage';
import { Provider } from 'react-redux'
import { StrictMode } from 'react';
import { store } from './Redux/Store';

const root = createRoot(document.getElementById("app")!);



root.render(

    <StrictMode>
        <Provider store={store}>
            <MainPage/>
        </Provider>
    </StrictMode>    
);