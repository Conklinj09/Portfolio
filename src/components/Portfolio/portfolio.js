import seo from '../../assets/images/Horiseon.png' 
import passgen from '../../assets/images/Password-Generator.jpg'
import codequiz from '../../assets/images/Coding-Quiz.jpg'
import workdayscheduler from '../../assets/images/Workday-Scheduler.jpeg'
import weatherdashboard from '../../assets/images/Weather-Dashboard.png'
import flickgenie from '../../assets/images/flickgenie.jpg'
import proreadmegen from '../../assets/images/Proreadmegenerator.png'
import teamprofilegen from '../../assets/images/Teamprofilegen.png'
import notetaker from '../../assets/images/notetaker.png'
import employeetracker  from '../../assets/images/EmployeeTracker.jpg'
import ecommerceback from '../../assets/images/ecommerceback.png'
import techblog from '../../assets/images/techblog.png'

import regextut from '../../assets/images/regextut.png'
import socialnetworkapi from '../../assets/images/socialnetworkapi.png'
import texteditor from '../../assets/images/texteditor.png'
import reactportfolio from '../../assets/images/reactportfolio.png'
import './portfolio.css'


const projects = [
   {
       href: "https://github.com/Conklinj09/MERN-One",
       title: "MERN Page",
       tech: "MERN Stack: Node, Express, Apollo-server-express, graphql",
       class: "mern",
       bgImage: './',
   },

   {
       href: "https://conklinj09.github.io/REACT",
       title: "REACT Portfolio",
       tech: "Apollo, Node, Sequelize, Express",
       class: "react-portfolio",
       bgImage: reactportfolio,
   },
   {

       href: "https://conklinj09.github.io/text-editor/",
       title: "Progressive Web Application",
       tech: "MVC, Handlebars, Sequelize, Express",
       class: "text-editor",
       bgImage: texteditor,
   },
   {

       href: "https://github.com/Conklinj09/Social-Network-API",
       title: "Social Network API",
       tech: "Model View Controllers, Handlebars, Sequelize, Express",
       class: "social-network-api",
       bgImage: socialnetworkapi,
   },
   {

       href: "https://conklinj09.github.io/Regex-Tutorial/",
       title: "Algorithms",
       tech: "Regular Expressions",
       class: "regular-expressions",
       bgImage: regextut,
   },
   {

       href: "https://conklinj09.github.io/Sage-The-Seer/",
       title: "Sage The Seer",
       tech: "Express, Session, MySQL2, Handlebars, Bcrypt, Dotenv, Nodemon, Sequlize and Bootstrap icons",
       class: "sage-the-seer",
       bgImage: './',
   },
   {

       href: "https://conklinj09.github.io/Tech-Blog/",
       title: "MVC Paradigm",
       tech: "Model View Controllers, Handlebars, Sequelize, Express",
       class: "mvc-paradigm",
       bgImage: techblog,
   },
   {

       href: "https://conklinj09.github.io/E-Commerce-Back-End/",
       title: "Object Relational Mapping",
       tech: "Express, Sequelize, MySQL",
       class: "e-commerce-back-end",
       bgImage: ecommerceback,
   },
   {

       href: "https://conklinj09.github.io/Employee-Tracker/",
       title: "CMS System",
       tech: "Node, Inquirer, MySQL",
       class: "cms-system",
       bgImage: employeetracker,
   },
   {

       href: "https://conklinj09.github.io/Note-Taker",
       title: "Note Taker",
       tech: "JSON, Express",
       class: "note-taker",
       bgImage: notetaker,
   },
   {

       href: "https://conklinj09.github.io/Team-Profile-Generator/",
       title: "Team Profile Generator",
       tech: "Jest, Inquirer",
       class: "team-profile-generator",
       bgImage: teamprofilegen,
   },
   {

       href: "https://conklinj09.github.io/Professional-README-Generator/",
       title: "Professional README Generator",
       tech: "Node",
       class: "professional-readme-generator",
       bgImage: proreadmegen,
   },
   {

       href: "https://stang91.github.io/movie-recommendation-gen",
       title: "Flick Genie",
       tech: "HTML, CSS, API",
       class: "flick-genie",
       bgImage: flickgenie,
   },
   {

       href: "https://conklinj09.github.io/Weather-Dashboard/",
       title: "Weather Dashboard",
       tech: "HTML, CSS, Jquery",
       class: "weather-dashboard",
       bgImage: weatherdashboard,
   },
   {

       href: "https://conklinj09.github.io/Work-Day-Scheduler/",
       title: "Work Day Scheduler",
       tech: "HTML, CSS, Jquery",
       class: "work-day-scheduler",
       bgImage: workdayscheduler,
   },
   {

       href: "https://conklinj09.github.io/CodeQuiz/",
       title: "Code Quiz",
       tech: "JS/Css",
       class: "coding-quiz",
       bgImage: codequiz,

   },
   {
       href: "https://conklinj09.github.io/Password-Generator/",
       title: "Password Generator",
       tech: "JS/Css",
       class: "password-generator",
       bgImage: passgen,
   },
   {

       href: "https://github.com/Conklinj09/Horiseon",
       title: "Portfolio Website",
       tech: "JS/Css",
       class: "portfolio-website",
       bgImage: seo,
   }
]

function Portfolio () {
 return (
     <div>
         {
             projects.map((project, i) => {
                 return (
                     <section className="project" key={`project${i}`}>
                         <a href={project.href} className={`flex-item ${project.class}`}>
                             <div>
                               <img className="project-image" src={project.bgImage} /> 
                                 <h3>{project.title}</h3>
                                 <p className='tech'>{project.tech}</p>
                             </div>
                         </a>

                     </section>
                 )
             })
         }
     </div>
 )
}

export default Portfolio;