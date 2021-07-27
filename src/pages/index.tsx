import { Hero, Layout, Seo } from "../components";

export default function Home() {
  return (
    <Layout>
      <Seo />
      <div className="mx-auto">
        <Hero />
      </div>
    </Layout>
  );
}
