import React from 'react';

const Specialisation = () => {
    return (
        <div className="bg-gray-900 text-white p-7 w-5/6">
        <h1 className="text-4xl font-bold mb-8">
            My <span className="text-red-500">Specializations</span>
        </h1>
        <div className="space-y-6">
            {/* Front-End Developer */}
            <div className="border-2 border-red-500 rounded-lg p-5 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-2">Front-End Developer</h2>
                <p className="text-gray-400">
                Front-end development is where I craft engaging, user-centric, and responsive web interfaces with modern tools and technologies.
                </p>
            </div>
            <div className="text-red-500 text-4xl">
                <i className="fas fa-code"></i> {/* Icon for Front-End */}
            </div>
            </div>

            {/* Back-End Developer */}
            <div className="border-2 border-red-500 rounded-lg p-6 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-2">Back-End Developer</h2>
                <p className="text-gray-400">
                Back-end development is where I manage databases, server logic, and APIs to create seamless and scalable web applications.
                </p>
            </div>
            <div className="text-red-500 text-4xl">
                <i className="fas fa-server"></i> {/* Icon for Back-End */}
            </div>
            </div>

            {/* Programme Innovation Entrepreneuriat */}
            <div className="border-2 border-red-500 rounded-lg p-6 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-2">Programme Innovation Entrepreneuriat</h2>
                <p className="text-gray-400">
                A program dedicated to fostering innovation and entrepreneurship, providing skills for managing and launching technology-driven projects.
                </p>
            </div>
            <div className="text-red-500 text-4xl">
                <i className="fas fa-lightbulb"></i> {/* Icon for Entrepreneurship */}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Specialisation;
