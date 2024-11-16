import { useState } from "react";
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
    sizes: [
      "2/4 PCS/KG",
      "4/6 PCS/KG",
      "6/8 PCS/KG",
      "8/10 PCS/KG",
      "10/15 PCS/KG",
      "15/20 PCS/KG",
    ],
  },
  {
    id: 2,
    name: "CHUB MACKEREL",
    scientificName: "Scomber Japonicus",
    image: CHUBMACKEREL,
    sizes: [
      "2/4 PCS/KG",
      "4/6 PCS/KG",
      "6/8 PCS/KG",
      "8/10 PCS/KG",
      "10/15 PCS/KG",
      "15/20 PCS/KG",
    ],
  },
  {
    id: 3,
    name: "INDIAN MACKEREL",
    scientificName: "Rastrelliger Kanagurta",
    image: INDIANMACKEREL,
    sizes: [
      "2/4 PCS/KG",
      "3/5 PCS/KG",
      "4/6 PCS/KG",
      "6/8 PCS/KG",
      "8/10 PCS/KG",
      "10/12 PCS/KG",
    ],
  },
  {
    id: 4,
    name: "YELLOW TAIL SCAD",
    scientificName: "Atule Mate",
    image: YELLOWTAIL,
    sizes: ["2/4 PCS/KG", "4/6 PCS/KG", "6/8 PCS/KG", "8/10 PCS/KG"],
  },
  {
    id: 5,
    name: "SARDINE",
    scientificName: "Sardinella Longiceps",
    image: SARDINE,
    sizes: ["8/10 PCS/KG", "10/12 PCS/KG", "10/15 PCS/KG", "15/20 PCS/KG"],
  },
  {
    id: 6,
    name: "GREY MULLET",
    scientificName: "Mugil Cephalus",
    image: GREYMULLET,
    sizes: ["8/10 PCS/KG", "10/12 PCS/KG", "10/15 PCS/KG", "15/20 PCS/KG"],
  },
  {
    id: 7,
    name: "WHITE SHAD FISH (HILSA)",
    scientificName: "Tenualosa Ilisha",
    image: whiteshad,
    sizes: ["2/4 PCS/KG", "4/6 PCS/KG","6/8 PCS/KG",  "8/10 PCS/KG"],
  },
  {
    id: 8,
    name: "CROAKER",
    scientificName: "Argyrosomus Regius",
    image: CROAKER,
    sizes: ["500/1000 GRM", "1000/2000 GRM", "2000/3000 GRM", "3000/5000 GRM"],
  },
  {
    id: 9,
    name: "SKIPJACK TUNA",
    scientificName: "Katsuwonus Pelamis",
    image: SKIPJACKTUNA,
    sizes: ["300/500 GRM", "500/1000 GRM", "1000/2000 GRM", "2000/3000 GRM"],
  },
  {
    id: 10,
    name: "CAT FISH",
    scientificName: "Siluriformes",
    image: catFish,
    sizes: ["500/1000 GRM", "1000/2000 GRM", "2000/3000 GRM", "3000/5000 GRM"],
  },
  {
    id: 11,
    name: "BARRACUDA",
    scientificName: "Sphyraena",
    image: BARRACUDA,
    sizes: ["500/1000 GRM", "1000/2000 GRM", "2000/3000 GRM", "3000/5000 GRM"],
  },
  {
    id: 12,
    name: "SPOTTED GRUNT",
    scientificName: "Pomadasys Maculatus",
    image: SPOTTED,
    sizes: ["500/1000 GRM", "1000/2000 GRM", "2000/3000 GRM", "3 KG UP"],
  },
];

const OurCoreProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsToShow =
    location.pathname === "/" ? productData.slice(0, 6) : productData;

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
                  onClick={() => handleCardClick(product)}
                  className="view-btn"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProduct.name}</h3>
            <h4>Asmak Muscat Int&apos;l LLC</h4>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {selectedProduct.sizes.map((size, index) => (
                  <tr key={index}>
                    <td>{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

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
