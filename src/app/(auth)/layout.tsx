import { Navigation } from "@/components/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex">
        <Navigation />
        {children}
      </section>
    </>
  );
}
