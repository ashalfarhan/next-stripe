import { Layout, Seo } from '../components'

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <div className="text-center p-4">
        <h1>About this site</h1>
        <p>Just an example to create an e-commerce site</p>
      </div>
    </Layout>
  )
}
