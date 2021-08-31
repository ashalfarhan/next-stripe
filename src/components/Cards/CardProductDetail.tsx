import { Product } from "../../@types";
import { memo, useMemo } from "react";
import { useCartState, useCurrency, useCartAction } from "../../helpers";
import NoSSR from "../Shared/NoSsr";

interface CardProductDetailProps {
  product: Product;
}

const CardProductDetail = ({ product }: CardProductDetailProps) => {
  const { format } = useCurrency();
  const { allCart } = useCartState();
  const { addItemToCart } = useCartAction();
  const isAlreadyInCart = useMemo(
    () => allCart.some((val) => val.id === product.id),
    [allCart, product],
  );
  return (
    <div className="flex pt-24 space-y-4 md:space-x-8 md:flex-row flex-col justify-center md:items-center">
      <img
        src={product.image}
        width={380}
        height={380}
        className="object-cover w-96 h-96"
        alt={product.label}
      />
      <div className="md:w-2/5 w-full flex flex-col space-y-2 items-stretch">
        <h1 className="text-xl">{product.label}</h1>
        <p>{format(product.price)} USD</p>
        <NoSSR>
          <button
            className={`py-2 border-2 border-black`}
            onClick={() => addItemToCart(product.id)}
          >
            {isAlreadyInCart ? "Add more to cart" : "Add to cart"}
          </button>
        </NoSSR>
        <button className="py-3 bg-black text-white">
          Proceed To checkout
        </button>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default memo(CardProductDetail);
