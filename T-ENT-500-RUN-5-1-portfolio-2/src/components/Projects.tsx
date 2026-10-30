import Github from "../GitHub_Invertocat_Black.svg";
import Title from "./Title"

import imgJobBoard from "../JobBoardScreen.png";
import imgDataSP95E10 from "../DataImage.png";



const projects = [
    {
        id: 1,
        title: "JobBoard",
        description: "Developpement d'un site web, proposant des offres d'emplois, publiée par des entreprises et permmettant aux utilisateurs particulier de candidater",
        technologies: ['Python : FastAPI', 'HTML&CSS', 'JS'],
        repoLink: "https://github.com/mobilou/Eproject-JobBoard",
        image: imgJobBoard,
    },

    {
        id: 2,
        title: "Analyse du prix de l'essence (SP95 E10)",
        description: "Analyse de l'évolution du prix du SP95 E10 entre 2019 et 2026",
        technologies: ['Python : numpy, pandas, matplotlib'],
        repoLink: "https://github.com/mobilou/EssenceAnalyse.git",
        image: imgDataSP95E10,
    }
]




const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />

            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((projects) => (
                    <div key={projects.id} className="bg-base-300 p-5 h-fit rouned-xl shadow-lg">
                        <img
                            src={projects.image}
                            alt={projects.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {projects.title}
                            </h1>
                            <p className="text-sm">
                                {projects.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {projects.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex">

                            <a className="btn btn-neutral w-1/3 ml-2" href={projects.repoLink}> GitHub
                                <img src={Github} className="w-4" alt="GitHub" />
        
                            </a>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects