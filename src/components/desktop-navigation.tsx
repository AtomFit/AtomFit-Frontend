"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { TbSettings } from "react-icons/tb";
import { links } from "@/constants/links";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CiLogout, CiUser } from "react-icons/ci";
import ThemeDropdownSub from "@/app/profile/_components/theme-dropdown";

export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <>
      <aside className="border-r px-4 min-w-fit min-h-screen hidden md:block">
        <TooltipProvider delayDuration={1}>
          <nav className={`flex flex-col gap-2 h-screen py-4`}>
            <h1 className="text-4xl font-extrabold tracking-tight my-10 hidden xl:block">
              Atom Fit
            </h1>
            {links.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <Button
                    variant={pathname === link.path ? "default" : "ghost"}
                    size="icon"
                    className={`text-xl font-semibold mx-auto xl:w-full xl:justify-start xl:px-4 xl:py-2`}
                    asChild
                  >
                    <Link href={link.path} className="flex gap-1 items-center">
                      <link.icon size={32} />

                      <span className="hidden xl:block">{link.title}</span>
                    </Link>
                  </Button>
                  <TooltipContent
                    side="right"
                    className="hidden font-semibold md:block xl:hidden"
                  >
                    {link.title}
                  </TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            ))}
            <div className="flex flex-col gap-2 mt-auto">
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    asChild
                    variant={pathname === "/profile" ? "default" : "ghost"}
                    size="icon"
                    className={`xl:w-full xl:justify-start mx-auto xl:px-4 xl:py-2`}
                  >
                    <Link href={"/profile"} className="flex gap-1 items-center">
                      <Avatar className="size-8">
                        <AvatarFallback>CS</AvatarFallback>
                      </Avatar>
                      <span className={`xl:block hidden text-xl font-semibold`}>
                        Profile
                      </span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="hidden font-semibold md:block xl:hidden"
                >
                  Profile
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`xl:w-full xl:justify-start mx-auto space-x-1 xl:px-4 xl:py-2`}
                      >
                        <TbSettings size={32} />
                        <span
                          className={`xl:block hidden text-xl font-semibold`}
                        >
                          Settings
                        </span>
                      </Button>
                    </TooltipTrigger>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <CiUser className="size-5 mr-2" />
                        Edit profile
                      </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <ThemeDropdownSub />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <CiLogout className="size-5 mr-2" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <TooltipContent
                  side="right"
                  className="hidden font-semibold md:block xl:hidden"
                >
                  Settings
                </TooltipContent>
              </Tooltip>
            </div>
          </nav>
        </TooltipProvider>
      </aside>
    </>
  );
}
