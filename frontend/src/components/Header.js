import React from 'react';
import { Link } from 'react-router-dom';

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
                    <a className="navbar-brand" href="Login">
                        <img src="https://th.bing.com/th/id/OIP.YQmd7DbSNttp6YpziG17HQHaDs?rs=1&pid=ImgDetMain" alt="Logo" width="30" height="30" className="d-inline-block align-top" /> {/* Asegúrate de reemplazar 'path_to_logo.png' con la ruta al logo real */}
                    </a>

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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Inventario reactivos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">             
                            <li><Link to="/path_to_ReagenstRegister">Registrar reactivos</Link></li> {/* Agrega el enlace al componente ReagentRegister.jsx */}
                            <li><Link to="/path_to_ReagentList">Buscar reactivos, alertas y notificaciones</Link></li> {/* Agrega el enlace al componente ReagentList.jsx */}    
                            </ul>
                        </li>   
                        <li className="nav-item">
                            <Link to="/path_to_SampleRegister" className="nav-link">Registrar muestras</Link> {/* Agrega el enlace al componente SampleRegister.jsx */} 
                        </li>
                                              
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cerrar Sesión</a>      
                        </li>
                      
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;