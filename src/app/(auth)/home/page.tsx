import CaloriesCounter from "./_components/calories-displayer";
import WeightDisplayer from "./_components/weight-displayer";
import WorkoutsDisplayer from "./_components/workouts-displayer";

export default function MainPage() {
  return (
    <>
      <main className="flex min-h-screen">
        <section className="flex h-screen flex-col gap-x-6  gap-y-6 rounded-lg p-8 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-y-0">
          <div className="flex h-full flex-col gap-6  md:grid md:grid-rows-2">
            <CaloriesCounter />
            <WeightDisplayer />
          </div>

          <WorkoutsDisplayer />
        </section>
      </main>
    </>
  );
}
