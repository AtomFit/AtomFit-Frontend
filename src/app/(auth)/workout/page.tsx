import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutCard } from "./_components/workout-card";

export default function WorkoutPage() {
  return (
    <>
      <main className="container py-6">
        <Tabs defaultValue="saved">
          <header className="flex justify-between">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Workouts
            </h1>
            <TabsList>
              <TabsTrigger value="saved" className="text-xl font-semibold">
                Saved
              </TabsTrigger>
              <TabsTrigger value="mine" className="text-xl font-semibold">
                Mine
              </TabsTrigger>
            </TabsList>
          </header>
          <TabsContent value="saved" className="flex flex-wrap gap-2">
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
          </TabsContent>
          <TabsContent value="mine">Mine</TabsContent>
        </Tabs>
      </main>
    </>
  );
}
