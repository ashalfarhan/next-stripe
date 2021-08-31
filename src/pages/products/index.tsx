import { dummyProducts } from "../../mocks";
import { CardFeaturedProduct, Layout, Seo } from "../../components";
import { GetServerSideProps } from "next";
import { Product } from "../../@types";

interface AllProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: AllProductsPageProps) {
  return (
    <Layout gutter>
      <Seo title="Products" />
      <div className=" max-w-screen-lg mx-auto py-8">
        <h1 className="text-2xl py-4">Featured Products</h1>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { products: dummyProducts },
  };
};
