import Link from "next/link";
import { CardItemCart, Layout, Seo } from "../../components";
import NoSSR from "../../components/Shared/NoSsr";
import { useCartState } from "../../helpers";

export default function CartPage() {
  const { allCart } = useCartState();
  return (
    <Layout>
      <Seo title="Cart" />
      <div className="p-4">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-2xl">Your cart</h1>
          <NoSSR>
            {allCart.length > 0 && (
              <Link href="/checkout" passHref>
                <a className="bg-black text-white px-4 py-2">Checkout</a>
              </Link>
            )}
          </NoSSR>
        </div>
        <NoSSR>
          {allCart.length > 0 ? (
            <div>
              {allCart.map((product) => (
                <CardItemCart product={product} key={`Cart_${product.id}`} />
              ))}
            </div>
          ) : (
            <div>
              <h1>Your cart is empty</h1>
            </div>
          )}
        </NoSSR>
      </div>
    </Layout>
  );
}
