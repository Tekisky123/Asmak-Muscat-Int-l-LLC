import featureIcon1 from '../assets/images/delivery-truck-unscreen.gif';
import featureIcon2 from '../assets/images/container-ship-unscreen.gif';
import featureIcon3 from '../assets/images/aircraft-unscreen.gif';
import featureIcon4 from '../assets/images/eco-earth-unscreen.gif'; // Add your fourth icon path

const featureData = [
  {
    icon: featureIcon1,
    alt: 'Full Service',
    title: 'Full Service',
    text: 'Global Network. Learn about our worldwide network. Become a partner or a client.',
  },
  {
    icon: featureIcon2,
    alt: 'Logistics',
    title: 'Logistics',
    text: 'One of the most important factors. Always fresh, always on time.',
  },
  {
    icon: featureIcon3,
    alt: 'Warehouses',
    title: 'Warehouses',
    text: 'Professional equipment is key. We work to maintain standards.',
  },
  {
    icon: featureIcon4,
    alt: 'Certification',
    title: 'Certification',
    text: 'We work with certified employees. We provide top-quality food.',
  },
  {
    icon: featureIcon1,
    alt: 'Temperature Monitoring',
    title: 'Temperature Monitoring',
    text: 'The importance of the right degree for different sea products.',
  },
  {
    icon: featureIcon2,
    alt: 'Test Kitchens',
    title: 'Test Kitchens',
    text: 'Cook our seafood products and see how they prove to be perfect.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section" aria-label="features">
      <div className="features-container">
        <p className="section-subtitle">Why Choose Us</p>
        <h2 className="headline-1">Our Strength</h2>

        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-card">
                <div className="card-left">
                  <img
                    src={feature.icon}
                    width="100"
                    height="80"
                    loading="lazy"
                    alt={feature.alt}
                  />
                </div>
                <div className="card-right">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
