import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function FriendCard() {
  return (
    <>
      <div className="flex items-center justify-between rounded-xl border border-border bg-popover p-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight first:mt-0">
              Crintea Sebastian
            </h2>
            <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              seby.danyel@gmail.com
            </code>
          </div>
        </div>
        <Button className="font-semibold lg:text-lg">Remove</Button>
      </div>
    </>
  );
}
