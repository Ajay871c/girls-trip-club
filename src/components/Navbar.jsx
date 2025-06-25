"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, status } = useSession();

    const isLoggedIn = status === "authenticated";

    return (
        <header>
            <nav>
                <a className="logo">Girls Trip Club</a>

                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <ul className={`nav--links ${isOpen ? "open" : ""}`}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Trip</a>
                    </li>
                    <li>
                        <a href="/subscription">Membership</a>
                    </li>

                    {isLoggedIn ? (
                        <>
                            <li>
                                <a href="/dashboard" className="auth--btn">
                                    Dashboard
                                </a>
                            </li>
                        </>
                    ) : (
                        <li>
                            <a href="/login" className="auth--btn">
                                Login
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
