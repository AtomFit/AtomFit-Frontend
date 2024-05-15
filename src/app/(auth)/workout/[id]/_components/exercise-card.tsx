import { IoMenu } from "react-icons/io5";

export function ExerciseCard() {
  return (
    <>
      <div className="flex items-center gap-1 rounded-lg border border-border bg-popover p-2">
        <IoMenu size={32} />
        <div>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
            Mountain climber
          </h1>
          <h2 className="scroll-m-20 text-base font-semibold tracking-tight first:mt-0">
            x16
          </h2>
        </div>
      </div>
    </>
  );
}
