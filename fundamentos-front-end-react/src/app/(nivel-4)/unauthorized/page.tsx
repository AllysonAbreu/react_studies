'use client'

import { useAuth } from '@/context/aula-4/AuthContext'
import Link from 'next/link'

export default function UnauthorizedPage() {

  const { user } = useAuth();

  return (
      <div className="grid gap-y-4 p-4 border border-white p-8 rounded">
        <h1 className="text-3xl font-bold">Acesso Negado</h1>
        { user ? 
          <div>
            <p>Acesso autorizado (Autorização NOK!)</p>
            <p className="text-red-500">Sua role é: {user?.role}</p>
          </div>
          :
          <p>Acesso não autenticado (Autenticação NOK!)</p>
        }
        
        <Link 
          href="/login" 
          className="border border-blue-500 p-2 rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-900 font-bold text-center">
          Voltar para Login
        </Link>
      </div>
  )
}