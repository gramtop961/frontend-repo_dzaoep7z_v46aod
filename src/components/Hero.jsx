import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground drop-shadow-sm text-glow">
              Dataverse
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering data labeling through decentralization.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl">
              Join a global network of contributors and help build the future of AI. Label data, earn rewards, and own a piece of the new data economy.
            </p>

            <div className="pt-4">
              <button className="glow-button px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined">bolt</span>
                Connect Wallet
              </button>
            </div>
          </div>

          {/* Right - 3D Spline Scene */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px] w-full rounded-3xl overflow-hidden glow-border glassmorphism-card">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-dark/40 via-transparent to-background-dark/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
