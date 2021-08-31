import { CartItem } from "../../@types";
import { useCartAction, useCurrency } from "../../helpers";
import { memo, useMemo } from "react";
import Link from "next/link";

interface CardItemCartProps {
  product: CartItem;
}

const CardItemCart = ({ product }: CardItemCartProps) => {
  const { format } = useCurrency();
  const { incrementCartItem, decrementCartItem, removeItemFromCart } =
    useCartAction();
  const totalPrice = useMemo(
    () => format(product.price * product.quantity),
    [product, format],
  );
  return (
    <div className="border flex space-x-4 p-4">
      <Link href={`/products/${product.id}`} passHref>
        <a className="flex space-x-4">
          <img
            src={product.image}
            width={120}
            height={120}
            className="object-cover w-32 h-32"
            // objectFit="cover"
            alt={product.label}
          />
          <div className="flex flex-col">
            <h1>{product.label}</h1>
            <p>Price: {format(product.price)} USD</p>
            <p className="mt-auto">Total Price: {totalPrice} USD</p>
          </div>
        </a>
      </Link>
      <div className="flex flex-col space-y-2">
        <p>Qty</p>
        <div className="flex space-x-4 items-center">
          <button
            className={`px-3 py-px hover:bg-gray-500 bg-gray-600 text-white ${
              product.quantity === 1 ? "cursor-not-allowed" : ""
            }`}
            onClick={() => decrementCartItem(product.id)}
            disabled={product.quantity === 1}
          >
            -
          </button>
          <p>{product.quantity}</p>
          <button
            className="px-3 py-px hover:bg-gray-500 bg-gray-600 text-white"
            onClick={() => incrementCartItem(product.id)}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 px-4 py-1 text-white"
          onClick={() => removeItemFromCart(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default memo(CardItemCart);
