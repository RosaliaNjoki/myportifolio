import React from "react";

const Projects = ()=>{
    const projects = [
        {title: 'Project 1', description: 'Description of project 1'},
        {title: 'Project 2', description: 'Description of project 2'},
        {title: 'Project 3', description: 'Description of project 3'},
        {title: 'Project 2', description: 'Description of project 4'},
    ];
    return (
       <section id="projects">
            <h2>Projects</h2>
            <div>
                {projects.map((project, index)=>(
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                    </div>
                ))}
            </div>
       </section>

    );
 
};
export default Projects;