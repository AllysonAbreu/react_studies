// app/api/auth/route.ts
import { NextResponse } from 'next/server'
import { User } from '@/context/aula-4/AuthContext'
import { SignJWT } from 'jose'

const alg = process.env.JWT_ALGORITHM!
const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

const fakeUser = ['admin@example.com', 'user@example.com']

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (fakeUser.includes(email) && password === '123456') {
    const user: User = { email, role: email.split('@')[0] }

    const token = await new SignJWT(user)
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(secret)

    const response = NextResponse.json({ user })

    response.cookies.set('token', token, {
      secure: true,
      path: '/',
      maxAge: 60 * 60, // 1 hora
      // maxAge: 10 // 10 segundos para teste de expiração
    })

    return response
  }

  return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
}