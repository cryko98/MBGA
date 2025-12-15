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
        <div className="font-mono text-xs text-[#fc9320] break-all bg-white/10 inline-block px-4 py-2 rounded-lg border border-white/20">
          {CONTRACT_ADDRESS}
        </div>
        <div className="mt-8 text-sm text-gray-400 font-bold">
          © {new Date().getFullYear()} MBGA.
        </div>
      </div>
    </footer>
  );
};

export default Footer;