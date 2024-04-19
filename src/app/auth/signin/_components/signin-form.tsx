"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInDefaultValues, signInFormSchema } from "@/schemas/signin-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeNoneIcon, EyeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import { z } from "zod";

export function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInDefaultValues,
  });

  const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    setIsLoading(false);

    if (res?.error) {
      res.error === "fetch failed"
        ? setError("The server is down at the moment please try again later")
        : setError(res.error);
      return setTimeout(() => setError(null), 10000);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {error && (
            <Alert>
              <AlertDescription className="text-destructive">
                {error}
              </AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password" className="text-xl">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="********"
                      {...field}
                      type={isPasswordVisible ? "text" : "password"}
                      className="pr-10"
                    />
                    <Button
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-0 right-0"
                    >
                      {isPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full text-xl font-semibold" disabled={isLoading}>
            {isLoading ? (
              <ReloadIcon className="mr-2 size-6 animate-spin" />
            ) : (
              <FaSignInAlt className="mr-2" />
            )}
            Sign In
          </Button>
        </form>
      </Form>
    </>
  );
}
