import { Navigation } from "./components/navigation";
import CaloriesCounter from "./components/dashboard/calories-displayer";
import WeightDisplayer from "./components/dashboard/weight-displayer";
import WorkoutsDisplayer from "./components/dashboard/workouts-displayer";

export default function MainPage() {
  return (
    <>
      <div className="w-screen md:overflow-hidden overflow-auto md:h-screen h-fit md:flex ">
        <section className="hidden md:block w-1/6 h-full gap-4 bg-popover  border rounded-lg flex-col ">
          <Navigation />
        </section>
        <section className="w-full h-full gap-x-6 gap-y-6 md:gap-y-0  rounded-lg p-8 md:grid md:grid-cols-2 md:grid-rows-1 flex flex-col">
          <div className="md:grid md:grid-rows-2 h-full flex  flex-col gap-6">
            <CaloriesCounter />
            <WeightDisplayer />
          </div>

          <WorkoutsDisplayer />
        </section>
      </div>
    </>
  );
}
