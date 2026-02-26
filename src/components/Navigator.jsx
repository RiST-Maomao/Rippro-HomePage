import React, { useState, useEffect } from 'react';

const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isScrolled ? '15px 50px' : '25px 50px',
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: 'all 0.4s ease',
    zIndex: 1000,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
    color: isScrolled ? '#000' : '#fff',
  };

  const linkStyle = {
    position: 'relative',
    cursor: 'pointer',
    padding: '5px 0',
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: '900', fontSize: '20px', letterSpacing: '2px' }}>
        DAC CLONE
      </div>
      <ul style={{ display: 'flex', gap: '30px', alignItems: 'center', listStyle: 'none', fontSize: '14px', fontWeight: 'bold' }}>
        <li className="nav-item" style={linkStyle}>SERVICE</li>
        <li className="nav-item" style={linkStyle}>WORKS</li>
        <li className="nav-item" style={linkStyle}>ABOUT</li>
        {/* CONTACTボタンをここに統合しました */}
        <li className="nav-item" style={{ 
          ...linkStyle, 
          color: isScrolled ? '#0057ff' : '#fff',
          border: isScrolled ? '1px solid #0057ff' : '1px solid #fff',
          padding: '8px 20px',
          borderRadius: '20px',
          marginLeft: '20px'
        }}>
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;