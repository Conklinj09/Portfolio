import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
function Project({ project }) {

  // const { name, repo, link, description } = project;
  const projects = [ 
    {title : 'Horiseon', 
    GithubLink : 'https://conklinj09.github.io/horiseon/',
    url: '.io',
    technologies : 'HTML, CSS',
    image: 'none',
  alt: "Horiseon Webpage"},
 
    {title: 'Code Quiz',
    GithubLink: 'https://github.com/Conklinj09/CodeQuiz',
    technologies: 'HTML, CSS'},

    {title: 'Employee Tracker',
    GithubLink: 'https://github.com/Conklinj09/Employee-Tracker',
    technologies: 'HTML, CSS, Javascript'},

    {title: 'Text Editor',
    GithubLink: 'https://text-editor-09.herokuapp.com/',
    technologies: 'HTML, CSS, Javascript, Inquirer, Nodemon, MySQL'},

    {title: 'Weather Dashboard',
    GithubLink: 'https://github.com/Conklinj09/Weather-Dashboard',
    technologies: 'HTML, CSS, Javascript, Nodemon, Jquery, Bootstrap'},

  ]
  return (
    // <div className="project" key={name}>
    //   <img
    //     src={require(`../../assets/projects/${name}.jpg`).default}
    //     alt={removeHyphensAndCapitalize(name)}
    //     className="project-bg"
    //   />
    //   <div className="project-text">
    //     <h3>
    //       <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
    //       <a href={repo}>
    //         <i className="fab fa-github"></i>
    //       </a>
    //     </h3>
    //     <p>{description}</p>
    //   </div>
    // </div>
    <div className='flex'> 
      {projects.map(function(value){
        return (
          <div >
            <a href={value.url}>
              <img src={value.image} alt={value.alt} />
            </a>
          <h3>
            {value.title}
          </h3>
          <p>{value.technologies}</p>
          <a href={value.GithubLink}>See my code</a>
          </div>
        )
      })}
    </div>
  );
}

export default Project;
