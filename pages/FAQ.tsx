import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Psalm 119 National Values Challenge?",
      answer: (
        <>
          <p className="mb-4">The Psalm 119 National Values Challenge is a fun and exciting competition for children in Primary and Secondary schools across Nigeria. The challenge requires students to memorize all 176 verses of Psalm 119 from the Bible.</p>
          <p>But that's not all! Students also get to work on a community project to help improve their schools or neighborhoods. If you do well, you could win a scholarship to help pay for your school fees.</p>
        </>
      )
    },
    {
      question: "Who can join the challenge?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Any child between 7 and 15 years old (by September 2026)</li>
          <li>You must be in Primary or Secondary School in Nigeria</li>
          <li>Your school must register and choose a Psalm 119 Coordinator</li>
        </ul>
      )
    },
    {
      question: "What do I need to do to join?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Your school must sign up for the challenge</li>
          <li>You must memorize all 176 verses of Psalm 119</li>
          <li>Record and upload a video of your recitation</li>
          <li>Take an online CBT quiz</li>
          <li>Work on a community project with your schoolmates</li>
          <li>Attend the Psalm 119 Challenge Conference</li>
        </ul>
      )
    },
    {
      question: "What are the benefits of joining?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Memorize the Word of God and grow spiritually</li>
          <li>Win scholarships for your education</li>
          <li>Learn teamwork and community service</li>
          <li>Build confidence and public speaking skills</li>
          <li>Have fun while learning and competing!</li>
        </ul>
      )
    },
    {
      question: "What happens after I submit my recitation?",
      answer: (
        <p>Your school will upload your video, then you'll take the CBT test. If you pass, you move to the next stage. The best students will compete at the Grand Finale in December 2026!</p>
      )
    },
    {
      question: "What is the Psalm 119 Scholarship?",
      answer: (
        <p>The Psalm 119 scholarship is a prize for top-performing students. It helps pay your school fees so you can keep learning without stress. Winners will be announced at the Grand Finale in December 2026.</p>
      )
    }
  ];

  return (
    <main className="pt-28 bg-white min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-500"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-lobster text-6xl md:text-7xl font-bold text-green-700 mb-6">
              Learn More: Psalm 119 Challenge
            </h1>
            <div className="max-w-3xl mx-auto bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <p className="text-xl text-gray-700">
                Everything you need to know about the exciting Psalm 119 National Values Challenge. Let's dive in! 💡
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Container */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection>
            <div className="bg-white rounded-3xl border-4 border-green-600 p-8 md:p-12 shadow-2xl">
              {/* Section Title */}
              <h2 className="text-center text-4xl md:text-5xl font-bold text-green-700 mb-12 flex items-center justify-center gap-4">
                <i className="fas fa-star text-green-600"></i>
                Frequently Asked Questions
                <i className="fas fa-star text-green-600"></i>
              </h2>

              {/* FAQ List */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-2 border-green-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full p-6 flex justify-between items-center text-left bg-green-50 hover:bg-green-100 transition-colors duration-200"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
                        {index + 1}. {faq.question}
                      </h3>
                      <i
                        className={`fas fa-chevron-down text-green-600 text-xl transition-transform duration-300 flex-shrink-0 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 bg-white text-gray-700 text-lg border-t-2 border-green-200">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection>
            <div className="mt-16 text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-8">
                💡 Ready to grow in faith and take on the challenge? Let's do this! 🙌 ✨
              </p>
              <a
                href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-bold py-6 px-16 rounded-full text-2xl hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-xl"
              >
                Register Your School Now!
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
