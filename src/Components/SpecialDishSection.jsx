import specialDishBanner from "../assets/images/flag.jpeg";
import { Link } from "react-router-dom";

const SpecialDishSection = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
        <img
          src={specialDishBanner}
         
          loading="lazy"
          alt="Asmak Muscat International"
          className=""
        />

      <div className="special-dish-content bg-black-10">
        <div className="container">

          <p className="section-subtitle label-2">Asmak Muscat International</p>

          <h2 className="headline-1 section-title">Sustainable Seafood Excellence</h2>

          <p className="section-text">
            Located in Oman, Asmak Muscat Int&apos;l collaborates with local fishing communities to provide fresh,
            high-quality seafood while maintaining sustainability in the pristine waters of the Indian Ocean.
            We ensure each product meets the highest standards, whether it’s delivered fresh or frozen, 
            by road, sea, or air to markets worldwide.
          </p>

         

          <Link to="mailto:info@asmkmct.com" className="btn btn-primary">
            <span className="text text-1">Contact Us</span>
            <span className="text text-2" aria-hidden="true">Contact Us</span>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default SpecialDishSection;
