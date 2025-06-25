"use client"
import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const cards = [
    {
        id: 1,
        title: "Greek Gataways",
        desc: "Campus Group Trips",
        svg: "/1.png",
        ani: "fade-up-right",
    },
    {
        id: 2,
        title: "Boss Babe Retreats",
        desc: "Career Driven Escapes",
        svg: "/2.png",
        ani: "fade-up",
    },
    {
        id: 3,
        title: "Wellness Wanderers",
        desc: "Yoga and Spa escapes",
        svg: "/3.png",
        ani: "fade-up-left",
    },
    {
        id: 4,
        title: "Culture Collective",
        desc: "City Immersion",
        svg: "/1.png",
        ani: "fade-up-right",
    },
    {
        id: 5,
        title: "Adrenalline Allstars",
        desc: "Outdoor Adventures",
        svg: "/2.png",
        ani: "fade-up",
    },
    {
        id: 6,
        title: "Solo Sisters",
        desc: "Trips for Solo Travellers",
        svg: "/3.png",
        ani: "fade-up-left",
    },
];

const IntroCards = () => {
    useEffect(()=>{
        Aos.init(
            {
                once: true
            }
        )
    }, [])
    return (
        <div className="intro--card">
            <h1>Explore by vive</h1>
            <div className="card--container">
                {cards.map((card)=>(
                    <div className="small--card" key={card.id} data-aos={card.ani} data-aos-duration="2000">
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default IntroCards;
