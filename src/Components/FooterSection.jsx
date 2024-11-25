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
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Asmak Muscat Intl Logo" className="footer-logo-img" />
          </Link>
          <address className="footer-address">
            P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN
          </address>
          <Link to="mailto:info@asmakmct.com" className="footer-email">
            info@asmakmct.com
          </Link>
          <p className="footer-contact">Mobile: +968 92850600</p>
          <p className="footer-contact">Tel: +968 24050604</p>
        </div>

        <ul className="footer-links">
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="footer-link">About Us</Link>
          </li>
          <li>
            <Link to="/products" className="footer-link">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </li>
        </ul>

        <ul className="footer-socials">
          <li>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGooglePlusG />
            </Link>
          </li>
          <li>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2019 Asmak Muscat Int&apos;l. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterSection;
