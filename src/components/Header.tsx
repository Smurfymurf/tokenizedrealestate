import React from 'react';
import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-[#61cd81]" />
          <span className="text-2xl font-bold text-gray-900">Tokenized Real Estate.net</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-600 hover:text-[#61cd81] transition-colors">Benefits</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-[#61cd81] transition-colors">How It Works</a>
          <a href="#investment" className="text-gray-600 hover:text-[#61cd81] transition-colors">Investment</a>
        </div>
      </nav>
    </header>
  );
}