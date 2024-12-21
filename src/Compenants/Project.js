import React, { useState, useEffect } from 'react';
import shop from '../Assets/shop.png';
import note from '../Assets/note.png';
import travel from '../Assets/trzvel.png';
import ecommerce from '../Assets/ecommerce.png';
import library from '../Assets/library.png';

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
        title: "Library Management System",
        description:
            "A web-based system to manage books, users, and loans. Built with PHP and MySQL for the backend, and Bootstrap for the frontend.",
        image: library,
        githubLink: "https://github.com/SalmaHaddoute/Task-Management",
    },
    {
        title: "ShopCard",
        description:
            "A simplified shopping cart system, designed to manage products and orders with React.js and Node.js.",
        image: shop,
        githubLink: "https://github.com/SalmaHaddoute/ShopCart",
    },
];

const Project = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 2000); // Change project every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const currentProject = projects[currentProjectIndex];

    return (
        <div className="text-white p-8 max-w-4xl mx-auto"> {/* Increased padding and width for larger container */}
            <h1 className="text-4xl font-bold mb-8"> {/* Increased font size */}
                Featured <span className="text-red-500">Projects</span>
            </h1>
            <div className="border-2 border-red-500 rounded-xl p-6 space-y-6 bg-gray-900 transition-opacity duration-1000  max-w-[1000px] max-h-[750px]"> {/* Increased padding and max height */}
                <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="rounded-lg object-cover w-200 h-150" 
                />
                <h2 className="text-2xl font-bold">{currentProject.title}</h2> {/* Increased font size */}
                <p className="text-gray-400">{currentProject.description}</p>
                <a
                    href={currentProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:text-gray-500"
                >
                    You can see more on my GitHub &rarr;
                </a>
            </div>
        </div>
    );
};

export default Project;
