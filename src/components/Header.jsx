import React from 'react';

function NavItem({ icon, label, href = '#' }) {
  return (
    <a
      href={href}
      className="nav-link flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
    >
      <span className="material-symbols-outlined text-lg md:text-xl">{icon}</span>
      <span className="hidden sm:inline-block font-medium">{label}</span>
    </a>
  );
}

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30">
      <div className="backdrop-blur-xl bg-background/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl glow-border bg-background-dark/70 grid place-items-center">
                <span className="material-symbols-outlined text-primary">deployed_code</span>
              </div>
              <span className="font-heading text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">Dataverse</span>
            </a>

            <nav className="hidden md:flex items-center gap-1 bg-background-dark/40 p-1 rounded-xl border border-white/10">
              <NavItem icon="space_dashboard" label="Dashboard" />
              <NavItem icon="assignment" label="My Tasks" />
              <NavItem icon="cloud_upload" label="Upload Task" />
              <NavItem icon="smart_toy" label="My Models" />
            </nav>

            <div className="flex items-center gap-2">
              <button className="glow-button hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium">
                <span className="material-symbols-outlined">account_balance_wallet</span>
                Connect
              </button>
              <button className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-background/60">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
