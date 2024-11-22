import "../assets/Styles/GalleryPage.css";
import image1 from "../assets/images/aboutimg.png";
import image2 from "../assets/images/aboutimg2.png";
import image3 from "../assets/images/bg_feature1.jpg";
import image4 from "../assets/images/treadfinBreamFish.jpg";
import image5 from "../assets/images/barracudaModel11.png";
import image6 from "../assets/images/barracudaModel11.png";


// Gallery images and data array
const galleryImages = [
  { src: image1, title: "About Image 1", description: "Description for image 1" },
  { src: image2, title: "About Image 2", description: "Description for image 2" },
  { src: image3, title: "Feature Image", description: "Description for feature image" },
  { src: image4, title: "Treadfin Bream Fish", description: "Description for fish image" },
  { src: image5, title: "Barracuda Model", description: "Description for Barracuda model" },
  { src: image6, title: "Barracuda Model", description: "Description for Barracuda model" },

];

const GalleryPage = () => {
  // const [modalData, setModalData] = useState(null);

  // const openModal = (imageData) => {
  //   setModalData(imageData);
  // };

  // const closeModal = () => {
  //   setModalData(null);
  // };

  // const handleOutsideClick = (e) => {
  //   if (e.target.classList.contains("custom-modal-overlay")) {
  //     closeModal();
  //   }
  // };

  return (
    <section className="gallery-page-container">
      <h2 className="headline-1">Our Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
            />
            {/* <div className="image-overlay" onClick={() => openModal(image)}>
              <span className="overlay-text">Read More</span>
            </div> */}
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {/* {modalData && (
        <div
          className="custom-modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="custom-modal-content">
            <span className="custom-close-btn" onClick={closeModal}>×</span>
            <img src={modalData.src} alt="Modal Image" className="custom-modal-image" />
            <h3 className="custom-modal-title">{modalData.title}</h3>
            <p className="custom-modal-description">{modalData.description}</p>
            <span className="close-btn" onClick={closeModal}>Close</span>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default GalleryPage;
