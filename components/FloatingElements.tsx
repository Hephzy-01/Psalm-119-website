
import React, { useEffect, useState } from 'react';

interface ElementStyle {
  width: string;
  height: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
}

const FloatingElements: React.FC = () => {
  const [elements, setElements] = useState<ElementStyle[]>([]);

  useEffect(() => {
    const generatedElements: ElementStyle[] = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 80 + 20;
      generatedElements.push({
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100 + 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      });
    }
    setElements(generatedElements);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {elements.map((style, index) => (
        <div key={index} className="bg-element" style={style}></div>
      ))}
    </div>
  );
};

export default FloatingElements;
