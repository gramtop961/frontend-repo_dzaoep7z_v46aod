import React, { useEffect } from 'react';

export default function ParticleBackground() {
  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particle-bg', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#60a5fa', '#22d3ee', '#a78bfa'] },
            shape: { type: 'circle' },
            opacity: { value: 0.25, random: false },
            size: { value: 2.5, random: true },
            line_linked: { enable: true, distance: 140, color: '#6b7280', opacity: 0.25, width: 1 },
            move: { enable: true, speed: 1.2, direction: 'none', random: false, straight: false, out_mode: 'out' }
          },
          interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 180, line_linked: { opacity: 0.4 } }, push: { particles_nb: 3 } }
          },
          retina_detect: true
        });
      }
    };

    return () => {
      try {
        const container = document.getElementById('particle-bg');
        if (container) container.innerHTML = '';
      } catch {}
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="particle-bg"
      className="absolute inset-0 z-0 opacity-80"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
}
