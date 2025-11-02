
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const steps = [
  { 
    icon: 'fas fa-user-plus', 
    title: 'Register', 
    subtitle: 'Step In, Stand Tall!',
    description: "Every great journey begins with a single step. Will you take it? Whether you're a solo warrior or a school squad, this is your moment to rise.\n\nSign up today—because history is written by those who dare to begin!",
    button: { text: 'Register Now', href: 'https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz' },
    image: '/images/1TEgQ4C3v_jAajAPHpkuBfhjd3or4X7ti.jpg'
  },
  { 
    icon: 'fas fa-book-open', 
    title: 'Learn', 
    subtitle: 'Know It, Live It!',
    description: "176 verses, one heart, one purpose. Psalm 119 is more than words—it's wisdom, it's values, it's transformation!\n\nEngage with each verse, understand its meaning, and let it shape your character as you discover the 22 core national values.",
    links: [
        { text: 'Daily learning plans', href: '#'},
        { text: 'Study groups and support', href: '#'},
    ],
    image: '/images/1TG58Yr5XiswDberhgojlA2aEHUaD-QNN.jpg'
  },
  { 
    icon: 'fas fa-microphone-alt', 
    title: 'Record', 
    subtitle: 'Share It, Show It!',
    description: "What's learned must be shared. Capture your journey in sound and sight—record your recitation, demonstrate your understanding, and let the world see your growth.\n\nThe power of your presentation can inspire, uplift, and ignite change!",
    button: { text: 'View recording guidelines', href: '/recording-guidelines' },
    image: '/images/1CNyE2NQSyMqr7O6KwWS9vLIFPVLj-E6F.jpg'
  },
  { 
    icon: 'fas fa-running', 
    title: 'REACH', 
    subtitle: 'Live It, Lead It!',
    description: "Values aren't just what you know—they're what you do! With your team, turn Psalm 119's wisdom into action.\n\nTransform values into virtues, knowledge into practice, and principles into service.",
    links: [
        { text: 'Community service projects', href: '#'},
        { text: 'Leadership development', href: '#'},
    ],
    image: '/images/1HR85KKGinxlDkzv2eBCyjc3E6B2Cp7DX.jpg'
  },
  { 
    icon: 'fas fa-flag-checkered', 
    title: 'RISE', 
    subtitle: 'A Nation Rebuilt, A Future Renewed!',
    description: "From one generation to the next, over seven decades, we will shape a new Nigeria! One community at a time, one act at a time, one heart at a time.\n\n<span class='text-green-600 font-semibold'>We rise together, because when we build each other, we build a nation!</span>",
    button: { text: 'Our Vision', href: '/about' },
    image: '/images/1c4_twb-qPolv05AlMAaFlzBKSXyY1fsp.jpg'
  },
];

const GetInvolved: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <AnimatedSection>
                <h2 className="font-lobster text-6xl md:text-7xl font-bold text-green-600">Get Involved</h2>
                <p className="text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">Join us in this <span className="font-bold text-green-600">transformative journey</span> by following these simple steps to participate in the challenge.</p>
            </AnimatedSection>
        </div>
        <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <AnimatedSection key={index}>
                        <div className="border-2 border-green-500 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                           <button onClick={() => handleToggle(index)} className="w-full p-8 flex justify-between items-center space-x-6 text-left">
                                <div className="flex items-center space-x-6">
                                    <i className={`${step.icon} text-green-500 text-3xl w-10 text-center`}></i>
                                    <h3 className="text-3xl font-bold text-gray-800">{step.title} – <span className="font-medium text-gray-600">{step.subtitle}</span></h3>
                                </div>
                                <i className={`fas fa-chevron-down text-green-500 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                           </button>
                           <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 pb-8 text-gray-700 text-lg">
                                  <div className={`pt-6 border-t border-gray-200 ${step.image ? 'md:flex md:items-center md:gap-8' : ''}`}>
                                    <div className="whitespace-pre-line flex-1">
                                      <p dangerouslySetInnerHTML={{ __html: step.description }}></p>
                                      {step.button && (
                                          <a href={step.button.href} className="inline-block mt-6 bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
                                              {step.button.text} <i className="fas fa-arrow-right ml-2"></i>
                                          </a>
                                      )}
                                      {step.links && (
                                          <div className="mt-6 space-y-3">
                                              {step.links.map(link => (
                                                  <div key={link.text} className="flex items-center text-green-600 font-semibold text-xl">
                                                      <i className="fas fa-check-circle mr-3"></i>
                                                      {link.text}
                                                  </div>
                                              ))}
                                          </div>
                                      )}
                                    </div>
                                    {step.image && (
                                      <div className="mt-8 md:mt-0 md:w-1/3 flex-shrink-0">
                                        <img src={step.image} alt={step.title} className="rounded-lg shadow-lg w-full h-auto" />
                                      </div>
                                    )}
                                  </div>
                                </div>
                           </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
        <div className="text-center mt-20">
            <AnimatedSection>
                <p className="font-lobster text-4xl font-semibold mb-6 text-green-600">This is more than a challenge—it's a movement.</p>
                <p className="text-3xl font-bold text-gray-800 mb-8">Will you be part of history?</p>
                <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-5 px-12 rounded-full text-xl hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto w-fit">
                    Join the Movement <i className="fas fa-arrow-right"></i>
                </a>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;