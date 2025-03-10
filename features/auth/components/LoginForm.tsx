"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInSchema } from "@/schemas/auth";
import { Button } from "@/features/shared/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/features/shared/ui";
import { Input } from "@/features/shared/ui";

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: SignInSchema) => {
    try {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/dashboard",
        redirect: true,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const isLoading = form.formState.isSubmitting;
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white text-sm mb-2">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="E.g AliRiaz@Uifry.com"
                  required
                  className="w-full h-12 px-4 rounded-md placeholder:text-white text-white 
                  focus:ring-2 focus:ring-primary-foreground transition-all duration-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white text-sm">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    required
                    className="w-full h-12 px-4 rounded-md placeholder:text-white text-white
                    focus:ring-2 focus:ring-primary-foreground transition-all duration-300"
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 text-sm -translate-y-1/2 text-primary-foreground
                    hover:text-white transition-colors duration-200 h-8 w-8 p-0"
                  >
                    {showPassword ? "Hide" : "Show"}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-primary-foreground text-sm hover:text-white transition-colors duration-200"
                >
                  I forgot my password!
                </Link>
              </div>
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-primary-foreground text-primary hover:bg-primary hover:text-white
            transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0
            active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>

          <div className="text-center">
            <Link
              href="#"
              className="text-white text-sm transition-all duration-200"
            >
              Not Ali Riaz?{" "}
              <span className="text-primary-foreground underline hover:text-white transition-colors duration-200">
                Login to continue
              </span>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};
