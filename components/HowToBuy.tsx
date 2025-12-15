import React from 'react';
import { Wallet, Coins, ArrowRightLeft, Search } from 'lucide-react';
import { BONK_FUN_URL } from '../constants';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <Wallet size={40} className="text-white" />,
      title: "Create Wallet",
      desc: "Download Phantom or Solflare wallet from the app store or as a browser extension.",
      color: "bg-purple-600"
    },
    {
      icon: <Coins size={40} className="text-white" />,
      title: "Get SOL",
      desc: "Buy Solana (SOL) from an exchange like Binance or Coinbase and send it to your wallet.",
      color: "bg-black"
    },
    {
      icon: <Search size={40} className="text-white" />,
      title: "Go to BONK.fun",
      desc: "Click the link below to head over to the official launchpad page.",
      color: "bg-[#fc9320]"
    },
    {
      icon: <ArrowRightLeft size={40} className="text-white" />,
      title: "Swap for $MBGA",
      desc: "Connect your wallet and swap SOL (or USD1) for $MBGA. Confirm transaction.",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="howtobuy" className="py-20 bg-white border-y-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-black text-black mb-4 uppercase text-shadow-sm">
            How to Buy
          </h2>
          <p className="text-xl font-bold text-gray-500">Join the movement in 4 simple steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Arrow Connector (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-2 bg-gray-200 z-0"></div>
              )}
              
              <div className="bg-white rounded-2xl border-4 border-black p-6 h-full shadow-comic hover:shadow-comic-lg transition-all relative z-10 flex flex-col items-center text-center">
                <div className={`w-20 h-20 ${step.color} rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div className="absolute top-4 right-4 font-display font-black text-4xl text-gray-100 -z-10">
                  0{index + 1}
                </div>
                <h3 className="font-black text-xl mb-3 uppercase">{step.title}</h3>
                <p className="text-sm font-bold text-gray-500 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
             href={BONK_FUN_URL}
             target="_blank"
             rel="noreferrer"
             className="inline-block bg-black text-white font-black text-xl px-12 py-4 rounded-xl border-4 border-black hover:bg-white hover:text-black transition-colors shadow-comic"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;