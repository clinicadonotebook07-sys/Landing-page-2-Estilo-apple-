import React, { useState } from 'react';
import { Section } from './ui/Section';
import { SectionId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo realmente leva para o site ficar pronto?",
    answer: "Nossa tecnologia e processos permitem entregar a primeira versão funcional em 48 horas úteis após o recebimento do briefing completo. Ajustes finos podem levar mais 1 ou 2 dias."
  },
  {
    question: "Como funciona a hospedagem gratuita?",
    answer: "Oferecemos 1 ano de hospedagem premium gratuita em servidores de alta velocidade (AWS/Vercel). Após o primeiro ano, há uma taxa de manutenção anual acessível para manter tudo seguro e atualizado."
  },
  {
    question: "A IA escreve todo o conteúdo?",
    answer: "Sim e não. A IA gera a base estratégica e persuasiva (copywriting), mas nossos especialistas humanos revisam e adaptam cada palavra para garantir que a voz da sua marca seja autêntica."
  },
  {
    question: "Preciso pagar algo antes de ver?",
    answer: "Trabalhamos com uma taxa de entrada de 50% para início do projeto e 50% na aprovação final. Isso garante o compromisso de ambas as partes e a qualidade da entrega."
  },
  {
    question: "O site será meu ou fico preso a vocês?",
    answer: "O site é 100% seu. Ao final do projeto e pagamento, você tem total liberdade sobre o domínio e código. Não acreditamos em fidelidade forçada."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id={SectionId.FAQ} className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full py-4 text-left group"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-4 text-gray-400">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};