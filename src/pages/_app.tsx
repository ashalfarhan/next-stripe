import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Provider } from "react-redux";
import { store } from "../store";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY!);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </Provider>
  );
}

export default MyApp;
