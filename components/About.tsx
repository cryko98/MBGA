import React from 'react';
import { ShieldCheck, TrendingUp, Users, XCircle, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-black/20 p-8 rounded-3xl border-4 border-white backdrop-blur-sm">
              <h2 className="text-5xl font-display font-black text-white text-meme mb-6">
                Why <span className="text-[#FF6B00]">BONK.fun</span>?
              </h2>
              <p className="text-xl text-white font-bold leading-relaxed drop-shadow-sm">
                The era of chaotic PvP launches is over. We are here to popularize the BONK.fun launchpad and the power of USD1. 
              </p>
            </div>

            <div className="space-y-6">
              <div className="comic-box p-6 rounded-2xl transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#FF6B00] p-3 rounded-xl border-2 border-black text-white">
                    <ShieldCheck size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-black">Stable Liquidity (USD1)</h3>
                    <p className="text-black font-medium mt-1">
                      No more volatility. USD1 ensures smooth price discovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comic-box p-6 rounded-2xl transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#FF6B00] p-3 rounded-xl border-2 border-black text-white">
                    <TrendingUp size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-black">Fair Launch</h3>
                    <p className="text-black font-medium mt-1">
                      Anti-sniper mechanics. Real community wins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-comic-lg relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-4 bg-stripes opacity-10"></div>
             
             {/* Header */}
             <div className="text-center mb-8">
                <span className="font-display text-3xl font-black text-black uppercase border-b-4 border-[#FF6B00]">The Choice is Clear</span>
             </div>

             <div className="grid grid-cols-2 gap-6">
                {/* Bad Side */}
                <div className="bg-gray-100 p-6 rounded-2xl border-2 border-gray-300 opacity-60">
                  <div className="flex justify-center mb-4 text-gray-500">
                    <XCircle size={48} />
                  </div>
                  <h4 className="text-center font-black text-gray-500 mb-2 uppercase">The "Others"</h4>
                  <ul className="text-sm text-gray-500 space-y-2 font-bold">
                    <li className="flex items-center gap-2">❌ Rugs</li>
                    <li className="flex items-center gap-2">❌ PvP Toxicity</li>
                    <li className="flex items-center gap-2">❌ Volatile</li>
                  </ul>
                </div>

                {/* Good Side */}
                <div className="bg-[#FF6B00] p-6 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform scale-105 -rotate-2">
                  <div className="flex justify-center mb-4 text-white">
                    <Zap size={48} fill="white" />
                  </div>
                  <h4 className="text-center font-black text-white mb-2 uppercase text-shadow-sm">BONK.fun</h4>
                  <ul className="text-sm text-white space-y-2 font-bold">
                    <li className="flex items-center gap-2">✅ Stable</li>
                    <li className="flex items-center gap-2">✅ Community</li>
                    <li className="flex items-center gap-2">✅ Based</li>
                  </ul>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;