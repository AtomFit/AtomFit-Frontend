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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { editProfileForm } from "@/schemas/edit-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaFemale, FaMale } from "react-icons/fa";
import { z } from "zod";

export function EditProfileForm() {
  const form = useForm<z.infer<typeof editProfileForm>>({
    resolver: zodResolver(editProfileForm),
  });
  const onSubmit = () => {
    console.log("test");
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
                <FormLabel className="text-3xl font-semibold">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Jumping Jacks"
                    className="text-base"
                  />
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
                <FormLabel className="text-3xl font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="example@example.com"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_male"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold">Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel className="flex cursor-pointer items-center text-xl">
                        <FaMale /> Male
                      </FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="flex cursor-pointer items-center text-xl">
                        <FaFemale /> Female
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold" htmlFor="age">
                  Age
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="age"
                      type="number"
                      inputMode="numeric"
                      {...field}
                      className="pr-20"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-0 top-0"
                    >
                      years
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold" htmlFor="height">
                  Height
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="height"
                      type="number"
                      inputMode="numeric"
                      {...field}
                      className="pr-20"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-0 top-0"
                    >
                      cm
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold" htmlFor="weight">
                  Weight
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      inputMode="numeric"
                      {...field}
                      className="pr-20"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-0 top-0"
                    >
                      kg
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight_preference"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="text-3xl font-semibold"
                  htmlFor="goal_weight"
                >
                  Goal Weight
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="goal_weight"
                      type="number"
                      step="0.1"
                      inputMode="numeric"
                      {...field}
                      className="pr-20"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-0 top-0"
                    >
                      kg
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button className="text-xl font-semibold">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
