import { useState, useEffect } from 'react';

const RotatingText = () => {
  const titles = [
    'Aspiring Polymath',
    'Problem Solver',
    'Machine Learning Engineer',
    'Product Manager',
    'Animal Companion'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed h-16 flex items-center">
      <span className="animate-fade-in" key={currentIndex}>
        {titles[currentIndex]}
      </span>
    </p>
  );
};

export default RotatingText;
