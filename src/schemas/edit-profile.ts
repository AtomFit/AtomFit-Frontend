import { z } from "zod";

export const editProfileForm = z.object({
  username: z
    .string()
    .min(4, { message: "Your username must have at least 4 characters" })
    .max(50, { message: "Your username can't be longer than 50 characters" }),
  email: z.string().email(),
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
});

// export const editProfileDefaultValues = {
//   name: "",
//   instructions: "",
//   link: "",
//   time: undefined,
//   muscles: [],
// };
