import "../assets/Styles/Partners.css"
import omanImage from "../assets/images/oman.png";
import uaeImage from "../assets/images/uae.png";
import qatarImage from "../assets/images/qatar.png";
import bahrainImage from "../assets/images/bahrain.jpg";
import iraqImage from "../assets/images/iraq.png";
import egyptImage from "../assets/images/egypt.png";
import indiaImage from "../assets/images/india.png";
import bangladeshImage from "../assets/images/bangladesh.png";
import thailandImage from "../assets/images/thailand.png";
import malaysiaImage from "../assets/images/malaysia.png";
import ghanaImage from "../assets/images/ghana.png";
import beninImage from "../assets/images/benin.png";
import togoImage from "../assets/images/togo.png";
import coteImage from "../assets/images/cotedivory.webp";
import senegalImage from "../assets/images/senegal.png";
import mozambiqueImage from "../assets/images/mozambique.png";
import haitiImage from "../assets/images/haiti.png";
import cameroonImage from "../assets/images/cameroon.png";
import guineaImage from "../assets/images/guinea.png";
import congoImage from "../assets/images/congo.png";
import liberiaImage from "../assets/images/liberia.png";
import southAfricaImage from "../assets/images/southafrica.png";

// Country Data with name and image
const countries = [
  { name: "Oman", image: omanImage },
  { name: "UAE", image: uaeImage },
  { name: "Qatar", image: qatarImage },
  { name: "Bahrain", image: bahrainImage },
  { name: "Iraq", image: iraqImage },
  { name: "Egypt", image: egyptImage },
  { name: "India", image: indiaImage },
  { name: "Bangladesh", image: bangladeshImage },
  { name: "Thailand", image: thailandImage },
  { name: "Malaysia", image: malaysiaImage },
  { name: "Ghana", image: ghanaImage },
  { name: "Benin", image: beninImage },
  { name: "Togo", image: togoImage },
  { name: "Cote d'Ivory", image: coteImage },
  { name: "Senegal", image: senegalImage },
  { name: "Mozambique", image: mozambiqueImage },
  { name: "Haiti", image: haitiImage },
  { name: "Cameroon", image: cameroonImage },
  { name: "Guinea", image: guineaImage },
  { name: "Congo", image: congoImage },
  { name: "Liberia", image: liberiaImage },
  { name: "South Africa", image: southAfricaImage }
];

const Partners = () => {
  return (
    <section className="partners-section">
      <h2 className="headline-1">Our Global Partners</h2>
      <div className="partners-grid">
        {countries.map((country, index) => (
          <div key={index} className="partner-card">
            <div className="partner-image-container">
              <img
                src={country.image}
                alt={country.name}
                className="partner-image"
              />
              <div className="overlay">
                <span className="country-name">{country.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
