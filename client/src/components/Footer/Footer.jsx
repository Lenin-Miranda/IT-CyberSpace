import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
                  to="/home"
                  className="logo d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="src/assets/img/ltransparent.png"
                    alt=""
                    loading="lazy"
                  />
                  <span>IT Cyberspace</span>
                </Link>
                <p>
                  We Offer Our Customers Reliable Computer Repairs & Managed IT
                  Services Tailored To Your Specific Needs
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/home" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/home#about" style={{ textDecoration: "none" }}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="/home#services"
                      style={{ textDecoration: "none" }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/terms" style={{ textDecoration: "none" }}>
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/privacy" style={{ textDecoration: "none" }}>
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/itServices" style={{ textDecoration: "none" }}>
                      IT Support
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="/networkDesign"
                      style={{ textDecoration: "none" }}
                    >
                      Network Design
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/firewall" style={{ textDecoration: "none" }}>
                      Firewall Management
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/cloud" style={{ textDecoration: "none" }}>
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link
                      to="/computerRepair"
                      style={{ textDecoration: "none" }}
                    >
                      Computer Repair
                    </Link>
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
              style={{ textDecoration: "none" }}
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
