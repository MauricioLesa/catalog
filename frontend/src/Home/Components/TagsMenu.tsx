import { NavLink } from "react-router-dom"
import "./TagsMenu.css"

export const TagsMenu = () => {
    const styleBS = "w-100 h-100 text-center btn-outline-secondary btn"
    const buttonStyleBs = "tag-button btn-outline-secondary mx-2"
    return (
        <div className="tags-menu d-flex flex-wrap w-100 mx-5 mt-5 flex-fill justify-content-center">
            <NavLink className={buttonStyleBs} to="/search-page"><button className={styleBS}>electrodomesticos</button></NavLink>
            <NavLink className={buttonStyleBs} to="/search-page"><button className={styleBS}>alimentos</button></NavLink>
            <NavLink className={buttonStyleBs} to="/search-page"><button className={styleBS}>bebidas</button></NavLink>
            <NavLink className={buttonStyleBs} to="/search-page"><button className={styleBS}>vehiculos</button></NavLink>
            <NavLink className={buttonStyleBs} to="/search-page"><button className={styleBS}>vehiculos</button></NavLink>
            <NavLink className={buttonStyleBs} to="/search-page"><button className={styleBS}>vehiculos</button></NavLink>
        </div>  
    )
}