import { NavigateBackButton } from "@/components/navigate-back";
import Image from "next/image";
import test from "./_components/exercise-test.jpg";
import { ExerciseCard } from "./_components/exercise-card";
import { Button } from "@/components/ui/button";
import { CiViewList } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <div className="absolute bottom-4 w-full space-y-2 px-2">
              <p className="border-l-4 border-primary pl-2 text-4xl font-extrabold lg:text-5xl">
                3sets of 12 min
              </p>
              <div className="flex items-center justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="text-base font-semibold">
                      <CiViewList size={24} />
                      View full routine
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>3 sets of 12 min</DialogTitle>
                      <DialogDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quasi, explicabo veniam vitae iure repellat
                        suscipit ab dolore animi iste recusandae, nihil corporis
                        ipsum in sapiente tenetur odio delectus, dicta ut!
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="flex h-[500px] flex-col gap-1 rounded-md border p-4 ">
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
                      <ExerciseCard />
                      <ExerciseCard />
                      <ExerciseCard />
                      <ExerciseCard />
                      <ExerciseCard />
                      <ExerciseCard />
                      <ExerciseCard />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>

                <Button className="text-base font-semibold">
                  <FaPlay size={24} className="mr-2" />
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
