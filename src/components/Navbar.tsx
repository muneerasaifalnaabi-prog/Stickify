import React from 'react';
import { Send, Star, Heart, Smile } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <div className="logo" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: '1' }}>
          <div>Stick</div>
          <div style={{ fontSize: '1.5rem', transform: 'rotate(-5deg)' }}>ify</div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links flex gap-8 items-center" style={{ display: 'none', '@media(min-width: 768px)': { display: 'flex' } } as any}>
          <a href="#about">About Us</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#development">Development</a>
          <a href="#price">Price</a>
          <a href="#contact">Contact Us</a>
          <a href="#templates" style={{ position: 'relative' }}>
            Templates
            <span style={{ 
              position: 'absolute', top: '-15px', right: '-20px', 
              fontSize: '10px', border: '1px solid black', 
              padding: '2px 4px', borderRadius: '4px',
              transform: 'rotate(15deg)', backgroundColor: 'white'
            }}>SOON</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-2">
          <a href="#" className="social-icon social-pink"><Smile size={20} color="white" /></a>
          <a href="#" className="social-icon social-blue"><Send size={20} color="white" /></a>
          <a href="#" className="social-icon social-orange"><Star size={20} color="white" /></a>
          <a href="#" className="social-icon social-darkblue"><Heart size={20} color="white" /></a>
        </div>
      </div>
    </nav>
  );
}
