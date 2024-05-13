import { SettingsDropdownMenu } from "@/components/settings-dropdown";
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
import { FaUserFriends } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <main className="container space-y-4">
        <header className="mt-10 flex items-center justify-between">
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
            <SettingsDropdownMenu />
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
