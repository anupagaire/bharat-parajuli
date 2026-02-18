import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo - अब अलग layer */}
        <div className="logo-wrapper">
          <img
            src="/images/party-logo.png"
            alt="नेपाल स्वतन्त्र पार्टी"
            className="party-logo"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation - background यहाँ लाग्छ */}
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('hero')}>गृहपृष्ठ</button></li>
            <li><button onClick={() => scrollToSection('about')}>परिचय</button></li>
            <li><button onClick={() => scrollToSection('manifesto')}>घोषणापत्र</button></li>
            <li><button onClick={() => scrollToSection('achievements')}>उपलब्धिहरू</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>ग्यालरी</button></li>
            <li><button onClick={() => scrollToSection('gunaso')}>गुनासो बक्स</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;