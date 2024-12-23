import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant: 'primary' | 'outline';
  children: React.ReactNode;
  href: string;
}

export const Button = ({ variant, children, href }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-lg transition-colors";
  const variantClasses = {
    primary: "bg-[#61cd81] text-white hover:bg-[#50b970]",
    outline: "border-2 border-[#61cd81] text-[#61cd81] hover:bg-[#61cd81] hover:text-white"
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
};