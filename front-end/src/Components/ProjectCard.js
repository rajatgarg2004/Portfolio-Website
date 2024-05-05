import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl,codeUrl,colors }) => {
    console.log(colors);
    return (
        <div className={`project-card`} style={{backgroundColor:colors.cardBg}}>
            <img className="project-image" src={imageUrl} alt={title} />
            <div className='flex flex-col w-[68%] justify-between items-center'>
                <div>
                    <h2 className={`m-[0px] text-xl ${colors.tagColor}`}>{title}</h2>
                    {Array.isArray(description) ? (
                        <ul className="list-disc text-xs sm:text-sm md:text-xl lg:text-xl">
                            {description.map((item, index) => (
                                <li className={`${colors.textColor}`} key={index}>{item}</li>
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
