import { NavigateBackButton } from "@/components/navigate-back";
import Image from "next/image";
import test from "./_components/exercise-test.jpg";
import { ExerciseCard } from "./_components/exercise-card";

export default function WorkoutByIDPage() {
  return (
    <>
      <main className="container py-4">
        <header className="mb-6 flex items-center gap-2">
          <NavigateBackButton />
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Abs Workout Begginer workout name
          </h1>
        </header>
        <div className="space-y-2">
          <div className="relative">
            <Image src={test} alt="Test image" className="rounded-lg" />
            <p className="absolute bottom-6 left-2 border-l-4 border-primary pl-2 text-4xl font-extrabold lg:text-5xl">
              3sets of 12 min
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
          </div>
        </div>
      </main>
    </>
  );
}
