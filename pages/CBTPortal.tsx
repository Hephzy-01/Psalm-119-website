import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import confetti from 'canvas-confetti';

const CBTPortal: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 33) {
          clearInterval(timer);
          return 33;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const handleCelebrate = () => {
    setCelebrated(true);
    
    // Confetti from top
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0, x: 0.5 },
      colors: ['#16a34a', '#fbbf24', '#ef4444', '#3b82f6', '#a855f7']
    });

    // Confetti from bottom
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 1, x: 0.5 },
        colors: ['#16a34a', '#fbbf24', '#ef4444', '#3b82f6', '#a855f7']
      });
    }, 200);

    // Reset after 3 seconds
    setTimeout(() => setCelebrated(false), 3000);
  };

  const modules = [
    {
      icon: 'fas fa-pencil-alt',
      title: 'Fill in the Gaps',
      description: "In this section, you'll complete partial verses from Psalm 119 that relate to Nigerian national values like integrity, justice, and unity. This exercise tests your memory of key verses and their application to daily life.",
      example: 'Example: "Your word is a ______ to my feet and a ______ to my path." (Answer: lamp, light – from Psalm 119:105)',
      tip: '💡 Tip: This section tests your learning of key verses and their application to daily life.',
      buttonText: "Take Last Year's Gap Test"
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Fill in the Scenarios',
      description: "Here you'll encounter real-life situations where Nigerian values are challenged. You'll select which verse from Psalm 119 best applies to the scenario, helping you connect scripture to practical living.",
      example: 'Example: "A scenario about a child finding a lost wallet: which verse reminds you to value honesty?" (Possible answer: Psalm 119:1 - \'Blessed are those whose ways are blameless, who walk according to the law of the Lord\')',
      tip: '💡 Did you know? This section helps bridge the gap between knowing scripture and applying it to everyday challenges in our society.',
      buttonText: "Try Last Year's Scenario Test"
    },
    {
      icon: 'fas fa-book',
      title: 'Fill in the Verse',
      description: "This advanced section gives you the meaning or theme of a verse, and you must identify or complete the actual verse text. It challenges your deeper understanding of how Psalm 119 speaks to national values.",
      example: 'Example: "Which verse speaks about young people keeping their way pure?" (Answer: Psalm 119:9 - \'How can a young person stay on the path of purity, by living according to your word\')',
      tip: '🏆 Champion Tip: This section separates casual readers from serious students of the Word - how well do you really know Psalm 119?',
      buttonText: "Attempt Last Year's Verse Test"
    }
  ];

  return (
    <main className="pt-28 bg-white min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <AnimatedSection>
          <div className="bg-white rounded-3xl border-4 border-green-300 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-green-600 text-white text-center py-12 px-6">
              <h1 className="font-lobster text-5xl md:text-6xl font-bold mb-4">
                Psalm 119 National Values Challenge
              </h1>
              <p className="text-2xl md:text-3xl">
                Test Your Knowledge of Nigeria's Core Values Through Scripture
              </p>
            </div>

            {/* Welcome Section */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to the CBT Test Portal!
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                This Computer-Based Test will challenge your understanding of Nigerian national values as reflected in Psalm 119. The test is divided into three engaging sections, each designed to evaluate different aspects of your knowledge.
              </p>

              {/* Fun Fact Box */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
                <p className="text-lg text-gray-700">
                  💡 <strong>Fun Fact:</strong> Psalm 119 is the longest chapter in the Bible with 176 verses, and it's all about the value of God's word in our lives – just like strong values are essential for our nation.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-600 font-bold text-lg">{progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-green-600 h-4 rounded-full transition-all duration-300 ease-out" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Test Modules */}
              <div className="space-y-8">
                {modules.map((module, index) => (
                  <div key={index} className="bg-white border-2 border-green-300 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <i className={`${module.icon} text-green-600 text-3xl`}></i>
                      <h3 className="text-3xl font-bold text-green-700">{module.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
                      <p className="text-gray-700 italic">{module.example}</p>
                    </div>

                    <div className="bg-green-100 rounded-xl p-4 mb-6">
                      <p className="text-gray-800">{module.tip}</p>
                    </div>

                    <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
                      {module.buttonText}
                    </button>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="mt-12 text-center">
                <button
                  onClick={handleCelebrate}
                  className="bg-green-600 text-white font-bold py-6 px-16 rounded-full text-2xl hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-xl"
                >
                  {celebrated ? 'Nigerian Values Rock! 🎉' : 'Celebrate Nigerian Values!'}
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default CBTPortal;
