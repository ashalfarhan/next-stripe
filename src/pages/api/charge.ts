import { NextApiHandler } from "next";
import { $stripe } from "../../libs";

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
        res
          .status(400)
          .send({ message: "Payment creating failed", reason: error.message });
      }
    }
  }
};

export default handler;
