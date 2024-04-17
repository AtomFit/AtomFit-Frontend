import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TbSettings } from "react-icons/tb";

export default function Test() {
  return (
    <>
      <main className="container">
        <header className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-2">
            <Avatar className="size-20">
              <AvatarFallback>sadaw</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl">Crintea Sebastian</h2>
              <h3>seby.danyel@gmail.com</h3>
            </div>
          </div>
          <Button size="icon" variant="ghost">
            <TbSettings className="size-7" />
          </Button>
        </header>

        <section>
          <h1>info</h1>
          <h1>info</h1>
          <h1>info</h1>
          <p>Progress barr</p>
          <p>goals goal weight</p>
          update goals friends
        </section>
      </main>
    </>
  );
}
