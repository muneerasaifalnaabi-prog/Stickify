import React from 'react';

export default function Hero() {
  return (
    <section className="hero container">
      {/* Decorative Cloud SVG */}
      <svg className="floating-element" style={{ top: '10%', left: '5%', opacity: 0.8 }} width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 50C20 50 10 35 15 25C20 15 35 10 45 15C55 5 80 5 95 15C105 10 120 15 125 25C130 35 120 50 100 50H40Z" stroke="black" strokeWidth="3" fill="white"/>
      </svg>
      
      <svg className="floating-element" style={{ top: '60%', right: '10%', animationDelay: '1s' }} width="200" height="80" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 50C20 50 10 35 15 25C20 15 35 10 45 15C55 5 80 5 95 15C105 10 120 15 125 25C130 35 120 50 100 50H40Z" stroke="black" strokeWidth="3" fill="white"/>
      </svg>

      <h1 className="hero-title">
        <span style={{ display: 'block', transform: 'rotate(-2deg)' }}>Create Your Unique</span>
        <span style={{ display: 'block', fontSize: '1.2em', transform: 'rotate(1deg)' }}>Custom Sticker</span>
      </h1>
      
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem', fontWeight: 500 }}>
        Join the sticker revolution! We offer easy-to-use tools and templates for creating your own custom stickers that help you share ideas, stand out, and attract like-minded individuals.
      </p>

      <div className="flex gap-4 justify-center items-center" style={{ marginTop: '3rem' }}>
        <button className="meme-button">Order a project</button>
        <div style={{ position: 'relative' }}>
          <button className="meme-button meme-button-outline">View Template</button>
          <span style={{ 
            position: 'absolute', top: '-15px', right: '-10px', 
            fontSize: '12px', border: '2px solid black', 
            padding: '2px 8px', borderRadius: '12px',
            transform: 'rotate(15deg)', backgroundColor: 'white',
            fontWeight: 'bold'
          }}>SOON</span>
        </div>
      </div>
    </section>
  );
}
