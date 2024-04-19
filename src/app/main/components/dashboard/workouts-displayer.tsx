import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

function WorkoutsDisplayer() {
  const workouts = [
    {
      name: "Arms Workout",
      description: "A workout to strengthen your arms",
      img: "./arms.png",
    },
    {
      name: "Chest Workout",
      description: "A workout to strengthen your chest",
    },
    {
      name: "Back Workout",
      description: "A workout to strengthen your back",
      img: "./back.png",
    },
  ];

  return (
    <div className=" bg-popover rounded-lg flex flex-col w-full h-full row-span-2 border p-2">
      <div className="bg-background  shadow-md min-h-20 flex items-center justify-center rounded-md">
        <h1 className="text-2xl font-bold">Workouts</h1>
      </div>
      <section className="h-full flex flex-col gap-6 mb-4">
        <div className=" flex flex-col gap-6">
          <h1 className="text-md mx-4 mt-6 ">Upper Body</h1>
          <div className="w-full flex items-center justify-center">
            <Carousel className="w-5/6">
              <CarouselContent>
                {workouts.map((workout, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-background shadow-md rounded-md p-2">
                      <div
                        className="bg-cover h-32 bg-center object-cover rounded-md"
                        style={{
                          backgroundImage: `url(${workout.img})`,
                        }}
                      >
                        <h1 className="text-lg font-bold">{workout.name}</h1>
                        <p>{workout.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-md mx-4 ">Lower Body</h1>
          <div className="w-full flex items-center justify-center">
            <Carousel className="w-5/6">
              <CarouselContent>
                {workouts.map((workout, index) => (
                 <CarouselItem key={index}>
                 <div className="bg-background shadow-md rounded-md p-2">
                   <div
                     className="bg-cover h-32 bg-center object-cover rounded-md"
                     style={{
                       backgroundImage: `url(${workout.img})`,
                     }}
                   >
                     <h1 className="text-lg font-bold">{workout.name}</h1>
                     <p>{workout.description}</p>
                   </div>
                 </div>
               </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>{" "}
        </div>
        <div className="mt-8">
          <Button className=" w-full">Load More</Button>
       </div>
      </section>
    </div>
  );
}

export default WorkoutsDisplayer;
