import { useEffect } from "react";
export default function Experience() {
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
            <h1 className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl mt-6 font-extrabold'>EXPERIENCE</h1>
            <div className='w-[80%] flex sm:flex-col sm:items-center md:flex-col md:items-center lg:flex-row lg:justify-between p-4'>
                <ul className='list-none m-6'>
                    <li className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                        SOFTWARE DEVELOPMENT INTERN
                    </li>
                    <li className="text-sm md:text-xl lg:text-2xl font-bold">
                        Jan 2024 - Present / DGRE, DRDO
                    </li>
                    <ul className="list-disc ml-6 text-sm md:text-xl lg:text-xl">
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