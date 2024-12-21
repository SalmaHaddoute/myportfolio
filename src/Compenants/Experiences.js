import React from 'react';

const Experiences = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 font-serif rounded-lg">
        <h1 className="text-3xl font-serif text-white mb-6">Expériences & <span className='text-red-500'>Education</span></h1>
        
        <div className="mb-6 ml-6 p-5 border-2 border-red-500 shadow-lg rounded-lg">
            <h3 className="text-2xl font-medium text-white">Technicien Spécialisé en Développement Informatique</h3>
            <p className="text-red-500"><strong>Institut Spécialisé de Technologie Appliquée, Khemisset</strong></p>
            <p className="text-red-500"><em>2023 - 2025</em></p>
            <ul className="list-disc pl-5 text-white">
            <li>Formation axée sur les compétences avancées en développement informatique, avec une forte composante pratique en programmation, gestion de projets et technologies émergentes.</li>
            </ul>
        </div>

        <div className="mb-6 ml-6 p-5 border-2 border-red-500 shadow-lg rounded-lg">
            <h3 className="text-2xl font-medium text-white">Programme Innovation Entrepreneuriat</h3>
            <p className="text-red-500"><strong>Institut Spécialisé de Technologie Appliquée, Khemisset</strong></p>
            <p className="text-red-500"><em>2023 - 2025</em></p>
            <ul className="list-disc pl-5 text-white">
            <li>Programme dédié à l'innovation et à l'entrepreneuriat, visant à développer des compétences pratiques pour créer et gérer des projets entrepreneuriaux dans le domaine technologique.</li>
            </ul>
        </div>

        <div className="mb-6 ml-6 p-5 border-2 border-red-500 shadow-lg rounded-lg">
            <h3 className="text-2xl font-medium text-white">Baccalauréat en Science Physique</h3>
            <p className="text-red-500"><strong>Lycée Al Mowahidin, Khemisset</strong></p>
            <ul className="list-disc pl-5 text-white">
            <li>Formation scientifique approfondie avec une spécialisation en physique, fournissant une base solide en mathématiques, chimie et sciences naturelles.</li>
            <p className="text-red-500"><em>2023</em></p>
            </ul>
        </div>
        </div>
    );
};

export default Experiences;

