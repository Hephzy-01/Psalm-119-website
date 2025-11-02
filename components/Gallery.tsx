import React from 'react';
import AnimatedSection from './AnimatedSection';

const photos = [
  '/images/1HS93ZBZtNQ14HghQvUvtKadA4PVNAszu.jpg',
  '/images/1S_k6IYnaJUftUSwzpyDxVrQvDH4GtxjB.jpg',
  '/images/1mmn2cyGkP3b8lGhALb0Qzt9id0FCYqpT.jpg',
  '/images/1uaxo975K9hlMER1OiujAJnM5NKCLB3j6.jpg',
  '/images/1p73X9z3Xfv-uPqINnoHzKLEiT7PNkZ3H.jpg',
  '/images/1RkgEqBH81FiL1E1bdLYkdbjCYenqC_hu.jpg',
];

const Gallery: React.FC = () => {
  // Each photo is w-[32rem] and has mx-4 (1rem margin on each side), so takes up 34rem of space.
  const photoWidthInRem = 32 + 2;
  const totalWidthToScroll = photos.length * photoWidthInRem;

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-lobster text-6xl md:text-7xl font-bold mb-6 text-green-600">Our Journey in Pictures</h2>
          </div>
        </AnimatedSection>
        
        {/* 
          The 'group' class on this container allows us to pause the animation when it's hovered.
          'overflow-hidden' creates the marquee effect by hiding the parts of the track that are outside this container.
        */}
        <div className="relative w-full overflow-hidden mt-20 group">
          <style>{`
            .scrolling-track {
              display: flex;
              animation: gallery-scroll 40s linear infinite;
              will-change: transform; /* Performance optimization */
            }
            @keyframes gallery-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-${totalWidthToScroll}rem); }
            }
            /* Pause the animation when the parent 'group' is hovered */
            .group:hover .scrolling-track {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="scrolling-track">
            {/* We render the photos twice to create a seamless, infinite scrolling loop */}
            {[...photos, ...photos].map((photo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[32rem] h-96 mx-4 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-black"
                /* Hide the duplicated images from screen readers for better accessibility */
                aria-hidden={index >= photos.length} 
              >
                <img 
                  src={photo} 
                  alt={`Psalm 119 Challenge Event Image ${index % photos.length + 1}`} 
                  className="w-full h-full object-contain" 
                  loading="lazy" /* Lazy load images for better initial page load performance */
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;