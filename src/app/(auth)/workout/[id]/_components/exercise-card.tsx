import { RxDragHandleDots2 } from "react-icons/rx";

export function ExerciseCard() {
  return (
    <>
      <div className="flex items-center gap-1 rounded-lg border border-border bg-popover p-2">
        <RxDragHandleDots2 size={32} />
        <div>
          <p className="text-2xl font-extrabold tracking-tight">
            Mountain climber
          </p>
          <span className="text-base font-semibold tracking-tight">x16</span>
        </div>
      </div>
    </>
  );
}
