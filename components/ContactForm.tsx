import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { SectionId, FormData } from '../types';
import { submitForm } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitForm(data);
      if (response.success) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Erro ao enviar", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Section id={SectionId.CONTACT} dark>
        <div className="min-h-[600px] flex items-center justify-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md p-8"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Solicitação Enviada!</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Recebemos seus dados. Um de nossos especialistas entrará em contato via WhatsApp em breve para dar início ao seu projeto.
            </p>
            <Button variant="secondary" onClick={() => setIsSuccess(false)}>
              Enviar nova solicitação
            </Button>
          </motion.div>
        </div>
      </Section>
    );
  }

  return (
    <Section id={SectionId.CONTACT} dark className="relative">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Vamos criar algo extraordinário.</h2>
          <p className="text-xl text-gray-400 mb-10">
            Preencha o formulário para agendar uma consultoria gratuita. Entenderemos seu negócio e mostraremos como a IA pode elevar sua marca.
          </p>
          
          <div className="space-y-6 text-gray-400 text-sm">
            <p>✓ Análise gratuita de presença digital</p>
            <p>✓ Proposta personalizada em 24h</p>
            <p>✓ Sem compromisso</p>
          </div>
        </div>

        <div className="bg-[#1d1d1f] border border-gray-800 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nome Completo</label>
                <input 
                  {...register("name", { required: "Nome é obrigatório" })}
                  className="w-full bg-[#2d2d2f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Seu nome"
                />
                {errors.name && <span className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.name.message}</span>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">WhatsApp</label>
                <input 
                  {...register("whatsapp", { required: "WhatsApp é obrigatório", pattern: { value: /^[0-9]+$/, message: "Apenas números" } })}
                  className="w-full bg-[#2d2d2f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="(00) 00000-0000"
                />
                {errors.whatsapp && <span className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.whatsapp.message}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">E-mail Corporativo</label>
              <input 
                {...register("email", { required: "E-mail é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" } })}
                className="w-full bg-[#2d2d2f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="seu@email.com"
              />
              {errors.email && <span className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.email.message}</span>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Tipo de Site</label>
                <select 
                  {...register("siteType", { required: true })}
                  className="w-full bg-[#2d2d2f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Selecione...</option>
                  <option value="institucional">Institucional</option>
                  <option value="landing">Landing Page</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="blog">Blog / Portal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Seu Nicho</label>
                <select 
                  {...register("niche", { required: true })}
                  className="w-full bg-[#2d2d2f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Selecione...</option>
                  <option value="juridico">Jurídico</option>
                  <option value="saude">Saúde / Clínica</option>
                  <option value="engenharia">Engenharia / Arquitetura</option>
                  <option value="marketing">Marketing / Consultoria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Objetivo Principal</label>
              <div className="grid grid-cols-2 gap-2">
                 {['Mais leads', 'Autoridade', 'Vendas diretas', 'Portfólio'].map((goal) => (
                    <label key={goal} className="flex items-center gap-2 bg-[#2d2d2f] p-3 rounded-lg cursor-pointer hover:bg-[#3d3d40] transition-colors">
                      <input type="checkbox" value={goal} {...register("goals")} className="rounded border-gray-600 text-black focus:ring-0" />
                      <span className="text-sm text-gray-300">{goal}</span>
                    </label>
                 ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Mensagem (Opcional)</label>
              <textarea 
                {...register("message")}
                className="w-full bg-[#2d2d2f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all h-24 resize-none"
                placeholder="Conte um pouco mais sobre seu projeto..."
              />
            </div>

            <Button 
              type="submit" 
              variant="secondary" 
              className="w-full py-4 text-base font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Enviando...</span>
              ) : (
                "Enviar e Agendar"
              )}
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
               Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};