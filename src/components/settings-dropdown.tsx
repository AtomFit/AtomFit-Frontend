"use client";

import { TbSettings } from "react-icons/tb";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CiLogout, CiUser } from "react-icons/ci";
import ThemeDropdownSub from "./theme-dropdown";
import Link from "next/link";
import { signout } from "@/app/api/auth/auth";

export function SettingsDropdownMenu() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost">
            <TbSettings className="size-7" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="flex items-center gap-2">
            <CiUser className="size-5" />
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/profile/edit"}>
              <DropdownMenuItem>
                <CiUser className="mr-2 size-5" />
                Edit profile
              </DropdownMenuItem>
            </Link>

            <DropdownMenuItem onClick={async () => await signout()}>
              <CiLogout className="mr-2 size-5" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuLabel className="flex items-center gap-2">
            <TbSettings className="size-5" />
            Settings
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ThemeDropdownSub />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
