import React from 'react';
import About from './About';
import About1 from './About1';
import Footer from './Footer';
const Home = ()=>{
    return(
        <>
            <div className='bg-green-rgba-lighter font-mono p-6'>
                <About />
            </div>
            <div className='bg-green-rgba-darkest font-mono p-6'>
                <About1/>
            </div>
            <Footer footerColor="green-rgba-lighter"/>
        </>
    );
}
export default Home;