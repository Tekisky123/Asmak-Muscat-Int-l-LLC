
import '../assets/Styles/AboutUs.css';
import { FaFish, FaGlobeAmericas, FaHandshake, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import AboutSection from '../Components/AboutSection';

const aboutData = [
  {
    title: "Our Location",
    icon: <FaMapMarkerAlt />,
    content: "Located in the Sultanate of Oman on the shores of the Arabian Sea, Asmak Muscat Int'l operates in the Indian Ocean, recognized to be one of the world’s most unpolluted marine environments.",
  },
  {
    title: "Corporate Social Responsibility",
    icon: <FaHandshake />,
    content: "Our CSR policy is to support and work directly with the local fishing community, to maintain sustainability and the best source of fresh quality fish.",
  },
  {
    title: "Operations",
    icon: <FaIndustry />,
    content: "Our activities include processing and packing frozen seafood, wholesale and retail of fresh and frozen seafood, import and export of seafood, and sourcing agents for overseas buyers and sellers.",
  },
  {
    title: "Global Reach",
    icon: <FaGlobeAmericas />,
    content: "We have a long list of clients in Oman, UAE, Egypt, China, India, Japan, Vietnam, Bangladesh, and Europe.",
  },
  {
    title: "Our Mission",
    icon: <FaFish />,
    content: "At Asmak Muscat Int'l, our aim is to develop long-term relationships with our customers. We strive to meet their needs through assurance, receptiveness, and reliability.",
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        {aboutData.map((section, index) => (
          <div key={index} className="about-us-card">
            <div className="icon-container">{section.icon}</div>
            <h2 className="card-title">{section.title}</h2>
            <p className="card-content">{section.content}</p>
          </div>
        ))}
      </div>
      <AboutSection />
    </div>
  );
};

export default AboutUs;
