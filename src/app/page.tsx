import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import statsImage from "@/assets/svg/Fitness-stats-bro.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Footer } from "@/components/footer";
import { FaArrowRight } from "react-icons/fa";

export default function LandingPage() {
  return (
    <>
      <main className="relative min-h-screen pt-4">
        <header className="container z-50 flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            {/* <Image src="/logo.png" width={100} height={100} alt="Logo" /> */}
            <Badge className="hidden text-3xl font-extrabold tracking-tight md:block">
              Atom
            </Badge>
          </div>
          <div className="hidden space-x-2 sm:block">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg font-semibold"
              asChild
            >
              <Link href={"/auth/signin"}>Sign In</Link>
            </Button>
            <Button size="lg" className="group text-lg font-semibold" asChild>
              <Link href={"/auth/signup"}>
                Get Started
                <FaArrowRight className="ml-1 transition-all group-hover:ml-2" />
              </Link>
            </Button>
          </div>
        </header>
        <section className="container flex items-center pt-16 text-xl sm:text-2xl">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 sm:text-5xl">
                <InfoCircledIcon className="size-9" /> Start Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae debitis ipsum placeat quaerat saepe at ducimus facere
                ab quasi. Accusantium, dolorum? Maxime sapiente aspernatur
                inventore dicta aliquid minima dolorum doloremque?
              </p>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="group text-lg font-semibold" asChild>
                <Link href={"/auth/signup"}>
                  Get Started
                  <FaArrowRight className="ml-1 transition-all group-hover:ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Image
            src={statsImage}
            alt="Static Image"
            priority
            className="pointer-events-none hidden flex-1 md:block md:w-[50%]"
          />
        </section>
      </main>
      <section className="absolute bottom-2 flex w-full flex-col gap-2 px-4 sm:hidden">
        <Button size="lg" className="text-2xl" asChild>
          <Link href={"/auth/signup"}>Get Started</Link>
        </Button>
        <Button variant="secondary" size="lg" className="text-2xl" asChild>
          <Link href={"/auth/signin"}>Sign In</Link>
        </Button>
      </section>
      <Footer />
    </>
  );
}
