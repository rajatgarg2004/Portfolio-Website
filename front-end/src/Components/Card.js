import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ imageUrl}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden" style={{ transform: 'rotate(-8deg)' }}>
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
