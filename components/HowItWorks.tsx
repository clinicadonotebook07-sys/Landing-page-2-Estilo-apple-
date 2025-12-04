import React from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Briefing Inteligente",
    text: "Preencha nosso formulário estratégico. Nossa IA analisa seu nicho e objetivos para propor a melhor estrutura."
  },
  {
    id: "02",
    title: "Criação & Design",
    text: "Nossos designers utilizam IA para gerar o layout, escrever copy persuasiva e selecionar imagens de alta conversão."
  },
  {
    id: "03",
    title: "Entrega e Publicação",
    text: "Em até 48 horas, você recebe o link para aprovação. Ajustamos os detalhes finais e publicamos seu site."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id={SectionId.HOW_IT_WORKS}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Como funciona</h2>
            <p className="text-gray-500">Simples, direto e sem burocracia.</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gray-100" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 md:items-start"
              >
                <div className="flex-shrink-0 z-10">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-xl font-bold shadow-sm">
                    {step.id}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-lg">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};