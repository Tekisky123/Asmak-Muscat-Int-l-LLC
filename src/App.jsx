import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import Home from "./Pages/Home";
import FloatingIcons from "./Components/FloatingIcons";
import AboutUs from "./Pages/AboutUs";
import Product from "./Pages/Product";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <HeaderSection />
      <FloatingIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
