import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  { name: "Eleyinmi Imisioluwa", quote: "Participating in the Psalm 119 Challenge changed my life. I gained confidence and valuable skills that I carry with me today.", image: "/images/1JjVXBBmoH_NTHbAlPJ0QjFMzhGWq8OOo.jpg", role: "Participant, Psalm 119 National Values Challenge" },
  { name: "Enu Daniels", quote: "This challenge helped me develop leadership skills and connect with my community in meaningful ways.", image: "/images/14kYSzfH_pJsihe6n-1AlFRfAxzT1IkgT.jpg", role: "Participant, Psalm 119 National Values Challenge" },
  { name: "David Joys", quote: "Through this program, I learned the importance of perseverance and faith, which has shaped my character.", image: "/images/1v8U-gezRma4Fp3CgGq_Z3HhR66BIIPnY.jpg", role: "Participant, Psalm 119 National Values Challenge" },
];

const StarRating: React.FC = () => (
    <div className="flex justify-center text-amber-400 text-2xl space-x-1">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonies" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
            <AnimatedSection>
                <h2 className="font-lobster text-6xl md:text-7xl font-bold text-green-600">Success Stories</h2>
                <p className="text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">Hear from our past participants about their <span className="font-bold text-green-600">transformative experiences</span> with the Psalm 119 National Values Challenge.</p>
            </AnimatedSection>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center h-full flex flex-col items-center border-2 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                    <img src={testimonial.image} alt={`Portrait of ${testimonial.name}`} className="w-40 h-40 rounded-full mx-auto mb-6 -mt-24 border-8 border-white shadow-md object-cover"/>
                    <div className="flex-grow">
                        <p className="text-gray-600 italic text-xl mb-6">"{testimonial.quote}"</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl text-gray-800">{testimonial.name}</p>
                        <p className="text-lg text-gray-500 mb-4">{testimonial.role}</p>
                        <StarRating />
                    </div>
                </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-20">
            <AnimatedSection>
                <a href="/testimonies" className="bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-green-700 transition duration-300 inline-flex items-center gap-3">
                    Read More Stories <i className="fas fa-book-open"></i>
                </a>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;