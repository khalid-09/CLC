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

export const signUpSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(3, "Enter min 3 characters long username"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Enter a valid email"),
    password: z
      .string({ required_error: "Passoword is required" })
      .min(8, "Enter min 8 characters long password"),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(8, "Enter min 8 characters long password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
