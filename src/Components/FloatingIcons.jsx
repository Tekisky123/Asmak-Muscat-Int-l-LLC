import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../assets/Styles/FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <a href="https://wa.me/+96892850600" className="floatingicon whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={25} />
        <span className="tooltip">+968 92850600</span>
      </a>
      <a href="tel:+96824050604" className="floatingicon call">
        <FaPhoneAlt size={25} />
        <span className="tooltip">+968 24050604</span>
      </a>
      <a href="mailto:info@asmakmct.com" className="floatingicon email">
        <FaEnvelope size={25} />
        <span className="tooltip">info@asmakmct.com</span>
      </a>
    </div>
  );
};

export default FloatingIcons;
