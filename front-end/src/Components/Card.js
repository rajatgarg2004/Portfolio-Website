import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ imageUrl}) => {
  return (
    <div className="max-w-lg rounded overflow-hidden flex flex-row justify-center md:-rotate-8 lg:-rotate-8 xl:-rotate-8 2xl:-rotate-8">
         <motion.img
                        initial={{ opacity: 0, y: -50, scale: 0.5, color: '#333' }}
                        animate={{ opacity: 1, y: 0, scale: 1, color: '#ff6f61' }}
                        transition={{ duration: 1.2 }}
                        className="w-[80%] shadow-lg shadow-blue" src={imageUrl} alt="Card"
                        
                    ></motion.img>
    </div>
  );
};

export default Card;
