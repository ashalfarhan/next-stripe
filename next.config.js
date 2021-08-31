const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  assetPrefix: isProd ? "https://next-stripe-xi.vercel.app" : "",
};
