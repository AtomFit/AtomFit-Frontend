import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/svg/Dumbbell exercise-cuate.svg";
import { SignInForm } from "./_components/signin-form";

export default function SignInPage() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <section className="w-full px-4 md:w-auto">
          <Card className="mb-2 md:min-w-[500px]">
            <CardHeader className="text-2xl">
              <CardTitle className="flex items-center gap-2">
                <FaSignInAlt /> Sign In
              </CardTitle>
              <CardDescription>Stay connected to the community</CardDescription>
            </CardHeader>
            <CardContent>
              <SignInForm />
            </CardContent>
          </Card>
          <div className="flex items-center justify-between">
            <span>Don&apos;t have an account ?</span>
            <Button variant="outline" asChild>
              <Link href={"/auth/signup"}>
                <FaSignInAlt className="mr-2" /> Sign Up
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
