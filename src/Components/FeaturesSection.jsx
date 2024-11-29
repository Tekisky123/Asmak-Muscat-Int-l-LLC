import { FaFish, FaClock, FaStore, FaShippingFast, FaCheckCircle } from 'react-icons/fa'; // Importing required icons

const featureData = [
  {
    icon: <FaFish size={50} color="#007bff" />,
    alt: 'Fishing Zone FAO51',
    title: 'Fishing Zone FAO51',
    text: 'Best Seafood from Sultanate of Oman, caught in FAO51 zone.',
  },
  {
    icon: <FaClock size={50} color="#28a745" />,
    alt: 'Cold Store - 30 Minutes',
    title: 'Cold Store',
    text: 'Our products are kept in cold storage for up to 30 minutes after catch.',
  },
  {
    icon: <FaShippingFast size={50} color="#dc3545" />,
    alt: 'Packing - 12 HOURS CATCH',
    title: 'Packing - 12 HOURS CATCH',
    text: 'Seafood is packed within 12 hours of being caught.',
  },
  {
    icon: <FaClock size={50} color="#ffc107" />,
    alt: '2 Hours Trucking to Our Factory',
    title: '2 Hours Trucking',
    text: 'Our products are transported to the factory within 2 hours.',
  },
  {
    icon: <FaStore size={50} color="#17a2b8" />,
    alt: 'Freezing - 8 Hours',
    title: 'Freezing - 8 Hours',
    text: 'Seafood is frozen within 8 hours of arrival at our factory.',
  },
  {
    icon: <FaCheckCircle size={50} color="#6f42c1" />,
    alt: '90 Minutes Processing and Quality Check',
    title: '90 Minutes Processing & Quality Check',
    text: 'Processed and quality checked within 90 minutes of arrival.',
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
