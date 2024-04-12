import { z } from "zod";
import { passwordSchema } from "./password";

export const signUpFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Your username must have at least 4 characters" })
    .max(50, { message: "Your username can't be longer than 50 characters" }),
  email: z.string().email(),
  password: passwordSchema,
  goal: z.enum(["lose", "maintain", "gain", "muscle"]),
  gender: z.enum(["male", "female"]),
  birthday: z.date(),
  height: z.number().min(100).max(300),
  weight: z.number().min(20).max(500),
  goal_weight: z.number().min(20).max(500),
});
export const signUpDefaultValues = {
  username: "",
  email: "",
  password: "",
  goal: undefined,
  gender: undefined,
  birthday: new Date(),
  height: 0,
  weight: 0,
  goal_weight: 0,
};
