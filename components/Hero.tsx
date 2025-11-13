'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Creative team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-pink-400 mr-2" size={32} />
          <span className="text-pink-400 font-semibold text-lg tracking-wide">CREATIVE EXCELLENCE</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Transform Your Ideas
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Into Reality
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          We bring your creative vision to life with innovative solutions, stunning design, and strategic thinking that drives real results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Awards Won</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}