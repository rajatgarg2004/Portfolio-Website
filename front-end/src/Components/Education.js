export default function Education() {
    return (
        <div className="flex flex-col justify-center items-center p-10" id="experience">
            <h1 className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl mt-6 font-extrabold p-4'>EDUCATION</h1>
            <ul className="w-[80%] text-left">
                <ul className='list-none m-6'>
                    <li className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                        B.Tech in Electrical Engineering
                    </li>
                    <li className="text-xs md:text-sm lg:text-xl font-bold flex flex-row justify-between items-center">
                        <div className="w-[40%] text-left">
                            <h1 >PUNJAB ENGINEERING COLLEGE</h1>
                            <h1 >DEC 2021 - Present </h1>
                        </div>
                        <span className="w-[40%] text-right justify-center">CGPA:- 8.42</span>
                    </li>
                </ul>
                <ul className='list-none m-6'>
                    <li className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                        Class 12th
                    </li>
                    <li className="text-xs md:text-sm lg:text-xl font-bold flex flex-row justify-between items-center">
                        <div className="w-[40%] text-left ">
                            <h1>ST. PETER's SCHOOL</h1>
                            <h1>APR 2020 - APR 2021 </h1>
                            <h1>CBSE Board</h1>
                        </div>
                        <span className="w-[40%] text-right justify-center">PERCENTAGE:- 88.6</span>
                    </li>
                </ul>
                <ul className='list-none m-6'>
                    <li className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                        Class 10th
                    </li>
                    <li className="text-xs md:text-sm lg:text-xl font-bold flex flex-row justify-between items-center">
                        <div className="w-[40%] text-left ">
                            <h1>ST. XAVIER's SCHOOL</h1>
                            <h1>APR 2018 - APR 2019</h1>
                            <h1>ICSE Board</h1>
                        </div>
                        <span className="w-[40%] text-right justify-center">PERCENTAGE:- 92.8</span>
                    </li>
                </ul>
            </ul>
        </div>
    );
}