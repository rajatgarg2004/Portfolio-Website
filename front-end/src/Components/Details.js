import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Footer from "./Footer";
export default function Details(){
    return (
        <>
            <div className="bg-green-rgba-lighter font-mono">
                <Projects/>
            </div>
            <div className="bg-green-rgba-darkest font-mono">
                <Experience/>
            </div>
            <div className="bg-green-rgba-lighter font-mono">
                <Education/>
            </div>
            <Footer footerColor="green-rgba-darkest"/>
        </>
    );
}