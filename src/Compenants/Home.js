import React from "react";

function Home() {
    return (
        <div className="font-serif text-white min-h-screen flex flex-col justify-center items-start p-6 space-y-4" style={{ marginRight: '6.5rem' }}>
            {/* Titre principal */}
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200">
                Let's Work <span className="text-red-500">Together</span>!
            </h1>

            {/* Sous-titre */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Hi From <span className="text-red-500">Salma Haddoute</span>,<br />
                Front-End, and Backend Developer
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
                I derive immense joy from designing and coding beautiful, simple creations. 
                My work is a true passion, characterized by <br /> a commitment to elegance and user-friendliness.
            </p>

            {/* Statistiques */}
            <div className="flex space-x-8 mt-6">
                {/* Années d'expérience */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-red-500">+2</span>
                    <span className="text-gray-400 text-xs md:text-sm">Years of Experience</span>
                </div>

                {/* Projets terminés */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-red-500">10+</span>
                    <span className="text-gray-400 text-xs md:text-sm">Projects Completed</span>
                </div>
            </div>
        </div>
    );
}

export default Home;

