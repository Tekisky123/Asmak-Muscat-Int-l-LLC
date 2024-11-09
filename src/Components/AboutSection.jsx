import { useEffect } from "react";
import aboutBanner from "../assets/images/aboutimg.png";
import aboutAbsImage from "../assets/images/aboutimg2.png";
import { Link } from "react-router-dom";


const AboutSection = () => {
  useEffect(() => {
    // PARALLAX EFFECT
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");

    let x, y;

    const handleMouseMove = (event) => {
      x = (event.clientX / window.innerWidth * 10) - 5;
      y = (event.clientY / window.innerHeight * 10) - 5;

      x = x - (x * 2);
      y = y - (y * 2);

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed);
        item.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Journey</p>
          <h2 className="headline-1 section-title">Seafood Excellence Since Inception</h2>
          <p className="section-text">
            Asmak Muscat Int&apos;l has been a cornerstone in the seafood industry, committed to delivering the highest quality
            seafood sourced directly from Oman’s pristine waters. Our journey began with a vision to provide fresh, frozen, 
            and expertly handled seafood to local and global markets, adhering to sustainability and quality at every step.
          </p>

          <div className="contact-label">For Orders & Inquiries</div>
          <Link to="tel:+96812345678" className="body-1 contact-number hover-underline">+968 123 45678</Link>
          <Link to="#" className="btn btn-primary">
            <span className="text text-1">Learn More</span>
            <span className="text text-2" aria-hidden="true">Learn More</span>
          </Link>
        </div>

        <figure className="about-banner">
          <img
            src={aboutBanner}
            width="570"
            height="570"
            loading="lazy"
            alt="about banner showcasing seafood"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />
          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <img src={aboutAbsImage} width="285" height="285" loading="lazy" alt="fresh seafood display" className="w-100" />
          </div>
          {/* <div className="abs-img abs-img-2 has-before">
            <img src={badge} width="133" height="134" loading="lazy" alt="quality badge" />
          </div> */}
        </figure>

      </div>
    </section>
  );
};

export default AboutSection;
