import { z } from "zod";

export const createWorkoutForm = z.object({
  name: z.string(),
  // muscles: z.string().array(),
});

export const createWorkoutDefaultValues = {
  name: "",
  // muscles: [],
};
