function Features() {
  return (
    <section id="features" className="features sectionMarginTop">
      <div className="container" data-aos="fade-up">
        <div
          className="row feture-tabs rowMarginTop"
          style={{ marginTop: "10px" }}
          data-aos="fade-up"
        >
          <div className="col-lg-6">
            <h3>RESIDENTIAL SERVICES</h3>

            <ul className="nav nav-pills mb-3">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="pill"
                  href="#tab1"
                ></a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <p>
                  IT Cyberspace is your complete source for all computer repairs
                  and IT needs – Licensed, honest, affordable, and reliable IT
                  professionals offering high quality computer repairs & IT
                  services at affordable rates.{" "}
                </p>
                <p>
                  You should never have to pay excessive fees for reliable
                  repairs and/or IT services. By providing expert and dependable
                  services, we strive to give our clients top of the line
                  repairs & IT solutions at lower rates.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src="/assets/img/features-2.png"
              className="img-fluid"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="row feature-icons rowMarginTopResidentialServices"
          data-aos="fade-up"
        >
          <h3
            className="rowMarginTopResidentialServicesH3"
            style={{ marginBottom: "50px" }}
          >
            Residential Services – Computer Repair{" "}
          </h3>

          <div className="row">
            <div className="col-xl-4 text-center" data-aos="fade-right">
              <img
                src="src/assets/img/features-3.png"
                className="img-fluid p-4"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">
                <div className="col-md-4 icon-box" data-aos="fade-up">
                  <i className="ri-computer-line"></i>
                  <div>
                    <h4>Pro Computer Repair Service</h4>
                    <p>
                      We specialize in computer repairs. Offering a wide range
                      of computer repairs for Windows, and Unix/Linux PCs.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 icon-box" data-aos="fade-up">
                  <i className="ri-refresh-line"></i>
                  <div>
                    <h4>PC Optimization & Tune Up</h4>
                    <p>
                      Slow computer? Let us diagnose your system for free! We'll
                      run an in-depth professional diagnosis to get to the root
                      cause of the problem. Let us maximize your productivity,
                      get the professional support you need!
                    </p>
                  </div>
                </div>

                <div className="col-md-4 icon-box" data-aos="fade-up">
                  <i className="ri-bug-line"></i>
                  <div>
                    <h4>Virus & Spyware Removal</h4>
                    <p>
                      Obtain peace of mind with our Virus removal & protection
                      solutions. We will ensure that you remain protected from
                      the constant flow of cyber threats.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 icon-box" data-aos="fade-up">
                  <i className="ri-router-line"></i>
                  <div>
                    <h4>Network & Router Configuration</h4>
                    <p>
                      We specialize in network & router configurations. Let our
                      team evaluate your networking requirements and build
                      innovative networking solutions for your needs.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 icon-box" data-aos="fade-up">
                  <i className="ri-install-line"></i>
                  <div>
                    <h4>Hardware Upgrades & Installation </h4>
                    <p>
                      In need to add or replace hardware to optimize your
                      computer or devices? Let us help you achieve your goals!
                    </p>
                  </div>
                </div>

                <div className="col-md-4 icon-box" data-aos="fade-up">
                  <i className="ri-indent-decrease"></i>
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      Software Upgrades & Installation{" "}
                    </h4>
                    <h4 style={{ textAlign: "center" }}>3 more </h4>

                    <div className="text-center text-lg-start">
                      <a
                        href="computerRepair"
                        className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                        style={{ padding: "5px 25px 5px 25px" }}
                      >
                        <span>Read More</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
