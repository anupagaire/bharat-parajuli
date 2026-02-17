import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: '/images/gallery/event1.jpg',
      title: 'जनसभा कार्यक्रम',
      description: 'सिन्धुपाल्चोकमा आयोजित जनसभा कार्यक्रम'
    },
    {
      src: '/images/gallery/event2.jpg',
      title: 'जलविद्युत उद्घाटन',
      description: 'ब्रह्माणी जलविद्युत आयोजनाको उद्घाटन समारोह'
    },
    {
      src: '/images/gallery/event3.jpg',
      title: 'स्वास्थ्य शिविर',
      description: 'निःशुल्क स्वास्थ्य शिविर कार्यक्रम'
    },
    {
      src: '/images/gallery/event4.jpg',
      title: 'छात्रवृत्ति वितरण',
      description: 'विद्यार्थीहरूलाई छात्रवृत्ति वितरण कार्यक्रम'
    },
    {
      src: '/images/gallery/event5.jpg',
      title: 'पूर्वाधार निरीक्षण',
      description: 'स्थानीय पूर्वाधार परियोजनाको निरीक्षण'
    },
    {
      src: '/images/gallery/event6.jpg',
      title: 'युवा भेला',
      description: 'युवा उद्यमी कार्यक्रम'
    },
    {
      src: '/images/gallery/event7.jpg',
      title: 'कृषक सम्मेलन',
      description: 'किसान र कृषक सम्मेलन कार्यक्रम'
    },
    {
      src: '/images/gallery/event8.jpg',
      title: 'महिला सशक्तिकरण',
      description: 'महिला सशक्तिकरण कार्यक्रम'
    },
    {
      src: '/images/gallery/event9.jpg',
      title: 'पार्टी कार्यक्रम',
      description: 'नेपाल स्वतन्त्र पार्टी कार्यक्रम'
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
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
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
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
