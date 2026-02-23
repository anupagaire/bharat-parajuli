import React from "react";
import "./Manifesto.css";

function Manifesto() {
  return (
    <section id="manifesto" className="manifesto">
      <div className="container">

        <h2 className="section-title">घोषणापत्र</h2>
        <p className="section-subtitle">
          समृद्ध सिन्धुपाल्चोक निर्माणका लागि हाम्रो स्पष्ट कार्ययोजना
        </p>

        <div className="manifesto-wrapper">
          <div className="manifesto-pdf">
            <iframe
              src="/manifesto.pdf"
              title="घोषणापत्र PDF"
              width="100%"
              height="600px"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Manifesto;