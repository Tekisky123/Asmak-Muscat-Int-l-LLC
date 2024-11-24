import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="footer section  text-center">
      <div className="">
        <div className=" grid-list">
          <div className="footer-brand has-before has-after">
            <Link to="/" className="logo">
              <img
                src={logo}
                width="260"
                height="50"
                loading="lazy"
                alt="Asmak Muscat Intl Logo"
              />
            </Link>

            <address className="body-4">
              P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN
            </address>

            <Link to="mailto:info@asmakmct.com" className="body-4 contact-link">
              info@asmakmct.com
            </Link>

            <p className="body-4 contact-link">Mobile: +968 92850600</p>
            <p className="body-4 contact-link">Tel: +968 24050604</p>
          </div>

          <ul className="footer-list">
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="label-2 footer-link hover-underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="label-2 footer-link hover-underline"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="label-2 footer-link hover-underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className=" icon-list">
            <li>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaTwitter className="icon" /> 
              </Link>
            </li>
            <li>
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaFacebookF className="icon" /> 
              </Link>
            </li>
            <li>
              <Link
                to="https://plus.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaGooglePlusG className="icon" /> 
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaLinkedinIn className="icon" /> 
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2019 Asmak Muscat Int&apos;l. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
