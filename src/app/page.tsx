import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import statsImage from "@/assets/svg/Fitness stats-bro.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative">
        <header className="flex justify-between container items-center py-2 px-4 z-50">
          <div className="flex items-center">
            <Image src="/logo.png" width={100} height={100} alt="Logo" />
            <Badge className="hidden md:block text-4xl">Atom Fit</Badge>
          </div>
          <div className="space-x-2 hidden sm:block">
            <Button
              variant="secondary"
              size="lg"
              className="hidden sm:inline-flex sm:text-lg"
              asChild
            >
              <Link href={"/auth/signin"}>Sign In</Link>
            </Button>
            <Button size="lg" className="sm:text-lg" asChild>
              <Link href={"/auth/signup"}>Get Started</Link>
            </Button>
          </div>
        </header>
        <section className="container text-xl sm:text-2xl pt-16 flex items-center">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center sm:text-5xl">
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
              <Button size="lg" className="text-lg" asChild>
                <Link href={"/auth/signup"}>Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          <Image
            src={statsImage}
            alt="Static Image"
            priority
            className="hidden flex-1 md:block md:w-[50%] pointer-events-none"
          />
        </section>
      </main>
      <section className="absolute flex flex-col gap-2 w-full px-4 bottom-2 sm:hidden">
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
