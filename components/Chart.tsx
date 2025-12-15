import React from 'react';
import { CONTRACT_ADDRESS } from '../constants';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-20 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
             <h2 className="text-5xl font-display font-black text-black uppercase text-meme-lg text-[#fc9320]">
                Live Chart
             </h2>
             <p className="font-bold text-black mt-2">Watch the green candles print.</p>
          </div>
          <div className="bg-black text-white px-4 py-2 rounded-lg font-mono text-sm border-2 border-[#fc9320]">
            MCAP: LOADING...
          </div>
        </div>

        <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-black rounded-3xl border-4 border-black shadow-comic-lg overflow-hidden relative">
          <iframe 
            src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
            className="absolute inset-0 w-full h-full"
            title="DexScreener Chart"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Chart;