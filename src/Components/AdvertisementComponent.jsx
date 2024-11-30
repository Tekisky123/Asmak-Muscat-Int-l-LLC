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
      const timestamp = new Date().getTime();
      const testPath = `${folderPath}/event${ext}?v=${timestamp}`;
      const img = new Image();
      img.src = testPath;

      img.onload = () => {
        if (!foundImage) {
          foundImage = testPath;
          setAdImage(foundImage);
          setIsAdVisible(true);
        }
      };

      img.onerror = () => {};
    });
  }, []);

  const closeAd = () => {
    setIsAdVisible(false);
  };

  return (
    <>
      {isAdVisible && adImage && (
        <div className="ad-overlay" onClick={closeAd}>
          <div className="ad-popup" onClick={(e) => e.stopPropagation()}>
            <img src={adImage} alt="Advertisement" className="ad-image" />
            <button className="add-close-btn" onClick={closeAd}>
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisementComponent;
