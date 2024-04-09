"use client";

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
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function SignInForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
                <FormLabel htmlFor="password">Password</FormLabel>
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
          <Button className="w-full">Sign In</Button>

          <p className="text-center">
            Don&apos;t have an account ?
            <Link
              href={"/auth/signup"}
              className="text-blue-700 ml-2 underline"
            >
              Register
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
}
