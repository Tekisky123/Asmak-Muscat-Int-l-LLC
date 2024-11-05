import specialDishBanner from "../assets/images/flag.jpeg";
import badge from "../assets/images/badge-1.png";
import shape1 from "../assets/images/shape-4.png";
import shape2 from "../assets/images/shape-9.png";

const SpecialDishSection = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img
          src={specialDishBanner}
         
          loading="lazy"
          alt="Asmak Muscat International"
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img src={badge} width="28" height="41" loading="lazy" alt="quality badge" className="abs-img" />

          <p className="section-subtitle label-2">Asmak Muscat International</p>

          <h2 className="headline-1 section-title">Sustainable Seafood Excellence</h2>

          <p className="section-text">
            Located in Oman, Asmak Muscat Int&apos;l collaborates with local fishing communities to provide fresh,
            high-quality seafood while maintaining sustainability in the pristine waters of the Indian Ocean.
            We ensure each product meets the highest standards, whether it’s delivered fresh or frozen, 
            by road, sea, or air to markets worldwide.
          </p>

         

          <a href="mailto:info@asmkmct.com" className="btn btn-primary">
            <span className="text text-1">Contact Us</span>
            <span className="text text-2" aria-hidden="true">Contact Us</span>
          </a>
        </div>
      </div>

      <img src={shape1} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />
      <img src={shape2} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
    </section>
  );
};

export default SpecialDishSection;
