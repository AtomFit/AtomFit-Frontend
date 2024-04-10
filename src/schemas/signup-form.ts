import { z } from "zod";
import { passwordSchema } from "./password";

export const signUpFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Your username must have at least 4 characters" })
    .max(50, { message: "Your username can't be longer than 50 characters" }),
  email: z.string().email(),
  password: passwordSchema,
});
export const signUpDefaultValues = {
  username: "",
  email: "",
  password: "",
};
