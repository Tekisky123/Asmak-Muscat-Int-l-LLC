import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import heroSlider1 from "../assets/images/slidernew.png";
import heroSlider2 from "../assets/images/factorynew2.jpg";
import heroSlider3 from "../assets/images/boatnew.jpg";

const HeroSection = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      bgImage: heroSlider2,
      subtitle: "",
      title: "Welcome To",
      text1: "  Asmak Muscat Int'l.",
    },
    {
      bgImage: heroSlider1,
      subtitle: "Our Operations",
      heading: "of Frozen Fish",
      title: "Processor and Exporter",
      text: "We specialize in processing and exporting, proudly delivering top-quality products to wholesale customers worldwide.",
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
            {/* <p className="label-2  slider-reveal">{item.subtitle}</p> */}
            <h1 className="display-1 hero-title slider-reveal">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <h1 className="display-1 hero-title slider-reveal">
                    <span style={{ fontSize: "30px" }}>{item.heading}</span>
                  </h1>
                  <h1 className="display-1 hero-title slider-reveal">
                    <span>{item.text1}</span>
                  </h1>
                </span>
              ))}
            </h1>

            <p className="hero-text slider-reveal">{item.text}</p>
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
