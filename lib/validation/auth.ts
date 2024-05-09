import { z } from "zod";

export const logInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Enter a valid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long"),
});

export type LogInSchema = z.infer<typeof logInSchema>;
