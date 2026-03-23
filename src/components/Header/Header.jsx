import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img
            src="/planet-logo.png"
            alt="Planet Creative World"
            className="header-logo-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;