import React, { useEffect, useState } from 'react';
import DownloadButton from './Download';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
export default function About1() {
    const location = useLocation();
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
        <div className='flex flex-row justify-center' id="about">
            <div className='float-left w-[90%] flex flex-col'>
                <h1 className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-6 text-center'>ABOUT ME</h1>
                <p className='text-xl md:text-2xl lg:text-3xl text-center m-4'>
                    Here you will find more information about me, what I do, and a list of my current programming skills.
                </p>
                <div className='flex sm:flex-col sm:justify-between sm:items-center md:flex-col md:justify-between md:items-center lg:flex-row  lg:items-start lg:justify-between p-4'>
                    <div className='sm:w-[80%] md:w-[80%] lg:w-[40%] flex flex-col items-center sm:text-center md:text-center lg:text-left'>
                        <h2 className='text-4xl md:text-4xl md:text-center sm:text-center lg:text-5xl xl:text-6xl font-bold p-4 '>MY STORY</h2>
                        <h3 className='text-xl'>
                            Hey there, I'm Rajat, a Chandigarh native and an Electrical Engineering student at Punjab Engineering College. Beyond the structured coursework, I'm a self-taught developer, diving into the fascinating realms of coding and technology.
                        </h3>
                        <br />
                        <h3 className='text-xl'>
                            I have various achievements and contributions in technology. Some of them are:
                        </h3>
                        <ul className='list-disc ml-6'>
                            <li>
                                Won <b>3rd Prize</b> out of <b>40 teams</b> in the <b>Hack2Hatch Software Hackathon</b> conducted by <b>EIC, PEC</b>.
                            </li>
                            <li>
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
                            <li>
                                Solved over <b>700 coding problems</b> on <b>LeetCode</b> and achieved a rating of <b>1649</b>.
                            </li>
                            <li>
                                Achieved a Rank of <b>48</b> in the <b>TechGig Cod-A-Thon</b>.
                            </li>
                        </ul>
                    </div>
                    <div className='sm:w-[80%] md:w-[80%] lg:w-[50%] flex flex-col justify-between'>
                        <h2 className='text-4xl md:text-4xl md:text-center sm:text-center lg:text-5xl xl:text-6xl font-bold p-4 text-center'>MY SKILLS</h2>
                        <div className='flex flex-row flex-wrap sm:justify-center md:justify-center lg:justify-start mt-4'>
                            <AnimatePresence>
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className='sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white rounded-full m-2 p-4 bg-gradient-to-br from-[#061c07] via-black to-[#061c07] hover:text-neon-hex'
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
                        <span className='text-xs font-bold cursor-pointer rounded-full text-center m-2 p-4 bg-gradient-to-br from-[#061c07] via-black to-[#061c07] text-neon-hex ' onClick={shuffleSkills}>CLICK TO SHUFFLE</span>

                    </div>
                </div>
                <DownloadButton />
            </div>
        </div>
    );
}
