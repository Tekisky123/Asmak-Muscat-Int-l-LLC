import HeroSection from "../Components/HeroSection";
import MenuSection from "../Components/MenuSection";
import ReservationSection from "../Components/ReservationSection";
import ServiceSection from "../Components/ServiceSection";
import SpecialDishSection from "../Components/SpecialDishSection";
import AboutSection from "../Components/AboutSection";
import TestimonialSection from "../Components/TestimonialSection";
import FeaturesSection from "../Components/FeaturesSection";
import EventSection from "../Components/EventSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SpecialDishSection />
      <MenuSection />
      <TestimonialSection />
      <ReservationSection />
      <FeaturesSection />
      <EventSection />
    </>
  );
};

export default Home;
