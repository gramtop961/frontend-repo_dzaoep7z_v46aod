import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Ensure Material Symbols Outlined is available
    const existing = document.querySelector('link[data-material-symbols]');
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..700,0..1,-50..200';
      link.setAttribute('data-material-symbols', 'true');
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background-dark text-foreground overflow-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />

      {/* Custom CSS matching the Upload Task reference theme */}
      <style>{`
        :root {
          --glow-primary: 0 0 24px rgba(99, 102, 241, 0.55);
          --glow-cyan: 0 0 24px rgba(34, 211, 238, 0.45);
          --card-bg: rgba(17, 17, 24, 0.55);
        }

        /* Text glow for hero title */
        .text-glow {
          text-shadow: 0 2px 24px rgba(99,102,241,0.45), 0 0 2px rgba(255,255,255,0.05);
        }

        /* Glow border used around key elements */
        .glow-border {
          position: relative;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .glow-border::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: var(--glow-primary), var(--glow-cyan);
          opacity: 0.35;
          transition: opacity 200ms ease;
        }
        .glow-border:hover::after { opacity: 0.6; }

        /* Glow button primary */
        .glow-button {
          background: linear-gradient(135deg, rgba(99,102,241,0.18), rgba(34,211,238,0.18));
          color: white;
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25), 0 0 24px rgba(99,102,241,0.35);
          transition: transform 120ms ease, box-shadow 200ms ease, background 200ms ease;
          backdrop-filter: blur(10px);
        }
        .glow-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 16px 34px rgba(0,0,0,0.3), 0 0 36px rgba(99,102,241,0.55);
          background: linear-gradient(135deg, rgba(99,102,241,0.28), rgba(34,211,238,0.28));
        }
        .glow-button:active { transform: translateY(0px) scale(0.99); }

        /* Glassmorphism card surface */
        .glassmorphism-card {
          background: var(--card-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        /* Pulse glow animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.35); }
          50% { box-shadow: 0 0 28px 6px rgba(99,102,241,0.35); }
        }

        /* Nav link base and active styles (active is unused by default here) */
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 6px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.8), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 180ms ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active {
          color: rgb(99,102,241);
        }

        /* Particle canvas should sit behind content */
        #particle-bg { position: absolute; }

        /* Material Symbols weight and optical size */
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}
