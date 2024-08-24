"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            onLoadingComplete();
          }, 1000);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const { rotation } = useSpring({
    from: { rotation: 0 },
    to: { rotation: 360 },
    loop: true,
    config: { duration: 5000 },
  });

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <animated.div
              style={{
                width: '100%',
                height: '100%',
                transform: rotation.to((r:any) => `rotate(${r}deg)`),
              }}
              className="absolute inset-0"
            >
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 border-4 border-blue-500 dark:border-blue-400 rounded-full"
                  style={{
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    transform: `rotate(${index * 60}deg)`,
                  }}
                  variants={circleVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                />
              ))}
            </animated.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl sm:text-7xl md:text-8xl font-bold text-blue-600 dark:text-blue-400"
              >
                {count}
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-300 text-lg sm:text-xl md:text-2xl font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading your experience...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;