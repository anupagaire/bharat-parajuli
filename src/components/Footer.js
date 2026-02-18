import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/images/bell-icon.png" alt="घण्टी चिन्ह" className="footer-bell" />
            <h3>भरत पराजुली</h3>
          </div>
        
          <div className="footer-party">
            <img src="/images/party-logo.png" alt="नेपाल स्वतन्त्र पार्टी" />
            <span>राष्ट्रिय स्वतन्त्र पार्टी</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>महत्वपूर्ण लिङ्कहरू</h4>
          <ul className="footer-links">
            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>परिचय</button></li>
            <li><button onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}>घोषणापत्र</button></li>
            <li><button onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}>उपलब्धिहरू</button></li>
            <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>ग्यालरी</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>सम्पर्क जानकारी</h4>
          <div className="footer-contact">
            <p>📍 सिन्धुपाल्चोक क्षेत्र नं. १</p>
            <p>📞 +९७७-९८४१२३४५६७</p>
            <p>📧 bharat.parajuli@swatantraparty.org.np</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>सामाजिक सञ्जाल</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>f</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>𝕏</span>
            </a>
           
           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {currentYear} भरत पराजुली - नेपाल स्वतन्त्र पार्टी। सर्वाधिकार सुरक्षित।</p>
          <p className="footer-disclaimer">
            यो वेबसाइट भरत पराजुली र नेपाल स्वतन्त्र पार्टीको आधिकारिक वेबसाइट हो।
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
