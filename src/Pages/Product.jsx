import '../assets/Styles/Product.css';
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

const productsData = [
  { name: "Frozen Salmon", description: "Premium quality frozen salmon sourced from the purest waters.", imageUrl: menu1 },
  { name: "Fresh Tuna", description: "Freshly caught tuna, perfect for sushi or grilling.", imageUrl: menu2 },
  { name: "Shrimp Pack", description: "High-quality frozen shrimp pack for all seafood lovers.", imageUrl: menu3 },
  { name: "Crab Clusters", description: "Wild-caught crab clusters, a delicacy for any seafood lover.", imageUrl: menu4 },
  { name: "Lobster Tails", description: "Juicy lobster tails sourced directly from sustainable fisheries.", imageUrl: menu5 },
  { name: "Mahi-Mahi Fillets", description: "Fresh Mahi-Mahi fillets perfect for grilling or pan-searing.", imageUrl: menu6 },
  { name: "Octopus", description: "Whole octopus, carefully cleaned and flash frozen for quality.", imageUrl: menu7 },
  { name: "Octopus", description: "Whole octopus, carefully cleaned and flash frozen for quality.", imageUrl: menu8 },
  { name: "Octopus", description: "Whole octopus, carefully cleaned and flash frozen for quality.", imageUrl: menu9 },
  { name: "Octopus", description: "Whole octopus, carefully cleaned and flash frozen for quality.", imageUrl: menu10 },
  { name: "Octopus", description: "Whole octopus, carefully cleaned and flash frozen for quality.", imageUrl: menu11 },
  { name: "Octopus", description: "Whole octopus, carefully cleaned and flash frozen for quality.", imageUrl: menu12 }
];

const Product = () => {
  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>
      <div className="product-grid">
        {productsData.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
