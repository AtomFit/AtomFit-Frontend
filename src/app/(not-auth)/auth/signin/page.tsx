import { SignInForm } from "./_components/signin-form";
import { Header } from "./_components/header";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import crown from "@/../public/assets/img/crown.png";
import signinImg from "@/../public/assets/img/signin1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <main className="min-h-screen items-center justify-center md:flex">
        <section className="container fixed py-2 md:hidden">
          <Header />
        </section>
        <section className="flex h-screen flex-1 items-center justify-center">
          <div className="space-y-2 lg:min-w-[450px]">
            <SignInForm />
            <div className="flex items-center justify-between text-base">
              <p>Don&apos;t have an account? </p>
              <Button size="sm" variant="outline" className="text-base" asChild>
                <Link href={"/auth/signup"}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="hidden h-screen flex-1 p-2 md:block">
          <div className="flex h-full flex-col justify-stretch overflow-hidden rounded-lg bg-popover px-2 py-1">
            <Header />
            <div className="mt-4 h-full items-center 2xl:flex">
              <div className="space-y-2 text-center">
                <Badge
                  variant="secondary"
                  className="mr-1 cursor-default text-xl font-extrabold tracking-tight lg:text-3xl"
                >
                  TRAIN LIKE
                </Badge>
                <Badge className="group relative cursor-default text-xl font-extrabold tracking-tight lg:text-3xl">
                  CHAMPIONS
                  <Image
                    src={crown}
                    alt="Crown"
                    width={64}
                    height={64}
                    className="absolute -right-7 -top-[3.2rem] size-auto rotate-12 scale-95 select-none transition-all group-hover:scale-100 group-hover:drop-shadow-2xl"
                  />
                </Badge>
                <p className="text-2xl font-semibold">
                  Unlock your full
                  <span className="mx-1 rounded-md bg-primary px-2 py-1 font-semibold">
                    potential
                  </span>
                  with us. Join
                  <span className="mx-1 rounded-md bg-primary px-2 py-1 font-semibold">
                    now
                  </span>
                  and start your journey to greatness!
                </p>
              </div>
              <div className="overflow-hidden rounded-xl 2xl:w-[75%]">
                <Image
                  src={signinImg}
                  alt="Image"
                  placeholder="blur"
                  priority
                  quality={100}
                  width={720}
                  height={1280}
                  className="pointer-events-none mx-auto size-auto select-none rounded-xl 2xl:scale-150"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
