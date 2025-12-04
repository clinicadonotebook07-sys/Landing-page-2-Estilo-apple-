import React from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Layout, Globe, Search, Lock } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: "Design Apple Style",
    description: "Estética minimalista, focada na experiência do usuário e na percepção de alto valor."
  },
  {
    icon: Globe,
    title: "Hospedagem Gratuita",
    description: "Seu site hospedado em servidores de alta performance sem custo mensal no primeiro ano."
  },
  {
    icon: Zap,
    title: "Entrega em 48h",
    description: "Processo otimizado com IA para entregar seu projeto completo em tempo recorde."
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Estrutura pronta para o Google, ajudando seu negócio a ser encontrado organicamente."
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Adaptação perfeita para celulares, tablets e desktops. Mobile-first nativo."
  },
  {
    icon: Lock,
    title: "Segurança Total",
    description: "Certificado SSL incluso e proteção contra ataques, garantindo a confiança do cliente."
  }
];

export const Features: React.FC = () => {
  return (
    <Section id={SectionId.BENEFITS} className="bg-[#F5F5F7]">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Por que escolher a Lumina?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto"
        >
          Combinamos design de classe mundial com a eficiência da inteligência artificial para criar não apenas sites, mas ativos digitais.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6">
              <feature.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};