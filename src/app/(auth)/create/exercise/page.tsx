import { NavigateBackButton } from "@/components/navigate-back";
import { CreateExerciseForm } from "./_components/CreateExerciseForm";

export default function CreateExercisePage() {
  return (
    <>
      <main className="container">
        <NavigateBackButton />
        <CreateExerciseForm />
      </main>
    </>
  );
}
