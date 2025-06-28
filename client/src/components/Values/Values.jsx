import React from "react";
import { Link } from "react-scroll";

// Importar todas las imágenes de los servicios
import ismImg from "../../assets/img/ISM.png";
import ndsImg from "../../assets/img/NDS.png";
import fmImg from "../../assets/img/FM.png";
import wwnImg from "../../assets/img/WWN.png";
import muImg from "../../assets/img/MU.jpg";
import csImg from "../../assets/img/CS.jpg";
import cssImg from "../../assets/img/CSS.png";
import o365Img from "../../assets/img/O365.png";
import amsImg from "../../assets/img/AMS.png";
import osmsImg from "../../assets/img/OSMS.png";
import drsImg from "../../assets/img/DRS.png";
import voiImg from "../../assets/img/VOI.png";

const Values = () => {
  /* Crear array de objetos con los datos de los servicios */
  const values = [
    {
      id: 1,
      title: "It Support and Managment",
      description:
        " Comprehensive, fully certified 24X7 IT support from a professional IT team.",
      image: ismImg,
    },
    {
      id: 2,
      title: "Network Design, Support and Engineering.",
      description:
        "State of the art network infrastructures designed to your specific networking needs.",
      image: ndsImg,
    },
    {
      id: 3,
      title: "Firewall Management.",
      description: "Unified Firewall, security management and configuration.",
      image: fmImg,
    },
    {
      id: 4,
      title: "Wireless/Wired Networking",
      description:
        " Fully managed, secured, and optimized Wired/Wireless networks at your fingertips",
      image: wwnImg,
    },
    {
      id: 5,
      title: "Migration & Upgrades",
      description:
        "Expertise planning with migration projects; Offering little to no downtime with migrations and system upgrades",
      image: muImg,
    },
    {
      id: 6,
      title: "Cybersecurity Services",
      description: "Customized security scanning & vulnerability assessments",
      image: csImg,
    },
    {
      id: 7,
      title: "Cloud Solutions",
      description:
        " Business optimization - Optimize business operations and evolve your operation's effectiveness. Explore new opportunities with the Cloud",
      image: cssImg,
    },
    {
      id: 8,
      title: "Office 365 Integration",
      description:
        " Boost productivity with managed Microsoft 365 – Our Office 365 services are tailored to help you design and transition your teams & organization to Microsoft 365",
      image: o365Img,
    },
    {
      id: 9,
      title: "Application Maintenance & Support",
      description:
        "     Providing a full range of Application management & support for your existing solutions. Including but not limited to; Email platforms, CRM applications, Billing/Financial applications, Scheduling/Calendar applications, and more",
      image: amsImg,
    },
    {
      id: 10,
      title: "Onsite Server Management & Support",
      description:
        "Onsite server support services for a variety of systems and platforms. Including but not limited to; Windows servers, Linux, CentOS, RHLE, servers, VSphere/Vcenter deployments and more!",
      image: osmsImg,
    },
    {
      id: 11,
      title: "Disaster Recovery Solutions",
      description:
        "Obtain peace of mind with our disaster recovery solutions. Protect your data 24x7x365 with our data backup, replication, and recovery solutions",
      image: drsImg,
    },
    {
      id: 12,
      title: "Voice Over IP",
      description:
        "VoIP deployment & troubleshooting – Expertise in configuring, troubleshooting, and deploying VoIP based hardware/software solutions",
      image: voiImg,
    },
  ];

  // Mostrar solo los primeros 3 servicios en móviles
  const mobileServices = values.slice(0, 3);
  // Mostrar solo los servicios del 4 en adelante en desktop (para evitar duplicados)
  const desktopServices = values.slice(3);

  return (
    <section id="values" className="values sectionMarginBotton">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>OUR SERVICES</h2>
          <p>Reliable & Effective IT Services</p>
        </header>

        <div className="row">
          {/* Servicios para móviles (primeros 3) */}
          {mobileServices.map((service, index) => (
            <div
              key={service.id}
              className={`col-lg-3 ${index > 0 ? "mt-4 mt-lg-0" : ""}`}
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src={service.image}
                  className="img-fluid"
                  alt={service.title}
                  loading="lazy"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}

          {/* Caja especial para móviles con "Read More" */}
          <div
            className="col-lg-3 mt-4 d-lg-none d-xl-none d-md-block"
            data-aos="fade-up"
          >
            <div className="box">
              <img
                loading="lazy"
                src="src/assets/img/TSIT.png"
                className="img-fluid"
                alt=""
              />
              <h3 style={{ fontSize: "14px" }}>Wireless/Wired Networking</h3>
              <h3 style={{ fontSize: "14px" }}>Migration and Upgrades</h3>
              <h3 style={{ fontSize: "14px" }}>Cybersecurity Services</h3>
              <h3 style={{ fontSize: "14px" }}>6 more ...</h3>

              <section
                id="about"
                className="about"
                style={{ padding: "20px 0px 20px 0px" }}
              >
                <div className="container" data-aos="fade-up">
                  <div className="row gx-0">
                    <div
                      className="col-lg-12 d-flex flex-column justify-content-center"
                      data-aos="fade-up"
                    >
                      <div className="">
                        <div className="text-center text-lg-start">
                          <Link
                            to="itServices"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                            style={{
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                          >
                            <span>Read More</span>
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Servicios para desktop (del 4 en adelante para evitar duplicados) */}
          {desktopServices.map((service, index) => (
            <div
              key={`desktop-${service.id}`}
              className={`col-lg-3 ${
                index > 0
                  ? "mt-lg-4 d-none d-xs-none d-sm-none d-md-none d-lg-block"
                  : "d-none d-xs-none d-sm-none d-md-none d-lg-block"
              }`}
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src={service.image}
                  className="img-fluid"
                  alt={service.title}
                  loading="lazy"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
