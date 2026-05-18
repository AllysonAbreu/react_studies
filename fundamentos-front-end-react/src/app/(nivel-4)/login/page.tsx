// app/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/aula-4/AuthContext'
import { ButtonCustom } from '@/components/aula-4/ButtonCustom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err) {
      alert('Login falhou')
      console.error(err)
    }
  }

  return (
      <div className="grid gap-y-4 p-4 border border-white p-8 rounded">
        <h1 className="text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="grid gap-y-2 w-100">
          <input className="p-2 border border-white rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input className="p-2 border border-white rounded" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" />
          <ButtonCustom type="submit">Entrar</ButtonCustom>
        </form>
      </div>
  )
}