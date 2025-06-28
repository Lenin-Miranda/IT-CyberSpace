import About from "../About/About";
import Services from "../Services/Services";
import Features from "../Features/Features";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Values from "../Values/Values";
import { Element } from "react-scroll";
/* Bootstrap Icons */
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <main id="main">
      <Element name="home">
        <Hero id="home" />
      </Element>
      <Element name="about">
        <About id="about" />
      </Element>
      <Element name="values">
        <Values id="values" />
      </Element>
      <Element name="features">
        <Features id="features" />
      </Element>
      <Element name="services">
        <Services id="services" />
      </Element>
      <Element name="contact">
        <Contact id="contact" />
      </Element>
    </main>
  );
}

export default Main;
