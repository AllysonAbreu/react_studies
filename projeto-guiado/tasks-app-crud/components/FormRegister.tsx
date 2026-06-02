'use client'

import { FC, useActionState, useState } from "react";

import { FormInputText } from "./FormInputText";
import { FormButton } from "./FormButton";
import { FormError } from "./FormError";

type FormRegisterProps = {
  action: ( _: string, formData: FormData) => Promise<string>;
}

export const FormRegister: FC<FormRegisterProps> = ({ action }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, formAction, isPending] = useActionState(action, "");

  return (
    <>
      {!isPending && <FormError message={errorMessage} />}

      <form className="grid gap-y-6" action={formAction}>
        <FormInputText
          label="Usuário"
          id="username"
          value={username}
          setValue={setUsername}
        />

        <FormInputText
          label="Email"
          id="email"
          value={email}
          setValue={setEmail}
        />

        <fieldset className="grid">
          <label className="text-[#7b7c7b]" htmlFor="password">
            Senha
          </label>

          <div className="relative flex items-center">
            <input
              className="w-full pl-2 pr-10 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="cursor-pointer absolute right-2"
              type="button"
              onClick={() => setShowPassword((show) => !show)}
            >
              <img
                className="w-5 h-5"
                src="./icons/eye-svgrepo-com.svg"
                alt="Toggle password visibility"
              />
            </button>
          </div>
        </fieldset>

       <FormButton>
          Cadastrar
        </FormButton>
      </form>
    </>
  );
}
