import { NavigateBackButton } from "@/components/navigate-back";
import { CreateExerciseForm } from "./_components/create-exercise-form";

export default function CreateExercisePage() {
  return (
    <>
      <main className="container py-4">
        <header className="mb-6 flex items-center gap-2">
          <NavigateBackButton />
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Create a new exercise
          </h1>
        </header>
        <CreateExerciseForm />
      </main>
    </>
  );
}
