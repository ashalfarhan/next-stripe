import Link from "next/link";
import { memo, useMemo } from "react";
import { Product } from "../../@types";
import { useCartAction, useCartState, useCurrency } from "../../helpers";
import NoSSR from "../Shared/NoSsr";

interface CardFeaturedProductProps {
  product: Product;
}

const CardFeaturedProduct = ({ product }: CardFeaturedProductProps) => {
  const { format } = useCurrency();
  const { allCart } = useCartState();
  const { addItemToCart } = useCartAction();
  const isAlreadyInCart = useMemo(
    () => allCart.some((val) => val.id === product.id),
    [allCart, product],
  );
  return (
    <div className="p-4 flex flex-col hover:shadow-2xl transition-shadow ease-in-out duration-300 rounded-xl">
      <img
        src={product.image}
        width={380}
        className="object-cover w-96 h-80"
        loading="lazy"
        height={320}
        alt={product.label}
      />
      <div className="flex justify-between py-2">
        <div>
          <h1 className="text-xl font-medium">{product.label}</h1>
          <p>{format(product.price)} USD</p>
        </div>
        <Link href={`/products/${product.id}`} passHref>
          <a className="hover:underline">Detail</a>
        </Link>
      </div>
      <NoSSR>
        <button
          onClick={() => addItemToCart(product.id)}
          className={`${
            isAlreadyInCart
              ? "bg-gray-600"
              : "bg-gray-900 hover:bg-gray-800 transition-colors"
          }  text-white px-4 py-2`}
        >
          {isAlreadyInCart ? "Add more in cart" : "Add to Cart"}
        </button>
      </NoSSR>
    </div>
  );
};

export default memo(CardFeaturedProduct);
