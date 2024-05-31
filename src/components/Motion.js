import React from 'react';
import { motion } from 'framer-motion';

const Motion = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 20 }}
    >
      {text}
    </motion.div>
  );
};

export default Motion;