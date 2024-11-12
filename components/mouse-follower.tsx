'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className='fixed z-50 top-0 left-0 w-4 h-4 bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300 rounded-full pointer-events-none'
      style={{ x: position.x, y: position.y }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default MouseFollower;
