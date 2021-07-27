import { dummyProducts } from "../../mocks";
import { ComponentLoading, Layout, Seo } from "../../components";
import dynamic from "next/dynamic";

const CardFeaturedProduct = dynamic(
  () => import("../../components/Cards/CardFeaturedProduct"),
  { ssr: false, loading: ComponentLoading },
);

export default function ProductsPage() {
  return (
    <Layout gutter>
      <Seo title="Products" />
      <div className=" max-w-screen-lg mx-auto py-8">
        <h1 className="text-2xl py-4">Featured Products</h1>
        <div className="flex flex-wrap gap-4">
          {dummyProducts.map((product) => (
            <CardFeaturedProduct
              product={product}
              key={`Product_${product.id}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
