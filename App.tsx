import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import AIGenerator from './components/AIGenerator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-[#fc9320]/90 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
               {/* Logo */}
               <img 
                 src="https://pbs.twimg.com/media/G8PVElSWEAIkHrY?format=jpg&name=medium" 
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
            <div className="hidden sm:flex space-x-8 items-center">
              <a href="#" className="text-white font-bold text-lg hover:text-black hover:scale-110 transition-all text-meme uppercase">Home</a>
              <a href="#about" className="text-white font-bold text-lg hover:text-black hover:scale-110 transition-all text-meme uppercase">About</a>
              <a href="#generator" className="text-white font-bold text-lg hover:text-black hover:scale-110 transition-all text-meme uppercase">Generator</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero />
      <About />
      <AIGenerator />
      <Footer />
    </main>
  );
};

export default App;