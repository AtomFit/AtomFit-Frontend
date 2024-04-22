import CaloriesCounter from "./_components/dashboard/calories-displayer";
import WeightDisplayer from "./_components/dashboard/weight-displayer";
import WorkoutsDisplayer from "./_components/dashboard/workouts-displayer";
import { Navigation } from "@/components/navigation";

export default function MainPage() {
  return (
    <>
      <main className="min-h-screen flex">
        <Navigation />
        <section className="h-screen gap-x-6 gap-y-6 md:gap-y-0  rounded-lg p-8 md:grid md:grid-cols-2 md:grid-rows-1 flex flex-col">
          <div className="md:grid md:grid-rows-2 h-full flex  flex-col gap-6">
            <CaloriesCounter />
            <WeightDisplayer />
          </div>

          <WorkoutsDisplayer />
        </section>
      </main>
    </>
  );
}
