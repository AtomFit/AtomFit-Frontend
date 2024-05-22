import React from "react";

const meals = [
  {
    name: "Pui cu orez",
    description: "2 eggs, 1 toast, 1 cup of coffee",
    calories: 300,
    protein: 20,
    carbs: 30,
    fats: 10,
    img: "/assets/img/food1.jpg",
  },
  {
    name: "Snitele cu cartofi",
    description: "1 chicken breast, 1 cup of rice, 1 cup of salad",
    calories: 500,
    protein: 30,
    carbs: 50,
    fats: 20,
    img: "/assets/img/food2.jpg",
  },
  {
    name: "sarma cu varza",
    description: "1 salmon fillet, 1 cup of quinoa, 1 cup of salad",
    calories: 600,
    protein: 40,
    carbs: 60,
    fats: 30,
    img: "/assets/img/food3.jpg",
  },
];

function MealDisplayer() {
  return (
    <div className="row-span-1h-full rounded-lg border bg-popover">
      <div className="grid h-full grid-cols-3 gap-4 p-6 ">
      <code className="relative col-span-2 rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        <img
          src={meals[0].img}
          alt=""
          className="absolute left-0 top-0 h-full w-full rounded opacity-50 transition-all hover:cursor-pointer hover:opacity-30 "
        />
        <div className=" z-100 absolute rounded p-1 text-xl drop-shadow-xl backdrop-blur-sm">
          {meals[0].name}
        </div>
      </code>
      <div className="grid-row-2 col-span-1 grid gap-3 ">
        <div className="relative flex justify-between rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
          <img
            src={meals[1].img}
            alt=""
            className="absolute left-0 top-0 h-full w-full rounded opacity-50 transition-all hover:cursor-pointer hover:opacity-30 "
          />
          <div className=" z-100 absolute rounded p-1 text-md drop-shadow-xl backdrop-blur-sm">
            {meals[1].name}
          </div>
        </div>
        <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
          <img
            src={meals[2].img}
            alt=""
            className="absolute left-0 top-0 h-full w-full rounded opacity-50 transition-all hover:cursor-pointer hover:opacity-30 "
          />{" "}
          <div className=" z-100 absolute rounded p-1 text-md drop-shadow-xl backdrop-blur-sm">
            {meals[2].name}
          </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MealDisplayer;
