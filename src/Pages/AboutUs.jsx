import "../assets/Styles/AboutUs.css";
import img1 from "../assets/images/factorynew1.jpg";
import img2 from "../assets/images/office.jpg";
import img3 from "../assets/images/ship.png";
import img4 from "../assets/images/product-one.png";
import AdvantageCards from "../Components/AdvantageCards";
import FeaturesSection from "../Components/FeaturesSection";

const AboutUs = () => {
  return (
    <>
      <div className="about-container container mt-5 mb-5">
        <div className="contentLeft">
          <div className="row">
            <div className="imgWrapper">
              <img src={img1} alt="Sourcing Image" />
            </div>
            <div className="imgWrapper">
              <img src={img2} alt="Supply Image" />
            </div>
            <div className="imgWrapper">
              <img src={img3} alt="Products Image" />
            </div>
            <div className="imgWrapper">
              <img src={img4} alt="About Us Image" />
            </div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="contentRight">
          <div className="content">
            <h2 className="headline-1">Asmak Muscat Int&apos;l LLC</h2>
            <p>
              Established in 2018, <strong>Asmak Muscat Int&apos;l LLC</strong>{" "}
              is led by a founder with over 22 years of experience in the
              seafood industry. Operating from the pristine waters of Oman in
              the Indian Ocean (FAO51), we specialize in sourcing high-quality
              seafood products while maintaining sustainable and eco-friendly
              practices.
            </p>
            <p>
              Our commitment extends beyond sourcing premium quality fish. We
              aim to develop long-term relationships with our clients across
              Oman, UAE, Qatar, Baharian , Iraq, Egypt, India, Bangladesh,
              Thailand, Malyasia, Ghana, Benin, Togo, Cote d&apos;Ivory,
              Senegal, Mozambique, Haiti, Cameroon, Guinea, Congo, Liberia,
              South Africaand numerous other countries by supplying high-quality
              products tailored to their needs.
            </p>
            <p>
              With a wide range of seafood, including pelagic fish, we cater to
              global demands while ensuring our products meet the highest
              quality standards.
            </p>
          </div>
        </div>
      </div>
      <AdvantageCards />
      <FeaturesSection />
    </>
  );
};

export default AboutUs;
