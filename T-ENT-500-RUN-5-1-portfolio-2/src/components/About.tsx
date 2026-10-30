import Title from "./Title"
import img from "../assets/photodim2.jpg"
import {LetterText} from "lucide-react";


const aboutSections = [
    {
        id: 1,
        title: "Recherche d'alternance dans le domaine de la Data/IA",
        description: "En tant que profil junior, je me distingue par ma curiosité, ma rigueur et une forte envie de progresser. Ce qui m'anime : la possibilité d'analyser des données, de construire des algorithmes et de participer au analyse statistiques dans les domaines stratégiques tel que la géopolitique, l'économie, le commerce/marketing... Convaincu que chaque secteur cache un potentiel de données qui sont bon pour analyse afin d'avoir une meilleure comprehension de l'environnement qui nous entoure.",
        icon: <LetterText className="text-accent scale-150" />,
    }
];


const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À PROPOS" />
            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={img} alt="Photo de Dimitri" className="w-96 object-cover rounded-xl" />
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id} className="felx felx-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
                            <div className="mb-2 md:md-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default About