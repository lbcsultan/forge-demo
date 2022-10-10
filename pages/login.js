import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { toast } from 'react-toastify'
import { getError } from '../utils/error'
import Router, { useRouter } from 'next/router'

export default function LoginScreen() {
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async () => {
    const credential = {
      email,
      password,
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error(getError(err))
    }
  }

  const githubLoginHandler = async () => {
    try {
      const result = await signIn('github', {
        redirect: false,
      })
    } catch (err) {
      toast.error(getError(err))
    }
  }

  const googleLoginHandler = async () => {
    try {
      const result = await signIn('google', {
        redirect: false,
      })
    } catch (err) {
      toast.error(getError(err))
    }
  }

  const kakaoLoginHandler = async () => {
    try {
      const result = await signIn('kakao', {
        redirect: false,
      })
    } catch (err) {
      toast.error(getError(err))
    }
  }

  return (
    <Layout title="Login">
      <form className="mx-auto max-w-screen-md w-80">
        <h1 className="text-3xl mb-4 font-bold">Login (로그인) </h1>

        <div className="mb-4">
          <label htmlFor="email" className="mb-3 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full bg-gray-50"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="mb-3 font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <button
            className="primary-button w-full"
            type="button"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>

        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
        </div>

        <div className="mb-4">
          <button
            className="primary-button w-full"
            type="button"
            onClick={githubLoginHandler}
          >
            Github Login
          </button>
        </div>

        <div className="mb-4">
          <button
            className="primary-button w-full"
            type="button"
            onClick={googleLoginHandler}
          >
            Google Login
          </button>
        </div>

        <div className="mb-4">
          <button
            className="primary-button w-full"
            type="button"
            onClick={kakaoLoginHandler}
          >
            Kakao Login
          </button>
        </div>
      </form>
    </Layout>
  )
}
