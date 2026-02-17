import React from 'react';
import './VoteAnimation.css';

function VoteAnimation() {
  return (
    <div className="vote-animation-overlay">
      <div className="vote-animation-container">
        <div className="vote-content">
          {/* Swastik Symbol */}
          <div className="swastik-symbol">
            <svg viewBox="0 0 200 200" className="swastik-svg">
              {/* Center square */}
              <rect x="80" y="80" width="40" height="40" fill="#ff6b6b"/>
              
              {/* Top arm */}
              <rect x="80" y="40" width="40" height="40" fill="#ff6b6b"/>
              <rect x="120" y="40" width="20" height="20" fill="#ff6b6b"/>
              
              {/* Right arm */}
              <rect x="120" y="80" width="40" height="40" fill="#ff6b6b"/>
              <rect x="140" y="120" width="20" height="20" fill="#ff6b6b"/>
              
              {/* Bottom arm */}
              <rect x="80" y="120" width="40" height="40" fill="#ff6b6b"/>
              <rect x="60" y="140" width="20" height="20" fill="#ff6b6b"/>
              
              {/* Left arm */}
              <rect x="40" y="80" width="40" height="40" fill="#ff6b6b"/>
              <rect x="40" y="60" width="20" height="20" fill="#ff6b6b"/>
            </svg>
          </div>

          {/* Bell Icon */}
          <div className="vote-bell">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
            </svg>
          </div>

          {/* Vote text */}
          <div className="vote-text-container">
            <h2 className="vote-title">मतदान गरियो!</h2>
            <p className="vote-subtitle">घण्टी चिन्हमा मतदान गर्नुभएकोमा धन्यवाद</p>
            <div className="vote-party">नेपाल स्वतन्त्र पार्टी</div>
            <div className="vote-candidate">भरत पराजुली</div>
          </div>

          {/* Confetti particles */}
          <div className="confetti-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>

          {/* Ink mark effect */}
          <div className="ink-mark">
            <div className="ink-dot"></div>
            <div className="ink-ripple"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoteAnimation;
