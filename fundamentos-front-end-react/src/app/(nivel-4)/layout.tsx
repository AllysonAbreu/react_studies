import { AuthProvider } from "@/context/aula-4/AuthContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="min-h-screen p-4 flex items-center justify-center">
    <AuthProvider> 
      {children}
    </AuthProvider>
  </div> 
  );
}
