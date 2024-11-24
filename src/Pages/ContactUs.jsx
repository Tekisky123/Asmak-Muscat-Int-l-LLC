import "../assets/Styles/ContactUs.css";
import TestimonialSection from "../Components/TestimonialSection";
import omanFlag from "../assets/images/oman.png"

const ContactUs = () => {
  return (
    <>
      <TestimonialSection />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-details">
          <div className="details-section">
            <h2>Get in touch with us Today</h2>
            <p>
              <strong>Mobile:</strong> +968 92850600
            </p>
            <p>
              <strong>Tel:</strong> +968 24050604
            </p>
            <p>
              <strong>Address:</strong> P.O.BOX 1741, POSTAL CODE 122, AL
              MABELA, SULTANATE OF OMAN, C.R.NO 1341511
            </p>
            <p>
              <strong>Email:</strong> info@asmakmct.com
            </p>
          </div>
          <div className="flag-section">
            {/* Oman Flag Image */}
            <img
              src={omanFlag}
              alt="Oman Flag"
              className="oman-flag"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
