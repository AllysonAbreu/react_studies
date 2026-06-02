import { FormRegister } from "@/components/FormRegister";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const PAGE_TITLE = "Cadastro";

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Cadastro() {

  const handleRegister = async( _: string, formData: FormData) => {
    'use server';

    const username = formData.get("username")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if(!username || !email || !password) {
        return "All fields are required";
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return "Invalid email format";
    }

    if(password.length < 6) {
        return "Password must be at least 6 characters long";
    }

    try {
        const body = {
            username,
            email,
            password
        };

        const res = await fetch("http://localhost:4000/auth/register", {
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
          cookieStore.set("token", token, {
            secure: true,
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 // 24 horas
          });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return "An error occurred during registration";
    }

    redirect("/tasks");
  }

  return (
    <div className="grid gap-y-4 px-8 min-w-100 py-12 bg-[#fdfcfc] rounded-3xl shadow-xl">
      <h1 className="text-4xl text-center font-bold">{PAGE_TITLE}</h1>
      
      <FormRegister action={handleRegister}/>
      
      <Link className="text-center underline" href="/login">Já tenho cadastro</Link>
    </div>
  );
}
