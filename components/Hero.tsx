import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { SectionId } from '../types';
import { ArrowRight, Star, ImageOff } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800 mb-6 border border-gray-200">
            <Star size={12} fill="black" /> Nova Tecnologia de Geração 2.5
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1] mb-6 text-balance">
            Criação de sites premium <br/>
            <span className="text-gray-400">potencializados por IA.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Seu site profissional, no ar em 48h. Design minimalista, estratégia de conversão e posicionamento de autoridade para o seu negócio.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToContact} className="w-full md:w-auto text-base px-10 py-4">
              Agendar Conversa
            </Button>
            <Button variant="link" onClick={() => document.getElementById(SectionId.EXAMPLES)?.scrollIntoView({ behavior: 'smooth'})} className="group text-base flex items-center gap-1">
              Ver exemplos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white min-h-[300px] md:min-h-[500px] flex items-center justify-center bg-gray-50 group">
            {/* Imagem Principal */}
            <img 
              src="/hero.png" 
              alt="Interface de Criação de Sites com IA" 
              className="w-full h-auto block hover:scale-105 transition-transform duration-[2s]"
              loading="eager" // Carregamento prioritário
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-active');
              }}
            />
            
            {/* Fallback visual (apenas se a imagem falhar/não existir) */}
            <div className="absolute inset-0 flex-col items-center justify-center text-gray-400 hidden group-[.fallback-active]:flex">
               <ImageOff size={48} className="mb-4 opacity-50" />
               <p className="text-sm font-medium">Imagem não carregada</p>
               <p className="text-xs mt-1">Verifique se o arquivo <b>hero.png</b> está na pasta correta.</p>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 right-8 bg-white/90 backdrop-blur shadow-lg rounded-xl p-4 flex items-center gap-3 border border-gray-100 hidden md:flex"
            >
               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
               </div>
               <div className="text-left">
                  <p className="text-xs text-gray-500 font-medium">Performance</p>
                  <p className="text-sm font-bold text-gray-900">Score 98/100</p>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-3xl -z-10 opacity-60" />
    </section>
  );
};