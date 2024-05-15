import Image from "next/image";
import test from "./test.jpg";

export function WorkoutCard() {
  return (
    <>
      <div className="overflow-hidden rounded-xl border border-border bg-popover transition-all hover:scale-105">
        <Image src={test} alt="Test img" />
        <div className="space-y-2 p-2">
          <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            WORKOUT NAME
          </code>
          <p className="border-l-2 pl-1 text-5xl font-semibold">
            3sets of 12 min
          </p>
        </div>
      </div>
    </>
  );
}
