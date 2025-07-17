import ISM from "../assets/img/ISM.png";
import NDS from "../assets/img/NDS.png";
import FM from "../assets/img/FM.png";
import WWN from "../assets/img/WWN.png";
import MU from "../assets/img/MU.jpg";
import CS from "../assets/img/CS.jpg";
import CSS from "../assets/img/CSS.png";
import O365 from "../assets/img/O365.png";
import AMS from "../assets/img/AMS.png";
import OSMS from "../assets/img/OSMS.png";
import DRS from "../assets/img/DRS.png";
import VOI from "../assets/img/VOI.png";
import { Link } from "react-router-dom";
export default function ItServices() {
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
            <li>It Services</li>
          </ol>
          <h2>Reliable & Effective IT Services</h2>
        </div>
      </section>

      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>OUR SERVICES</h2>
            <p>Reliable & Effective IT Services</p>
          </header>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <img
                  src={ISM}
                  loading="lazy"
                  className="img-fluid"
                  alt="IT Support and Management"
                />
                <h3>IT Support and Management</h3>
                <p>
                  The recent technology boom has created a new digital age. The
                  explosive growth in computer telecommunications, information,
                  and other technologies has had a major impact on the ways
                  people interact and live through this age.
                </p>
                <p>
                  We will help you keep on top of technology by providing
                  support on the latest technologies, products, and systems with
                  proactive onsite & remote approaches..
                </p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <img
                  src={NDS}
                  className="img-fluid"
                  loading="lazy"
                  alt="Network Design, Support & Engineering"
                />
                <h3>Network Design, Support & Engineering</h3>
                <p>
                  The network design is a crucial aspect of the technology and
                  support process of your organization.{" "}
                </p>
                <p>
                  An efficient network design will help your organization
                  eliminate loss of productivity and maximize uptime. With our
                  services, we will find the right balance of network
                  efficiency, security, and redundancy to avoid any downtime.
                </p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <img
                  src={FM}
                  className="img-fluid"
                  loading="lazy"
                  alt="Firewall Management"
                />
                <h3>Firewall Management</h3>
                <p>
                  Firewalls are crucial in protecting your data from serious
                  cyberthreats, including malicious data breaches and viruses.{" "}
                </p>
                <p>
                  Firewalls require regular maintenance and constant monitoring.
                  At IT Cyberspace, We configure, operate, administer, monitor,
                  and maintain your firewall infrastructure so that you can rest
                  assured that your network traffic and data are safe and
                  protected.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={WWN}
                  className="img-fluid"
                  loading="lazy"
                  alt="Wireless/Wired Networking"
                />
                <h3>Wireless/Wired Networking</h3>
                <p>
                  Offering high-speed, high-quality, and uninterrupted network
                  connectivity to ensure that your productiveness is maximized
                  24x7.
                  <br />
                  <br />
                  We provide effective, easy, and reliable solutions for
                  connecting your wired and wireless networks to the outside
                  world.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={MU}
                  className="img-fluid"
                  loading="lazy"
                  alt="Migration & Upgrades"
                />
                <h3>Migration & Upgrades</h3>
                <p>
                  We understand that migrations can be time consuming. With new
                  platforms and technologies emerging every day, whether you
                  need to upgrade your onsite servers to a more up-to-date
                  platform or migrate to the cloud. Our experienced team will
                  assist with the planning, testing, and delivery of data
                  migrations & platform upgrades that can help your organization
                  reduce cost, reduce risk and increase productivity within your
                  environment.{" "}
                </p>
                <p>
                  We will assess and provide you with the resources and tools to
                  allow your organization to increase efficiency and mitigate
                  IT-related risks.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={CS}
                  className="img-fluid"
                  loading="lazy"
                  alt="Cybersecurity Services"
                />
                <h3>Cybersecurity Services</h3>
                <p>
                  Nowadays Cybersecurity is an essential business requirement.
                  Providing secure fundamentals on your core platforms enhances
                  and protects any internet-connected systems from cyberattacks.
                  That's why we recommend a cybersecurity plan that's designed
                  specifically to your business requirements and needs.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={CSS}
                  className="img-fluid"
                  loading="lazy"
                  alt="Cloud Solutions"
                />
                <h3>Cloud Solutions</h3>
                <p>
                  Offering a wide-range of Cloud based solutions to meet your
                  specific needs.
                  <br />
                  <br />
                  From Email, Secured file sharing, Server hosting, to Unified
                  Communications; We will help with implementing cloud solutions
                  that meet your business needs to help your users enhance
                  productivity and allow 100% access from anywhere, anytime.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={O365}
                  className="img-fluid"
                  loading="lazy"
                  alt="Office 365 Integration"
                />
                <h3>Office 365 Integration</h3>
                <p>
                  Maximize your team's performance with dynamic collaboration
                  solutions that meets the needs of different target audiences
                  and provides collaboration solutions that can allow teams
                  reach their goals through a variety of platforms &
                  applications.
                </p>
                <p>
                  Office 365 is a secure, compliant cloud service with high
                  availability and failsafe operations. Office 365 allows
                  organizations to always use the latest, up-to-date versions
                  without the need of implementing major migration projects and
                  resources
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={AMS}
                  className="img-fluid"
                  loading="lazy"
                  alt="Application Maintenance & Support"
                />
                <h3>Application Maintenance & Support</h3>
                <p>
                  With our application maintenance & support services we always
                  ensure business continuity by providing a proactive,
                  exceptional support approach.
                  <br />
                  <br />
                  We ensure that your operational processes run smoothly,
                  enabling your users to conduct their business with zero
                  downtime.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={OSMS}
                  className="img-fluid"
                  loading="lazy"
                  alt="Onsite Server Management & Support"
                />
                <h3>Onsite Server Management & Support</h3>
                <p>
                  We specialize in building server infrastructures but in also
                  maintaining your current server infrastructure.
                </p>
                <p>
                  With over a decade of experience in the industry, our main
                  goal is to provide top quality service by combining a broad
                  selection of hardware and technologies to ensure that your
                  needs are met 100% of the time.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={DRS}
                  className="img-fluid"
                  loading="lazy"
                  alt="Disaster Recovery Solutions"
                />
                <h3>Disaster Recovery Solutions</h3>
                <p>
                  Ensure 24x7x365 data availability & integrity by protecting
                  your critical data across your platforms with our zero data
                  loss backup and disaster recovery solutions. <br />
                  <br />
                  We offer various solutions to protect, manage, and recover
                  your data seamlessly with minimal to zero downtime.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="box">
                <img
                  src={VOI}
                  className="img-fluid"
                  loading="lazy"
                  alt="Reliable VoIP Solutions"
                />
                <h3>Reliable VoIP Solutions</h3>
                <p>
                  Experience improved VoIP quality by our traffic
                  prioritization, increased network reliability & capacity
                  solutions.
                </p>
                <p>
                  By implementing Quality of Service technologies, we ensure
                  that our customer's VoIP experience is flawless by eliminating
                  network congestion, packet loss, and high latency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
