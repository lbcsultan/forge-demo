import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Forge' : 'Forge'}</title>
        <meta name="description" content="node-forge test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-slate-200">
          <p> Copyright © 2022 Prof. Byoungcheon Lee, Joongbu Univ. </p>
        </footer>
      </div>
    </>
  )
}
