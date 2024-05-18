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
import { serverError } from "@/lib/fetchUtils";
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

    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (res?.error) {
        res.error === "fetch failed"
          ? setError(serverError)
          : setError(res.error);
        return setTimeout(() => setError(null), 10000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
                <FormLabel className="text-3xl font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="example@example.com"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="password"
                  className="text-3xl font-semibold"
                >
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      id="password"
                      placeholder="********"
                      type={isPasswordVisible ? "text" : "password"}
                      className="pr-10 text-base"
                    />
                    <Button
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                    >
                      {isPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-sm" />
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
