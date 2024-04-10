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
import {
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  const size = 32;
  return (
    <>
      <main className="min-h-screen relative">
        <header className="flex justify-between container items-center py-2 px-4 z-50">
          <div className="flex items-center">
            <Image src="/logo.png" width={100} height={100} alt="Logo" />
            <Badge className="hidden md:block text-4xl">Atom Fit</Badge>
          </div>
          <div className="space-x-2">
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
            className="hidden flex-1 md:block md:w-[50%] pointer-events-none"
          />
        </section>
      </main>
      <footer className="py-6">
        <ul className="flex flex-wrap justify-center gap-8">
          <li className="flex items-center gap-2">
            <SiTailwindcss size={size} />
            <p className="text-sm font-normal">Tailwind CSS</p>
          </li>
          <li className="flex items-center gap-2">
            <FaReact size={size} />
            <p className="text-sm font-normal">React</p>
          </li>
          <li className="flex items-center gap-2">
            <SiTypescript size={size} />
            <p className="text-sm font-normal">TypeScript</p>
          </li>
          <li className="flex items-center gap-2">
            <TbBrandNextjs size={size} />
            <p className="text-sm font-normal">Next JS</p>
          </li>
          <li className="flex items-center gap-2">
            <SiFastapi size={size} />
            <p className="text-sm font-normal">FastAPI</p>
          </li>
          <li className="flex items-center gap-2">
            <SiPostgresql size={size} />
            <p className="text-sm font-normal">PostgreSQL</p>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub size={size} />
            <p className="text-sm font-normal">GitHub</p>
          </li>
        </ul>
      </footer>
    </>
  );
}
