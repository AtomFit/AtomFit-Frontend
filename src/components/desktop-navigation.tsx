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
import ThemeDropdownSub from "@/app/(auth)/profile/_components/theme-dropdown";

export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <>
      <aside className="hidden min-w-fit border-r px-4 md:block">
        <TooltipProvider delayDuration={1}>
          <nav className={`flex h-screen flex-col gap-2 py-4`}>
            <Link
              href={"/home"}
              className="my-10 hidden text-4xl font-extrabold tracking-tight xl:block"
            >
              Atom Fit
            </Link>
            {links.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <Button
                    variant={pathname === link.path ? "default" : "ghost"}
                    size="icon"
                    className={`mx-auto text-xl font-semibold xl:w-full xl:justify-start xl:px-4 xl:py-2`}
                    asChild
                  >
                    <Link href={link.path} className="flex items-center gap-1">
                      <link.icon size={32} />
                      <span className="hidden xl:block">{link.title}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="hidden text-sm font-semibold md:block xl:hidden"
                >
                  {link.title}
                </TooltipContent>
              </Tooltip>
            ))}
            <div className="mt-auto flex flex-col gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    asChild
                    variant={pathname === "/profile" ? "default" : "ghost"}
                    size="icon"
                    className={`mx-auto xl:w-full xl:justify-start xl:px-4 xl:py-2`}
                  >
                    <Link href={"/profile"} className="flex items-center gap-1">
                      <Avatar className="size-8">
                        <AvatarFallback>CS</AvatarFallback>
                      </Avatar>
                      <span className={`hidden text-xl font-semibold xl:block`}>
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
                        className={`mx-auto space-x-1 xl:w-full xl:justify-start xl:px-4 xl:py-2`}
                      >
                        <TbSettings size={32} />
                        <span
                          className={`hidden text-xl font-semibold xl:block`}
                        >
                          Settings
                        </span>
                      </Button>
                    </TooltipTrigger>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <CiUser className="mr-2 size-5" />
                        Edit profile
                      </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <ThemeDropdownSub />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <CiLogout className="mr-2 size-5" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <TooltipContent
                  side="right"
                  className="hidden text-sm font-semibold md:block xl:hidden"
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
