import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const testimonials = [
  {
    quote: "Participating in the Psalm 119 Challenge boosted my confidence and helped me develop better study habits. I learned the value of perseverance and teamwork.",
    name: "Akachi Omedu",
    role: "High School Student",
    image: "/images/akachi-omedu.jpg"
  },
  {
    quote: "The challenge taught me discipline and leadership. I made great friends and learned how to support others in their journey.",
    name: "Tyshawn Atsekhameh",
    role: "Middle School Student",
    image: "/images/tyshawn-atsekhameh.jpg"
  },
  {
    quote: "I've seen firsthand how the Psalm 119 Challenge impacts students. They grow in character and become more engaged in their communities.",
    name: "Mr George",
    role: "Teacher",
    image: "/images/mr-george.jpg"
  },
  {
    quote: "Memorizing Psalm 119 was tough, but it prepared me for academic challenges. I gained skills that I still use today.",
    name: "Samuel Adeniyi",
    role: "College Student",
    image: "/images/samuel-adeniyi.jpg"
  },
  {
    quote: "My child transformed through this challenge. It instilled values that have shaped their character and leadership abilities.",
    name: "Mrs Atsekhameh",
    role: "Parent",
    image: "/images/mrs-atsekhameh.jpg"
  },
  {
    quote: "Immersing myself in Psalm 119 has been transformative. It not only offers me a path to spiritual enrichment but also stretched my brain capacity. I can now memorize words faster.",
    name: "Nelson Faith",
    role: "Recent Graduate",
    image: "/images/nelson-faith.jpg"
  }
];

const Testimonies: React.FC = () => {
  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-lobster text-7xl font-bold text-white mb-6">Participant Experiences</h1>
            <p className="font-sans text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              Discover how the Psalm 119 Challenge transformed lives and built leaders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-amber-400 text-xl"></i>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="font-sans text-gray-700 text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Attribution */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-600"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonies;
