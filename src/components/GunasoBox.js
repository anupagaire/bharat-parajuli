import React, { useState } from 'react';
import './GunasoBox.css';

function GunasoBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // यहाँ API call गर्न सकिन्छ
    setTimeout(() => {
      setFormData({ email: '', message: '' });
      setIsSubmitted(false);
      setIsOpen(false);
    }, 2800);
  };

  return (
    <>
      {/* Desktop chat icon */}
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {/* Chat Box */}
      <div className={`gunaso-box ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>गुनासो बक्स</h3>
          <span className="close-btn" onClick={() => setIsOpen(false)}>
            ✖
          </span>
        </div>

        <p style={{ margin: '0 0 20px 0', color: '#555' }}>
          तपाईंको सुझाव, गुनासो वा सन्देश पठाउनुहोस्
        </p>

        <form className="gunaso-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>इमेल *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group">
            <label>सन्देश *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="यहाँ आफ्नो विचार लेख्नुहोस्..."
            />
          </div>

          <button type="submit" className="submit-btn">
            पेश गर्नुहोस्
          </button>

          {isSubmitted && (
            <div className="success-message">
              ✓ तपाईंको सन्देश सफलतापूर्वक पठाइयो!
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default GunasoBox;