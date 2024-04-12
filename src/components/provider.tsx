"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
