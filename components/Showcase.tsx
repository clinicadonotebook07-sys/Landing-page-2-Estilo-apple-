import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

const niches = [
  { name: "Jurídico", image: "https://picsum.photos/seed/law/600/800", desc: "Advogados e Escritórios" },
  { name: "Consultório", image: "https://picsum.photos/seed/doctor/600/800", desc: "Médicos e Dentistas" },
  { name: "Arquitetura", image: "https://picsum.photos/seed/arch/600/800", desc: "Arquitetos e Design" },
  { name: "Marketing", image: "https://picsum.photos/seed/marketing/600/800", desc: "Agências e Freelancers" },
  { name: "Engenharia", image: "https://picsum.photos/seed/eng/600/800", desc: "Construtoras e Civil" },
  { name: "Consultoria", image: "https://picsum.photos/seed/consult/600/800", desc: "Mentores e Coaches" },
];

export const Showcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <Section id={SectionId.EXAMPLES} className="bg-white overflow-hidden">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Especialistas em<br/>Autoridade Digital</h2>
          <p className="text-gray-500 text-lg">Modelos otimizados para os nichos mais exigentes.</p>
        </div>
        <div className="hidden md:flex gap-2 text-sm text-gray-400 items-center">
            <ArrowRight className="animate-pulse" /> Arraste para explorar
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <motion.div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12"
        whileTap={{ cursor: "grabbing" }}
      >
        {niches.map((niche, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[350px] snap-center group cursor-pointer relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-lg bg-gray-100">
               <img 
                 src={niche.image} 
                 alt={niche.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-2">
                    <Eye size={16} />
                    <span className="text-sm font-medium">Ver Modelo</span>
                  </div>
               </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">{niche.name}</h3>
              <p className="text-sm text-gray-500">{niche.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};