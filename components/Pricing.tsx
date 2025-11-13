'use client';

import { Check, Shield, Clock, Star } from 'lucide-react';

const features = [
  'Complete Brand Identity Package',
  'Strategic Marketing Plan',
  'Custom Design Assets',
  'Content Creation & Production',
  'Social Media Management',
  'Monthly Analytics Reports',
  'Dedicated Account Manager',
  'Priority Support 24/7',
];

const trustBadges = [
  { icon: Shield, text: 'Secure Payment' },
  { icon: Clock, text: '30-Day Guarantee' },
  { icon: Star, text: 'Premium Quality' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your business, all in one comprehensive package
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MOST POPULAR
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Complete Creative Package</h3>
            <div className="flex items-end justify-center mb-2">
              <span className="text-6xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600 text-xl mb-2 ml-2">/month</span>
            </div>
            <p className="text-gray-600">Billed monthly, cancel anytime</p>
          </div>

          <div className="mb-8 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-green-100 rounded-full p-1 mr-3">
                  <Check className="text-green-600" size={20} />
                </div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-8 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-6"
          >
            Get Started Now
          </a>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="text-purple-600 mx-auto mb-2" size={24} />
                  <div className="text-sm text-gray-600">{badge.text}</div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-gray-300 mt-8">
          Join over 500+ businesses already transforming their creative presence
        </p>
      </div>
    </section>
  );
}