import React from "react";
import { FaHome, FaUserFriends, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { MdOutlineSpeakerNotes, MdChatBubbleOutline } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

const SideBar = ({ active, setActive }) => {
    // Liste des icônes avec leurs identifiants uniques
    const menuItems = [
        { id: "home", icon: <FaHome />, label: "Home" },
        { id: "aboutMe", icon: <FaUserFriends />, label: "About Me" },
        { id: "experiences", icon: <MdOutlineSpeakerNotes />, label: "Experiences" },
        { id: "skills", icon: <IoMenuOutline />, label: "Skills" },
        { id: "specialisation", icon: <FaBriefcase />, label: "Specialisation" },
        { id: "projects", icon: <FaEnvelope />, label: "Projects" },
        { id: "contact", icon: <MdChatBubbleOutline />, label: "Contact" },
    ];

    return (
        <div className="h-screen w-16 flex flex-col items-center justify-center bg-gray-900 text-gray-400 py-4 rounded-l-full fixed right-0">
            {menuItems.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setActive(item.id)} // Mise à jour de l'état actif au clic
                    className={`mb-6 cursor-pointer text-2xl ${
                        active === item.id ? "text-red-500" : "hover:text-gray-300"
                    }`}
                    title={item.label} // Info-bulle avec le nom de la section
                >
                    {item.icon}
                </div>
            ))}
        </div>
    );
};

export default SideBar;
