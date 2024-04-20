import React, { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Nav = () => {
    let isHome = true;
    if (window.location.pathname === '/') {
        isHome = true;
    }
    else {
        isHome = false;
    }
    return (
        <div className="fixed top-5 left-0 right-0 p-4 flex justify-center z-50">
            <div className='w-[80%] flex flex-row justify-between bg-black min-h[50px] p-2 rounded-lg'>
                <div className='flex flex-row w-[20%] justify-between items-center float-left list-none text-neon-hex text-opacity-80'>
                    <img src="/logo192.png" className='w-[20%] h-[100%] p-0' alt="" />
                    <li className='w-[60%] flex '><span className='lg:text-2xl md:text-xl sm:text-sm font-bold'>RAJAT GARG</span></li>
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

                </div>
            </div>
        </div>
    );
}
export default Nav;