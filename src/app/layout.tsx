import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atom fit",
  description:
    "Say goodbye to boring workouts and hello to a fitter, happier you with AtomFit your ultimate fitness partner.",
  authors: [
    {
      name: "Crintea Sebastian",
      url: "",
    },
    {
      name: "Rusu Sebastian Matei",
      url: "",
    },
    {
      name: "Stanislav Casciuc",
      url: "",
    },
    {
      name: "Robu Gabriel",
      url: "",
    },
  ],
  keywords: ["fit", "atom", "fitness", "calories", "lifestyle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
