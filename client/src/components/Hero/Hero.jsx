import heroImg from "../../assets/img/hero-img-pc.png";
import { Typewriter } from "react-simple-typewriter";
function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row rowBgImg">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-3">
            <p
              data-aos="fade-up"
              className="fw-bold"
              style={{
                fontFamily: "sans-serif",
                fontSize: "16px",
                color: "#fc832b",
              }}
            >
              <a
                style={{
                  color: "#4a73e8",
                  display: "inline-block",
                  minWidth: "150px", // o el ancho máximo que ocupe la palabra más larga
                  textDecoration: "none",
                }}
                className="typewrite"
              >
                <Typewriter
                  words={["EFFICIENT", "FAST", "AFFORDABLE"]}
                  data-period="800"
                  loop={true}
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </a>
            </p>
            <h1 data-aos="fade-up" style={{ fontSize: "36px" }}>
              Reliable Computer Repair & Managed IT Services Tailored To Your
              Specific Needs
            </h1>
            <h2 data-aos="fade-up" style={{ fontSize: "23px" }}>
              See How We Deliver Innovative & Modern Solutions to Reach Your
              Goals; For Growing Your Business or Personal Needs
            </h2>
          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out">
            <img
              loading="lazy"
              src={heroImg}
              className="img-fluid"
              alt="Hero Image"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
