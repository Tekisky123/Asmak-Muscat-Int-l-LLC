import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo3.jpg";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoCloseOutline,
  IoMenuOutline,
} from "react-icons/io5";

const HeaderSection = () => {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    navTogglers.forEach((toggler) => {
      toggler.addEventListener("click", toggleNavbar);
    });

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");
    let lastScrollPos = 0;

    const hideHeader = () => {
      const isScrollBottom = lastScrollPos < window.scrollY;
      if (isScrollBottom) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
      lastScrollPos = window.scrollY;
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        hideHeader();
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    });
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "navbar-link hover-underline active"
      : "navbar-link";

  return (
    <>
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <IoLocationOutline aria-hidden="true" />
            </div>
            <span className="span">
              P.O.BOX 1741 POSTAL CODE 122 AL MABELA SULTANATE OF OMAN C.R.NO
              1341511
            </span>
          </address>
          <div className="separator"></div>

          <Link to="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <IoCallOutline aria-hidden="true" />
            </div>
            <span className="span">+968 92850600</span>
          </Link>
          <div className="separator"></div>
          <Link to="mailto:info@asmakmct.com" className="topbar-item link">
            <div className="icon">
              <IoMailOutline />
            </div>
            <span className="span">info@asmakmct.com</span>
          </Link>
        </div>
      </div>

      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} width="160" height="50" alt="logo" />
          </Link>

          <nav className="navbar" data-navbar>
            <button
              className="close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <IoCloseOutline aria-hidden="true" />
            </button>

            <Link to="/" className="logo">
              <img src={logo} width="160" height="50" alt="logo" />
            </Link>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className={isActive("/")}>
                  <span className="span">Home</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about-us" className={isActive("/about-us")}>
                  <span className="span">About Us</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/products" className={isActive("/products")}>
                  <span className="span">Products</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/location" className={isActive("/location")}>
                  <span className="span">Location</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact-us" className={isActive("/contact-us")}>
                  <span className="span">Contact Us</span>
                </Link>
              </li>
            </ul>
          </nav>

          <Link to="" className="btn btn-secondary">
            <span className="text text-1">Explore Our Seafood</span>
            <span className="text text-2" aria-hidden="true">
              Explore Our Seafood
            </span>
          </Link>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <IoMenuOutline aria-hidden="true" />
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
