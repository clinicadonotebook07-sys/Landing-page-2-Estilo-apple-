import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', id: SectionId.HOME },
    { label: 'Benefícios', id: SectionId.BENEFITS },
    { label: 'Como Funciona', id: SectionId.HOW_IT_WORKS },
    { label: 'Exemplos', id: SectionId.EXAMPLES },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
            onClick={() => scrollTo(SectionId.HOME)}
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">AI</div>
            <span>Lumina</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant="primary" 
              onClick={() => scrollTo(SectionId.CONTACT)}
              className="px-5 py-2 text-xs"
            >
              Agendar Conversa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white z-40 border-b border-gray-100 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-lg font-medium text-left text-gray-800"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                variant="primary" 
                onClick={() => scrollTo(SectionId.CONTACT)}
                className="w-full justify-center"
              >
                Agendar Conversa
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};