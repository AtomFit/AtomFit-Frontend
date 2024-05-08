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
      <nav className="fixed bottom-0 z-50 flex w-full items-center justify-between border-t bg-background/90 px-8 py-2 backdrop-blur md:hidden">
        <TooltipProvider delayDuration={1}>
          {links.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Button
                  variant={pathname === link.path ? "default" : "ghost"}
                  size="icon"
                  className={`mx-auto text-xl font-semibold`}
                  asChild
                >
                  <Link href={link.path} className="flex items-center gap-1">
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
                className={`mx-auto xl:w-full xl:justify-start`}
              >
                <Link href={"/profile"} className="flex items-center gap-1">
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
