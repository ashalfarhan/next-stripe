import { CheckoutForm, Layout, Seo } from '../components'

export default function Checkout() {
  return (
    <Layout gutter>
      <Seo title="Checkout" />
      <div className="flex flex-col items-center pt-8">
        <h1 className="text-2xl font-bold">Checkout Summary</h1>
        <CheckoutForm />
      </div>
    </Layout>
  )
}
