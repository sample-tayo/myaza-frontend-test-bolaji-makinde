import * as z from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type SignInSchema = z.infer<typeof signInSchema>;

export { signInSchema, type SignInSchema };
