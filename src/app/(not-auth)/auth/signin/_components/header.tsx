"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export function Header() {
  const router = useRouter();
  return (
    <>
      <header className="flex items-center justify-between">
        <Button size="sm" variant="ghost" onClick={() => router.back()}>
          <FaArrowLeft />
        </Button>
        <Link href={"/"}>
          <Badge className="cursor-pointer text-base font-extrabold tracking-tight">
            ATOM
          </Badge>
        </Link>
      </header>
    </>
  );
}
