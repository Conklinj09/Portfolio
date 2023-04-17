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
        bgImage: '../images/reactportfolio.png',
    },
    {

        href: "https://conklinj09.github.io/text-editor/",
        title: "Progressive Web Application",
        tech: "MVC, Handlebars, Sequelize, Express",
        class: "text-editor",
        bgImage: '../images/texteditor.png',
    },
    {

        href: "https://github.com/Conklinj09/Social-Network-API",
        title: "Social Network API",
        tech: "Model View Controllers, Handlebars, Sequelize, Express",
        class: "social-network-api",
        bgImage: '../images/socialnetworkapi.png',
    },
    {

        href: "https://conklinj09.github.io/Regex-Tutorial/",
        title: "Algorithms",
        tech: "Regular Expressions",
        class: "regular-expressions",
        bgImage: '../images/regextut.png',
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
        bgImage: '../images/techblog.png',
    },
    {

        href: "https://conklinj09.github.io/E-Commerce-Back-End/",
        title: "Object Relational Mapping",
        tech: "Express, Sequelize, MySQL",
        class: "e-commerce-back-end",
        bgImage: '../images/ecommerceback.png',
    },
    {

        href: "https://conklinj09.github.io/Employee-Tracker/",
        title: "CMS System",
        tech: "Node, Inquirer, MySQL",
        class: "cms-system",
        bgImage: '../images/EmployeeTracker.jpg',
    },
    {

        href: "https://conklinj09.github.io/Note-Taker",
        title: "Note Taker",
        tech: "JSON, Express",
        class: "note-taker",
        bgImage: '.n/images/notetaker.png',
    },
    {

        href: "https://conklinj09.github.io/Team-Profile-Generator/",
        title: "Team Profile Generator",
        tech: "Jest, Inquirer",
        class: "team-profile-generator",
        bgImage: '../images/Teamprofilegen.png',
    },
    {

        href: "https://conklinj09.github.io/Professional-README-Generator/",
        title: "Professional README Generator",
        tech: "Node",
        class: "professional-readme-generator",
        bgImage: '../images/Proreadmegenerator.png',
    },
    {

        href: "https://stang91.github.io/movie-recommendation-gen",
        title: "Flick Genie",
        tech: "HTML, CSS, API",
        class: "flick-genie",
        bgImage: '../images/flickgenie.jpg',
    },
    {

        href: "https://conklinj09.github.io/Weather-Dashboard/",
        title: "Weather Dashboard",
        tech: "HTML, CSS, Jquery",
        class: "weather-dashboard",
        bgImage: '../images/Weather-Dashboard.png',
    },
    {

        href: "https://conklinj09.github.io/Work-Day-Scheduler/",
        title: "Work Day Scheduler",
        tech: "HTML, CSS, Jquery",
        class: "work-day-scheduler",
        bgImage: '../images/Workday-Scheduler.jpeg',
    },
    {

        href: "https://conklinj09.github.io/CodeQuiz/",
        title: "Code Quiz",
        tech: "JS/Css",
        class: "coding-quiz",
        bgImage: '../images/Coding-Quiz.jpg',

    },
    {
        href: "https://conklinj09.github.io/Password-Generator/",
        title: "Password Generator",
        tech: "JS/Css",
        class: "password-generator",
        bgImage: '../images/Password-Generator.jpg',
    },
    {

        href: "https://github.com/Conklinj09/Horiseon",
        title: "Portfolio Website",
        tech: "JS/Css",
        class: "portfolio-website",
        bgImage: '../images/Horiseon.png',
    }
]

function Portfolio () {
  return (
      <div>
          {
              projects.map((project, i) => {
                  return (
                      <section key={`project${i}`}>
                          <a href={project.href} className={`flex-item ${project.class}`}>
                              <div>
                                  <h3>{project.title}</h3>
                                  <p>{project.tech}</p>
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