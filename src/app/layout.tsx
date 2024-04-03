import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
