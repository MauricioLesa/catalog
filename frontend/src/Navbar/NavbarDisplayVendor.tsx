import { Link } from "react-router-dom";
import './Navbar.css';

const NavbarDisplayVendor = () => {

    return(
        <nav className="navbar navbar-expand-lg p-4  bg-dark navbar-dark text-light justify-content-between">
            <div className="side-navbar">
                <Link className="navbar-brand" to="#">Navbar</Link>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse  navbar-collapse navbar-dark" id="navbarSupportedContent">
                <ul className="main-navbar navbar-nav flex-grow-1 justify-content-center">
                    <Link to="/store-products" className="nav-item">Productos</Link>
                </ul>

                <ul className="side-navbar navbar-nav justify-content-end  navbar-dark">
                    <Link to="/store-profile" className="nav-item">
                        <i className="bi bi-shop"></i>
                        <span className="navbar-desktop-hidden ms-1 mt-5">perfil</span>
                    </Link>
                </ul>
            </div>
        </nav>
    )

}

export default NavbarDisplayVendor;