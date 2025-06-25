"use client"
import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Hero = () => {
    useEffect(()=>{
        Aos.init(
            {
                duration: 2000,
                once: true
            }
        )
    }, [])
    return (
        <div className="card" data-aos="zoom-in-up">
            <h1>
                <span>No</span> Boyfriends. <span>No</span> Stress.
            </h1>
            <p>Just Girls, Getaways & Good Vibes.</p>
            <a href="/" className="btn">Join The Club</a>
        </div>
    );
};

export default Hero;
