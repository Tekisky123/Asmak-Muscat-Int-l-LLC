import { useState } from "react";
import { MdClose } from "react-icons/md"; // Importing close icon from react-icons
import "../assets/Styles/AdvertisementComponent.css";
import addimg from "../assets/images/aboutimg.png"; // Image import

const AdvertisementComponent = () => {
  const [isAdVisible, setIsAdVisible] = useState(true); // Always visible on reload

  const closeAd = () => {
    setIsAdVisible(false); // Hide ad on close
  };

  return (
    <>
      {isAdVisible && (
        <div className="ad-overlay" onClick={closeAd}>
          <div className="ad-popup" onClick={(e) => e.stopPropagation()}>
            <img
              src={addimg} // Ad image
              alt="Advertisement"
              className="ad-image"
            />
            <button className="add-close-btn" onClick={closeAd}>
              <MdClose size={30} /> {/* Close icon from react-icons */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisementComponent;
