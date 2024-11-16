import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import heroSlider1 from "../assets/images/slides_1.jpg";
import heroSlider2 from "../assets/images/slides_2.jpg";
import heroSlider3 from "../assets/images/slides_3.jpg";

const HeroSection = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      bgImage: heroSlider1,
      subtitle: "Sustainability & Quality",
      title: "Fresh Seafood from the Arabian Sea",
      text: "Located in the Sultanate of Oman, we are committed to providing the best quality seafood while supporting local fishing communities.",
    },
    {
      bgImage: heroSlider2,
      subtitle: "Our Operations",
      title: "Processing, Import, and Export",
      text: "Engaged in the processing and packing of frozen seafood, we cater to wholesale and retail markets.",
    },
    {
      bgImage: heroSlider3,
      subtitle: "Global Reach",
      title: "Building Long-Term Relationships",
      text: "With clients across Oman, UAE, Egypt, and beyond, we ensure reliability and quality service.",
    },
  ];

  const updateSliderPos = (newPos) => {
    setCurrentSlidePos(newPos);
  };

  const slideNext = () => {
    const newPos = (currentSlidePos + 1) % heroSliderItems.length;
    updateSliderPos(newPos);
  };

  const slidePrev = () => {
    const newPos =
      currentSlidePos === 0 ? heroSliderItems.length - 1 : currentSlidePos - 1;
    updateSliderPos(newPos);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(slideNext, 7000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlidePos]);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider">
        {heroSliderItems.map((item, index) => (
          <li
            className={`slider-item ${index === currentSlidePos ? "active" : ""}`}
            key={index}
          >
            <div className="slider-bg">
              <img
                src={item.bgImage}
                width="1880"
                height="950"
                alt=""
                className="img-cover"
              />
            </div>
            <p className="label-2  slider-reveal">
              {item.subtitle}
            </p>
            <h1 className="display-1 hero-title slider-reveal">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p>
           
          </li>
        ))}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={slidePrev}
      >
        <IoChevronBack className="ion-icon" />
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={slideNext}
      >
        <IoChevronForward className="ion-icon" />
      </button>
      
    </section>
  );
};

export default HeroSection;
