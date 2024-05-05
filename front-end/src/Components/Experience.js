import { useEffect } from "react";
export default function Experience({colors}) {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#experience") {
          const element = document.getElementById("experience");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, []);
    return (
        <div className="flex flex-col justify-center items-center p-10" id="experience">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-6 font-extrabold ${colors.letterColor}`}>EXPERIENCE</h1>
            <div className='w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%] flex flex-col items-center text-center md:text-left md:flex-col md:items-center lg:text-left lg:flex-row lg:justify-between p-4'>
                <ul className='list-none m-6'>
                    <li className={`font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl ${colors.tagColor}`}>
                        SOFTWARE DEVELOPMENT INTERN
                    </li>
                    <li className={`text-sm md:text-xl lg:text-2xl font-bold ${colors.tagColor}`}>
                        Jan 2024 - Present / DGRE, DRDO
                    </li>
                    <ul className={`list-disc mt-5 ml-6 text-sm md:text-xl lg:text-xl ${colors.textColor}`}>
                        <li>
                            Developed Web-Based 3D Geographic Information System for mapping Snow Avalanche Parameters.
                        </li>
                        <li>
                            Gained experience in Geospatial Data Visualization and Web Development.
                        </li>
                        <li>
                            Leveraged Cesium.js for rendering geographic data and MySQL to store Avalanche details.
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}