import { NavigateBackButton } from "@/components/navigate-back";
import { CreateWorkoutForm } from "./_components/create-workout-form";

export default function CreateWorkoutPage() {
  return (
    <>
      <main className="container py-4">
        <header className="mb-6 flex items-center gap-2">
          <NavigateBackButton />
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Create a new workout
          </h1>
        </header>
        <CreateWorkoutForm />
      </main>
    </>
  );
}
