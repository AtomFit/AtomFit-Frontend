import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbSettings } from "react-icons/tb";
import { CiUser, CiLogout } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import ThemeDropdownSub from "./_components/theme-dropdown";

export default function Profile() {
  return (
    <>
      <main className="container space-y-4">
        <header className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-2">
            <Avatar className="size-20">
              <AvatarFallback>sadaw</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <h2 className="text-3xl">Crintea Sebastian</h2>
              <h3>seby.danyel@gmail.com</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <FaUserFriends className="size-6" />
            </Button>
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
                  <DropdownMenuItem>
                    <CiUser className="size-5 mr-2" />
                    Edit profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <GoGoal className="size-5 mr-2" />
                    My Goals
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CiLogout className="size-5 mr-2" />
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
          </div>
        </header>
        <Card className="bg-popover">
          <CardHeader>
            <CardTitle className="text-5xl">Goals</CardTitle>
            <CardDescription className="text-lg">Weight 75 kg</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Progress bar</p>
            <section>
              <CardTitle className="text-5xl">Daily Calories</CardTitle>
              <CardDescription className="text-lg">2000 cal</CardDescription>
            </section>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Update goals</Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
