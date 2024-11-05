import featureIcon1 from '../assets/images/features-icon-1.png';
import featureIcon2 from '../assets/images/features-icon-2.png';
import featureIcon3 from '../assets/images/features-icon-3.png';
import featureIcon4 from '../assets/images/features-icon-4.png';
import shape1 from '../assets/images/shape-7.png';
import shape2 from '../assets/images/shape-8.png';

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
                  alt="Hygienic Food icon"
                />
              </div>

              <h3 className="title-2 card-title">Hygienic Food</h3>

              <p className="label-1 card-text">
                Lorem Ipsum is simply dummy printing and typesetting.
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
                  alt="Fresh Environment icon"
                />
              </div>

              <h3 className="title-2 card-title">Fresh Environment</h3>

              <p className="label-1 card-text">
                Lorem Ipsum is simply dummy printing and typesetting.
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
                  alt="Skilled Chefs icon"
                />
              </div>

              <h3 className="title-2 card-title">Skilled Chefs</h3>

              <p className="label-1 card-text">
                Lorem Ipsum is simply dummy printing and typesetting.
              </p>
            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src={featureIcon4}
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="Event & Party icon"
                />
              </div>

              <h3 className="title-2 card-title">Event & Party</h3>

              <p className="label-1 card-text">
                Lorem Ipsum is simply dummy printing and typesetting.
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
