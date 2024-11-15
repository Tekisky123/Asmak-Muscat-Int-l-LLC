import { useState } from "react";
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
import whiteshad from "../assets/images/whiteShadFish.jpg";
import catFish from "../assets/images/carFish.jpg";
import BARRACUDA from "../assets/images/BarracudaFish.jpg";
import SPOTTED from "../assets/images/spottedGruntFish.jpg";
import YELLOWTAIL from "../assets/images/yellowTailScadFish.jpg";
import CHUBMACKEREL from "../assets/images/CHUBMACKEREL.png";
import INDIANMACKEREL from "../assets/images/INDIANMACKEREL.jpeg";
import SARDINE from "../assets/images/SARDINE.jpg";
import GREYMULLET from "../assets/images/GREYMULLET.webp";
import CROAKER from "../assets/images/CROAKER.png";
import SKIPJACKTUNA from "../assets/images/SKIPJACKTUNA.jpg";

const productData = [
  {
    id: 1,
    name: "HORSE MACKEREL",
    scientificName: "Trachuru Trachurus",
    image: YELLOWTAIL,
  },
  {
    id: 2,
    name: "CHUB MACKEREL",
    scientificName: "Scomber Japonicus",
    image: CHUBMACKEREL,
  },
  {
    id: 3,
    name: "INDIAN MACKEREL",
    scientificName: "Rastrelliger Kanagurta",
    image: INDIANMACKEREL,
  },
  {
    id: 4,
    name: "YELLOW TAIL SCAD",
    scientificName: "Atule Mate",
    image: YELLOWTAIL,
  },
  {
    id: 5,
    name: "SARDINE",
    scientificName: "Sardinella Longiceps",
    image: SARDINE,
  },
  {
    id: 6,
    name: "GREY MULLET",
    scientificName: "Mugil Cephalus",
    image: GREYMULLET,
  },
  {
    id: 7,
    name: "WHITE SHAD FISH (HILSA)",
    scientificName: "Tenualosa Ilisha",
    image: whiteshad,
  },
  {
    id: 8,
    name: "CROAKER",
    scientificName: "Argyrosomus Regius",
    image: CROAKER,
  },
  {
    id: 9,
    name: "SKIPJACK TUNA",
    scientificName: "Katsuwonus Pelamis",
    image: SKIPJACKTUNA,
  },
  { id: 10, name: "CAT FISH", scientificName: "Siluriformes", image: catFish },
  { id: 11, name: "BARRACUDA", scientificName: "Sphyraena", image: BARRACUDA },
  {
    id: 12,
    name: "SPOTTED GRUNT",
    scientificName: "Pomadasys Maculatus",
    image: SPOTTED,
  },
  {
    id: 13,
    name: "Blue Line Snapper",
    scientificName: "Lutjanus Spp",
    image: menu1,
  },
  {
    id: 14,
    name: "Cuttlefish",
    scientificName: "Sepia Pharaonis",
    image: menu2,
  },
  { id: 15, name: "Emperor", scientificName: "Lethrinus Spp", image: menu3 },
  {
    id: 16,
    name: "Grouper (Hamour)",
    scientificName: "Epinephelus Spp",
    image: menu4,
  },
  {
    id: 17,
    name: "Soldier Bream (Koffer)",
    scientificName: "Argyrops Spp",
    image: menu5,
  },
  {
    id: 18,
    name: "Yellowfin Tuna",
    scientificName: "Thunnus albacares",
    image: menu6,
  },
  {
    id: 19,
    name: "Lobster",
    scientificName: "Panulirus homarus",
    image: menu7,
  },
  {
    id: 20,
    name: "Ribbon Fish",
    scientificName: "Trichiurus lepturus",
    image: menu8,
  },
  {
    id: 21,
    name: "Sardines",
    scientificName: "Sardinella longiceps",
    image: menu9,
  },
  { id: 22, name: "Shrimps", scientificName: "Penaeus Spp", image: menu10 },
  {
    id: 23,
    name: "Trevally",
    scientificName: "Carangoides spp",
    image: menu11,
  },
  {
    id: 24,
    name: "Red Grouper (Disco)",
    scientificName: "Epinephelus diacanthus",
    image: menu12,
  },
];

const MenuSection = () => {
  const [showAll, setShowAll] = useState(false); // State to manage the visibility of all menu items

  const handleToggle = () => {
    setShowAll((prev) => !prev); // Toggle the state
  };
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Products</p>
        <h2 className="headline-1 text-center">Our Products</h2>

        <ul className="grid-list">
          {productData.slice(0, showAll ? productData.length : 6).map((item, index) => (
            <li key={index}>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 200, "--height": 150 }}
                >
                  <img
                    src={item.image}
                    loading="lazy"
                    alt={item.name}
                    className="img-cover product-img"
                  />
                </figure>
                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <Link to="#" className="menu-card-title">
                        {item.name}
                      </Link>
                    </h3>
                    <span className="label-1">{item.scientificName}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleToggle} className="btn btn-primary">
          <span className="text text-1">
            {showAll ? "View Less" : "View All Products"}
          </span>
          <span className="text text-2" aria-hidden="true">
            {showAll ? "View Less" : "View All Products"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default MenuSection;
