import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "../assets/Styles/Footer.css";

const FooterSection = () => {
  return (
    <footer
      className="footer-container custom-footer"
    
    >
       <div className="custom-profile">
        <img
          src={logo}
          width="200"
          height="200"
          loading="lazy"
          alt="Asmak Muscat Intl Logo"
          className="custom-img"
        />
      </div>
      <section
        className="custom-testi text-center has-bg-image"
        aria-label="testimonials"
      >
        <div className="testi-container">
          <p className="headline-2">Best Seafood From Sultanate of Oman</p>
        </div>
      </section>

     

      <div className="custom-footer-content">
        {/* Brand Section */}
        <div className="custom-footer-brand">
          <address className="custom-footer-address">
            P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN
          </address>
          <Link to="mailto:info@asmakmct.com" className="custom-footer-email">
            info@asmakmct.com
          </Link>
          <p className="custom-footer-contact">Mobile: +968 92850600</p>
          <p className="custom-footer-contact">Tel: +968 24050604</p>
        </div>

        {/* Footer Links */}
        <ul className="custom-footer-links">
          <li>
            <Link to="/" className="custom-footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="custom-footer-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="custom-footer-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="custom-footer-link">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <ul className="custom-footer-socials">
          <li>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-social-link"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-social-link"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link
              to="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-social-link"
            >
              <FaGooglePlusG />
            </Link>
          </li>
          <li>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-social-link"
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="custom-footer-bottom">
        <p className="custom-footer-copy">
          &copy; 2019 Asmak Muscat Int&apos;l. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
