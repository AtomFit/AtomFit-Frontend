import { z } from "zod";
import { passwordSchema } from "./password";

export const signUpFormSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Your username must have at least 4 characters" })
      .max(50, { message: "Your username can't be longer than 50 characters" }),
    email: z.string().email(),
    password: passwordSchema,
    goal: z.enum(["lose", "maintain", "gain"]),
    is_male: z.enum(["male", "female"]),
    age: z
      .string()
      .refine((value) => parseInt(value) >= 18 && parseInt(value) < 150, {
        message: "You have to be at least 18 years old",
      }),
    height: z
      .string()
      .refine((value) => parseInt(value) >= 100 && parseInt(value) < 300, {
        message: "You have to be at least 100cm tall",
      }),
    weight: z
      .string()
      .refine((value) => parseFloat(value) >= 10 && parseFloat(value) < 500, {
        message: "You must have a weight of 10 or above",
      }),
    weight_preference: z
      .string()
      .refine((value) => parseFloat(value) >= 10 && parseFloat(value) < 300, {
        message: "You must have a weight of 10 or above",
      }),
  })
  .refine(
    (data) =>
      data.goal === "lose" &&
      parseFloat(data.weight) > parseFloat(data.weight_preference),
    {
      message:
        "You can't choose to have more kg if your goal is to lose weight",
      path: ["weight_preference"],
    }
  );
// .refine(
//   (data) =>
//     data.goal === "gain" &&
//     parseFloat(data.weight) < parseFloat(data.goal_weight),
//   {
//     message:
//       "You can't choose to have less kg if your goal is to gain weight",
//     path: ["goal_weight"],
//   }
// );
export const signUpDefaultValues = {
  username: "",
  email: "",
  password: "",
  goal: undefined,
  gender: undefined,
  age: "0",
  height: "0",
  weight: "0",
  weight_preference: "0",
};
