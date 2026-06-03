import { FormLogin } from "@/components/forms/FormLogin";
import { COOKIE } from "@/constants/constants";
import { checkInvalidEmail, checkInvalidPassword } from "@/lib/utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const PAGE_TITLE = "Login";

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Login() {
  const handleLogin = async( _: string, formData: FormData) => {
      'use server';
  
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";
  
  
      if(checkInvalidEmail(email)) {
        return "Invalid email format";
      }
  
      if(checkInvalidPassword(password)) {
          return "Password must be at least 6 characters long";
      }
  
      try {
          const body = {
              email,
              password
          };
  
          const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          });
  
          const {token, message} = await res.json();
  
          if(!token) {
            return message;
          } else {
            const cookieStore = await cookies();
            cookieStore.set("token", token, COOKIE);
          }
      } catch (error) {
          console.error("Error during login:", error);
          return "An error occurred during login";
      }
  
      redirect("/tasks");
    }

  return (
    <>
      <h1 className="text-4xl text-center font-bold">{PAGE_TITLE}</h1>

      <FormLogin action={handleLogin} />

      <Link className="text-center underline" href="/register">Não tenho cadastro</Link>
    </>
  );
}
