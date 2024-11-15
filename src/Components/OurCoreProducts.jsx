import { useNavigate, useLocation } from "react-router-dom";
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
  {
    id: 10,
    name: "CAT FISH",
    scientificName: "Siluriformes",
    image: catFish,
  },
  {
    id: 11,
    name: "BARRACUDA",
    scientificName: "Sphyraena",
    image: BARRACUDA,
  },
  {
    id: 12,
    name: "SPOTTED GRUNT",
    scientificName: "Pomadasys Maculatus",
    image: SPOTTED,
  },
];

const OurCoreProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine how many products to display based on the route
  const productsToShow =
    location.pathname === "/" ? productData.slice(0, 6) : productData;

  const handleCardClick = (id) => {
    navigate(`/singleProduct/${id}`);
  };

  return (
    <section className="core-products-section">
      <h2 className="headline-1">Our Core Products</h2>
      <div className="core-products-grid">
        {productsToShow.map((product) => (
          <div className="core-product-card" key={product.id}>
            <div className="core-product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="core-product-image"
              />
              <div className="core-product-overlay">
                <h3 className="core-product-name">{product.name}</h3>
                <h5 className="core-product-scientific">
                  {product.scientificName}
                </h5>
                <button
                  onClick={() => handleCardClick(product.id)}
                  className="view-btn"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {location.pathname === "/" && (
        <div className="view-all-button-container">
          <button
            onClick={() => navigate("/core-product")}
            className="btn btn-secondary"
          >
            <span className="text text-1">View All</span>
            <span className="text text-2" aria-hidden="true">
              View All
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default OurCoreProducts;
