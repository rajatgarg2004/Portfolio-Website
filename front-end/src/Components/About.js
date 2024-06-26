import React from "react";
import { motion } from 'framer-motion';
import Card from "./Card";
export default function About({colors}) {
    const letterVariants = {
        hover: { rotate: [0, 360], transition: { duration: 0.5, ease: "easeInOut" } },
        initial: { rotate: 0 },
        exit: { rotate: 0 }
    };
    return (
        <div className="flex flex-col items-center justify-center sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:items-center lg:flex lg:flex-row lg:items-center p-16 pt-44 ">
            <div className=" flex flex-col float-left items-center p-5 w-[85%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%] h-auto">
                <Card imageUrl="/PFP.png" />
            </div>

            <div className=" flex flex-col float-right md:w-[50%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] justify-center">
                <div className="flex justify-center p-4">
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${colors.letterColor}`}
                        >
                            R
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            A
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            J
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            A
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >

                            T
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            exit="exit" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mr-[4%]"

                        >
                            
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            G
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            A
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            R
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            G
                        </motion.span>
                </div>
                <div className="flex flex-row justify-center p-10">
                <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            S
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            O
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            F
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            T
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >

                            W
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}

                        >
                            A
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            R
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            E
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            exit="exit" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mr-[4%]"
                        >
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            D
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            E
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            V
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >

                            E
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}

                        >
                            L
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            O
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            P
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            E
                        </motion.span>
                        <motion.span
                            variants={letterVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0.5, rotate:0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            exit="exit" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colors.letterColor} font-bold`}
                        >
                            R
                        </motion.span>
                        
                </div>
            </div>
        </div>
    );
};