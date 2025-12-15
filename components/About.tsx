import React from 'react';
import { ShieldCheck, TrendingUp, XCircle, Zap, Flame, Lock, Rocket, Crown, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#fc9320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-6xl font-display font-black text-white text-meme uppercase transform -rotate-2 inline-block">
            The Bonk Standard
          </h2>
          <p className="text-xl font-bold text-black max-w-3xl mx-auto bg-white/20 backdrop-blur-sm p-6 rounded-xl border-2 border-black/10">
            Why settle for PvP rugs when you can launch with the Titans of Solana?
          </p>
        </div>

        {/* Feature Grid - Expanded to 4 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Card 1: KOL Support */}
          <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-comic hover:-translate-y-2 transition-transform relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
               <Crown size={100} />
            </div>
            <div className="w-14 h-14 bg-[#FFD700] rounded-xl border-4 border-black flex items-center justify-center mb-4 text-black transform -rotate-3">
              <Crown size={28} strokeWidth={3} />
            </div>
            <h3 className="font-display font-black text-xl mb-3 text-black uppercase leading-none">Elite KOL Network</h3>
            <p className="font-medium text-sm text-gray-800 leading-relaxed">
              Forget paid shillers. Bonk.fun attracts <strong>Real Solana OGs</strong> and high-tier KOLs who care about the ecosystem. When we launch, the heavy hitters are watching.
            </p>
          </div>

          {/* Card 2: Tech */}
          <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-comic hover:-translate-y-2 transition-transform group">
            <div className="w-14 h-14 bg-[#fc9320] rounded-xl border-4 border-black flex items-center justify-center mb-4 text-white transform rotate-2">
              <Rocket size={28} strokeWidth={3} />
            </div>
            <h3 className="font-display font-black text-xl mb-3 text-black uppercase leading-none">Raydium Turbo</h3>
            <p className="font-medium text-sm text-gray-800 leading-relaxed">
              Direct Raydium integration means <strong>instant liquidity</strong> and smoother routing via Jupiter. No more clunky curves—just pure speed and execution.
            </p>
          </div>

          {/* Card 3: Tokenomics */}
          <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-comic hover:-translate-y-2 transition-transform group">
            <div className="w-14 h-14 bg-red-500 rounded-xl border-4 border-black flex items-center justify-center mb-4 text-white transform -rotate-2">
              <Flame size={28} strokeWidth={3} />
            </div>
            <h3 className="font-display font-black text-xl mb-3 text-black uppercase leading-none">Ecosystem Fuel</h3>
            <p className="font-medium text-sm text-gray-800 leading-relaxed">
              We don't just extract value. Trading fees go towards <strong>BONK buybacks & burns</strong>. Every swap strengthens the entire Bonk DAO ecosystem.
            </p>
          </div>

           {/* Card 4: Stability */}
           <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-comic hover:-translate-y-2 transition-transform group">
            <div className="w-14 h-14 bg-blue-500 rounded-xl border-4 border-black flex items-center justify-center mb-4 text-white transform rotate-3">
              <Lock size={28} strokeWidth={3} />
            </div>
            <h3 className="font-display font-black text-xl mb-3 text-black uppercase leading-none">USD1 Stability</h3>
            <p className="font-medium text-sm text-gray-800 leading-relaxed">
              Launching on USD1 removes the initial SOL volatility risk. It's a <strong>fairer start</strong> for holders, letting the community build true price discovery.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Section */}
        <div className="bg-black p-8 md:p-12 rounded-[3rem] border-4 border-white shadow-2xl relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-block bg-[#fc9320] border-2 border-white px-4 py-1 rounded-full text-xs font-black text-white uppercase tracking-widest mb-2">
                  The Alpha
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                  Degens vs <br/><span className="text-[#fc9320] text-meme-lg">Legends</span>
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg font-medium leading-relaxed">
                    Other launchpads are a PvP warzone where 99% of projects die in minutes. 
                    <span className="text-white font-bold"> Bonk.fun is different.</span> 
                    Backed by the most powerful community in crypto, we focus on longevity, viral potential, and real backing.
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                     <div className="bg-gray-900 p-4 rounded-xl border-l-8 border-[#fc9320] flex items-center gap-4">
                        <Users className="text-[#fc9320] shrink-0" size={32} />
                        <div>
                           <h4 className="text-white font-black uppercase">Community First</h4>
                           <p className="text-gray-400 text-sm">Bonk DAO support > Random dev support.</p>
                        </div>
                     </div>
                     <div className="bg-gray-900 p-4 rounded-xl border-l-8 border-yellow-400 flex items-center gap-4">
                        <Award className="text-yellow-400 shrink-0" size={32} />
                        <div>
                           <h4 className="text-white font-black uppercase">Quality over Quantity</h4>
                           <p className="text-gray-400 text-sm">Curated environment for higher success rates.</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Visual Comparison Table */}
              <div className="bg-white rounded-3xl p-8 border-4 border-[#fc9320] shadow-[12px_12px_0px_0px_#000000] transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                 <div className="grid grid-cols-3 gap-4 mb-6 border-b-2 border-gray-200 pb-4">
                    <div className="col-span-1"></div>
                    <div className="col-span-1 text-center font-black text-gray-400 text-sm uppercase">Pump.fun</div>
                    <div className="col-span-1 text-center font-black text-[#fc9320] text-xl uppercase bg-[#fff0e0] rounded-lg py-1 border border-[#fc9320]">Bonk.fun</div>
                 </div>
                 
                 <div className="space-y-4 font-bold text-sm md:text-base">
                    <div className="grid grid-cols-3 gap-4 items-center">
                       <div className="text-black">Influence</div>
                       <div className="text-center text-gray-400">Paid callers</div>
                       <div className="text-center text-green-600 flex justify-center items-center gap-1"><ShieldCheck size={16}/> Top KOLs</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                       <div className="text-black">Liquidity</div>
                       <div className="text-center text-gray-400">Bonding Curve</div>
                       <div className="text-center text-green-600">Raydium + Jup</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                       <div className="text-black">Fees</div>
                       <div className="text-center text-gray-400">Dev Profit</div>
                       <div className="text-center text-green-600">Bonk Burns</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                       <div className="text-black">Vibe</div>
                       <div className="text-center text-red-400">Toxic PvP</div>
                       <div className="text-center text-green-600">WAGMI</div>
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t-2 border-gray-100 text-center">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Verdict</p>
                    <div className="text-3xl font-black text-black italic">"Make Bonk Great Again"</div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;