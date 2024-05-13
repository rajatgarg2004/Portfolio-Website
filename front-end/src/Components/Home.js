import React,{useState} from 'react';
import About from './About';
import About1 from './About1';
import Footer from './Footer';
import { useDarkMode } from '../DarkModeContext';
const Home = ()=>{
    const { isDarkMode } = useDarkMode();
    let colorScheme = useState({});
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
    return(
        <>
            <div className={`${colorScheme.bgColor1} font-mono p-6`}>
                <About colors={colorScheme}/>
            </div>
            <div className={`${colorScheme.bgColor2} font-mono p-6`}>
                <About1 colors={colorScheme}/>
            </div>
            <Footer footerColor={`${colorScheme.footerColor}`}/>
        </>
    );
}
export default Home;