import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import logoImg from "../../assets/img/ltransparent.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // ✅ cleanup
  }, []);

  return (
    <header className={`header fixed-top ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img src={logoImg} alt="Header Logo" loading="lazy" />
          <span>IT Cyberspace</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
