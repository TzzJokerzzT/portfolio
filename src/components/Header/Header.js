import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header-style">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link"
              >
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className="nav-link"
              >
                <b>Projects</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="tecnologies"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                <b>Tecnologies</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
