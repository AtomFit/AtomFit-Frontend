import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { FaArrowRight } from "react-icons/fa";
import { LandingPageCarousel } from "@/components/landing-page-carousel";
import crown from "../../public/assets/img/crown.png";

export default function LandingPage() {
  return (
    <>
      <header className="z-50 flex w-full items-center justify-between px-16 py-4 md:fixed">
        <Badge className="flex w-full justify-center text-xl font-extrabold tracking-tight md:w-auto">
          ATOM
        </Badge>

        <div className="hidden items-center gap-1 md:flex">
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="text-xl font-semibold tracking-tight"
          >
            <Link href={"/auth/signin"}>Sign In</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="text-xl font-extrabold tracking-tight"
          >
            <Link href={"/auth/signup"}>
              JOIN NOW <FaArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </header>
      <main className="mx-1 mt-10 flex min-h-screen flex-col sm:container sm:mx-0 md:mx-auto md:mt-0 md:flex-row md:items-center">
        <div className="space-y-1 text-xl md:max-w-[250px] lg:max-w-none lg:flex-1">
          <div className="text-center sm:text-left">
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
          </div>
          <p className="text-base lg:text-xl">
            ChampionFit offers personalized workout plans, expert guidance, and
            motivational tools to help you reach your peak performance. Whether
            you&apos;re a
            <span className="mx-1 rounded-md bg-primary px-2 py-1 font-semibold">
              beginner
            </span>
            or a seasoned athlete, ChampionFit provides tailored programs,
            real-time progress tracking, and a supportive
            <span className="mx-1 rounded-md bg-primary px-2 py-1 font-semibold">
              community
            </span>
            to ensure you achieve your fitness goals with the dedication and
            intensity of a true champion.
          </p>
          <div className="flex gap-1 md:block">
            <Button
              asChild
              variant="ghost"
              className="flex-1 text-xl font-semibold tracking-tight md:hidden"
            >
              <Link href={"/auth/signin"}>Sign In</Link>
            </Button>
            <Button
              asChild
              className="flex-1 text-xl font-extrabold tracking-tight lg:text-3xl"
            >
              <Link href={"/auth/signup"}>
                JOIN NOW <FaArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:flex-1">
          <LandingPageCarousel />
        </div>
      </main>
      <Footer />
    </>
  );
}
