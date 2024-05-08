import createWorkoutBgImg from "@/assets/img/create-workout.jpg";
import { CreateCard } from "./_components/create-card";
import Link from "next/link";

export default function CreatePage() {
  const creates = [
    {
      href: "/create/workout",
      img: createWorkoutBgImg,
      altImg: "Create Workout Background Image",
      title: "WORKOUT",
      smallDescription: "Create your own workout",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
      dicta quia quisquam est recusandae odio, magni amet adipisci.
      Voluptatum corporis neque numquam harum earum provident minima ipsa
      aliquid ipsam suscipit.`,
    },
    {
      href: "/create/exercise",
      img: createWorkoutBgImg,
      altImg: "Create Exercise Background Image",
      title: "Exercise",
      smallDescription: "Create an exercise for the app",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
      dicta quia quisquam est recusandae odio, magni amet adipisci.
      Voluptatum corporis neque numquam harum earum provident minima ipsa
      aliquid ipsam suscipit.`,
    },
    {
      href: "/create/meal",
      img: createWorkoutBgImg,
      altImg: "Create Exercise Background Image",
      title: "Exercise",
      smallDescription: "Create an exercise for the app",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
      dicta quia quisquam est recusandae odio, magni amet adipisci.
      Voluptatum corporis neque numquam harum earum provident minima ipsa
      aliquid ipsam suscipit.`,
    },
  ];
  return (
    <>
      <main className="container my-4 flex flex-wrap gap-2">
        {creates.map((create, index) => (
          <Link key={index} href={create.href} className="flex flex-1">
            <CreateCard
              altImg={create.altImg}
              img={create.img}
              title={create.title}
              smallDescription={create.smallDescription}
              description={create.description}
            />
          </Link>
        ))}
      </main>
    </>
  );
}
