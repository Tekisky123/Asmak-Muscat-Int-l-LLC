import { FaFish, FaClock, FaStore, FaShippingFast, FaCheckCircle } from 'react-icons/fa'; // Importing required icons

const featureData = [
  {
    icon: <FaFish size={50} color="#007bff" />,
    alt: 'Fishing Zone FAO51',
    title: 'Fishing Zone FAO51',
    text: 'Best Seafood from Sultanate of Oman, caught in FAO51 zone.',
  },
  {
    icon: <FaClock size={50} color="#ffc107" />,
    alt: '2 Hours Trucking to Our Factory',
    title: '2 Hours Trucking',
    text: 'Our products are transported to the factory within 2 hours.',
  },
  {
    icon: <FaCheckCircle size={50} color="#6f42c1" />,
    alt: '90 Minutes Freezing',
    title: '90 Minutes Freezing',
    text: 'Processed and quality checked within 90 minutes of arrival.',
  },
  {
    icon: <FaStore size={50} color="#17a2b8" />,
    alt: '8 Hours Freezing',
    title: '8 Hours Freezing',
    text: 'Seafood is frozen within 8 hours of arrival at our factory.',
  },
  {
    icon: <FaShippingFast size={50} color="#dc3545" />,
    alt: '30 Minutes Packing to Put Inside Cold Storage',
    title: '30 Minutes Packing',
    text: 'Seafood is packed and stored within 30 minutes of being caught.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section" aria-label="features">
      <div className="features-container">
        <h2 className="headline-1">Our Key Strengths</h2>

        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-card">
                <div className="card-left">
                  {feature.icon}
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
