import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const AboutUs: React.FC = () => {
  const [openCard, setOpenCard] = React.useState<number | null>(null);

  const toggleCard = (num: number) => {
    setOpenCard(openCard === num ? null : num);
  };

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="py-28 text-center bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <AnimatedSection>
            <h1 className="font-lobster text-9xl text-gray-200 mb-8 leading-tight">About Our Challenge</h1>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="w-32 h-1 bg-green-700 rounded-full"></div>
              <h2 className="font-lobster text-4xl font-bold text-green-700">Our Vision, Mission and Values</h2>
              <div className="w-32 h-1 bg-green-700 rounded-full"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div>
              {/* Vision */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="font-lobster text-5xl font-bold text-green-700">Our Vision</h3>
                </div>
                <div className="border-l-4 border-green-600 pl-8">
                  <p className="text-gray-700 text-xl mb-4 leading-relaxed">
                    A Nigeria where young people are grounded in strong moral values, equipped with leadership skills, and actively engaged in building their communities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-lg">
                      <i className="fas fa-check-circle text-green-600 mr-3"></i>
                      Nationwide participation
                    </li>
                    <li className="flex items-center text-gray-700 text-lg">
                      <i className="fas fa-check-circle text-green-600 mr-3"></i>
                      Positive societal impact
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mission */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3 className="font-lobster text-5xl font-bold text-green-700">Our Mission</h3>
                </div>
                <div className="border-l-4 border-green-600 pl-8">
                  <p className="text-gray-700 text-xl mb-4 leading-relaxed">
                    To empower Nigerian students through engaging with Psalm 119, fostering character development, leadership skills, and community engagement by learning and applying 22 core national values.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-gray-700 text-lg">
                      <i className="fas fa-check-circle text-green-600 mr-3"></i>
                      Promote values-based education
                    </li>
                    <li className="flex items-center text-gray-700 text-lg">
                      <i className="fas fa-check-circle text-green-600 mr-3"></i>
                      Strengthen character and conviction
                    </li>
                  </ul>
                  <Link to="/mission-covenant" className="inline-flex items-center text-green-600 font-semibold text-lg hover:text-green-700 transition-colors">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Challenge Description */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-lobster text-6xl font-bold text-green-700 mb-8 leading-tight">Discover the Core Values of Our Challenge</h2>
                <p className="font-sans text-gray-700 text-lg mb-6 leading-relaxed">
                  At the heart of the Psalm 119 National Values Challenge lies a deep commitment to inspiring young minds through engaging with the wisdom of Psalm 119. We believe that Psalm 119 provides a comprehensive framework for building character through 22 core national values that are essential for personal growth and nation building.
                </p>
                <p className="font-sans text-gray-700 text-lg mb-6 leading-relaxed">
                  Through studying and applying Psalm 119, students develop integrity, discipline, and fairness while learning the importance of tolerance, peace, and responsibility. They cultivate accountability and perseverance, discovering the power of teamwork and lawfulness in their daily lives.
                </p>
                <p className="font-sans text-gray-700 text-lg mb-10 leading-relaxed">
                  The challenge goes beyond knowledge—it's about embodying values like empathy, humility, and service. Students explore creativity and stewardship, build courage and patience, develop leadership and inclusivity, practice punctuality and gratitude, and celebrate diversity. Join us in this transformative journey of character development!
                </p>
                <div className="flex space-x-4">
                  <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-green-600 text-white text-lg rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
                    Register Now
                  </a>
                  <Link to="/contact" className="px-10 py-4 border-3 border-green-600 text-green-600 text-lg rounded-full font-semibold hover:bg-green-50 transition-all">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-2xl opacity-20"></div>
                <img src="/images/1OV6PR7sRTzTLb6xprdvP5aBqXGkPuQAS.jpg" alt="Group holding banner" className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="w-32 h-1 bg-green-700 rounded-full"></div>
                <h2 className="font-lobster text-5xl font-bold text-green-700">22 Core National Values</h2>
                <div className="w-32 h-1 bg-green-700 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 mt-4">Definitive Psalm 119 Mapping</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: 1, value: "Integrity", def: "Honesty, truthfulness in all actions", verse: "Psa 119:29: Remove from me the way of lying: and grant me thy law graciously.", theme: "Removing lying/false ways." },
              { num: 2, value: "Discipline", def: "Consistent self-control and order", verse: "Psa 119:60: I made haste, and delayed not to keep thy commandments.", theme: "Prompt, non-delayed adherence." },
              { num: 3, value: "Fairness", def: "Justice and equity for all", verse: "Psa 119:121: I have done judgment and justice: leave me not to mine oppressors.", theme: "Doing justice and fair judgment." },
              { num: 4, value: "Tolerance", def: "Respect for differences", verse: "Psa 119:113: I hate vain thoughts: but thy law do I love.", theme: "Choosing truth over divisive or 'vain' ideas." },
              { num: 5, value: "Peace", def: "Harmony; non-violent problem-solving", verse: "Psa 119:165: Great peace have they which love thy law: and nothing shall offend them.", theme: "Law-based inner peace and stability." },
              { num: 6, value: "Responsibility", def: "Duty and ownership of outcomes", verse: "Psa 119:93: I will never forget thy precepts; for with them thou hast quickened me.", theme: "Committing to remember and act on duty." },
              { num: 7, value: "Accountability", def: "Being answerable and transparent", verse: "Psa 119:59: I thought on my ways, and turned my feet unto thy testimonies.", theme: "Reflecting on actions (ways) and self-correction." },
              { num: 8, value: "Perseverance", def: "Steady effort despite challenges", verse: "Psa 119:31: I have stuck unto thy testimonies: O LORD, put me not to shame.", theme: "Sticking to principles despite opposition." },
              { num: 9, value: "Teamwork", def: "Cooperation and shared goals", verse: "Psa 119:63: I am a companion of all them that fear thee, and of them that keep thy precepts.", theme: "Being a companion (cooperating) with those on the right path." },
              { num: 10, value: "Lawfulness", def: "Obeying rules and laws", verse: "Psa 119:1: Blessed are the undefiled in the way, who walk in the law of the LORD.", theme: "Walking in the law of the LORD (lawful conduct)." },
              { num: 11, value: "Empathy", def: "Understanding others' feelings", verse: "Psa 119:136: Rivers of waters run down mine eyes, because they keep not thy law.", theme: "Showing deep concern (crying) over the struggles of others." },
              { num: 12, value: "Humility", def: "Modesty; openness to learn", verse: "Psa 119:73: Thy hands have made me and fashioned me: give me understanding, that I may learn thy commandments.", theme: "Acknowledging God as Creator and asking for understanding (to learn)." },
              { num: 13, value: "Service", def: "Helping others willingly", verse: "Psa 119:176: I have gone astray like a lost sheep; seek thy servant; for I do not forget thy commandments.", theme: "Calling oneself a 'servant' and asking for help. (Selfless dedication)." },
              { num: 14, value: "Creativity", def: "Innovative, useful ideas", verse: "Psa 119:18: Open thou mine eyes, that I may behold wondrous things out of thy law.", theme: "Asking for a new, insightful perspective ('wondrous things')." },
              { num: 15, value: "Stewardship", def: "Careful resource management", verse: "Psa 119:36: Incline my heart unto thy testimonies, and not to covetousness.", theme: "Guarding the heart against covetousness (improper desire for resources)." },
              { num: 16, value: "Courage", def: "Ethical bravery under pressure", verse: "Psa 119:46: I will speak of thy testimonies also before kings, and will not be ashamed.", theme: "Speaking truth to power without fear/shame." },
              { num: 17, value: "Patience", def: "Calm endurance; waiting fairly", verse: "Psa 119:81: My soul fainteth for thy salvation: but I hope in thy word.", theme: "Enduring a difficult wait ('fainteth') while maintaining hope." },
              { num: 18, value: "Leadership", def: "Guiding by good example", verse: "Psa 119:9: Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.", theme: "Setting the standard for others to follow ('cleansing his way')." },
              { num: 19, value: "Inclusivity", def: "Ensuring equal participation", verse: "Psa 119:100: I understand more than the ancients, because I keep thy precepts.", theme: "Suggesting that true wisdom is accessible to all who follow the law, regardless of age ('ancients')." },
              { num: 20, value: "Punctuality", def: "Respecting time commitments", verse: "Psa 119:60: I made haste, and delayed not to keep thy commandments.", theme: "Uses Psa 119:60 again as the most powerful statement of promptness." },
              { num: 21, value: "Gratitude", def: "Thankfulness and appreciation", verse: "Psa 119:7: I will praise thee with uprightness of heart, when I shall have learned thy righteous judgments.", theme: "Expressing a promise of praise/thankfulness." }
            ].map((item) => (
              <AnimatedSection key={item.num}>
                <div className="bg-white border-4 border-green-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <button
                    onClick={() => toggleCard(item.num)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {item.num}
                      </div>
                      <h3 className="font-lobster text-xl font-bold text-green-700">{item.value}</h3>
                    </div>
                    <i className={`fas fa-chevron-down text-green-600 text-xl transition-transform duration-300 ${openCard === item.num ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openCard === item.num ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 border-t-2 border-green-200">
                      <p className="text-gray-800 font-bold mb-3 mt-3">{item.def}</p>
                      <div className="bg-green-50 border-l-4 border-green-600 p-2 mb-2">
                        <p className="text-gray-700 italic text-sm">{item.verse}</p>
                      </div>
                      <p className="text-gray-700 text-sm">Key Theme: {item.theme}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            
            {/* 22nd card centered */}
            <div className="lg:col-start-2">
              <AnimatedSection>
                <div className="bg-white border-4 border-green-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <button
                    onClick={() => toggleCard(22)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        22
                      </div>
                      <h3 className="font-lobster text-xl font-bold text-green-700">Diversity</h3>
                    </div>
                    <i className={`fas fa-chevron-down text-green-600 text-xl transition-transform duration-300 ${openCard === 22 ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openCard === 22 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 border-t-2 border-green-200">
                      <p className="text-gray-800 font-bold mb-3 mt-3">Valuing cultural differences</p>
                      <div className="bg-green-50 border-l-4 border-green-600 p-2 mb-2">
                        <p className="text-gray-700 italic text-sm">Psa 119:143: Trouble and anguish have taken hold on me: yet thy commandments are my delights.</p>
                      </div>
                      <p className="text-gray-700 text-sm">Key Theme: Finding unity and delight in the law despite personal/external 'trouble and anguish' (differences).</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="font-lobster text-6xl font-bold text-white text-center mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-7xl font-bold text-white mb-4">60+</div>
                <div className="font-sans text-2xl text-white font-semibold">Participants</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-7xl font-bold text-white mb-4">4</div>
                <div className="font-sans text-2xl text-white font-semibold">Years Running</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-7xl font-bold text-white mb-4">176</div>
                <div className="font-sans text-2xl text-white font-semibold">Verses Memorized</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
