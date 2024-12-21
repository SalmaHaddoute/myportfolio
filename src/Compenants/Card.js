import React from "react";
import picter from "../Assets/photo.jpg";

const Card = ({ setActive }) => {
    return (
        <div className="absolute font-serif mt-20 max-w-sm bg-gray-900 text-white border-gray-500 rounded-2xl shadow-lg p-8 m-4">
            <h1 className="text-3xl font-bold text-center mb-6">
                <span className="text-red-500">S</span>alma
                <span className="text-red-500">H</span>addoute
            </h1>
            <img
                src={picter}
                alt="Profile"
                className="w-full h-60 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-400 font-serif text-center text-base">
                Based in Khemiset
            </p>
            <p className="text-gray-300 text-center text-sm mb-6">
                Frontend , Backend Developer
            </p>
            <div className="flex justify-center space-x-4 text-xl mb-8">
                <i className="fab fa-facebook hover:text-red-500 cursor-pointer"></i>
                <i className="fab fa-x-twitter hover:text-red-500 cursor-pointer"></i>
                <i className="fab fa-instagram hover:text-red-500 cursor-pointer"></i>
                <i className="fab fa-linkedin hover:text-red-500 cursor-pointer"></i>
                <i className="fab fa-google hover:text-red-500 cursor-pointer"></i>
            </div>
            <button
                onClick={() => setActive("contact")} // Change l'état active à "contact"
                className="bg-red-500 text-black font-bold py-3 px-6 rounded-lg w-full hover:bg-red-600 transition"
            >
                HIRE ME!
            </button>
        </div>
    );
};

export default Card;

