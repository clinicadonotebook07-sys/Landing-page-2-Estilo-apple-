import React from 'react';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d1d1f] text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
           <div className="text-white font-bold text-xl mb-2 flex items-center justify-center md:justify-start gap-2">
             <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-[10px]">AI</div>
             Lumina
           </div>
           <p className="text-sm">Design minimalista. Tecnologia avançada.</p>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </div>

        <div className="text-xs text-gray-600">
          © {new Date().getFullYear()} Lumina Web Studio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};