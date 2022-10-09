import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import CryptoPic from '../public/crypto.jpg'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="mx-auto max-w-screen-md">
        <h1 className="text-3xl mb-2">Javascript cryptography demo </h1>
        <br />

        <Link href="https://github.com/digitalbazaar/forge">
          <h3 className="text-xl mb-2 bg-slate-100">
            <span className="font-bold text-blue-600/100 px-2 py-1 rounded-lg bg-amber-200">
              Forge
            </span>{' '}
            is a native implementation of TLS (and various other cryptographic
            tools) in JavaScript. The Forge software is a fully native
            implementation of the TLS protocol in JavaScript, a set of
            cryptography utilities, and a set of tools for developing Web Apps
            that utilize many network resources.
          </h3>
        </Link>
        <br />

        <Link href="https://github.com/digitalbazaar/forge">
          <h3 className="text-xl mb-2 bg-slate-100">
            <span className="font-bold text-blue-600/100 px-2 py-1 rounded-lg bg-amber-200">
              bcryptjs
            </span>{' '}
            is an implementation of password hash salting.
          </h3>
        </Link>
        <br />

        <Link href="https://github.com/digitalbazaar/forge">
          <h3 className="text-xl mb-2 bg-slate-100">
            <span className="font-bold text-blue-600/100 px-2 py-1 rounded-lg bg-amber-200">
              jsonwebtoken
            </span>{' '}
            is an implementation of JSON Web Tokens. JSON Web Tokens are an
            open, industry standard RFC 7519 method for representing claims
            securely between two parties.
          </h3>
        </Link>
        <br />

        <div className="mx-20 my-5 ">
          <Image
            src={CryptoPic}
            alt="crypto and encryption"
            layout="responsive"
          />
        </div>
      </div>
    </Layout>
  )
}
