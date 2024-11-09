import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "./Loader"; // Import the Loader component

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      await axios.post(
        "https://asmak-muscat-int-l-llc-backend.vercel.app/mail/send-email",
        formData
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Thank you! Your message has been sent.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! Please try again. ${error}`,
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <section className="reservation">
      {loading && <Loader />} {/* Display loader when loading is true */}

      <div className="testi-container container">
        <div className="form reservation-form bg-black-10">
          <form onSubmit={handleSubmit} className="form-left">
            <h2 className="headline-1 text-center">Contact Us</h2>
            <p className="form-text text-center">Get in touch with us today!</p>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                className="input-field"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              autoComplete="off"
              className="input-field"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1 ">Send Request</span>
              <span className="text text-2" aria-hidden="true">
                Send Request
              </span>
            </button>
          </form>

          <div className="form-right text-center">
            <h2 className="headline-1 text-center">Contact Details</h2>
            <p className="contact-label">Mobile</p>
            <Link
              to="tel:+96892850600"
              className="body-1 contact-number hover-underline"
            >
              +968 92850600
            </Link>

            <p className="contact-label">Tel</p>
            <Link
              to="tel:+96824050604"
              className="body-1 contact-number hover-underline"
            >
              +968 24050604
            </Link>

            <div className="separator"></div>

            <p className="contact-label">Address</p>
            <address className="body-4">
              P.O.BOX 1741 <br />
              Postal Code 122 <br />
              Al Mabela, Sultanate of Oman <br />
              C.R. No 1341511
            </address>

            <p className="contact-label">Email</p>
            <Link
              to="mailto:info@asmakmct.com"
              className="body-1 contact-number hover-underline"
            >
              info@asmakmct.com
            </Link>

            <p className="contact-label">Need more details?</p>
            <p className="body-4">Contact us and we’ll call you back.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
