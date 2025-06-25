// src/app/api/stripe/webhook/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";
import clientPromise from "@/lib/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed.", err.message);
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userEmail = session.metadata.userEmail;
    const plan = session.metadata.plan;

    try {
      const client = await clientPromise;
      const db = client.db();
      await db.collection("users").updateOne(
        { email: userEmail },
        {
          $set: {
            subscription: plan,
            subscriptionId: session.subscription,
            subscribedAt: new Date(),
          },
        },
        { upsert: false }
      );
    } catch (error) {
      console.error("Failed to update user subscription:", error);
    }
  }

  return NextResponse.json({ received: true });
}
