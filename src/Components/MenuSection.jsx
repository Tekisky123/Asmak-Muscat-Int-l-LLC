import { useState } from "react";
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
import shape5 from "../assets/images/shape-5.png";
import shape6 from "../assets/images/shape-6.png";

const menuData = [
  {
    name: "Blue Line Snapper",
    scientificName: "Lutjanus Spp",
    description: "A flavorful fish known for its delicate texture.",
    img: menu1,
  },
  {
    name: "Cuttlefish",
    scientificName: "Sepia Pharaonis",
    description: "Tender and savory, perfect for grilling.",
    img: menu2,
  },
  {
    name: "Emperor",
    scientificName: "Lethrinus Spp",
    description: "Rich in flavor, ideal for seafood lovers.",
    img: menu3,
  },
  {
    name: "Grouper (Hamour)",
    scientificName: "Epinephelus Spp",
    description: "A meaty fish that's great in various dishes.",
    img: menu4,
  },
  {
    name: "Soldier Bream (Koffer)",
    scientificName: "Argyrops Spp",
    description: "Sweet and mild, enjoyed grilled or fried.",
    img: menu5,
  },
  {
    name: "Yellowfin Tuna",
    scientificName: "Thunnus albacares",
    description: "Known for its rich taste, perfect for sashimi.",
    img: menu6,
  },
  {
    name: "Lobster",
    scientificName: "Panulirus homarus",
    description: "A luxurious delicacy, tender and sweet.",
    img: menu7,
  },
  {
    name: "Ribbon Fish",
    scientificName: "Trichiurus lepturus",
    description: "Light and flaky, great for frying.",
    img: menu8,
  },
  {
    name: "Sardines",
    scientificName: "Sardinella longiceps",
    description: "Nutritious and flavorful, a healthy choice.",
    img: menu9,
  },
  {
    name: "Shrimps",
    scientificName: "Penaeus Spp",
    description: "Sweet and juicy, ideal for stir-fry.",
    img: menu10,
  },
  {
    name: "Trevally",
    scientificName: "Carangoides spp",
    description: "A versatile fish with a bold flavor.",
    img: menu11,
  },
  {
    name: "Red Grouper (Disco)",
    scientificName: "Epinephelus diacanthus",
    description: "Mild and flaky, perfect for grilling.",
    img: menu12,
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
        <h2 className="headline-1 section-title text-center">Our Products</h2>

        <ul className="grid-list">
          {menuData
            .slice(0, showAll ? menuData.length : 6)
            .map((item, index) => (
              <li key={index}>
                <div className="menu-card hover:card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 200, "--height": 150 }}
                  >
                    <img
                      src={item.img}
                    
                      loading="lazy"
                      alt={item.name}
                      className="img-cover product-img"
                    />
                  </figure>
                  <div>
                    <div className="title-wrapper">
                      <h3 className="title-3">
                        <a href="#" className="card-title">
                          {item.name}
                        </a>
                      </h3>
                      <span className="label-1">{item.scientificName}</span>
                      <p className="description">{item.description}</p>{" "}
                      {/* Short description */}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <p className="menu-text text-center">
          We are the suppliers of different types Fresh and Frozen fish products
          in various forms, Whole Round, Gutted, Dressed, HGT, Fillets, Steaks
          Etc.
        </p>

        <button onClick={handleToggle} className="btn btn-primary">
          <span className="text text-1">
            {showAll ? "View Less" : "View All Products"}
          </span>
          <span className="text text-2" aria-hidden="true">
            {showAll ? "View Less" : "View All Products"}
          </span>
        </button>

        <img
          src={shape5}
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src={shape6}
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default MenuSection;
