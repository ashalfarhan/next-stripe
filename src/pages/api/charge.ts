import { NextApiHandler } from "next";
import Stripe from "stripe";

const $stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    if (req.body) {
      const { id, amount } = req.body;
      try {
        const payment = await $stripe.paymentIntents.create({
          amount,
          currency: "USD",
          description: "A food",
          payment_method: id,
          confirm: true,
        });
        res.status(200).send({ message: "success", payment });
      } catch (error) {
        res.status(400).send({ message: "Payment creating failed" });
      }
    }
  }
};

export default handler;
