import { z } from "zod";

export const createExerciseForm = z.object({
  name: z.string(),
  instructions: z.string(),
  link: z.string().url(),
  time: z.enum(["repeats", "duration"]),
  // muscles: z.string().array(),
});

export const createExerciseDefaultValues = {
  name: "",
  instructions: "",
  link: "",
  time: undefined,
  // muscles: [],
};
