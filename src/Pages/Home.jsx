import HeroSection from "../Components/HeroSection";
import MenuSection from "../Components/MenuSection";
import ReservationSection from "../Components/ReservationSection";
import ServiceSection from "../Components/ServiceSection";
import AboutSection from "../Components/AboutSection";
import TestimonialSection from "../Components/TestimonialSection";
import FeaturesSection from "../Components/FeaturesSection";
import EventSection from "../Components/EventSection";
// import WhatWeOffer from "../Components/WhatWeOffer";
import AdvantageCards from "../Components/AdvantageCards";
import MapWithContact from "../Components/MapWithContact";
import CountdownSection from "../Components/CountdownSection";
import OurCoreProducts from "../Components/OurCoreProducts";
// import PartnersSlider from "../Components/PartnersSlider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      {/* <WhatWeOffer/> */}
      <AdvantageCards/>
      <FeaturesSection />
      <CountdownSection/>
      <OurCoreProducts/>
      <MenuSection />
      <EventSection />
      <TestimonialSection />
      <ReservationSection />
      <MapWithContact/>
      {/* <PartnersSlider/> */}
    </>
  );
};

export default Home;
