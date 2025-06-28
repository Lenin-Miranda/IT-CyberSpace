import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileNav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobile(!isMobile);

    if (!isMobile) {
      // Primero removemos la clase del header
      const header = document.querySelector(".header");
      if (header) {
        header.classList.remove("header-scrolled");
      }
      // Esperamos un momento antes de mostrar el menú
      setTimeout(() => {
        setShowMenu(true);
      }, 450);
    } else {
      setShowMenu(false);
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobile(false);
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Restaurar la clase header-scrolled si es necesario
      const header = document.querySelector(".header");
      if (header && isScrolled) {
        header.classList.add("header-scrolled");
      }
    }
  }, [isMobile, isScrolled]);

  return (
    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link
              className="nav-link scrollto"
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className={`mobile-nav-toggle bi ${isMobile ? "bi-x" : "bi-list"}`}
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          zIndex: 10000,
          fontSize: "28px",
          cursor: "pointer",
          color: isMobile ? "#fff" : "#012970",
          background: "transparent",
          border: "none",
          padding: "0",
          width: "30px",
          height: "30px",
          display: "block",
        }}
      />

      <div
        className={isMobile ? "mobile-menu-active" : ""}
        style={{
          position: isMobile ? "fixed" : "relative",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: isMobile ? "rgba(1, 22, 61, 0.9)" : "transparent",
          zIndex: isMobile ? 9999 : "auto",
          overflow: isMobile ? "hidden" : "visible",
          display: isMobile ? "block" : "none",
          opacity: showMenu ? 1 : 0,
          visibility: showMenu ? "visible" : "hidden",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <nav
          id="navbar"
          className="navbar"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "block",
            backgroundColor: "transparent",
            padding: "15px 0",
          }}
        >
          <ul
            style={{
              display: "block",
              position: "absolute",
              top: "55px",
              right: "15px",
              bottom: "15px",
              left: "15px",
              padding: "10px 0",
              borderRadius: "10px",
              backgroundColor: "#fff",
              overflowY: "auto",
              margin: "0",
              listStyle: "none",
              boxShadow: "0px 0px 30px rgba(127, 137, 161, 0.25)",
              opacity: showMenu ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <li>
              <Link
                className="nav-link scrollto"
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: "15px",
                  color: "#012970",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onClick={handleLinkClick}
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
                style={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: "15px",
                  color: "#012970",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onClick={handleLinkClick}
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
                style={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: "15px",
                  color: "#012970",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onClick={handleLinkClick}
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
                style={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: "15px",
                  color: "#012970",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onClick={handleLinkClick}
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
                style={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: "15px",
                  color: "#012970",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onClick={handleLinkClick}
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
                style={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: "15px",
                  color: "#012970",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
