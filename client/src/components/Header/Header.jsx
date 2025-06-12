import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Nav from "../Nav/Nav";

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
          to="home"
          className="logo d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            src="src/assets/img/ltransparent.png"
            alt="Header Logo"
            loading="lazy"
          />
          <span>IT Cyberspace</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
