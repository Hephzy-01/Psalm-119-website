import React from 'react';
import AnimatedSection from './AnimatedSection';

const timelineEvents = [
  { number: 1, title: "Roadshows", date: "April - June 2026", description: "We're coming to schools and communities nationwide! Interactive sessions to introduce the challenge and inspire participation.", buttonText: "Host a Roadshow", icon: 'fas fa-bullhorn', image: '/images/1HS93ZBZtNQ14HghQvUvtKadA4PVNAszu.jpg', url: '/contact', isButton: true },
  { number: 2, title: "Registrations", date: "June - July 2026", description: "Official registration period! Sign up with groups (3 OR More People) or with your school. Early birds get bonus learning resources.", buttonText: "Register Now", icon: 'fas fa-edit', image: '/images/1TEgQ4C3v_jAajAPHpkuBfhjd3or4X7ti.jpg', url: 'https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz', isButton: true },
  { number: 3, title: "Recordings Upload", date: "July - August 2026", description: "Submit your Psalm 119 recitation videos! Showcase your understanding and application of the values through creative presentations.", buttonText: "Recording Guidelines", icon: 'fas fa-cloud-upload-alt', image: '/images/1CNyE2NQSyMqr7O6KwWS9vLIFPVLj-E6F.jpg', url: '/recording-guidelines', isButton: true },
  { number: 4, title: "CBT Assessments", date: "August - September 2026", description: "Computer-Based Tests to evaluate your understanding of Psalm 119. Top performers advance to the next phase!", buttonText: "Practice Tests", icon: 'fas fa-laptop-code', image: '/images/1gGV44m8hwITF6NQiZbE_ILQtb9CPIER1.jpg', url: '/cbt-portal', isButton: true },
  { number: 5, title: "Community Impact", date: "September - November 2026", description: "Put values into action! Lead a community project demonstrating how Psalm 119 inspires positive change.", buttonText: "Project Ideas", icon: 'fas fa-heart', image: '/images/1HR85KKGinxlDkzv2eBCyjc3E6B2Cp7DX.jpg', url: '/community-impact', isButton: true },
  { number: 6, title: "Grand Finale", date: "December 2026", description: "The spectacular conclusion! Finalists compete in an exciting showcase with special guests, performances, and scholarship awards.", prizeText: "₦3,000,000 Grand Prize + Other Awards!", icon: 'fas fa-trophy', image: '/images/1c4_twb-qPolv05AlMAaFlzBKSXyY1fsp.jpg', isButton: false },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <AnimatedSection>
                <h2 className="font-lobster text-6xl md:text-7xl font-bold text-green-600">The 2026 Challenge Timeline</h2>
                <p className="text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">Follow this exciting journey from awareness to the grand finale! Each phase is designed to be <span className="font-bold text-green-600">engaging, transformative, and impactful.</span></p>
            </AnimatedSection>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-9 top-0 h-full w-1 bg-green-200 rounded-full" aria-hidden="true"></div>

          {timelineEvents.map((event, index) => (
            <div key={event.number} className="relative pl-24 pb-16">
              <AnimatedSection>
                {/* Icon */}
                <div className="absolute left-0 top-0 w-18 h-18 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  <i className={event.icon}></i>
                </div>
                
                {/* Card */}
                <div className={`bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <span className="bg-green-500 text-white text-lg font-bold px-4 py-1 rounded-full">{event.number}</span>
                            <h3 className="text-4xl font-bold text-gray-800 mt-4">{event.title}</h3>
                            <p className="text-green-600 font-semibold my-3 text-xl">{event.date}</p>
                            <p className="text-gray-600 text-lg mb-5">{event.description}</p>
                            {event.isButton ? (
                              <a href={event.url} target={event.url.startsWith('http') ? '_blank' : '_self'} rel={event.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition duration-300 inline-block">
                                {event.buttonText}
                              </a>
                            ) : (
                              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-2xl flex items-center space-x-6">
                                <i className="fas fa-trophy text-5xl text-amber-500"></i>
                                <div>
                                  <h4 className="font-bold text-2xl text-green-800">{event.prizeText}</h4>
                                </div>
                              </div>
                            )}
                        </div>
                        <div className="mt-6 md:mt-0">
                          <img src={event.image} alt={event.title} className="rounded-xl shadow-md w-full h-auto" />
                        </div>
                    </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;