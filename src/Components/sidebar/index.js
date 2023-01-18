import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logoS from "../../assets/images/Klogo.png"
import logoSubtitle from "../../assets/images/kenvitoro-subtitle.png"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () =>{
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={logoS} alt="logo" />
          <img className="sub-logo" src={logoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        <ul>
            <li>
                <a
                href="https://es.linkedin.com"
                rel="noreferrer"
                target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
      </div>
    )
}



export default Sidebar;
