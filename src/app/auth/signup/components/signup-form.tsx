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
import { CalendarIcon, EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFemale,
  FaMale,
  FaSignInAlt,
} from "react-icons/fa";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export function SignUpForm() {
  const steps = [
    {
      fields: ["username", "email", "password"],
    },
    {
      fields: ["goal"],
    },
    {
      fields: ["gender", "birthday", "height", "weight", "goal_weight"],
    },
  ];
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  type FieldName = keyof z.infer<typeof signUpFormSchema>;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
    form.reset();
  };
  return (
    <>
      <Progress value={(currentStep + 1) * 33.33} className="mb-2" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {currentStep === 0 && (
            <motion.div
              className="space-y-2"
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* username */}
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
              {/* email */}
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
              {/* password */}
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
                          onClick={() =>
                            setIsPasswordVisible(!isPasswordVisible)
                          }
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute top-0 right-0"
                        >
                          {isPasswordVisible ? (
                            <EyeOpenIcon />
                          ) : (
                            <EyeNoneIcon />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              className="space-y-2"
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Goal</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormItem className="flex items-center space-x-1 space-y-0 relative">
                          <FormControl className="absolute inset-0">
                            <RadioGroupItem value="lose" />
                          </FormControl>
                          <FormLabel className="flex items-center text-xl cursor-pointer w-full">
                            <Card className="hover:bg-secondary transition-all w-full">
                              <CardHeader>
                                <CardTitle>Lose Weight</CardTitle>
                                <CardDescription>
                                  Lorem ipsum dolor sit, amet consectetur
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-1 space-y-0 relative">
                          <FormControl className="absolute inset-0">
                            <RadioGroupItem value="maintain" />
                          </FormControl>
                          <FormLabel className="flex items-center text-xl cursor-pointer w-full">
                            <Card className="hover:bg-secondary transition-all w-full">
                              <CardHeader>
                                <CardTitle>Maintain Weight</CardTitle>
                                <CardDescription>
                                  Lorem ipsum dolor sit, amet consectetur
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-1 space-y-0 relative">
                          <FormControl className="absolute inset-0">
                            <RadioGroupItem value="gain" />
                          </FormControl>
                          <FormLabel className="flex items-center text-xl cursor-pointer w-full">
                            <Card className="hover:bg-secondary transition-all w-full">
                              <CardHeader>
                                <CardTitle>Gain Weight</CardTitle>
                                <CardDescription>
                                  Lorem ipsum dolor sit, amet consectetur
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-1 space-y-0 relative">
                          <FormControl className="absolute inset-0">
                            <RadioGroupItem value="muscle" />
                          </FormControl>
                          <FormLabel className="flex items-center text-xl cursor-pointer w-full">
                            <Card className="hover:bg-secondary transition-all w-full">
                              <CardHeader>
                                <CardTitle>Gain Muscle</CardTitle>
                                <CardDescription>
                                  Lorem ipsum dolor sit, amet consectetur
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              className="space-y-2"
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Gender</FormLabel>
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
                          <FormLabel className="flex items-center text-xl cursor-pointer">
                            <FaMale /> Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="flex items-center text-xl cursor-pointer">
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
                name="birthday"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-xl">Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto size-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-full text-center p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          className="w-full"
                          captionLayout="dropdown-buttons"
                          classNames={{
                            caption_dropdowns: "text-sm space-y-1",
                            caption_label: "hidden",
                          }}
                          fromYear={1950}
                          toYear={2025}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* height */}
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl" htmlFor="height">
                      Height
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id="height"
                          type="text"
                          inputMode="numeric"
                          min={1}
                          max={300}
                          {...field}
                        />
                        <Button
                          variant="ghost"
                          type="button"
                          className="absolute top-0 right-0"
                        >
                          cm
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* weight */}
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl" htmlFor="weight">
                      Weight
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id="weight"
                          type="text"
                          inputMode="numeric"
                          min={1}
                          max={300}
                          {...field}
                        />
                        <Button
                          variant="ghost"
                          type="button"
                          className="absolute top-0 right-0"
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
                name="goal_weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl" htmlFor="goalw">
                      Goal Weight
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id="goalw"
                          type="text"
                          inputMode="numeric"
                          min={1}
                          max={300}
                          {...field}
                        />
                        <Button
                          variant="ghost"
                          type="button"
                          className="absolute top-0 right-0"
                        >
                          kg
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          <section className="flex justify-between gap-1">
            <Button
              type="button"
              variant="outline"
              onClick={prev}
              className={cn({ hidden: currentStep < 1 })}
            >
              <FaArrowLeft />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={next}
              className={cn(
                { hidden: currentStep === steps.length - 1 },
                "ml-auto"
              )}
            >
              <FaArrowRight />
            </Button>
            <Button
              className={cn({ hidden: currentStep !== steps.length - 1 })}
            >
              <FaSignInAlt className="mr-2" />
              Sign Up
            </Button>
          </section>
        </form>
      </Form>
    </>
  );
}
