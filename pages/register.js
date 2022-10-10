import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { toast } from 'react-toastify'
import { getError } from '../utils/error'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function RegisterScreen() {
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const registerHandler = async () => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      })

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

  return (
    <Layout title="Register">
      <form className="mx-auto max-w-screen-lg w-80">
        <h1 className="text-3xl mb-4 font-bold">Register (사용자 등록) </h1>

        <div className="mb-4">
          <label htmlFor="name" className="mb-3 font-bold">
            Name
          </label>
          <input
            type="text"
            name="name "
            id="name"
            className="w-full bg-gray-50"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
          <label htmlFor="confirmPassword" className="mb-3 font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full bg-gray-50"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <button
            className="primary-button w-full"
            type="button"
            onClick={registerHandler}
          >
            Register
          </button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
        </div>
      </form>
    </Layout>
  )
}
