import Image from "next/image";
import React from "react";

const testimonialCards = [
    {
        id: 1,
        quote: `Collaborating with DIVADSGN was an absolute delight!
Their team's boundless creativity and meticulousness went above and beyond our wildest expectations.`,
        image: "/profile.jpg",
        name: "Jason Dom",
        role: "Startup Founder",
        stars: 5,
    },
    {
        id: 2,
        quote: `Absolutely mind-blowing skills and absolute professionalism!
They absolutely skyrocketed our project with their groundbreaking ideas and impeccable implementation.`,
        image: "/profile.jpg",
        name: "Michella Carter",
        role: "Startup Founder",
        stars: 5,
    },
    {
        id: 3,
        quote: `Kudos to the design agency for their outstanding work!
Their dedication to excellence and innovation was evident from the very first brainstorming session to the final masterpiece.`,
        image: "/profile.jpg",
        name: "Rob Jackson",
        role: "Entrepreneurs",
        stars: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonial--container">
            <h2 className="title">What clients say about us</h2>
            <div className="testimonial--cards">
                {testimonialCards.map((card) => (
                    <div
                        className="small--card--3"
                        key={card.id}
                    >
                        <p className="quote">{card.quote}</p>
                        <div className="profile">
                            <Image
                                src={card.image}
                                alt={card.name}
                                width={50}
                                height={50}
                                className="avatar"
                            />
                            <div>
                                <strong className="name">
                                    {card.name}
                                </strong>
                                <p className="role">{card.role}</p>
                            </div>
                        </div>
                        <div className="stars">
                            {"⭐".repeat(card.stars)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
