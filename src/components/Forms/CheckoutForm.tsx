import { useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { useCartState, useCurrency } from "../../helpers";
import { $axios } from "../../libs";
import NoSSR from "../Shared/NoSsr";

const CheckoutForm = () => {
  const stripe = useStripe();
  const { totalAmount, allCart } = useCartState();
  const { format } = useCurrency();
  const [email, setEmail] = useState("");
  const handleBuy = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stripe) {
      const line_items = allCart.map(
        ({ quantity, price, label, description, image }) => ({
          quantity,
          price_data: {
            currency: "usd",
            /**
             * Amount should be included the small amount
             * if the product sold 9 dollars
             * then the payment request should be 9_00
             */
            unit_amount: price * 100,
            product_data: {
              description,
              name: label,
              images: [image],
            },
          },
        }),
      );
      try {
        const { data } = await $axios.post("/checkout/createSession", {
          line_items,
          customer_email: email,
        });
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
        if (error) {
          console.log("Something went wrong while redirecting you to checkout");
          return;
        }
      } catch (error) {
        console.log("Failed to charge: ", error.message);
      }
    }
  };
  return (
    <form
      onSubmit={handleBuy}
      className="flex flex-col max-w-xl w-full mx-auto gap-4 shadow-md p-8 rounded-lg space-y-2"
    >
      <div className="flex items-center flex-col">
        <p>Total amount to pay</p>
        <NoSSR>
          <p>{format(totalAmount)} USD</p>
        </NoSSR>
      </div>
      <input
        type="text"
        placeholder="example@mail.com"
        className="focus:outline-none border-2 p-2 border-black"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-black text-white text-xl px-4 py-2"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
