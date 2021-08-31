import { NextApiHandler } from "next";
import { withCors } from "../../../helpers/api";
import Stripe from "stripe";

const $stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { line_items, customer_email } = req.body;
    if (line_items && customer_email) {
      try {
        await withCors(req, res);
        const session = await $stripe.checkout.sessions.create({
          line_items,
          customer_email,
          payment_method_types: ["card"],
          mode: "payment",
          cancel_url: `${
            req.headers.origin || "http://localhost:3040"
          }/payment/canceled`,
          success_url: `${
            req.headers.origin || "http://localhost:3040"
          }/payment/success?session_id={CHECKOUT_SESSION_ID}`,
          shipping_address_collection: { allowed_countries: ["ID", "MY"] },
        });
        return res.status(201).send({
          sessionId: session.id,
        });
      } catch (error) {
        return res.status(400).send({
          message: "Failed to create checkout session",
          reason: error.message,
        });
      }
    }
    return res.status(401).send({
      message: "Please include line_items and customer_email",
    });
  }
  return res.status(400).send({
    message: "Use POST Method",
  });
};
export default handler;
