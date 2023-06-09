import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Header = () => {
  const links = [
    { title: "Home", href: "/index", icon: <HomeIcon className="header-icon"/> },
    { title: "Publicar", href: "/publicar", icon: <PetsIcon className="header-icon"/>},
    { title: "Buscar Mascota", href: "/mapa", icon: <SearchIcon className="header-icon"/> },
    { title: "Colaborar", href: "/colaborar", icon: <HandshakeIcon className="header-icon"/> },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./static/logo.jpeg"
            alt="Logo"
            height="300px"
            width="240px"
            className="d-inline-block align-text-top img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav gap-5">
            {links.map((link, index) => (
              <NavLink className="nav-link fs-5" key={index} to={link.href}>
                {link.icon}
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
