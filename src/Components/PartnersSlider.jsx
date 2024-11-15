import Slider from "react-slick";
import { Link } from "react-router-dom";

import partner1 from "../assets/images/clients-icon-1.png";
import partner2 from "../assets/images/clients-icon-2.png";
import partner3 from "../assets/images/clients-icon-3.png";
import partner4 from "../assets/images/clients-icon-4.png";

// Slider settings for react-slick
const sliderSettings = {
  infinite: true, // Enable infinite loop
  speed: 500, // Slide speed in ms
  slidesToShow: 4, // Show 4 images at a time
  slidesToScroll: 1, // Scroll 1 image at a time
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Time interval for autoplay in ms (2 seconds)
  pauseOnHover: true, // Pause autoplay on hover
  responsive: [
    {
      breakpoint: 1024, // For screens 1024px and below
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens 768px and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // For screens 480px and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PartnersSlider = () => {
  // Array of partner images
  const partnerImages = [partner1, partner2, partner3, partner4];

  return (
    <section className="partners-slider-section" id="partners-slider">
      <div className="container">
        <h2 className="headline-2 text-center">Our Partners</h2>
        <Slider {...sliderSettings}>
          {partnerImages.map((image, index) => (
            <div className="partner-card" key={index}>
              <Link to="#" className="partner-link">
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="partner-img"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSlider;
