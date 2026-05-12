import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-x-2">
      <Link className="underline" href="/nivel-0">
        Aula 0 - Fundamentos do React
      </Link>
      <Link className="underline" href="/nivel-1">
        Aula 1 - Componentes e Props
      </Link>
      <Link className="underline" href="/nivel-2">
        Aula 2 - Context, Hooks, Estados e Efeitos
      </Link>
      <Link className="underline" href="/nivel-3/server-side">
        Aula 3 - Server Side Rendering (SSR)
      </Link>
      <Link className="underline" href="/nivel-3/client-side">
        Aula 3 - Client Side Rendering (CSR)
      </Link>
      <Link className="underline" href="/nivel-3/community-libraries">
        Aula 3 - Community Libraries
      </Link>
      <Link className="underline" href="/nivel-4/login">
        Aula 4 - Autenticação
      </Link>
    </div>
  );
}
