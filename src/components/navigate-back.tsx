"use client";

import { FaArrowLeft } from "react-icons/fa";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function NavigateBackButton() {
  const router = useRouter();
  return (
    <>
      <Button type="button" onClick={() => router.back()}>
        <FaArrowLeft />
      </Button>
    </>
  );
}
