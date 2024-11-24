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
import MapWithContact from "./Components/MapWithContact";
import EventSection from "./Components/EventSection";
import AboutSection from "./Components/AboutSection";
import Partners from "./Pages/Partners";
import GalleryPage from "./Pages/GalleryPage";
import AdvertisementComponent from "./Components/AdvertisementComponent";
import Product from "./Pages/Product";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <HeaderSection />
      <AdvertisementComponent/>
      <FloatingIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/location" element={<MapWithContact />} />
        <Route path="/core-product" element={<OurCoreProducts />} />
        <Route path="/event" element={<EventSection />} />
        <Route path="/leader" element={<AboutSection />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gallery" element={<GalleryPage />} />

      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
