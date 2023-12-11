import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: '0' },
    exit: { opacity: 0, x: '-100%' },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.8,
  };

  return (
    <motion.div
      key={location.key}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
