import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: '/images/gallery/event1.jpg',
    },
    {
      src: '/images/gallery/event2.jpg',
    },
    {
      src: '/images/gallery/event3.jpg',
    },
    {
      src: '/images/gallery/event4.jpg',
    },
    {
      src: '/images/gallery/event5.jpg',
    },
    {
      src: '/images/gallery/event6.jpg',    },
    {
      src: '/images/gallery/event7.jpg'
    },
    {
      src: '/images/gallery/event8.jpg',
    },
    {
      src: '/images/gallery/event9.jpg',
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">ग्यालरी</h2>
      <p className="section-subtitle">हाम्रा गतिविधिहरूको झलक</p>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <div className="gallery-image-wrapper">
              <img src={image.src} alt={image} />
              <div className="gallery-overlay">
                <span className="view-icon">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
