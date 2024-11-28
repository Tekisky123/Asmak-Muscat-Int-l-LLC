import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
 
  IoCloseOutline,
  IoMenuOutline,
} from "react-icons/io5";

const LargeScreenHeader = () => {
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

    // Close sidebar on link click
    const navLinks = document.querySelectorAll(".navbar-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
          toggleNavbar();
        }
      });
    });

    const header = document.querySelector("[data-header]");
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
        hideHeader();
      } else {
        header.classList.remove("active");
      }
    });
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "navbar-link hover-underline active"
      : "navbar-link";

  return (
    <>
     

      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} width="250" height="60" alt="logo" />
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
              <img src={logo} width="250" height="60" alt="logo" />
            </Link>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className={isActive("/")} data-nav-toggler>
                  <span className="span">Home</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about-us" className={isActive("/about-us")} data-nav-toggler>
                  <span className="span">About Us</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/products" className={isActive("/products")} data-nav-toggler>
                  <span className="span">Products</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/location" className={isActive("/location")} data-nav-toggler>
                  <span className="span">Location</span>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact-us" className={isActive("/contact-us")} data-nav-toggler>
                  <span className="span">Contact Us</span>
                </Link>
              </li>
              <li className="navbar-item gallery-text">
                <Link to="/gallery" className={isActive("/gallery")} data-nav-toggler>
                  <span className="span">Gallery</span>
                </Link>
              </li>
              
            </ul>
            
          </nav>

          <Link to="/gallery" className="btn btn-secondary">
            <span className="text text-1">Gallery</span>
            <span className="text text-2" aria-hidden="true">
              Gallery
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

export default LargeScreenHeader;
