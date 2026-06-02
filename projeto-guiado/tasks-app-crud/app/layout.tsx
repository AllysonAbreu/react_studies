import type { Metadata } from "next";

import "./globals.css";
import Link from "next/dist/client/link";

const PAST_TITLE = "Tasks App";

export const metadata: Metadata = {
  title: {
    default: PAST_TITLE,
    template: `${PAST_TITLE} | %s`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR">
      <body className="">

        <header className="fixed top-0 right-0 left-0 py-2 border-b text-center shadow-xl">
          <Link className="font-bold" href="/">Tasks App</Link>
        </header>

        <main className="mt-24 mb-14 flex justify-center">
          {children}
        </main>

        <footer className="text-center">
          <p className="text-sm">&copy; 2026 Tasks App</p>
          <p className="text-xs">All rights reserved</p>
        </footer>

      </body>
    </html>
  );
}
