
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Language } from '../types';

const AIStrategist: React.FC<{ lang: Language }> = ({ lang }) => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!prompt) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a senior branding strategist for medical professionals. Suggest a brand strategy (colors, voice, values) for the following medical practice description: "${prompt}". Please provide the response in ${lang === 'EN' ? 'English' : 'Bengali'}. Focus on trust, empathy, and professional excellence.`,
        config: {
          thinkingConfig: { thinkingBudget: 0 }
        }
      });
      setResult(response.text || 'No response found.');
    } catch (error) {
      console.error(error);
      setResult('Failed to generate strategy. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand/5 text-brand text-xs font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Gemini AI Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {lang === 'EN' ? 'AI Brand Strategist' : 'এআই ব্র্যান্ড স্ট্র্যাটেজিস্ট'}
            </h2>
            <p className="text-gray-500 font-medium">
              {lang === 'EN' 
                ? 'Get instant professional branding advice for your medical practice. Describe your specialty and values.'
                : 'আপনার মেডিকেল প্র্যাকটিসের জন্য তাৎক্ষণিক পেশাদার ব্র্যান্ডিং পরামর্শ পান। আপনার বিশেষত্ব এবং মূল্যবোধ বর্ণনা করুন।'}
            </p>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={lang === 'EN' ? "e.g., Pedatric clinic in Dhaka focused on gentle care and child psychology..." : "উদাঃ শিশুদের প্রতি কোমল যত্ন এবং মনোবিজ্ঞানের উপর ফোকাস করা একটি পেডিয়াট্রিক ক্লিনিক..."}
              className="w-full h-32 p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand focus:outline-none resize-none font-medium"
            />
            <button
              onClick={handleAnalyze}
              disabled={isLoading || !prompt}
              className="w-full py-4 bg-[#1D1D1F] text-white rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  {lang === 'EN' ? 'Strategizing...' : 'কৌশল তৈরি হচ্ছে...'}
                </>
              ) : (
                lang === 'EN' ? 'Generate Strategy' : 'কৌশল তৈরি করুন'
              )}
            </button>
          </div>

          <div className="flex-1 bg-gray-50 rounded-2xl p-6 overflow-y-auto max-h-[400px] border border-gray-100">
            {result ? (
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-medium">
                  {result}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p className="font-medium text-sm">
                  {lang === 'EN' ? 'Your AI-generated strategy will appear here' : 'আপনার এআই-উত্পাদিত কৌশল এখানে উপস্থিত হবে'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStrategist;
