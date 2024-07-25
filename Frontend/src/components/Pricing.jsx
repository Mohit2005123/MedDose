// src/Pricing.js
import React from 'react';
import  TextGenerateEffect  from './ui/TextGenerateEffect.jsx';
// import { AppleCardsCarouselDemo } from './ui/AppleCardsCarousel.jsx'; // Adjust the import path

const Pricing = () => {
    const pricingData = [
        {
            discount: "20% off",
            price: "$199",
            title: "Personal Driving",
            features: [
                "Full course theory",
                "Full driving course",
                "Training in first aid",
                "Practical sessions",
                "Psychological support"
            ]
        },
        {
            discount: "20% off",
            price: "$199",
            title: "Personal Driving",
            features: [
                "Full course theory",
                "Full driving course",
                "Training in first aid",
                "Practical sessions",
                "Psychological support"
            ]
        },
        {
            discount: "20% off",
            price: "$199",
            title: "Personal Driving",
            features: [
                "Full course theory",
                "Full driving course",
                "Training in first aid",
                "Practical sessions",
                "Psychological support"
            ]
        }
    ];

    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto text-center">
                <TextGenerateEffect words='Your Health, Our Priority – Fair Pricing Guaranteed'></TextGenerateEffect>
                <h1 className="text-3xl font-bold mb-8">Our Pricing</h1>
                <div className="flex justify-center space-x-4">
                    {pricingData.map((plan, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
                            <div className="mb-4">
                                <span className="text-yellow-500 font-bold">{plan.discount}</span>
                                <h3 className="text-4xl font-bold">{plan.price}</h3>
                                <p className="text-lg">{plan.title}</p>
                            </div>
                            <ul className="mb-6 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="text-gray-400">{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                {/* <div className="mt-16">
                    <AppleCardsCarouselDemo />
                </div> */}
            </div>
        </div>
    );
};

export default Pricing;
