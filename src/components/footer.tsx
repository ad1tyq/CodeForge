// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border-color)] py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--accent-amethyst)] mb-3">
            CodeQuest
          </h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Level up your coding skills through quests, challenges, and a thriving community.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <a href="#" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">
            Quests
          </a>
          <a href="#" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">
            Leaderboard
          </a>
          <a href="#" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">
            Community
          </a>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium text-white">Stay Connected</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-emerald)] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12Z" />
              </svg>
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-emerald)] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.84 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.09-4.52 4.67 0 .37.04.72.11 1.06C7.69 5.6 4.07 3.73 1.64.9A4.77 4.77 0 0 0 1 3.15a4.67 4.67 0 0 0 2.01 3.89A4.41 4.41 0 0 1 .96 6v.06c0 2.28 1.56 4.18 3.63 4.61a4.5 4.5 0 0 1-2.05.08c.58 1.9 2.26 3.3 4.25 3.34A9.05 9.05 0 0 1 0 19.54a12.76 12.76 0 0 0 7.29 2.22c8.75 0 13.54-7.47 13.54-13.94 0-.21 0-.42-.02-.63A9.93 9.93 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-emerald)] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-9.96 4.48-9.96 10 0 4.42 3.58 8.1 8.22 8.9v-6.3h-2.47v-2.6h2.47v-1.98c0-2.44 1.44-3.8 3.66-3.8 1.06 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.58.76-1.58 1.54V12h2.69l-.43 2.6h-2.26v6.3c4.64-.8 8.22-4.48 8.22-8.9 0-5.52-4.44-10-9.96-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 text-center text-xs text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-4">
        © {new Date().getFullYear()} CodeQuest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
