import { Link } from "react-scroll";

function Nav() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <Link
            className="nav-link scrollto"
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            to="values"
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            IT Services
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            to="features"
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Residential Services
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Development Services
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
