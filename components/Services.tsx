'use client';

import { Palette, Rocket, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Create a memorable brand that stands out. From logos to complete visual systems, we craft identities that resonate with your audience.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    description: 'Launch campaigns that convert. Strategic marketing across all channels to grow your audience and drive measurable results.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Scale your business with data-driven insights. We analyze, optimize, and implement strategies that fuel sustainable growth.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Zap,
    title: 'Creative Production',
    description: 'Produce content that captivates. From video to photography, we create high-quality assets that tell your story.',
    color: 'from-pink-500 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Creative Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your brand and accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}