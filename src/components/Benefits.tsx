import React from 'react';
import { Coins, Lock, Users, Banknote, LineChart, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Coins className="h-8 w-8 text-[#61cd81]" />,
    title: "Low Minimum Investment",
    description: "Start investing in real estate with as little as $1 through tokenization"
  },
  {
    icon: <Lock className="h-8 w-8 text-[#61cd81]" />,
    title: "Security & Transparency",
    description: "Blockchain technology ensures transparent and secure ownership records"
  },
  {
    icon: <Users className="h-8 w-8 text-[#61cd81]" />,
    title: "Fractional Ownership",
    description: "Own a portion of premium properties without the full purchase price"
  },
  {
    icon: <Banknote className="h-8 w-8 text-[#61cd81]" />,
    title: "Passive Income",
    description: "Earn regular rental income from your property investments"
  },
  {
    icon: <LineChart className="h-8 w-8 text-[#61cd81]" />,
    title: "Asset Appreciation",
    description: "Benefit from property value increases over time"
  },
  {
    icon: <Clock className="h-8 w-8 text-[#61cd81]" />,
    title: "Instant Liquidity",
    description: "Trade your property tokens anytime without lengthy selling processes"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Benefits of Tokenized Real Estate
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}