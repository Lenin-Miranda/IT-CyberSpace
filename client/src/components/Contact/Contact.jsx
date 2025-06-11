import { useRef, useState } from "react";
import { sendEmail } from "../../email";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (disabled) return;

    setStatus("sending");
    setError("");

    const formData = {
      name: form.current.nombre.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.mensaje.value,
    };

    try {
      const res = await sendEmail(formData);
      console.log(res.message);
      setStatus("sent");

      // Resetea el form después de enviar
      form.current.reset();

      // Desactiva por 30 segundos
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
        setStatus("idle");
      }, 30000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setError("There was a problem sending the email. Please try again.");
    }
  };

  const renderButtonText = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "sent":
        return "Email Sent Please Wait 30 Seconds";
      case "error":
        return "Try Again";
      default:
        return "Send Message";
    }
  };

  return (
    <section id="contact" className="contact sectionPaddingTopContact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>CONTACT US</h2>
          <p>Send Us a Message</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="row gy-4">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call or Text Us</h3>
                  <p>(702) 625-5908</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>support@it-cyberspace.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              method="post"
              className="php-email-form contactForm"
              id="enviar"
              name="contactForm"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="mensaje"
                    id="mensaje"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {error && <div className="error-message">{error}</div>}

                  <button
                    name="enviar"
                    type="submit"
                    className={
                      disabled || status === "sending" ? "btn-disabled" : ""
                    }
                    disabled={disabled || status === "sending"}
                  >
                    {renderButtonText()}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
