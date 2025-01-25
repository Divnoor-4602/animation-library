import Navbar from "@/components/navbar/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      {children}
    </main>
  );
}
