import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 px-6 md:px-8 lg:px-12 w-full overflow-hidden ${dark ? 'bg-[#1d1d1f] text-white' : 'bg-white text-[#1d1d1f]'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};