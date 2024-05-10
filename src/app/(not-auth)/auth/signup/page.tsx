import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaSignInAlt } from "react-icons/fa";
import img from "@/assets/svg/Fitness tracker-pana.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignUpForm } from "./_components/signup-form";

export default function SignUpPage() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center gap-2 p-2">
        <section>
          <Card className="mb-2 overflow-hidden md:min-w-[500px]">
            <CardHeader className="text-2xl">
              <CardTitle className="flex items-center gap-2">
                <FaSignInAlt /> Sign Up
              </CardTitle>
              <CardDescription>Stay connected to the community</CardDescription>
            </CardHeader>
            <CardContent className="min-w-[350px]">
              <SignUpForm />
            </CardContent>
          </Card>
          <div className="flex justify-between">
            <span>Already a member ?</span>
            <Button variant="outline" asChild>
              <Link href={"/auth/signin"}>
                <FaSignInAlt className="mr-2" /> Sign In
              </Link>
            </Button>
          </div>
        </section>
        <Image
          src={img}
          alt="Image"
          className="pointer-events-none hidden lg:block lg:w-[45%]"
          priority
        />
      </main>
    </>
  );
}
