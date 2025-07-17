import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// Importar el logo
import logoImg from "../../assets/img/ltransparent.png";

function Footer() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackToTop(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setBackToTop(window.scrollY > 100);
      });
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link
                  to="home"
                  className="logo d-flex align-items-center"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <img src={logoImg} alt="" loading="lazy" />
                  <span>IT Cyberspace</span>
                </Link>
                <p>
                  We Offer Our Customers Reliable Computer Repairs & Managed IT
                  Services Tailored To Your Specific Needs
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/people/It-Cyberspace/100084426695466/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/it_services_las_vegas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <NavLink
                      to="/"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="about"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="values"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      It Services
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="features"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Residential Services
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="services"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Development Services
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="contact"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <NavLink
                      to="https://www.designsolutionsworld.com/"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      target="_blank"
                    >
                      Web Design
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <NavLink
                      to="https://www.designsolutionsworld.com/"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      target="_blank"
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <NavLink
                      to="https://www.designsolutionsworld.com/"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      target="_blank"
                    >
                      Mobile App Development
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  Las Vegas, NV <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> (702) 625-5908
                  <br />
                  <strong>Email:</strong> support@it-cyberspace.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>IT Cyberspace</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a
              href="https://it-cyberspace.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              IT Cyberspace
            </a>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className={`back-to-top d-flex align-items-center justify-content-center ${
          backToTop ? "active" : ""
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Footer;
