import { Link } from "react-router-dom";
import yellowfinImage from "../assets/images/yellowfinn.avif";
import kawakawaImage from "../assets/images/Kawa-Kawa-Tuna-scaled.jpg";
import bonitoImage from "../assets/images/bonitol-web.jpg";
import emperorImage from "../assets/images/Emperor.jpg";
import arabianPandoraImage from "../assets/images/arabian.jpg";
import redSeabreamImage from "../assets/images/fish-red-bream.jpg";
import trevallyImage from "../assets/images/travelly.jpg";
import kofferImage from "../assets/images/koffer.jpg";
import threadfinBreamImage from "../assets/images/treadfin.jpg";
import blueLineSnapperImage from "../assets/images/blueline.jpg";

const productData = [
  { id: 1, name: "Yellow Fin Tuna", scientificName: "Thunnus Albacares", image: yellowfinImage },
  { id: 2, name: "Kawa Kawa Tuna", scientificName: "Euthynnus Affinis", image: kawakawaImage },
  { id: 3, name: "Bonito Tuna", scientificName: "Sarda Orientalis", image: bonitoImage },
  { id: 4, name: "Emperor", scientificName: "Lethrinus Spp", image: emperorImage },
  { id: 5, name: "Arabian Pandora", scientificName: "Pagellus Affinis", image: arabianPandoraImage },
  { id: 6, name: "Red Seabream", scientificName: "Pagrus Pagrus", image: redSeabreamImage },
  { id: 7, name: "Trevally", scientificName: "Caranx Spp", image: trevallyImage },
  { id: 8, name: "Koffer", scientificName: "Evynnis Ehrenberji", image: kofferImage },
  { id: 9, name: "Threadfin Bream", scientificName: "Nemipterus Japonicus", image: threadfinBreamImage },
  { id: 10, name: "Blue Line Snapper", scientificName: "Lujanus Coerulineatus", image: blueLineSnapperImage },
];

const MenuSection = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2 className="headline-1 text-center">Discover our products</h2>
        <ul className="grid-list">
          {productData.map((item) => (
            <li key={item.id} className="menu-card">
              <figure className="menu-card-banner">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="menu-img-cover"
                />
                <figcaption className="card-title-menu">
                  <Link to="#" className="menu-card-title">
                    {item.name}
                  </Link>
                  <p className="menu-card-scientific-name">{item.scientificName}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuSection;
