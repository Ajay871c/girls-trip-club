"use client";
import Image from "next/image";
import React from "react";

const greekGetaways = [
    {
        id: 1,
        title: "Santorini Sunset Escape",
        image: "/image.png",
        description:
            "Glow under golden skies with sunset yacht cruises, beach yoga, and candlelit dinners with your girls.",
    },
    {
        id: 2,
        title: "Mykonos Boss Babe Retreat",
        image: "/image.png",
        description:
            "Jet-set vibes, poolside networking, beach parties, and luxury villas — all in one glam-packed escape.",
    },
    {
        id: 3,
        title: "Athens Culture Collective",
        image: "/image.png",
        description:
            "Explore ancient ruins, sip espresso in stylish cafés, and bond with your crew in the cradle of civilization.",
    },
];

const Featured = () => {
    return (
        <div className="fearuted--container">
            <h1>Featured Greek Getaways</h1>
            <div className="featured--cards">
                {greekGetaways.map((item) => (
                    <div className="small--card--2" key={item.id}>
                        <div className="card--2--image--container">
                            <Image src={item.image} fill alt={item.title} className="image"/>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
