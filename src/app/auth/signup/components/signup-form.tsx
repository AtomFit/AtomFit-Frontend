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
import { signUpDefaultValues, signUpFormSchema } from "@/schemas/signup-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import { z } from "zod";

export function SignUpForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Username</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button className="w-full">
            <FaSignInAlt className="mr-2" />
            Sign Up
          </Button>
        </form>
      </Form>
    </>
  );
}
