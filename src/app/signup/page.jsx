"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import "@/styles/auth.scss";
import Image from "next/image";

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        if (!res.ok) {
            setError(data.error);
        } else {
            setSuccess("Registration successful! Redirecting...");
            setTimeout(() => router.push("/login"), 2000);
        }
    };

    return (
        <div className="login--page">
            <div className="login--card">
                <h2>Register for TripClub</h2>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                    }}
                >
                    <button
                        onClick={() => signIn("google")}
                        className="google--btn"
                    >
                        <Image
                            src="/google-icon.svg"
                            width={25}
                            height={25}
                            alt="Google btn"
                        />
                        Sign in with Google
                    </button>

                    <div className="separator">or</div>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        minLength={6}
                        value={form.password}
                        onChange={handleChange}
                    />

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}

                    <button type="submit">Register</button>

                    <div className="separator">or</div>

                    <div className="login--footer">
                        <p>
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
