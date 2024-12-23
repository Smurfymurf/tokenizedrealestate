import React from 'react';

const steps = [
  {
    title: "Property Selection",
    description: "Premium properties are carefully selected and vetted by Landshare experts."
  },
  {
    title: "Tokenization",
    description: "Properties are tokenized on the blockchain, creating digital shares."
  },
  {
    title: "Investment",
    description: "Investors can purchase tokens representing ownership in the property."
  },
  {
    title: "Returns",
    description: "Earn passive income through rental yields and potential property appreciation."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          How Tokenized Real Estate Works
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/649664b4d452680d2964b449/659330617da1e8db6379fb29_Clip%20path%20group.svg" 
              alt="Real Estate Investment"
              className="w-full"
            />
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="border-l-4 border-[#61cd81] pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}