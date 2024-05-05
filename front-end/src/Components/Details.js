import {useState} from 'react';
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Footer from "./Footer";
import { useDarkMode } from '../DarkModeContext';
export default function Details(){
    const { isDarkMode } = useDarkMode();
    let colorScheme = useState({});
    if(!isDarkMode){
        //For About Section
        colorScheme.letterColor = 'text-cool-color';
        colorScheme.bgColor1 = 'bg-green-rgba-lighter';
        colorScheme.bgColor2 = 'bg-green-rgba-darkest';
        colorScheme.bgColor3 = 'bg-green-rgba-lighter';
        colorScheme.cardBg = 'white'
        //For About1 Section
        colorScheme.textColor = 'text-black';
        colorScheme.tagColor = 'text-black';
        colorScheme.buttonText = 'text-neon-hex';
    }
    else{
        //For About Section
        colorScheme.bgColor1 = 'bg-[#181616]';
        colorScheme.bgColor2 = 'bg-[#0A0909]';
        colorScheme.letterColor = "text-[#ffffff]";
        colorScheme.cardBg = '#0A0909'
        //For About1 Section
        colorScheme.textColor = 'text-[#E98354]';
        colorScheme.tagColor = 'text-[#B92AE7]';
        colorScheme.buttonText = 'text-neon-hex';
        colorScheme.footerColor = 'bg-[#737373]'
    }
    return (
        <>
            <div className={`${colorScheme.bgColor1} font-mono p-6`}>
                <Projects colors={colorScheme}/>
            </div>
            <div className={`${colorScheme.bgColor2} font-mono`}>
                <Experience colors={colorScheme}/>
            </div>
            <div className={`${colorScheme.bgColor1} font-mono`}>
                <Education colors = {colorScheme}/>
            </div>
            <Footer footerColor={`${colorScheme.footerColor}`}/>
        </>
    );
}