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
        <div className="App bg-slate-800   w-full min-h-screen flex">
            {/* Card à GAUCHE */}
            <div className="w-[300px] mt-20 fixed left-0">
            <Card setActive={setActive} />
            </div>

            <div
    className="flex-grow flex items-center justify-center mx-auto mt-18"
    style={{ marginLeft: "17rem" }} // Équivalent à ml-40
>
    {renderContent()}
</div>


            {/* SideBar à DROITE */}
            <div className="w-[80px] fixed right-0 pr-0">
                <SideBar active={active} setActive={setActive} />
            </div>
            
        </div>
    );
}

export default App;