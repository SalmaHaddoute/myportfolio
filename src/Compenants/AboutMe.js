import React from "react";

function AboutMe() {
    return (
        <div className="min-h-screen font-serif text-white flex items-center justify-center p-10">
            <div className="max-w-3xl  space-y-6">
                {/* Titre principal */}
                <h1 className="text-3xl md:text-4xl font-bold">
                    About <span className="text-red-500">Me</span>
                </h1>

                {/* Sous-titre */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                    I'm someone who finds profound joy in the art of design and{" "}
                    <span className="text-red-500">coding</span>
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                "I am passionate about creating simple and beautiful designs, putting my heart into <br />
                every project I work on. My goal is to combine looks with user-friendly functionality. Each <br />
                line of code and design is made to not only look good but also make life easier for users. Welcome <br />
                to my world, where every detail reflects my love for what I do."
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
