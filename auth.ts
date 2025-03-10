import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/schemas/auth";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          const dummyEmail = "test@myaza.com";
          const dummyPassword = "password123";

          if (email === dummyEmail && password === dummyPassword) {
            user = { email: dummyEmail, name: "Test User" };
            return user;
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
          return null;
        }
      },
    }),
  ],
});
