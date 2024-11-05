import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import heroSlider1 from "../assets/images/hero-slider-1.jpg";
import heroSlider2 from "../assets/images/hero-slider-2.jpg";
import heroSlider3 from "../assets/images/hero-slider-3.jpg";
import heroIcon from "../assets/images/hero-icon.png";

const HeroSection = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      bgImage: heroSlider1,
      subtitle: "Traditional & Hygiene",
      title: "For the love of delicious food",
      text: "Come with family & feel the joy of mouthwatering food",
    },
    {
      bgImage: heroSlider2,
      subtitle: "Delightful Experience",
      title: "Flavors Inspired by the Seasons",
      text: "Come with family & feel the joy of mouthwatering food",
    },
    {
      bgImage: heroSlider3,
      subtitle: "Amazing & Delicious",
      title: "Where every flavor tells a story",
      text: "Come with family & feel the joy of mouthwatering food",
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
            className={`slider-item ${
              index === currentSlidePos ? "active" : ""
            }`}
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
            <p className="label-2 section-subtitle slider-reveal">
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
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={slidePrev}
      >
        <IoChevronBack />
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={slideNext}
      >
        <IoChevronForward />
      </button>
      <a href="#" className="hero-btn has-after">
        <img src={heroIcon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
};

export default HeroSection;
