import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StickerEditor from '@/components/StickerEditor';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StickerEditor />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '4rem 0 2rem', marginTop: '4rem', borderTop: '2px solid black' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>
          Stickify
        </div>
        <p style={{ fontWeight: 600 }}>© 2026 Sticker Creator. All rights reserved.</p>
        <div style={{ marginTop: '1rem' }}>
           <span style={{ 
            fontSize: '12px', border: '2px solid #0070f3', 
            padding: '4px 8px', borderRadius: '4px',
            backgroundColor: '#e6f2ff', color: '#0070f3', fontWeight: 'bold'
          }}>Made with Next.js</span>
        </div>
      </footer>
    </>
  );
}
