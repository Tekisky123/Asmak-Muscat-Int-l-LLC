import { Link, useLocation } from "react-router-dom";
import {
  IoClose,
  IoMenu,
  IoHome,
  IoInformationCircle,
  IoCart,
  IoLocation,
  IoCall,
  IoImages,
} from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../assets/Styles/SmallScreenHeader.css";

const SmallScreenHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) =>
    location.pathname === path ? "sidebar-link active" : "sidebar-link";

  const menuItems = [
    { path: "/", icon: <IoHome className="sidebar-icon" />, label: "Home" },
    { path: "/about-us", icon: <IoInformationCircle className="sidebar-icon" />, label: "About Us" },
    { path: "/products", icon: <IoCart className="sidebar-icon" />, label: "Products" },
    { path: "/location", icon: <IoLocation className="sidebar-icon" />, label: "Location" },
    { path: "/contact-us", icon: <IoCall className="sidebar-icon" />, label: "Contact Us" },
    { path: "/gallery", icon: <IoImages className="sidebar-icon" />, label: "Gallery" },
  ];

  return (
    <>
      <header className={`small-screen-header ${hidden ? "hidden-header" : ""}`}>
        <div className="small-screen-header-container">
          <Link to="/" className="small-screen-header-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="menu-toggle-btn" onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
        <Link to="/" className="small-screen-header-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="menu-toggle-btn" onClick={toggleMenu}>
            <IoClose />
          </button>
        </div>
        <ul className="sidebar-list">
          {menuItems.map(({ path, icon, label }) => (
            <li className="sidebar-item" key={path}>
              <Link to={path} className={isActive(path)} onClick={closeMenu}>
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && <div className="overlay active" onClick={closeMenu}></div>}
    </>
  );
};

export default SmallScreenHeader;
