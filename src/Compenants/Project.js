import React, { useState } from 'react';
import note from '../Assets/note.png';
import travel from '../Assets/travel.png';
import ecommerce from '../Assets/ecom.png';
import Foodio from '../Assets/Foodio.png';

const projects = [
    {
        title: "Nowted - Fullstack",
        description:
            "Here's my latest project built with React.js and Laravel, using Bootstrap 5 on the front-end. Watch the video to see the responsive landing page in action!",
        image: note,
        githubLink: "https://github.com/SalmaHaddoute/NOWTED",
    },
    {
        title: "E-commerce Clothing Store",
        description:
            "An online shopping platform for clothing, built with React.js and Firebase. It includes user authentication, a shopping cart, and order tracking.",
        image: ecommerce,
        githubLink: "https://github.com/SalmaHaddoute/e-commerce",
    },
    {
        title: "Traveling Project",
        description:
            "A responsive travel website showcasing popular destinations, built with React.js and Tailwind CSS.",
        image: travel,
        githubLink: "https://github.com/SalmaHaddoute/My-Dream-Place",
    },
    {
        title: "FOODIO",
        description:
            "A food blog website built with React.js and CSS, featuring a clean and modern design.",
        image: Foodio,
        githubLink: "https://github.com/SalmaHaddoute/FOODIO",
    }
];

const Project = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const currentProject = projects[currentProjectIndex];

    return (
        <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Featured <span className="text-red-500">Projects</span>
            </h1>
            <div className="relative mx-auto justify-center bg-gray-900 border-2 border-red-500 rounded-xl p-6 max-w-[900px] w-full space-y-6">
                {/* Contenu principal */}
                <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="rounded-lg object-cover w-full h-90 lg:h-96"
                />
                <h2 className="text-2xl font-bold">{currentProject.title}</h2>
                <p className="text-gray-400">{currentProject.description}</p>
                <a
                    href={currentProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:text-gray-500"
                >
                    You can see more on my GitHub &rarr;
                </a>
                {/* Boutons */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-red-500"
                >
                    &#8592;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-red-500"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default Project;
