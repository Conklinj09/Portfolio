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
        class: "react",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/text-editor/",
        title: "Progressive Web Application",
        tech: "MVC, Handlebars, Sequelize, Express",
        class: "text-editor",
        bgImage: './',
    },
    {

        href: "https://github.com/Conklinj09/Social-Network-API",
        title: "Social Network API",
        tech: "Model View Controllers, Handlebars, Sequelize, Express ",
        class: "social-network-api",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Regex-Tutorial/",
        title: "Algorithms",
        tech: "Regular Expressions",
        class: "regex-tutorial",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Sage-The-Seer/",
        title: "Sage The Seer",
        tech: "Express, Session, MySQL2, Handlebars, Bcrypt, Dotenv, Nodemon, Sequlize and Bootstrap icons",
        class: "Sage-The-Seer",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Tech-Blog/",
        title: "MVC Paradigm",
        tech: "Model View Controllers, Handlebars, Sequelize, Express",
        class: "mvc-paradigm",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/E-Commerce-Back-End/",
        title: "Object Relational Mapping",
        tech: "Express, Sequelize, MySQL",
        class: "E-commerce-back-end",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Employee-Tracker/",
        title: "CMS System",
        tech: "Node, Inquirer, MySQL",
        class: "cms-system",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Note-Taker",
        title: "Note Taker",
        tech: "JSON, Express",
        class: "note-taker",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Team-Profile-Generator/",
        title: "Team Profile Generator",
        tech: "Jest, Inquirer",
        class: "team-profile-generator",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Professional-README-Generator/",
        title: "Professional README Generator",
        tech: "Node",
        class: "professional-readme-generator",
        bgImage: './',
    },
    {

        href: "https://stang91.github.io/movie-recommendation-gen",
        title: "Flick Genie",
        tech: "HTML, CSS, API",
        class: "flick-genie",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Weather-Dashboard/",
        title: "Weather Dashboard",
        tech: "HTML, CSS, Jquery",
        class: "weather-dashboard",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/Work-Day-Scheduler/",
        title: "Work Day Scheduler",
        tech: "HTML, CSS, Jquery",
        class: "work-day-scheduler",
        bgImage: './',
    },
    {

        href: "https://conklinj09.github.io/CodeQuiz/",
        title: "Code Quiz",
        tech: "JS/Css",
        class: "coding-quiz",
        bgImage: './',

    },
    {
        href: "https://conklinj09.github.io/Password-Generator/",
        title: "Password Generator",
        tech: "JS/Css",
        class: "password-generator",
        bgImage: './',
    },
    {

        href: "https://github.com/Conklinj09/Horiseon",
        title: "Portfolio Website",
        tech: "JS/Css",
        class: "portfolio-website",
        bgImage: './',
    }
]

function Projects () {
    return (
        <div>
            {
                projects.map((project, i) => {
                    return (
                        <section style={{backgroundImage: project.bgImage }} key={`project${i}`}>
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

export default Projects;