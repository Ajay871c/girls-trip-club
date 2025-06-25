"use client";

import React from "react";
import "@/styles/subs.scss";

const plans = [
  {
    title: "Standard",
    price: "₹1,000",
    priceId: "price_1RbxHr2MfdrjGdokmKoxIJou",
    period: "/mo",
    description: "Experience the excellence of our services with a handful of small projects.",
    features: [
      "One request at a time",
      "Two weeks design sprint",
      "Unlimited requests & revisions",
      "Up to 1 meeting per week",
      "Dev ready Figma files",
      "Unlimited Stock Photos",
    ],
    button: "Get Started",
  },
  {
    title: "Premium",
    price: "$2,999",
    priceId: "price_1RbxJK2MfdrjGdokbj6iMMQc",
    period: "/mo",
    description: "Ideal for startups seeking continuous design assistance.",
    features: [
      "One request at a time",
      "3 - 5 business days delivery",
      "Unlimited requests & revisions",
      "Up to 1 meeting per week",
      "Dev ready Figma files",
      "Unlimited Stock Photos",
    ],
    button: "Subscribe Now",
    featured: true,
  },
  {
    title: "Premium +",
    price: "$3,499",
    priceId: "price_1RbxJt2MfdrjGdok6HLpNtbW",
    period: "/mo",
    description: "Perfect for agencies delivering high-end services to clients.",
    features: [
      "Two requests at a time",
      "3 - 5 business days delivery",
      "Unlimited requests & revisions",
      "Flexible weekly meetings",
      "Dev ready Figma files",
      "Unlimited Stock Photos",
    ],
    button: "Join Elite",
  },
];

const SubscriptionPage = () => {
  const handleSubscribe = async (priceId, plan) => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId, plan }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Failed to redirect to Stripe. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="fearuted--container">
        <h1 className="plan--title">Choose Your Plan</h1>

        <div className="featured--cards subscription--cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`small--card--2 subscription--card ${
                plan.featured ? "highlight" : ""
              }`}
            >
              <h2>{plan.title}</h2>
              <p className="plan--price">
                {plan.price} <small>{plan.period}</small>
              </p>
              <p className="plan--desc">{plan.description}</p>

              <ul className="plan--features">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className="btn"
                onClick={() => handleSubscribe(plan.priceId, plan.title)}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
