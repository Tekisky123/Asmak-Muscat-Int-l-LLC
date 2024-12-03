import { useState, useEffect, useRef } from "react";
import "../assets/Styles/GalleryPage.css";

const folderPath = "/GalleryImages";
const extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

// Function to generate unique query string for cache-busting
const addCacheBuster = (url) => `${url}?v=${new Date().getTime()}`;

const generateImagePaths = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    baseName: `${folderPath}/image${i + 1}`,
    title: `Image ${i + 1}`,
    description: `Description for image ${i + 1}`,
  }));
};

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For modal
  const galleryGridRef = useRef(null);

  useEffect(() => {
    const validatedImages = [];
    generateImagePaths(50).forEach((image) => {
      let validPath = null;
      for (const ext of extensions) {
        const testPath = addCacheBuster(`${image.baseName}${ext}`);
        const img = new Image();
        img.src = testPath;

        img.onload = () => {
          if (!validatedImages.find((img) => img.src === testPath)) {
            validPath = testPath;
            validatedImages.push({
              src: validPath,
              title: image.title,
              description: image.description,
            });
            setGalleryImages([...validatedImages]);
          }
        };

        img.onerror = () => {};

        if (validPath) break;
      }
    });
  }, []);

  useEffect(() => {
    const grid = galleryGridRef.current;
    if (grid) {
      const items = grid.querySelectorAll(".gallery-item");
      items.forEach((item) => {
        const content = item.querySelector("img");
        const rowSpan = Math.ceil(content.naturalHeight / 150); // Adjust divisor for aspect ratio
        item.style.gridRowEnd = `span ${rowSpan}`;
      });
    }
  }, [galleryImages]);

  // Close modal handler
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="gallery-page-container">
      <h2 className="headline-1">Our Gallery</h2>
      <div className="gallery-grid" ref={galleryGridRef}>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(image)} // Open modal with image
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="gallery-modal-overlay"
          onClick={closeModal} // Close modal on overlay click
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click propagation
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="gallery-modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
