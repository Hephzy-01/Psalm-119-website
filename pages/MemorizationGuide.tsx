import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const MemorizationGuide: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "The 8-Verse Daily System",
      description: "Learn how to break down Psalm 119 into manageable 8-verse daily portions with our themed learning approach that connects each section to godly virtues."
    },
    {
      number: 2,
      title: "The Hebrew Alphabet Method",
      description: "Utilize the natural structure of Psalm 119 (divided by Hebrew letters) with our special mnemonic devices tailored to each alphabetic section."
    },
    {
      number: 3,
      title: "Verse Mapping Technique",
      description: "Our unique verse mapping system helps you connect each verse to personal experiences, making learning natural and meaningful."
    },
    {
      number: 4,
      title: "Accountability Checklists",
      description: "Includes printable progress trackers and weekly check-in sheets to keep you motivated throughout the 22-week journey."
    }
  ];

  return (
    <main className="pt-28 bg-white min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <AnimatedSection>
          <div className="bg-white rounded-3xl border-2 border-green-200 p-8 md:p-12 shadow-lg">
            {/* Title Section */}
            <div className="text-center mb-12">
              <h1 className="font-lobster text-6xl md:text-7xl font-bold text-green-700 mb-6">
                Psalm 119 Learning Guide
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Master all 176 verses of Psalm 119 with our proven learning system. This comprehensive guide includes daily plans, visualization techniques, and accountability tools to help you hide God's Word in your heart.
              </p>
            </div>

            {/* Guide Preview Section */}
            <div className="border-2 border-green-300 rounded-2xl p-8 md:p-10 bg-green-50/30">
              <h2 className="text-center text-4xl md:text-5xl font-bold text-green-700 mb-10">
                Guide Preview
              </h2>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {feature.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {index < features.length - 1 && (
                      <hr className="mt-8 border-t-2 border-green-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <a
                href="https://psalm119.ng/downloads/Psalm_119_Memorization_Guide%202.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-bold py-6 px-16 rounded-full text-2xl hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto w-fit"
              >
                Download Full Guide (PDF) <i className="fas fa-download"></i>
              </a>
              <p className="mt-4 text-gray-500 text-lg">
                3-page PDF | 7.4 MB | Printable
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default MemorizationGuide;
