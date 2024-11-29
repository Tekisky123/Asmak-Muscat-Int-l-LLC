import HeroSection from "../Components/HeroSection";
import MenuSection from "../Components/MenuSection";
import ServiceSection from "../Components/ServiceSection";
import AboutSection from "../Components/AboutSection";
import FeaturesSection from "../Components/FeaturesSection";
import EventSection from "../Components/EventSection";
// import WhatWeOffer from "../Components/WhatWeOffer";
import AdvantageCards from "../Components/AdvantageCards";
import MapWithContact from "../Components/MapWithContact";
import CountdownSection from "../Components/CountdownSection";
import OurCoreProducts from "../Components/OurCoreProducts";
import Partners from "./Partners";
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
      <Partners/>
      <MapWithContact/>
      {/* <PartnersSlider/> */}
    </>
  );
};

export default Home;
