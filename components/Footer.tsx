import React from 'react';
import { CONTRACT_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t-4 border-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-display font-black text-3xl text-[#fc9320] mb-4 uppercase tracking-wider">Make Bonk Great Again</h3>
        <p className="text-white mb-6 max-w-lg mx-auto font-medium">
          Community initiative. Not financial advice. Just vibes and bonks.
        </p>
        <div className="font-mono text-xs text-[#fc9320] break-all bg-white/10 inline-block px-4 py-2 rounded-lg border border-white/20 mb-6">
          {CONTRACT_ADDRESS}
        </div>

        {/* Web Dev Credit */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-400 font-bold text-sm">Web dev:</span>
          <a 
            href="https://t.me/Maximus00115" 
            target="_blank" 
            rel="noreferrer"
            className="text-[#24A1DE] hover:text-white transition-colors transform hover:scale-110"
            aria-label="Telegram"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        <div className="mt-4 text-sm text-gray-400 font-bold">
          © {new Date().getFullYear()} MBGA.
        </div>
      </div>
    </footer>
  );
};

export default Footer;