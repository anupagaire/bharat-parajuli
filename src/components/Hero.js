import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">भरत पराजुली</h1>
          <div className="hero-subtitle-container">
            <img src="/images/bell-icon.png" alt="घण्टी चिन्ह" className="hero-symbol" />
            <h2 className="hero-subtitle">राष्ट्रिय स्वतन्त्र पार्टी</h2>
          </div>
          <p className="hero-location">सिन्धुपाल्चोक क्षेत्र नं. १</p>
          <p className="hero-identity">Founder of ब्रह्माणी जलविद्युतका</p>
          <div className="hero-tagline">
            <p>विकास, समृद्धि र सुशासनको लागि</p>
            <p className="hero-tagline-sub">जनताको आवाज, जनताको विश्वास</p>
          </div>
          <div className="hero-buttons">
         <button 
  className="btn btn-primary"
  onClick={() => window.open('/manifesto.pdf', '_blank')}
>
  घोषणापत्र हेर्नुहोस्
</button>
  
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <img src="/images/bharat-parajuli.jpg" alt="भरत पराजुली" className="hero-image" />
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
      </div>
    </section>
  );
}

export default Hero;
