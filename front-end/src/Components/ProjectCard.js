// import React from 'react';
// export default function ProjectCard(props){
//     let float = 'left';
//     if(props.left==='false'){
//         float = 'right';
//     }
//     return (
//         <>
//             <div className={`float-${float} block`}>
//                 <h1>{props.project.name}</h1>
//                 <button><a href={props.project.deployedUrl} target='_blank'>Deployed Link</a></button>
//                 <button><a href={props.project.githubUrl} target='_blank'>Github Link</a></button>
//             </div>
//         </>
//     );
// };
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl,codeUrl }) => {
    return (
        <div className="project-card">
            <img className="project-image" src={imageUrl} alt={title} />
            <div className='flex flex-col w-[68%] justify-between items-center'>
                <div>
                    <h2 className="project-title">{title}</h2>

                    {Array.isArray(description) ? (
                        <ul className="list-disc">
                            {description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{description}</p>
                    )}
                </div>
                <div className='flex flex-row justify-center '>
                    <a className="project-link" href={projectUrl} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                    <a className="project-link" href={codeUrl} target="_blank" rel="noopener noreferrer">Code Link</a>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectCard;
