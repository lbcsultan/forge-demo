import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { status, data: session } = useSession()

  const logoutHandler = () => {
    signOut({ callbackUrl: '/login' })
  }

  return (
    <nav className="flex flex-wrap h-12 items-center px-4 justify-between shadow-md bg-blue-300 font-bold">
      <div className="flex">
        <Link href="/">
          <a className="text-lg">Forge</a>
        </Link>
      </div>
      <div className="flex">
        <div className="flex flex-wrap flex-auto">
          <ul>
            <Link href="/">
              <a className="p-2">Home</a>
            </Link>
            <Link href="/hash">
              <a className="p-2">Hash</a>
            </Link>
            <Link href="/hmac">
              <a className="p-2">HMAC</a>
            </Link>
            <Link href="/pbkdf2">
              <a className="p-2">PBKDF2</a>
            </Link>
            <Link href="/passwordHash">
              <a className="p-2">PasswordHash</a>
            </Link>
            <Link href="/aes">
              <a className="p-2">AES</a>
            </Link>
            <Link href="/rsaenc">
              <a className="p-2">RSAEnc</a>
            </Link>
            <Link href="/rsasig">
              <a className="p-2">RSASig</a>
            </Link>
            <Link href="/cert">
              <a className="p-2">Certificate</a>
            </Link>
            <Link href="/jwt">
              <a className="p-2">JWT</a>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-wrap flex-auto">
          {session?.user ? (
            <div className="flex flex-wrap">
              <ul className="flex">
                <li>
                  <a className="p-2 text-red-800">{session.user.name}</a>
                </li>
                <li>
                  <Link href="/dashboard">
                    <a className="p-2 text-red-800">Dashboard</a>
                  </Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>
                    <a className="p-2 text-red-800">Logout</a>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex">
              <ul className="flex">
                <li>
                  <Link href="/login">
                    <a className="p-2  text-red-800">Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a className="p-2  text-red-800">Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
