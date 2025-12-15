import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Chart from './components/Chart';
import AIGenerator from './components/AIGenerator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col bg-[#fc9320]">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-[#fc9320]/95 backdrop-blur-md border-b-4 border-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
               {/* Logo */}
               <img 
                 src="https://pbs.twimg.com/media/G8PgN9UW4AMATa0?format=jpg&name=medium" 
                 alt="MBGA Logo" 
                 className="w-12 h-12 rounded-full border-2 border-black shadow-sm"
               />
               <div className="flex flex-col">
                 <span className="font-mono text-xl font-black text-black bg-white px-3 py-1 rounded transform -rotate-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start mt-1">
                   $MBGA
                 </span>
               </div>
            </div>
            
            {/* Nav Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="text-white font-bold text-sm lg:text-base hover:text-black hover:-translate-y-1 transition-all uppercase tracking-wide">Home</a>
              <a href="#about" className="text-white font-bold text-sm lg:text-base hover:text-black hover:-translate-y-1 transition-all uppercase tracking-wide">About</a>
              <a href="#generator" className="px-4 py-2 bg-black text-white font-black rounded-lg border-2 border-white hover:bg-white hover:text-black hover:border-black transition-all shadow-comic text-sm uppercase">
                Meme Gen
              </a>
              <a href="#howtobuy" className="text-white font-bold text-sm lg:text-base hover:text-black hover:-translate-y-1 transition-all uppercase tracking-wide">How to Buy</a>
              <a href="#chart" className="text-white font-bold text-sm lg:text-base hover:text-black hover:-translate-y-1 transition-all uppercase tracking-wide">Chart</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Reordered */}
      <Hero />
      <About />
      <AIGenerator />
      <HowToBuy />
      <Chart />
      <Footer />
    </main>
  );
};

export default App;