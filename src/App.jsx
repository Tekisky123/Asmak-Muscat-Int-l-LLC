import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import Home from "./Pages/Home";
import FloatingIcons from "./Components/FloatingIcons";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurCoreProducts from "./Components/OurCoreProducts";
import { useEffect } from "react";
import MenuSection from "./Components/MenuSection";
import MapWithContact from "./Components/MapWithContact";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <HeaderSection />
      <FloatingIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<MenuSection />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/location" element={<MapWithContact />} />
        <Route path="/core-product" element={<OurCoreProducts />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
