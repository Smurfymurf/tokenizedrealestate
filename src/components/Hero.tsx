import React from 'react';
import { Logo } from './common/Logo';
import { Button } from './common/Button';

export default function Hero() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Revolutionizing Real Estate Investment Through Tokenization
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Access institutional-grade real estate investments with as little as $1. 
            Join the future of property investment powered by Landshare.
          </p>
          <div className="flex items-center gap-6">
            <Button variant="primary" href="#investment">
              Start Investing Now
            </Button>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}