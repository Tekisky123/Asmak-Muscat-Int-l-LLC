import { useState, useEffect, useRef } from "react";
import "../assets/Styles/GalleryPage.css";

const folderPath = "/GalleryImages";
const extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

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
  const galleryGridRef = useRef(null);

  useEffect(() => {
    const validatedImages = [];
    generateImagePaths(50).forEach((image) => {
      let validPath = null;
      for (const ext of extensions) {
        const testPath = `${image.baseName}${ext}`;
        const img = new Image();
        img.src = testPath;

        img.onload = () => {
          validPath = testPath;
          validatedImages.push({
            src: validPath,
            title: image.title,
            description: image.description,
            height: img.height,
            width: img.width,
          });
          setGalleryImages([...validatedImages]);
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

  return (
    <section className="gallery-page-container">
      <h2 className="headline-1">Our Gallery</h2>
      <div className="gallery-grid" ref={galleryGridRef}>
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
