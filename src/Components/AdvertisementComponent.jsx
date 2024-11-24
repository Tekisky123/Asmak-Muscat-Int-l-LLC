import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md"; 
import "../assets/Styles/AdvertisementComponent.css";

const folderPath = "/EventImages";
const extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"]; 

const AdvertisementComponent = () => {
  const [isAdVisible, setIsAdVisible] = useState(false); 
  const [adImage, setAdImage] = useState(null); 

  useEffect(() => {
    let foundImage = null;

    extensions.forEach((ext) => {
      const testPath = `${folderPath}/event${ext}`;
      const img = new Image();
      img.src = testPath;

      img.onload = () => {
        if (!foundImage) {
          foundImage = testPath;
          setAdImage(foundImage);
          setIsAdVisible(true); // Show ad only if an image is valid
        }
      };

      img.onerror = () => {
        // Handle error silently for unsupported extensions
      };
    });
  }, []);

  const closeAd = () => {
    setIsAdVisible(false); // Hide popup
  };

  return (
    <>
      {isAdVisible && adImage && (
        <div className="ad-overlay" onClick={closeAd}>
          <div className="ad-popup" onClick={(e) => e.stopPropagation()}>
            <img
              src={adImage} // Dynamic ad image
              alt="Advertisement"
              className="ad-image"
            />
            <button className="add-close-btn" onClick={closeAd}>
              <MdClose size={30} /> {/* Close icon */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisementComponent;
