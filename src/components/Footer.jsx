import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dataverse. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
