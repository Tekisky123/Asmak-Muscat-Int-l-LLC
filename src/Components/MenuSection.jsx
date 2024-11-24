import { Link } from "react-router-dom";
import menu1 from "../assets/images/BlueLineSnapper.jpg";
import menu2 from "../assets/images/Cuttlefish.jpg";
import menu3 from "../assets/images/Emperor.jpg";
import menu4 from "../assets/images/grouper.jpeg";
import menu5 from "../assets/images/Soldier.jpg";
import menu6 from "../assets/images/Yellowfin.avif";
import menu7 from "../assets/images/Panulirus.jpeg";
import menu8 from "../assets/images/Trichiurus.jpg";
import menu9 from "../assets/images/Sardinella.jpeg";
import menu10 from "../assets/images/Penaeus.jpg";
import menu11 from "../assets/images/Carangoides.png";
import menu12 from "../assets/images/Epinephelus.jpg";

const productData = [
  { id: 13, name: "Blue Line Snapper", image: menu1 },
  { id: 14, name: "Cuttlefish", image: menu2 },
  { id: 15, name: "Emperor", image: menu3 },
  { id: 16, name: "Grouper (Hamour)", image: menu4 },
  { id: 17, name: "Soldier Bream (Koffer)", image: menu5 },
  { id: 18, name: "Yellowfin Tuna", image: menu6 },
  { id: 19, name: "Lobster", image: menu7 },
  { id: 20, name: "Ribbon Fish", image: menu8 },
  { id: 21, name: "Sardines", image: menu9 },
  { id: 22, name: "Shrimps", image: menu10 },
  { id: 23, name: "Trevally", image: menu11 },
  { id: 24, name: "Red Grouper (Disco)", image: menu12 },
];

const MenuSection = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2 className="headline-1 text-center">Discover our products</h2>
        <ul className="grid-list">
          {productData.map((item, index) => (
            <li key={index} className="menu-card">
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
