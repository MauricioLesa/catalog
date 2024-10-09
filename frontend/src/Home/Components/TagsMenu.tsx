import { NavLink } from "react-router-dom"
import "./TagsMenu.css"

export const TagsMenu = () => {
    return (
        <div className="tags-menu d-flex flex-wrap w-100 mx-5 mt-5 flex-fill justify-content-center">
            <NavLink to="/search-page" className="tag-button align-middle btn-outline-secondary btn mx-2">electrodomesticos</NavLink>
            <NavLink to="/search-page" className="tag-button align-middle btn-outline-secondary btn mx-2">alimentos</NavLink>
            <NavLink to="/search-page" className="tag-button align-middle btn-outline-secondary btn mx-2">bebidas</NavLink>
            <NavLink to="/search-page" className="tag-button align-middle btn-outline-secondary btn mx-2">vehiculos</NavLink>
            <NavLink to="/search-page" className="tag-button align-middle btn-outline-secondary btn mx-2">vehiculos</NavLink>
            <NavLink to="/search-page" className="tag-button align-middle btn-outline-secondary btn mx-2">vehiculos</NavLink>
        </div>  
    )
}