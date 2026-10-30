import { Container } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10">
            <aside>

                <Container className="w-10 h-10" />

                <p className="font-bold">
                    DIMITRI <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/dimitri-agathe-34415a421/" target="_blank" rel="noopener noreferrer">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                    </a>
                    <a href="https://github.com/didimdim" target="_blank" rel="noopener noreferrer">
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer