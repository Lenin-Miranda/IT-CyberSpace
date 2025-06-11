import { Link } from "react-router-dom";
function About() {
  return (
    <section id="about" className="about sectionPaddingTopAbout">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <div className="content">
              <h3>WHO WE ARE</h3>
              <h2>
                Dependable, experienced, and knowledgeable IT professionals
                offering IT services & computer repair for both businesses &
                residential customers. Providing excellent computer support and
                IT services tailored to your specific needs.
              </h2>
              <p>
                Our services are geared towards maximizing the effectiveness of
                your operations and systems by offering expertise support for a
                full range of IT solutions; from unified technologies to managed
                IT services designed to meet your specific needs.
              </p>
              <div className="text-center text-lg-start">
                <Link
                  href="#"
                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  style={{ textDecoration: "none" }}
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
          >
            <img
              src="/assets/img/about.png"
              className="img-fluid"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
