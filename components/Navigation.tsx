'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Creative Business
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}