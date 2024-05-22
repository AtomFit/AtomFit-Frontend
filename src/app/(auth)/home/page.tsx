import CaloriesCounter from "./_components/calories-displayer";
import MealDisplayer from "./_components/meal-displayer";
import WorkoutsDisplayer from "./_components/workouts-displayer";

export default function MainPage() {
  return (
    <>
      <main className="flex min-h-screen">
        <section className="flex h-screen flex-col gap-x-6  gap-y-6 rounded-lg p-8 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-y-0">
          <div className="flex h-full flex-col gap-6  md:grid md:grid-rows-2 min-h-96">
            <CaloriesCounter />
            <MealDisplayer />
          </div>

          <WorkoutsDisplayer />
        </section>
      </main>
    </>
  );
}
