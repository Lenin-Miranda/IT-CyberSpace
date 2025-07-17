import { Link } from "react-router-dom";

export default function ComputerRepair() {
  return (
    <main id="main">
      <section className="breadcrumbs" style={{ marginTop: "110px" }}>
        <div className="container">
          <ol>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>Computer Repair</li>
          </ol>
          <h2>Residential Services – Computer Repair</h2>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="row feature-icons mt-3">
            <h3>Residential Services – Computer Repair </h3>

            <div className="row mt-3">
              <div className="col d-flex content">
                <div className="row align-self-center gy-4">
                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-computer-line"></i>
                    <div>
                      <h4>Pro Computer Repair Service</h4>
                      <p>
                        We specialize in computer repairs. Offering a wide range
                        of computer repairs for Windows, and Unix/Linux PCs.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-refresh-line"></i>
                    <div>
                      <h4>PC Optimization & Tune Up</h4>
                      <p>
                        Slow computer? Let us diagnose your system for free!
                        We’ll run an in-depth professional diagnosis to get to
                        the root cause of the problem. Let us maximize your
                        productivity and get the professional support you need!
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
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

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-install-line"></i>
                    <div>
                      <h4>Hardware Upgrades & Installation</h4>
                      <p>
                        In need to add or replace hardware to optimize your
                        computer or devices? Let us help you achieve your goals!
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-router-line"></i>
                    <div>
                      <h4>Network & Router Configuration</h4>
                      <p>
                        We specialize in network & router configurations. Let
                        our team evaluate your networking requirements and build
                        innovative networking solutions designed for your needs.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-install-fill"></i>
                    <div>
                      <h4>Software Upgrades & Installation</h4>
                      <p>
                        Whether you need new software installs, upgrades,
                        uninstalls, or software rollbacks; We can assist with
                        whatever your needs are. Let us upgrade your software to
                        the latest versions to achieve maximum productivity.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-apple-fill"></i>
                    <div>
                      <h4>OS Upgrades, Reinstalls, Rollbacks</h4>
                      <p>
                        We can help in getting your PC running like new again.
                        Let our experts evaluate the best solution for you;
                        Whether re-installing, upgrading or rolling back your
                        Operating System, we can help restore things to run
                        smoothly.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-database-line"></i>
                    <div>
                      <h4>
                        Automated Data Backup, Transfer, and Recovery Solutions
                      </h4>
                      <p>
                        Protect your data 24x7x365 with our data backup,
                        replication, and recovery solutions.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="ri-macbook-line"></i>
                    <div>
                      <h4>Remote Support</h4>
                      <p>
                        Our remote technicians can assist remotely at the
                        comfort of your own home. We provide end-to-end
                        encrypted channels of communications to securely connect
                        to your computer to provide the best of our professional
                        services!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
