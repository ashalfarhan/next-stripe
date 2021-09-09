import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { Layout, Seo } from '../../components'
import { useCartAction } from '../../helpers'

export default function PaymentSuccessPage() {
  const router = useRouter()
  const { clearCart } = useCartAction()
  useEffect(() => {
    if (router.query.session_id) {
      clearCart()
    }
  }, [clearCart, router.query])
  return (
    <Layout gutter>
      <Seo title="Payment success" />
      <div
        className="flex items-center flex-col relative max-w-sm mx-auto mt-12"
        style={{ minHeight: 520 }}
      >
        <div className="z-10 h-full">
          <h1 className="mt-8 text-xl relative text-white text-center">
            Congratulations your payment is success!
          </h1>
          <p className="text-white text-center text-sm px-4">
            We will processing your order ASAP, and will send you a confirmation
            email shortyly.
            <br /> Thanks for shopping with us 😊
          </p>
          <div className="pt-12 flex items-center justify-between px-4">
            <Link href="/products" passHref>
              <a className="bg-gray-100 px-4 py-2">Continue Shopping</a>
            </Link>
            <Link href="/" passHref>
              <a className="bg-gray-100 px-4 py-2">Back to Home</a>
            </Link>
          </div>
        </div>
        <img
          className="z-0 opacity-90 absolute inset-0 object-cover w-full"
          src={
            'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
          }
          loading="lazy"
          alt="CHams Successful Payment"
        />
      </div>
    </Layout>
  )
}
