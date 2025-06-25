"use client"
import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {
    useEffect(()=>{
        Aos.init(
            {
                duration: 2000,
                once: true
            }
        )
    }, [])
    return (
        <div className="card--banner" data-aos="zoom-in">
            <h1>
                Become a Greek Getaway Ambassador
            </h1>
            <p>Help us spread the word about our campus trips! If you're a college girl with a love for travel and sisterhood, become an ambassador and earn free trips, rewards, and lifetime memories.</p>
            <a href="/" className="btn">Apply Now</a>
        </div>
    );
};

export default Banner;
