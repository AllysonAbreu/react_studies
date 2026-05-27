'use client'

import { useState } from "react";

export default function FormRegister() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
      <form className="grid gap-y-6">

        <fieldset className="grid">

          <label className="text-[#7b7c7b]" htmlFor="username">
            Usuário
          </label>

          <input 
            className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outiline-none shadow-md rounded-lg" 
            name="username" 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </fieldset>

        <fieldset className="grid">

          <label className="text-[#7b7c7b]" htmlFor="email">
            Email
          </label>

          <input 
            className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outiline-none shadow-md rounded-lg" 
            name="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        
        <fieldset className="grid">

          <label className="text-[#7b7c7b]" htmlFor="password">
            Senha
          </label>

          <div className="relative flex items-center">
            <input 
              className="w-full pl-2 pr-10 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outiline-none shadow-md rounded-lg" 
              name="password" 
              id="password"
              type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button 
            className="cursor-pointer absolute right-2"
            type="button" 
            onClick={() => setShowPassword((show) => !show)}>
            <img className="w-5 h-5" src="/icons/eye-svgrepo-com.svg" alt="Toggle password visibility" />
          </button>
        </div>
        </fieldset>

        <button className="py-2 bg-[#141516] text-white shadow-md rounded-lg cursor-pointer hover:shadow-none">
          Cadastrar
        </button>
      </form>
  );
}
