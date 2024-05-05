import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useDarkMode } from '../DarkModeContext';
const Nav = () => {
    let isHome = true;
    if (window.location.pathname === '/') {
        isHome = true;
    }
    else {
        isHome = false;
    }
    const { isDarkMode, toggleMode } = useDarkMode();

    return (
        <div className="fixed top-5 left-0 right-0 flex justify-center z-50 ">
            <div className='w-[95%] xl:w-[90%] 2xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] flex flex-row justify-between bg-black min-h[50px] p-4 rounded-lg text-[0.7rem] 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm font-bold'>
                <div className='flex flex-row sm:w-[30%] md:w-[30%] lg:w-[30%] w-[35%] mr-5 justify-between items-center float-left list-none text-neon-hex text-opacity-80'>
                    <li className='w-[100%] flex '><span >RAJAT GARG</span></li>
                </div>
                <div className='flex width-[60%] justify-end list-none items-center text-neon-hex text-opacity-80 lg:text-2xl md:text-xl sm:text-sm'>
                    <li className='flex flex-row cursor-pointer mr-6'><a href="/" className='font-bold'>Home</a></li>
                    {
                        isHome === true ? (
                            <>
                                <li className='flex flex-row cursor-pointer mr-6'>
                                    <ScrollLink to="about" spy={true} smooth={true} offset={-105} duration={500} className=' font-bold'>About</ScrollLink>
                                </li>
                                <li className='flex flex-row cursor-pointer mr-6'><a href="/details" className=' font-bold'>Projects</a></li>
                                <li className='flex flex-row cursor-pointer mr-6'><a href="/details#experience" className=' font-bold'>Experience</a></li>
                            </>) : (
                            <>
                                <li className='flex flex-row cursor-pointer mr-6'><a href="/#about" className=' font-bold'>About</a></li>
                                <li className='flex flex-row cursor-pointer mr-6'><a href="/details" className=' font-bold'>Projects</a></li>
                                <li className='flex flex-row cursor-pointer mr-6'>
                                    <ScrollLink to="experience" spy={true} smooth={true} offset={-105} duration={500} className=' font-bold'>Experience</ScrollLink>
                                </li>
                            </>)
                    }
                    <li className='flex flex-row items-center 2xl:h-[45px] xl:h-[40px] lg:h-[35px] md:h-[30px] sm:h-[28px] h-[25px] 2xl:w-[45px] xl:w-[40px] lg:w-[35px] md:w-[30px] sm:w-[28px] w-[25px]'>
                        <button onClick={toggleMode} id="modeToggle" >
                            {isDarkMode ? (
                                <img
                                    src="Moon.svg"
                                    alt="Moon Icon"
                                    className='2xl:h-[45px] xl:h-[40px] lg:h-[35px] md:h-[30px] sm:h-[28px] h-[25px] 2xl:w-[45px] xl:w-[40px] lg:w-[35px] md:w-[30px] sm:w-[28px] w-[20px]'
                                />
                            ) : (
                                <img
                                    src="Sun.svg"
                                    alt="Sun Icon"
                                    className='2xl:h-[45px] xl:h-[40px] lg:h-[35px] md:h-[30px] sm:h-[28px] h-[25px] 2xl:w-[45px] xl:w-[40px] lg:w-[35px] md:w-[30px] sm:w-[28px] w-[20px]'
                                />
                            )}
                        </button>
                    </li>
                </div>
            </div>
        </div>
    );
}
export default Nav;