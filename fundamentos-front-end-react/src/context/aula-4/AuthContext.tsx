// context/AuthContext.tsx
'use client'

import { decodeJwt } from 'jose'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { createContext, useState, useContext, useEffect } from 'react'

export type User = {
  email: string
  role: 'user' | 'admin'
}

type AuthContextProps = {
  token: string | null
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const route = useRouter()

  useEffect(() => {
    const savedToken = Cookies.get('token')

    if (savedToken) {
      
      const {email, role}: User = decodeJwt(savedToken) as User;
      console.log('Token encontrado:', savedToken)
      console.log('Usuário do token:', {email, role})

      setToken(savedToken)
      setUser({email, role})
    }
  }, [])

  // context/AuthContext.tsx
  const login = async (email: string, password: string) => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await res.json()

    if (res.ok) {
      setToken(data.token)
      setUser(data.user)
    } else {
      throw new Error(data.message)
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
        
    Cookies.remove('token')
    route.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)