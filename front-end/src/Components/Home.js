import React,{useState} from 'react';
import About from './About';
import About1 from './About1';
import Footer from './Footer';
import { useDarkMode } from '../DarkModeContext';
import Experience from './Experience';
import Education from './Education';
const Home = ()=>{
    const { isDarkMode } = useDarkMode();
    let colorScheme = useState({});
    let educationExp = useState({});
    if(!isDarkMode){
        //For About Section
        colorScheme.letterColor = 'text-cool-color';
        colorScheme.bgColor1 = 'bg-green-rgba-lighter';
        colorScheme.bgColor2 = 'bg-green-rgba-darkest';

        //For About1 Section
        colorScheme.textColor = 'text-white';
        colorScheme.smallColor = 'text-black';
        colorScheme.tagColor = 'text-black';
        colorScheme.buttonText = 'text-neon-hex';
    }
    else{
        //For About Section
        colorScheme.bgColor1 = 'bg-[#181616]';
        colorScheme.bgColor2 = 'bg-[#0A0909]';
        colorScheme.letterColor = "text-[#ffffff]";
        //For About1 Section
        colorScheme.textColor = 'text-[#E98354]';
        colorScheme.smallColor = 'text-white';
        colorScheme.tagColor = 'text-[#B92AE7]';
        colorScheme.buttonText = 'text-neon-hex';
        colorScheme.footerColor = 'bg-[#737373]'
    }
    if(!isDarkMode){
        //For About Section
        educationExp.letterColor = 'text-cool-color';
        educationExp.bgColor1 = 'bg-green-rgba-lighter';
        educationExp.bgColor2 = 'bg-green-rgba-darkest';
        educationExp.bgColor3 = 'bg-green-rgba-lighter';
        educationExp.cardBg = 'white'
        //For About1 Section
        educationExp.textColor = 'text-black';
        educationExp.tagColor = 'text-black';
        educationExp.buttonText = 'text-neon-hex';
    }
    else{
        //For About Section
        educationExp.bgColor1 = 'bg-[#181616]';
        educationExp.bgColor2 = 'bg-[#0A0909]';
        educationExp.letterColor = "text-[#ffffff]";
        educationExp.cardBg = '#0A0909'
        //For About1 Section
        educationExp.textColor = 'text-[#E98354]';
        educationExp.tagColor = 'text-[#B92AE7]';
        educationExp.buttonText = 'text-neon-hex';
        educationExp.footerColor = 'bg-[#737373]'
    }

    return(
        <>
            <div className={`${colorScheme.bgColor1} font-mono p-6`}>
                <About colors={colorScheme}/>
            </div>
            <div className={`${colorScheme.bgColor2} font-mono p-6`}>
                <About1 colors={colorScheme}/>
            </div>
            <div className={`${colorScheme.bgColor1} font-mono`}>
                <Experience colors={educationExp}/>
            </div>
            <div className={`${colorScheme.bgColor2} font-mono`}>
                <Education colors = {educationExp}/>
            </div>
            <Footer footerColor={`${colorScheme.footerColor}`}/>
        </>
    );
}
export default Home;