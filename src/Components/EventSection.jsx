import eventImage1 from '../assets/images/product-one.png';
import eventImage2 from '../assets/images/Frozen.webp';
import eventImage3 from '../assets/images/products-pro-4.jpg';

const EventSection = () => {
  return (
    <section className="section event" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Our Quality</p>
        <h2 className="section-title headline-1 text-center">Our Premium Quality Products</h2>

        {/* "Our Quality" Content Section */}
        <div className="quality-section text-center my-8">
          {/* <h3 className="headline-2 mb-4"></h3> */}
          <p className="label-1 mx-auto max-w-2xl">
            Consumers today demand high-quality seafood year-round, and we ensure this at every step with sustainable methods aimed at a better tomorrow. ASMAK is extremely cautious about hygiene and the meticulous processing of marine products. Every item undergoes strict quality control, so our customers enjoy only the finest, whether fresh or frozen. All products from our facility are handled with care and transported under optimal conditions to clients across the globe.
          </p>
        </div>

        <ul className="grid-list">
          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder2">
                <img
                  src={eventImage1}
                
                  loading="lazy"
                  alt="Premium quality seafood."
                  className="img-cover"
                />
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Seafood Quality</p>
                <h3 className="card-title title-2 text-center">
                  Sourced with care, delivered with excellence.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder2" style={{ '--width': '350px', '--height': '450px' }}>
                <img
                  src={eventImage2}
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="High-grade frozen fish."
                  className="img-cover"
                />
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Frozen Freshness</p>
                <h3 className="card-title title-2 text-center">
                  Ensuring freshness from ocean to plate.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder2" style={{ '--width': '350px', '--height': '450px' }}>
                <img
                  src={eventImage3}
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Processed under strict quality control."
                  className="img-cover"
                />
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Quality Control</p>
                <h3 className="card-title title-2 text-center">
                  Stringent quality standards in every product.
                </h3>
              </div>
            </div>
          </li>
        </ul>

        {/* <Link to="" className="btn btn-primary">
          <span className="text text-1">Learn More</span>
          <span className="text text-2" aria-hidden="true">Learn More</span>
        </Link> */}
      </div>
    </section>
  );
};

export default EventSection;
