
import img from '../assets/photodim (Edited).jpg'

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">

            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt:4 md:mt-0">
                    Bonjour, <br /> je suis {" "}
                    <span className="text-accent">Dimitri</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Actuellement en année préparatoire <br />
                    Master of Science à Epitech de la Réunion
                </p>
            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" style={{
                    borderRadius: "63% 37% 57% 43% / 41% 55% 45% 59% "
                }} />
            </div>
        </div>
    )
}

export default Home