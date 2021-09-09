import Link from 'next/link'
import { Layout, Seo } from '../../components'

export default function Canceled() {
  return (
    <Layout>
      <Seo title="Payment Failed" />
      <div className="pt-12 text-center">
        <h1>Payment canceled 😢</h1>
        <p>
          Maybe you wan&apos;t to look for another{' '}
          <Link href="/products" passHref>
            <a className="hover:underline">products</a>
          </Link>
          ?
        </p>
      </div>
    </Layout>
  )
}
