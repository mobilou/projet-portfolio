import Title from "./Title"


import imgPython from  "../Python-logo-notext.svg"
import imgJava from  "../Java_logo_icon.png"
import imgHTML from  "../html5-logo-31813.png"
import imgJS from  "../Javascript-Logo.svg"
import imgPHP from  "../PHP-Logo-PNG-Image.png"

const skills = [
    { id : 1, name: "Python", image: imgPython},
    { id : 2, name: "Java", image: imgJava},
    { id : 3, name: "HTML", image: imgHTML},
    { id : 4, name: "JavaScript", image: imgJS},
    { id : 5, name: "PHP", image: imgPHP},

]

const experiences = [
    {
        id: 1,
        role: "Développement Backend",
        description: [
            "Création d'une API complète en Python avec FastAPI",
            "Développement d'une base de données avec MySQL"
        ]
    },
    {
        id: 2,
        role: "Data Analyst",
        description: [
            "Collect et extraction de données : Récupération des historiques de prix du SP95 E10 entre 2019 et 2026",
            "Nettoyage et préparation",
            "Analyses statistiques et visualisation de données"
        ]
    }
]


const Experiences = () => {

    return (
        <div id="Experiences">
            <Title title="Expériences"/>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full"></img>
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experiences) => (
                        <div key={experiences.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                            <div className="ml-4">
                                <h1 className="test-x1 text-accent font-bold">
                                    {experiences.role}
                                </h1>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experiences.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )

}

export default Experiences