// src/Instructors.js
import React from 'react';

const instructorsData = [
    {
        name: "David Warner",
        title: "Instructor",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.",
        imageUrl: "https://via.placeholder.com/150",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "David Warner",
        title: "Instructor",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.",
        imageUrl: "https://via.placeholder.com/150",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "David Warner",
        title: "Instructor",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.",
        imageUrl: "https://via.placeholder.com/150",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "David Warner",
        title: "Instructor",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.",
        imageUrl: "https://via.placeholder.com/150",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    }
];

const Instructors = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-yellow-600 text-sm font-bold uppercase mb-3">Our Great Team</h2>
                <h1 className="text-3xl font-bold mb-8">Our Instructors</h1>
                <div className="flex justify-end mb-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold">
                        View All
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructorsData.map((instructor, index) => (
                        <div key={index} className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img className="w-16 h-16 rounded-full mr-4" src={instructor.imageUrl} alt={instructor.name} />
                                <div>
                                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                                    <p className="text-yellow-500">{instructor.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{instructor.description}</p>
                            <div className="flex space-x-3">
                                {instructor.socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} className="text-gray-500 hover:text-gray-700">
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;
