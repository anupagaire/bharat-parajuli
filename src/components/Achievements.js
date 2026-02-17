import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      title: 'ब्रह्माणी जलविद्युत',
      description: 'ब्रह्माणी जलविद्युत आयोजनाको सफल स्थापना र सञ्चालन',
      details: 'स्थानीय स्तरमा ऊर्जा उत्पादन र रोजगारी सृजनामा महत्वपूर्ण योगदान',
    },
    {
      title: 'रोजगारी सृजना',
      description: '५०० भन्दा बढी स्थानीय युवाहरूलाई प्रत्यक्ष रोजगारी',
      details: 'जलविद्युत आयोजना मार्फत स्थानीय समुदायमा आर्थिक सशक्तिकरण',
    },
    {
      title: 'शिक्षा प्रवर्द्धन',
      description: 'विपन्न विद्यार्थीहरूलाई छात्रवृत्ति कार्यक्रम',
      details: '२०० भन्दा बढी विद्यार्थीहरूलाई शैक्षिक सहयोग',
    },
    {
      title: 'स्वास्थ्य सेवा',
      description: 'निःशुल्क स्वास्थ्य शिविर सञ्चालन',
    },
    {
      title: 'खानेपानी योजना',
      description: 'स्थानीय समुदायमा स्वच्छ खानेपानीको व्यवस्था',
      details: '१० वटा वडामा खानेपानी आयोजना सहयोग',
    },
    {
      title: 'पूर्वाधार विकास',
      description: 'स्थानीय सडक र पुल निर्माणमा योगदान',
      details: 'ग्रामीण क्षेत्रमा यातायात सुविधा सुधारमा सहयोग',
    },
    {
      title: 'उत्कृष्ट उद्योगपति',
      description: 'उद्योग वाणिज्य संघबाट सम्मान',
      details: 'स्थानीय विकासमा अनुकरणीय योगदानको लागि पुरस्कृत',
    },
    {
      title: 'सामाजिक सेवा',
      description: 'विभिन्न सामाजिक संस्थाहरूमा सहयोग',
      details: 'वृद्धाश्रम, अनाथालय र महिला सशक्तिकरण कार्यक्रममा योगदान',
    }
  ];

  const stats = [
    { number: '500+', label: 'रोजगारी सृजना' },
    { number: '10+', label: 'मेगावाट ऊर्जा' },
    { number: '200+', label: 'छात्रवृत्ति' },
    { number: '15+', label: 'सामाजिक परियोजना' }
  ];

  return (
    <section id="achievements" className="achievements">
  <h2 className="section-title">उपलब्धिहरू</h2>

  <div className="stats-container">
    {stats.map((stat, index) => (
      <div key={index} className="stat-card">
        <div className="stat-number">{stat.number}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ))}
  </div>

  <div className="achievements-grid">
    {achievements.slice(0,6).map((achievement, index) => (
      <div key={index} className="achievement-card">
        <h3>{achievement.title}</h3>
        <p className="achievement-description">
          {achievement.description}
        </p>
      </div>
    ))}
  </div>
</section>

  );
}

export default Achievements;
