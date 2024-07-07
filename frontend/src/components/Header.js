import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Header = () => {
    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Botón para abrir el Offcanvas */}
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Logo de la aplicación */}
                    <Link className="navbar-brand" to="/login">
                        <img src="https://th.bing.com/th/id/OIP.YQmd7DbSNttp6YpziG17HQHaDs?rs=1&pid=ImgDetMain" alt="Logo" width="30" height="30" className="d-inline-block align-top" /> {/* Asegúrate de reemplazar 'path_to_logo.png' con la ruta al logo real */}
                    </Link>

                    {/* Espaciador */}
                    <div className="navbar-nav ms-auto">
                        {/* Nombre del usuario */}
                        <span className="nav-link">Nombre del Usuario</span>
                    </div>
                </div>
            </nav>

            {/* Offcanvas */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú Principal</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {/* Contenido del Offcanvas */}
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Inventario reactivos
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">             
                                <li><Link className="dropdown-item" to="/reagent-register">Registrar reactivos</Link></li> {/* Agrega el enlace al componente ReagentRegister */}
                                <li><Link className="dropdown-item" to="/reagent-list">Listar reactivos</Link></li> {/* Agrega el enlace al componente ReagentList */}
                            </ul>
                        </li>   
                        <li className="nav-item">
                            <Link className="nav-link" to="/sample-register">Registrar muestras</Link> {/* Agrega el enlace al componente SampleRegister */}    
                        </li>
                        <li className="nav-item">
                            <Logout />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
