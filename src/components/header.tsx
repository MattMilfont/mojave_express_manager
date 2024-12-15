import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/main" style={{ color: "white" }}>
          <b>{title}</b>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "white" }}
                aria-current="page"
                href="/main"
              >
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="/trucks">
                <b>Caminhões</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="#">
                <b>Entregas</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="#">
                <b>Motoristas</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
