'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'Working with Creative Business transformed our brand completely. Their creative vision and strategic approach helped us stand out in a crowded market.',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'The team\'s attention to detail and creative excellence exceeded our expectations. Our conversion rates doubled within three months of launching.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Bloom Studio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'Incredible results! They understood our vision perfectly and delivered a brand identity that truly represents who we are. Highly recommended.',
  },
  {
    name: 'David Thompson',
    role: 'VP of Operations',
    company: 'Innovate Co',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Professional, creative, and results-driven. The Creative Business team brought fresh ideas and executed flawlessly on every project.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Creative Director',
    company: 'Pixel Perfect',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'A true partner in every sense. Their strategic thinking combined with stunning creative work helped us achieve breakthrough results.',
  },
  {
    name: 'James Wilson',
    role: 'CMO',
    company: 'NextGen Media',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    quote: 'The best investment we\'ve made in our business. Their expertise and dedication to our success is unmatched. We couldn\'t be happier.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by Clients Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}