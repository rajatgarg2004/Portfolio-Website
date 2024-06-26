import React, { useEffect, useState } from 'react';
import DownloadButton from './Download';
import { motion, AnimatePresence } from 'framer-motion';
export default function About1({colors}) {
    const initialSkills = [
        'C++',
        'Python',
        'HTML',
        'CSS',
        'Javascript',
        'React.js',
        'Node.js',
        'Numpy',
        'Pandas',
        'Git',
        'Github',
        'VSCode',
        'Postman',
        'Tailwind',
        'MySQL',
        'MongoDB',
        'GraphQL',
        'Data Structures',
        'Algorithms',
        'OOPS',
        'DBMS',
        'Excel',
        'Operating Systems',
        'Express.js',
       'Socket.IO',
        'MySQL Workbench',
        'Cesium.js',
        'Chart.js',
        'Problem Solving',
    ];
    const [skills, setSkills] = useState([...initialSkills]); 

    const shuffleSkills = () => {
        setSkills(shuffle([...skills]));
    };
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#about") {
          const element = document.getElementById("about");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
    return (
        <div className={`flex flex-row justify-center ${colors.tagColor}`} id="about">
            <div className='float-left w-[90%] flex flex-col'>
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-6 text-center ${colors.letterColor}`}>ABOUT ME</h1>
                <p className='text-xs sm:text-xl md:text-2xl lg:text-3xl text-center m-4 font-bold'>
                    HERE YOU WILL FIND MORE INFORMATION ABOUT ME, WHAT I DO, AND A LIST OF MY CURRENT PROGRAMMING SKILLS.
                </p>
                <div className='flex flex-col justify-between items-center md:flex-col md:justify-between md:items-center lg:flex-row  lg:items-start lg:justify-between p-4'>
                    <div className='sm:w-[80%] md:w-[80%] lg:w-[40%] flex flex-col items-center text-center md:text-center lg:text-left'>
                        <h2 className='text-2xl sm:text-2xl md:text-4xl md:text-center sm:text-center lg:text-5xl xl:text-6xl font-bold p-4 '>MY STORY</h2>
                        <h2 className={`text-xl sm:text-sm md:text-xl lg:text-2xl ${colors.smallColor}`}>
                            Hey there, I'm Rajat, a Chandigarh native and an Electrical Engineering student at Punjab Engineering College. Beyond the structured coursework, I'm a self-taught developer, diving into the fascinating realms of coding and technology.
                        </h2>
                        <br />
                        <h3 className={`text-xs 2xl:text-xl xl:text-xl sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] m-4 ${colors.smallColor}`}>
                            I have various achievements and contributions in technology. Some of them are:
                        </h3>
                        <ul className={`list-disc ml-6 text-xs sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] xl:text-xl 3xl:text-xl ${colors.smallColor}`}>
                            <li className='mb-5'>
                                Got <b>69th Rank</b> out of <b>1000 teams</b> in <b>ZS Campus-Beats Tech Challenge</b>.
                            </li>
                            <li className='mb-5'>
                                Won <b>3rd Prize</b> out of <b>40 teams</b> in the <b>Hack2Hatch Software Hackathon</b> conducted by <b>EIC, PEC</b>.
                            </li>
                            <li className='mb-5'>
                                Achieved <b>4 Stars</b> at <b>CodeChef</b> with a remarkable rating of <b>1831</b>. Some of my Ranks are:-
                                <ul className='list-none ml-6 '>
                                    <li>
                                        <b>98</b> in <b>Starters 95</b>
                                    </li>
                                    <li>
                                        <b>116</b> in <b>Starters 113</b>
                                    </li>
                                    <li>
                                        <b>384</b> in <b>Starters 115</b>
                                    </li>
                                    <li>
                                        <b>280</b> in <b>Starters 117</b>
                                    </li>
                                    <li>
                                        <b>406</b> in <b>Starters 123</b>
                                    </li>
                                    <li>
                                        <b>678</b> in <b>Starters 122</b>
                                    </li>
                                    <li>
                                        <b>321</b> in <b>Starters 125</b>
                                    </li>
                                </ul>
                            </li>
                            <li className='mb-5'>
                                Solved over <b>700 coding problems</b> on <b>LeetCode</b> and achieved a rating of <b>1649</b>.
                            </li>
                            <li className='mb-5'>
                                Achieved a Rank of <b>48</b> in the <b>TechGig Cod-A-Thon</b>.
                            </li>
                            <li className='mb-5'>
                                Achieved a Rank of <b>2900</b> in <b>Google Farwell Code Jam</b>.
                            </li>
                        </ul>
                    </div>
                    <div className='sm:w-[80%] md:w-[80%] lg:w-[50%] flex flex-col justify-between'>
                        <h2 className='text-4xl md:text-4xl md:text-center sm:text-center lg:text-5xl xl:text-6xl font-bold p-4 text-center'>MY SKILLS</h2>
                        <div className='flex flex-row flex-wrap justify-center md:justify-between lg:justify-between mt-4'>
                            <AnimatePresence>
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className={`text-sm md:text-base lg:text-lg xl:text-xl font-bold ${colors.textColor} rounded-full 2xl:m-6 2xl:pl-5 2xl:pr-5 xl:m-6 xl:pl-5 xl:pr-5 lg:m-4 lg:p-4 md:m-3 md:p-4 m-2 p-4 bg-gradient-to-br from-[#061c07] via-black to-[#061c07] hover:text-neon-hex`}
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </AnimatePresence>
                        </div>
                        <span className={` self-center w-[40%] text-xs font-bold cursor-pointer rounded-full text-center m-2 p-4 border bg-gradient-to-br from-[#061c07] via-black to-[#061c07]  ${colors.buttonText}`} onClick={shuffleSkills}>CLICK TO SHUFFLE</span>

                    </div>
                </div>
                <div className='flex flex-row justify-center '>
                    <DownloadButton />
                </div>
            </div>
        </div>
    );
}
