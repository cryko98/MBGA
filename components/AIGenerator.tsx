import React, { useState, useRef } from 'react';
import { Upload, Wand2, Download, AlertCircle, RefreshCw } from 'lucide-react';
import { generateEditedImage } from '../services/geminiService';
import { PROMPT_CAP, PROMPT_BONK } from '../constants';
import { AIResponse, GeneratorType } from '../types';

const AIGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GeneratorType>(GeneratorType.CAP);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [state, setState] = useState<AIResponse>({
    imageUrl: null,
    loading: false,
    error: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setState(prev => ({ ...prev, error: "Image too large. Max 5MB." }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setState({ imageUrl: null, loading: false, error: null });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setState({ imageUrl: null, loading: true, error: null });

    try {
      const prompt = activeTab === GeneratorType.CAP ? PROMPT_CAP : PROMPT_BONK;
      const result = await generateEditedImage(selectedImage, prompt);
      setState({ imageUrl: result, loading: false, error: null });
    } catch (err: any) {
      setState({ 
        imageUrl: null, 
        loading: false, 
        error: err.message || "Something went wrong. Try again." 
      });
    }
  };

  const downloadImage = () => {
    if (state.imageUrl) {
      const link = document.createElement('a');
      link.href = state.imageUrl;
      link.download = `bonk-fun-generated-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="generator" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display font-black mb-4 text-white text-meme">
            Meme Machine
          </h2>
          <p className="text-xl text-white font-bold drop-shadow-md">
            Generate your official BONK.fun profile picture.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-black p-2 rounded-2xl inline-flex gap-2 shadow-comic">
            <button
              onClick={() => setActiveTab(GeneratorType.CAP)}
              className={`px-6 py-3 rounded-xl text-md font-black transition-all border-2 border-transparent ${
                activeTab === GeneratorType.CAP
                  ? 'bg-[#FF6B00] text-white border-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🧢 Make Bonk Great
            </button>
            <button
              onClick={() => setActiveTab(GeneratorType.BONK)}
              className={`px-6 py-3 rounded-xl text-md font-black transition-all border-2 border-transparent ${
                activeTab === GeneratorType.BONK
                  ? 'bg-[#FF6B00] text-white border-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🔨 Get Bonked
            </button>
          </div>
        </div>

        {/* Generator Card */}
        <div className="comic-box rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Controls Side */}
          <div className="md:w-1/3 p-8 bg-yellow-50 border-r-4 border-black flex flex-col">
            <h3 className="text-2xl font-black text-black mb-6 uppercase">
              {activeTab === GeneratorType.CAP ? "The Cap" : "The Bonk"}
            </h3>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">1. Upload Photo</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-4 border-dashed border-black/30 rounded-2xl p-6 text-center hover:border-black hover:bg-[#FF6B00]/10 transition-all cursor-pointer group"
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept="image/*" 
                    className="hidden" 
                  />
                  <div className="flex flex-col items-center">
                    <Upload className="text-black group-hover:scale-110 transition-transform mb-2" size={32} strokeWidth={2.5} />
                    <span className="text-xs font-bold text-black">CLICK TO UPLOAD</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">2. Generate</label>
                <button
                  onClick={handleGenerate}
                  disabled={!selectedImage || state.loading}
                  className={`w-full py-4 px-4 rounded-xl flex items-center justify-center gap-2 font-black text-lg border-2 border-black transition-all ${
                    !selectedImage 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : state.loading
                      ? 'bg-yellow-300 text-black cursor-wait'
                      : 'bg-[#FF6B00] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  {state.loading ? (
                    <>
                      <RefreshCw className="animate-spin" size={24} /> WORKING...
                    </>
                  ) : (
                    <>
                      <Wand2 size={24} /> {activeTab === GeneratorType.CAP ? "ADD CAP" : "BONK IT"}
                    </>
                  )}
                </button>
              </div>

              {state.error && (
                <div className="p-4 bg-red-100 border-2 border-red-500 text-red-700 font-bold text-xs rounded-xl flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  {state.error}
                </div>
              )}
            </div>
          </div>

          {/* Preview Side */}
          <div className="md:w-2/3 p-8 bg-white flex flex-col items-center justify-center relative pattern-grid">
            <div className="w-full max-w-md aspect-square bg-gray-100 rounded-2xl overflow-hidden relative flex items-center justify-center border-4 border-black shadow-inner">
              
              {!selectedImage && !state.imageUrl && (
                 <div className="text-center text-gray-400 font-bold">
                    <p>PREVIEW AREA</p>
                 </div>
              )}

              {selectedImage && !state.imageUrl && !state.loading && (
                <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
              )}

              {state.loading && (
                <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center">
                   <div className="w-20 h-20 border-8 border-yellow-200 border-t-[#FF6B00] rounded-full animate-spin mb-4"></div>
                   <p className="text-black font-black text-xl animate-pulse">COOKING...</p>
                </div>
              )}

              {state.imageUrl && (
                <img src={state.imageUrl} alt="Generated" className="w-full h-full object-contain" />
              )}
            </div>

            {state.imageUrl && (
              <button 
                onClick={downloadImage}
                className="mt-6 px-6 py-3 bg-green-500 text-white font-black border-2 border-black rounded-xl shadow-comic hover:shadow-none hover:translate-y-1 transition-all flex items-center gap-2"
              >
                <Download size={24} /> SAVE IMAGE
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIGenerator;