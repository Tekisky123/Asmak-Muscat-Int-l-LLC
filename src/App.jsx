import "./App.css";
import AboutSection from "./Components/AboutSection";
import EventSection from "./Components/EventSection";
import FeaturesSection from "./Components/FeaturesSection";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import MenuSection from "./Components/MenuSection";
import ReservationSection from "./Components/ReservationSection";
import ServiceSection from "./Components/ServiceSection";
import SpecialDishSection from "./Components/SpecialDishSection";
import TestimonialSection from "./Components/TestimonialSection";

function App() {
  return (
    <>
      <HeaderSection />

      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SpecialDishSection/>
      <MenuSection/>
      <TestimonialSection/>
      <ReservationSection/>
      <FeaturesSection/>
      <EventSection/>
      <FooterSection/>
    </>
  );
}

export default App;
