import { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import HandshakeIcon from "@mui/icons-material/Handshake";

const Header = () => {
  const [activePage, setActivePage] = useState(0);
  const links = [
    {
      title: "Home",
      href: "/index",
      icon: (
        <HomeIcon
          className={`header-icon ${
            activePage === 0 ? "header-icon-active" : ""
          }`}
        />
      ),
    },
    {
      title: "Publicar Mascota",
      href: "/publicar",
      icon: (
        <PetsIcon
          className={`header-icon ${
            activePage === 1 ? "header-icon-active" : ""
          }`}
        />
      ),
    },
    {
      title: "Buscar Mascota",
      href: "/mapa",
      icon: (
        <SearchIcon
          className={`header-icon ${
            activePage === 2 ? "header-icon-active" : ""
          }`}
        />
      ),
    },
    {
      title: "Colaborar",
      href: "/colaborar",
      icon: (
        <HandshakeIcon
          className={`header-icon ${
            activePage === 3 ? "header-icon-active" : ""
          }`}
        />
      ),
    },
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
              <NavLink
                key={index}
                to={link.href}
                className="nav-link navlink d-flex align-items-center"
                onClick={() => setActivePage(index)}
              >
                <h4>
                  {link.icon}
                  {link.title}
                </h4>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
