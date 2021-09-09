import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative w-full" style={{ height: 720 }}>
      <div className="text-white z-10 relative inset-x-auto flex justify-center h-full items-center bg-opacity-5 flex-col gap-y-5">
        <h1 className="text-4xl">The best hams that you ever taste</h1>
        <Link href="/products" passHref>
          <a className="px-4 py-2 bg-gray-900 shadow-sm hover:translate-y-1 transform transition-transform duration-300">
            Shop Now
          </a>
        </Link>
      </div>
      <Image
        className="z-0 mx-auto border-4 opacity-90"
        src={
          'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
        layout="fill"
        objectFit="cover"
        alt="CHams"
      />
    </div>
  )
}
