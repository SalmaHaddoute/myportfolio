import Card from "./Compenants/Card";
import SideBar from "./Compenants/SideBar";
import Home from "./Compenants/Home";
import AboutMe from "./Compenants/AboutMe";
import Experiences from "./Compenants/Experiences";
import Specialisation from "./Compenants/Specialisation";
import Contact from "./Compenants/Contact";
import Project from "./Compenants/Project";
import Skills from "./Compenants/Skills";
import { useState } from "react";

function App() {
    const [active, setActive] = useState("home");

    const renderContent = () => {
        switch (active) {
            case "home":
                return <Home />;
            case "aboutMe":
                return <AboutMe />;
            case "experiences":
                return <Experiences />;
            case "skills":
                return <Skills />;
            case "specialisation":
                return <Specialisation />;
            case "projects":
                return <Project />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App bg-slate-800 w-full min-h-screen flex relative">
            {/* Card à GAUCHE */}
            <div className="w-[300px] fixed left-0 top-0 h-full flex items-center">
                <Card setActive={setActive} />
            </div>

            {/* Contenu principal centré */}
            <div
                className="flex-grow flex items-center justify-center mx-auto min-h-screen"
                style={{ marginLeft: "300px", marginRight: "80px" }} // Ajuste l'espacement selon les dimensions des côtés
            >
                {renderContent()}
            </div>

            {/* SideBar à DROITE */}
            <div className="w-[80px] fixed right-0 top-0 h-full flex items-center">
                <SideBar active={active} setActive={setActive} />
            </div>
        </div>
    );
}

export default App;
