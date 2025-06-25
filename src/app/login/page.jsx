"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import "@/styles/auth.scss";
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);
    const router = useRouter();

    const handleCredentialsLogin = async (e) => {
        e.preventDefault();
        setErr(null);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res.error) {
            setErr(res.error);
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="login--page">
            <div className="login--card">
                <h2>Login to TripClub</h2>

                <form
                    onSubmit={handleCredentialsLogin}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                    }}
                >
                    <button
                        onClick={() => signIn("google",{ callbackUrl: "/dashboard" })}
                        className="google--btn"
                    >
                        <Image src="/google-icon.svg" width={25} height={25} alt="Google btn" />
                        Sign in with Google
                    </button>

                    <div className="separator">or</div>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className="password--field"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {err && <p style={{ color: "red" }}>{err}</p>}

                    <button type="submit">Login with Email</button>

                    <div className="separator">or</div>

                    <div className="login--footer">
                        <p>Dont have an account? <a href="/signup">Signup</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
