import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { CONTRACT_ADDRESS, TWITTER_URL } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://pbs.twimg.com/media/G8PSnhfXEAUmHwo?format=jpg&name=large")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Decorative Patterns */}
      <div className="absolute top-20 right-10 opacity-30 transform rotate-12 z-0 pointer-events-none hidden md:block">
        <span className="text-9xl font-black text-white drop-shadow-lg">BONK</span>
      </div>
      <div className="absolute bottom-20 left-10 opacity-30 transform -rotate-12 z-0 pointer-events-none hidden md:block">
        <span className="text-9xl font-black text-white drop-shadow-lg">USD1</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 pt-20">
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tight leading-none text-meme-lg text-white transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
          Make Bonk<br/>Great Again
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold text-white mb-10 max-w-2xl mx-auto leading-relaxed text-meme drop-shadow-lg">
          No rugs. Just BONKS. <br/>
          <span className="text-lg md:text-xl font-medium mt-2 block opacity-90">
            Restoring meme glory on USD1.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* CA Box */}
          <div className="comic-box rounded-xl p-2 w-full sm:w-auto max-w-md transform rotate-1 hover:rotate-0 transition-transform bg-white/95">
            <div className="flex items-center gap-2">
              <div className="bg-[#fc9320] px-4 py-2 rounded-lg font-mono text-sm font-bold text-black border-2 border-black truncate max-w-[200px] sm:max-w-xs">
                {CONTRACT_ADDRESS}
              </div>
              <button
                onClick={handleCopy}
                className="p-2 bg-black text-white rounded-lg border-2 border-black hover:bg-gray-800 transition-colors"
                title="Copy Address"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={TWITTER_URL} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-black text-white rounded-xl border-2 border-white hover:bg-gray-900 transition-transform hover:-translate-y-1 shadow-comic flex items-center justify-center w-16"
              aria-label="X (formerly Twitter)"
            >
              {/* X Logo SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;