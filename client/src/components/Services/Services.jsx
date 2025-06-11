import { Link } from "react-scroll";

function Services() {
  return (
    <section
      id="services"
      className="services sectionPaddingTopDevelopmentServices"
    >
      <div className="container" data-aos="fade-up">
        <header className="section-header sectionPaddingTopDevelopmentServicesHeader">
          <h2>Services</h2>
          <p>Development Services</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-box blue">
              <i className="ri-earth-line icon"></i>
              <h3>Website Development</h3>
              <Link
                to="web-development"
                className="read-more"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-box orange">
              <i className="ri-cloud-windy-line icon"></i>
              <h3>Website Hosting</h3>
              <Link
                to="web-hosting"
                className="read-more"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-box green">
              <i className="ri-shopping-cart-2-line icon"></i>
              <h3>E-Commerce Platforms</h3>
              <Link
                to="ecommerce"
                className="read-more"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-box red">
              <i className="ri-smartphone-line icon"></i>
              <h3>Mobile App Development</h3>
              <Link
                to="mobile-app"
                className="read-more"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-box purple">
              <i className="ri-paint-brush-fill icon"></i>
              <h3>Graphic Design</h3>
              <Link
                to="graphic-design"
                className="read-more"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-box pink">
              <i className="ri-refresh-fill icon"></i>
              <h3>SEO Optimization</h3>
              <Link
                to="seo"
                className="read-more"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
