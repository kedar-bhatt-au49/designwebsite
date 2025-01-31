'use client';
import { useState, useEffect } from 'react';

interface HeadingSliderProps {
  headings: string[];
  interval: number;
}

export default function HeadingSlider({ headings, interval }: HeadingSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === headings.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [headings.length, interval]);

  return (
    <div className="overflow-hidden">
      <h2 
        className={`text-5xl font-bold mb-6 transform transition-all duration-500 ease-in-out
          ${isSliding ? 'translate-x-[-100%] opacity-0' : 'translate-x-0 opacity-100'}
        `}
      >
        {headings[currentIndex]}
      </h2>
    </div>
  );
}
