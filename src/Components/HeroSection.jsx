import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import heroSlider1 from "../assets/images/slider-1.jpg";
import heroSlider2 from "../assets/images/slider-2.jpg";
import heroSlider3 from "../assets/images/slider-3.jpg";
import heroSlider4 from "../assets/images/slider-6.jpg";

const HeroSection = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      bgImage: heroSlider1,
      subtitle: "",
      title: "Welcome To",
      text: "Asmak Muscat Int'l.",
    },
    {
      bgImage: heroSlider2,
      subtitle: "Our Operations",
      title: "Processing and Export",
      text: "Specialized in processing and export, we proudly serve wholesale customers with top-quality products.",
    },
    {
      bgImage: heroSlider4,
      subtitle: "Global Reach",
      title: "Welcome To",
      text: "Asmak Muscat Int'l.",
    },
    {
      bgImage: heroSlider3,
      subtitle: "Global Reach",
      title: "Building Long-Term Relationships",
      text: `Oman, UAE, Qatar,
Baharian , Iraq, Egypt, India, Bangladesh, Thailand, Malyasia,
Ghana, Benin, Togo, Cote d'Ivory, Senegal, Mozambique, Haiti,
Cameroon, Guinea, Congo, Liberia, South Africa and many more.`,
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
            <p className="label-2  slider-reveal">{item.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="-2 hero-text slider-reveal">{item.text}</p>
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
