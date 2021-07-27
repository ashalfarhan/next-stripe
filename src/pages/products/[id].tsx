import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { Product } from "../../@types";
import { Seo, Layout, ComponentLoading } from "../../components";
import { dummyProducts } from "../../mocks";

const CardProductDetail = dynamic(
  () => import("../../components/Cards/CardProductDetail"),
  { ssr: false, loading: ComponentLoading },
);

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <Layout gutter>
      <Seo
        title={product.label}
        description={product.description}
        image={product.image}
      />
      <CardProductDetail product={product} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const product = dummyProducts.find((item) => item.id === params!.id);
  if (product) {
    return {
      props: {
        product,
      },
    };
  }
  return {
    notFound: true,
  };
};
