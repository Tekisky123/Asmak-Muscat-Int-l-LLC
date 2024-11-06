import { Link } from "react-router-dom";
import logo from "../assets/images/logo3.jpg";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer
      className="footer section has-bg-image text-center"
    
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <Link to="/" className="logo">
              <img
                src={logo}
                width="260"
                height="50"
                loading="lazy"
                alt="asmak muscat intl home"
              />
            </Link>

            <address className="body-4">
              P.O.BOX 1741 POSTAL CODE 122 AL MABELA SULTANATE OF OMAN C.R.NO
              1341511
            </address>

            <Link to="mailto:info@asmakmct.com" className="body-4 contact-link">
              info@asmakmct.com
            </Link>
            <Link to="tel:+88123123456" className="body-4 contact-link">
              Contact Us : <br />
              Mobile : +968 92850600
            </Link>

            <p className="body-4 contact-link"> Tel : +968 24050604</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Stay Connected With Us</p>
            <p className="label-1">
              Enter Your Email to Get{" "}
              <span className="span">Exclusive Offers</span>
            </p>

            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button>
            </form>
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
                to="/location"
                className="label-2 footer-link hover-underline"
              >
                Location
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

          <ul className="footer-list">
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaTwitter className="icon" /> Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaFacebookF className="icon" /> Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://plus.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaGooglePlusG className="icon" /> Google+
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-2 footer-link hover-underline"
              >
                <FaLinkedinIn className="icon" /> LinkedIn
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
