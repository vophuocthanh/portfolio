'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoadingScreenProps {
  setLoading: (loading: boolean) => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const loadingText = 'Thanh Dev...'.split(' ');

  const letterAnimation = {
    wave: (i: number) => ({
      opacity: [0, 1, 0],
      y: [20, 0, 20],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-white via-pink-100 to-white'>
      <div className='flex space-x-2'>
        {loadingText.map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            animate='wave'
            variants={letterAnimation}
            className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
