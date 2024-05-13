import { z } from "zod";

export const createExerciseForm = z.object({
  name: z.string(),
  instructions: z.string(),
  link: z.string().url(),
  time: z.enum(["repeats", "duration"]),
  muscles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export const createExerciseDefaultValues = {
  name: "",
  instructions: "",
  link: "",
  time: undefined,
  muscles: [],
};
