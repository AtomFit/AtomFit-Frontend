"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { links } from "@/constants/links";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-background/90 border-t fixed bottom-0 w-full flex justify-between items-center px-8 py-2 backdrop-blur md:hidden">
        <TooltipProvider delayDuration={1}>
          {links.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Button
                  variant={pathname === link.path ? "default" : "ghost"}
                  size="icon"
                  className={`text-xl font-semibold mx-auto`}
                  asChild
                >
                  <Link href={link.path} className="flex gap-1 items-center">
                    <link.icon size={32} />
                  </Link>
                </Button>
                <TooltipContent className="hidden font-semibold md:block xl:hidden">
                  {link.title}
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger>
              <Button
                asChild
                variant={pathname === "/profile" ? "default" : "ghost"}
                size="icon"
                className={`xl:w-full xl:justify-start mx-auto`}
              >
                <Link href={"/profile"} className="flex gap-1 items-center">
                  <Avatar className="size-9">
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="hidden font-semibold md:block xl:hidden">
              Profile
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
}
