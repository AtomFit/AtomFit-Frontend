import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "./_components/signin-form";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/svg/Dumbbell exercise-cuate.svg";

export default function SignInPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <section className="w-full md:w-auto px-4">
          <Card className="md:min-w-[500px] mb-2">
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
          <div className="flex justify-between items-center">
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
          className="hidden lg:block lg:w-[45%] pointer-events-none"
          priority
        />
      </main>
    </>
  );
}
