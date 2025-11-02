import React, { useEffect, useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const History: React.FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: 'birth',
      title: 'The Birth',
      content: 'Launched in 2021, The Psalm 119 National Values Challenge unites Nigerian students in a dynamic competition to explore timeless Biblical principles, Integrity, Justice, and Service as tools for Nation Building. Participants engage in debates, creative projects, and community initiatives, fostering collaboration and rediscovering values that strengthen societies. IN 7 DECADES NIGERIA WILL BE BUILT.',
      image: '/images/birth.jpg',
      highlights: ['dynamic competition', 'Nation Building', 'IN 7 DECADES NIGERIA WILL BE BUILT']
    },
    {
      id: 'manifest',
      title: 'The Manifest',
      content: 'The Psalm 119 National Values Challenge empowers Nigerian students to champion integrity, justice, and service as cornerstones of Nation Building. Rooted in Biblical Wisdom, we unite youth across divides, equipping them to lead with courage, innovative solutions, and foster unity. Together, we commit to a 70-year vision: Re-Building Nigeria through values-driven action, collective faith and relentless hope.',
      image: '/images/manifest.jpg',
      highlights: ['empowers Nigerian students', 'Biblical Wisdom', '70-year vision']
    },
    {
      id: 'first-year',
      title: 'The First Year',
      content: 'The Psalm 119 National Values Challenge began with just 5 participants, dismissed as a scam by skeptical schools and churches. Yet their grit ignited a movement proving faith-driven values could defy doubt.',
      image: '/images/first-year.jpg',
      highlights: ['5 participants', 'grit ignited a movement']
    },
    {
      id: 'second-year',
      title: 'The Second Year',
      content: 'The second year grew from 5 pioneers to expanded participation, proving the sustainability of the vision and the hunger for values-based transformation among Nigerian youth.',
      image: '/images/second-year.jpg',
      highlights: ['expanded participation']
    },
    {
      id: 'third-year',
      title: 'The Third Year',
      content: 'The third year marked a significant milestone, with expanded outreach and more comprehensive engagement strategies. The challenge began to create lasting impact beyond the competition itself.',
      image: '/images/third-year.jpg',
      highlights: ['significant milestone', 'lasting impact']
    },
    {
      id: 'fourth-year',
      title: 'The Fourth Year',
      content: 'By the fourth year, the Psalm 119 National Values Challenge had become a beacon of hope and transformation, with a growing network of over 60 participants committed to personal and societal growth.',
      image: '/images/1OV6PR7sRTzTLb6xprdvP5aBqXGkPuQAS.jpg',
      highlights: ['beacon of hope and transformation']
    },
    {
      id: 'prizes',
      title: 'The Prizes',
      content: 'Our prizes go beyond material rewards. They are symbolic recognitions of growth, understanding, and commitment to national values. Each award tells a story of personal transformation and community impact.',
      image: '/images/prizes.jpg',
      highlights: ['symbolic recognitions', 'personal transformation']
    }
  ];

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((highlight) => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      result = result.replace(regex, '<strong class="bg-gradient-to-r from-green-100 to-white bg-no-repeat bg-[length:100%_40%] bg-[position:0_90%] font-semibold">$1</strong>');
    });
    return result;
  };

  return (
    <main className="pt-28 bg-gradient-to-br from-white via-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionsRef.current[index] = el!)}
            className={`mb-16 bg-white rounded-3xl border-4 border-green-600 p-8 md:p-12 shadow-xl transition-all duration-700 opacity-0 translate-y-12 hover:shadow-2xl hover:-translate-y-2 ${
              index % 2 === 0 ? 'md:mr-24' : 'md:ml-24'
            }`}
          >
            <h2 className="font-lobster text-4xl md:text-5xl font-bold text-green-700 mb-6 relative">
              {section.title}
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-green-600 to-green-300 rounded-full"></span>
            </h2>
            <div className="bg-white rounded-2xl p-6">
              <p
                className="text-gray-700 text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: highlightText(section.content, section.highlights) }}
              />
              <div className="rounded-2xl overflow-hidden border-4 border-green-600 shadow-lg hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[450px] md:h-[550px] object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default History;
