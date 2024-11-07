import { FaWhatsapp, FaPhoneAlt, FaSms } from 'react-icons/fa';
import '../assets/Styles/FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <a href="https://wa.me/+968 92850600" className="floatingicon whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={25} />
        <span className="tooltip"> +968 92850600</span>
      </a>
      <a href="tel:+968 24050604" className="floatingicon call">
        <FaPhoneAlt size={25} />
        <span className="tooltip">+968 24050604</span>
      </a>
      <a href="sms:+968 92850600" className="floatingicon sms">
        <FaSms size={25} />
        <span className="tooltip">+968 92850600</span>
      </a>
    </div>
  );
};

export default FloatingIcons;
