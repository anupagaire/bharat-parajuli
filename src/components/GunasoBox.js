import React, { useState } from 'react';
import './GunasoBox.css';

function GunasoBox() {
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
    console.log('Form submitted:', formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="gunaso-box">
      <h2>गुनासो बक्स</h2>
      <p>तपाईंको सुझाव वा सन्देश पठाउनुहोस्</p>
      
      <form className="gunaso-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">इमेल *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">सन्देश *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="कृपया आफ्नो सन्देश यहाँ लेख्नुहोस्..."
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-btn">पेश गर्नुहोस्</button>
        {isSubmitted && <div className="success-message">✓ तपाईंको सन्देश सफलतापूर्वक पठाइयो!</div>}
      </form>
    </div>
  );
}

export default GunasoBox;
