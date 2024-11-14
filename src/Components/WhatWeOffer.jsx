import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  return (
    <section className="offer-section">
      <div className="offer-overlay">
        <div className="offer-content">
          <h2 className="offer-title headline-1">
            We Offer First Class Shrimps
          </h2>
          <p className="offer-description">
            We guarantee you the best seafood, delivered daily to our dock,
            prepared to your liking. Our focus is on serving the absolute
            freshest fish and seafood.
          </p>
          <Link to="/" className="btn btn-secondary">
            <span className="text text-1">Shop Now</span>
            <span className="text text-2" aria-hidden="true">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
