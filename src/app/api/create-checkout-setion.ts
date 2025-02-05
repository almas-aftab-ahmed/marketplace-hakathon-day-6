import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe with your secret key and updated API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia", // Use the updated API version
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { total } = req.body; // Get the total amount from frontend

      // Create a new Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd", // Currency code (adjust as needed)
              product_data: {
                name: "Car Rental",  // Product name
              },
              unit_amount: total * 100, // Amount in cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_URL}/success`, // Redirect URL on success
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`, // Redirect URL on cancel
      });

      // Send session ID to frontend
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
