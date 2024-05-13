import { NavigateBackButton } from "@/components/navigate-back";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FriendCard } from "./_components/friend-card";

export default function FriendsPage() {
  return (
    <>
      <main className="container py-4">
        <header className="mb-6 flex items-center gap-2">
          <NavigateBackButton />
          <h1 className="text-4xl font-extrabold tracking-tight ">Friends</h1>
        </header>
        <Tabs defaultValue="friends">
          <TabsList>
            <TabsTrigger value="friends" className="text-xl font-semibold">
              Friends
            </TabsTrigger>
            <TabsTrigger value="requests" className="text-xl font-semibold">
              Requests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="friends" className="space-y-1">
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
          </TabsContent>
          <TabsContent value="requests">Requests</TabsContent>
        </Tabs>
      </main>
    </>
  );
}
