import LogoPoots from "../../assets/img/logo.png";
import "../../assets/styles/Header2.css";

function Header2() {
  return (
    <nav className="navbar navbarHeader">
      <div className="logo">
        <img src={LogoPoots} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#inicio"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red botonHeader"
          >
            inicio
          </a>
        </li>
        <li>
          <a
            href="#acercade"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red botonHeader"
          >
            acerca de
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red botonHeader"
          >
            menú
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red botonHeader"
          >
            contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header2;
