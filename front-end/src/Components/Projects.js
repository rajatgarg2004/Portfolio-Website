import React from 'react';
import ProjectCard from './ProjectCard';
export default function Projects(){
    const projectDetails = [
        {
            title: "Economic Load Dispatch",
            projectUrl : "https://economic-load-dispatch-using-dynamicprogramming.vercel.app/",
            imageUrl : "/static/Photos/EconomicLoadDispatch.png",
            description : ["Solved the problem of Economic Load Dispatch using Dynamic Programming.",
            "Developed a data-fetching mechanism through Apps Script API to gather Excel data for load generation analysis in India which enabled the team to forecast future load patterns with precision.",
            "Meticulously utilised Chart.js to display the fetched data on the website."],
            codeUrl : "https://github.com/rajatgarg2004/Minor-Project"
        },
        {
            title: "Musophile",
            projectUrl : "/static/Photos/https://musophile.vercel.app/",
            imageUrl : "Musophile.png",
            description : ["Web-based App that fetches API data from Spotify.com based on the searched options of genre and playlist and displays them.",
            "Leveraged MongoDB in backend development to store user credentials and the address of songs.",
            "Additional functionality of playing songs from local storage."],
            codeUrl : "https://github.com/rajatgarg2004/Musophile",
        },
        {
            title: "E-Commerce Dashboard",
            projectUrl : "https://e-commerce-project-ashy.vercel.app/",
            imageUrl : "/static/Photos/EcommerceDashboard.png",
            description : ["Add, Update or Delete Product as per your wish from your input data.",
            "JWT for authentication and authorization for secure information exchange between server and user."],
            codeUrl : "https://github.com/rajatgarg2004/Musophile",
        }
    ];
    return(
        <div className='bg-green-rgba-lighter font-mono p-12 pt-44'>
            <h1 className='text-6xl font-bold text-center'>PROJECTS</h1>
            <div className="flex flex-row flex-wrap justify-center items-center mt-8">
                {
                    projectDetails.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            codeUrl = {project.codeUrl}
                        />
                    ))
                }
            </div>
        </div>
    );
};