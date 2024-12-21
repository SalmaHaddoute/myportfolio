import React from 'react';

const skills = [
    { name: "GitHub", percentage: 75, icon: "fab fa-github" },
    { name: "Git", percentage: 80, icon: "fab fa-git" },
    { name: "HTML/CSS", percentage: 85, icon: "fab fa-html5" },
    { name: "Bootstrap", percentage: 80, icon: "fab fa-bootstrap" },
    { name: "Tailwind", percentage: 85, icon: "fas fa-paint-brush" },
    { name: "JavaScript", percentage: 75, icon: "fab fa-js-square" },
    { name: "TypeScript", percentage: 70, icon: "fas fa-code" },
    { name: "Vite", percentage: 65, icon: "fas fa-bolt" },
    { name: "React", percentage: 80, icon: "fab fa-react" },
    { name: "PHP", percentage: 75, icon: "fab fa-php" },
    { name: "Python", percentage: 80, icon: "fab fa-python" },
    { name: "MongoDB", percentage: 70, icon: "fas fa-database" },
    { name: "UML & Merise", percentage: 85, icon: "fas fa-project-diagram" },
    { name: "Jira", percentage: 70, icon: "fab fa-jira" },
    { name: "Laravel", percentage: 75, icon: "fab fa-laravel" },
    ];

    const Skills = () => {
    return (
        <div className=" text-white p-10 overflow-hidden" >
        <h1 className="text-4xl font-bold mb-8">
            My <span className="text-red-500">Skills</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {skills.map((skill, index) => (
            <div
                key={index}
                className="border-2 border-red-500 rounded-xl p-3 flex flex-col items-center text-center space-y-4"
            >
                <div className="text-4xl text-red-500">
                <i className={skill.icon}></i>
                </div>
                <h2 className="text-xl font-bold">{skill.name}</h2>
                <p className="text-gray-400">{skill.percentage}%</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Skills;
