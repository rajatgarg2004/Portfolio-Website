import React,{useState,useEffect} from 'react';
import About from './About';
import About1 from './About1';
import Footer from './Footer';
const Home = ()=>{
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
    return(
        <>
            <div className='bg-green-rgba-lighter font-mono'>
                <About />
            </div>
            <div className='bg-green-rgba-darkest font-mono'>
                <About1/>
            </div>
            <Footer footerColor="green-rgba-lighter"/>
        </>
    );
}
export default Home;