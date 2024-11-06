import featureIcon1 from '../assets/images/delivery-truck-unscreen.gif';
import featureIcon2 from '../assets/images/container-ship-unscreen.gif';
import featureIcon3 from '../assets/images/aircraft-unscreen.gif';
import featureIcon4 from '../assets/images/eco-earth-unscreen.gif'; // Add your fourth icon path
import shape1 from '../assets/images/shape1.png';
import shape2 from '../assets/images/shape1.png';

const FeaturesSection = () => {
  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>

        <h2 className="headline-1 section-title">Our Strength</h2>

        <ul className="grid-list">
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src={featureIcon1}
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="Seafood Trading by Road"
                />
              </div>

              <h3 className="title-2 card-title">Seafood Trading by Road</h3>

              <p className="label-1 card-text">
                Frozen and Fresh Seafood are transported via road to the local market under controlled temperature to keep the seafood fresh.
              </p>
            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src={featureIcon2}
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="Seafood Import/Export via Sea"
                />
              </div>

              <h3 className="title-2 card-title">Seafood Import/Export via Sea</h3>

              <p className="label-1 card-text">
                Asmak Muscat Int&apos;l uses the sea route to import/export seafood in large quantities from various countries. The seafood will be stored in special containers to keep it fresh.
              </p>
            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src={featureIcon3}
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="Seafood Import/Export via Air"
                />
              </div>

              <h3 className="title-2 card-title">Seafood Import/Export via Air</h3>

              <p className="label-1 card-text">
                We strive for continuous improvement in the supply chain in order to secure the highest quality of fresh/frozen seafood products. We use air transport for immediate delivery.
              </p>
            </div>
          </li>

          {/* New Card */}
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src={featureIcon4}
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="Sustainable Practices"
                />
              </div>

              <h3 className="title-2 card-title">Sustainable Practices</h3>

              <p className="label-1 card-text">
                We prioritize sustainable practices in our operations, ensuring that seafood is sourced responsibly and ethically.
              </p>
            </div>
          </li>
        </ul>

        <img
          src={shape1}
          width="208"
          height="178"
          loading="lazy"
          alt="shape"
          className="shape shape-1"
        />

        <img
          src={shape2}
          width="120"
          height="115"
          loading="lazy"
          alt="shape"
          className="shape shape-2"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
