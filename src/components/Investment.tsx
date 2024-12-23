import React, { useState } from 'react';
import { Logo } from './common/Logo';
import { Button } from './common/Button';
import { VideoModal } from './common/VideoModal';

export default function Investment() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Logo />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Start Your Real Estate Investment Journey
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of investors already benefiting from tokenized real estate through Landshare's innovative platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="primary" href="#">
            Invest Now
          </Button>
          <button
            onClick={() => setIsVideoOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-colors border-2 border-[#61cd81] text-[#61cd81] hover:bg-[#61cd81] hover:text-white"
          >
            Learn More
          </button>
        </div>
      </div>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="-H6d7iKL11c"
      />
    </section>
  );
}