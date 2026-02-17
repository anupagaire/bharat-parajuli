import React, { useState } from 'react';
import './GunasoBox.css';

function GunasoBox() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    category: 'सामान्य',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        address: '',
        phone: '',
        email: '',
        category: 'सामान्य',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="gunaso" className="gunaso-box">
      <h2 className="section-title">गुनासो बक्स</h2>
      <p className="section-subtitle">तपाईंको समस्या र सुझावहरू हामीसँग साझा गर्नुहोस्</p>

      <div className="gunaso-content">
        <div className="gunaso-info">
          <div className="info-card">
            <div className="info-icon">📢</div>
            <h3>तपाईंको आवाज महत्वपूर्ण छ</h3>
            <p>
              म भरत पराजुली तपाईंको प्रतिनिधि बन्न चाहन्छु। तपाईंका समस्या, सुझाव 
              र विचारहरू मेरो लागि अत्यन्त महत्वपूर्ण छन्। यस गुनासो बक्स मार्फत 
              तपाईं आफ्ना कुरा सीधै मसम्म पुर्याउन सक्नुहुन्छ।
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🔒</div>
            <h3>गोपनियता सुनिश्चित</h3>
            <p>
              तपाईंले प्रदान गर्नुभएको जानकारी पूर्ण रूपमा गोपनीय राखिनेछ। तपाईंको 
              नाम र विवरणहरू तपाईंको अनुमति बिना कसैसँग साझा गरिने छैन।
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>द्रुत प्रतिक्रिया</h3>
            <p>
              प्राप्त हुने प्रत्येक गुनासो र सुझावलाई गम्भीरतापूर्वक लिइन्छ। हामी 
              सकेसम्म चाँडो तपाईंलाई प्रतिक्रिया दिने प्रयास गर्नेछौं।
            </p>
          </div>

          <div className="contact-info">
            <h3>अन्य सम्पर्क माध्यमहरू</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>फोन: +९७७-९८४१२३४५६७</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>इमेल: bharat.parajuli@swatantraparty.org.np</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>कार्यालय: सिन्धुपाल्चोक, वडा नं. ०१</span>
            </div>
          </div>
        </div>

        <div className="gunaso-form-container">
          <form className="gunaso-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">पूरा नाम *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="तपाईंको पूरा नाम"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">ठेगाना *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="गाउँ/वडा/नगर"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">सम्पर्क नम्बर *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="९८४१२३४५६७"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">इमेल</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">गुनासो/सुझाव को प्रकार *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="सामान्य">सामान्य</option>
                <option value="पूर्वाधार">पूर्वाधार विकास</option>
                <option value="शिक्षा">शिक्षा</option>
                <option value="स्वास्थ्य">स्वास्थ्य</option>
                <option value="रोजगारी">रोजगारी</option>
                <option value="कृषि">कृषि</option>
                <option value="खानेपानी">खानेपानी</option>
                <option value="विद्युत">विद्युत</option>
                <option value="अन्य">अन्य</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">तपाईंको सन्देश/गुनासो/सुझाव *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="कृपया आफ्नो समस्या वा सुझाव विस्तृत रूपमा लेख्नुहोस्..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              पेश गर्नुहोस्
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✓ धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पेश भएको छ।
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default GunasoBox;
